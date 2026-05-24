import { useEffect, useRef, useState } from "react";

export function Counter({ to, duration = 1500 }: { to: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;

    const start = () => {
      if (started.current) return;
      started.current = true;
      const startTime = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - startTime) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      start();
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) start();
        });
      },
      { threshold: 0.1 },
    );
    obs.observe(el);

    // Fallback: start after 1.5s regardless (in case IO never fires above-the-fold)
    const fallback = setTimeout(start, 1500);
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, [to, duration]);

  return <span ref={ref}>{val.toLocaleString()}</span>;
}
