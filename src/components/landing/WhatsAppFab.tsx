import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/233208450327?text=Hi%20KEM%20Engineering%20%26%20Design%2C%20I%27d%20like%20a%20consultation"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid place-items-center size-14 rounded-full bg-[oklch(0.72_0.18_150)] text-white shadow-[0_10px_30px_-10px_oklch(0.72_0.18_150/0.8)] hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.72_0.18_150)] animate-ping opacity-30" />
      <MessageCircle className="relative size-6" />
    </a>
  );
}
