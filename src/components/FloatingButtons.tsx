import { Phone, MessageCircle } from 'lucide-react';

const PHONE = '+971500000000';
const WA = '971500000000';

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp - bottom left */}
      <a
        href={`https://wa.me/${WA}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 z-40 hidden h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 md:bottom-6 md:flex ltr:left-6 rtl:right-6"
        style={{ backgroundColor: 'hsl(142 72% 42%)' }}
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} className="text-primary-foreground" />
      </a>

      {/* Call - bottom right */}
      <a
        href={`tel:${PHONE}`}
        className="fixed bottom-24 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lg transition-transform hover:scale-110 md:bottom-6 md:flex ltr:right-6 rtl:left-6"
        aria-label="Call"
      >
        <span className="absolute h-14 w-14 animate-pulse-ring rounded-full bg-accent/50" />
        <Phone size={28} className="relative text-accent-foreground" />
      </a>
    </>
  );
};

export default FloatingButtons;
