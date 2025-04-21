
import { MessageCircle } from "lucide-react";
import WaitlistButton from "./WaitlistButton";

interface HeaderProps {
  onWhatsAppClick: (e: React.MouseEvent) => void;
  onWaitlistClick: () => void;
}

const Header = ({ onWhatsAppClick, onWaitlistClick }: HeaderProps) => {
  return (
    <header className="container max-w-5xl mx-auto pt-6 pb-4 px-4">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-agrilync-teal leading-tight">
            Transforming African Agriculture through{" "}
            <span className="text-agrilync-magenta animate-pulse-text">
              AI and Finance Access
            </span>
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Join our waitlist and be the first to connect with farmers, buyers, and investors through smart AI-driven tools!
          </p>
          <div className="flex flex-wrap gap-3">
            <WaitlistButton 
              onClick={onWaitlistClick}
              className="text-sm px-3 py-1.5"
            >
              Join the Waitlist
            </WaitlistButton>
            <WaitlistButton 
              variant="secondary"
              link="https://chat.whatsapp.com/Juajl1hFw2vDV6JR3kymUe"
              icon={<MessageCircle className="w-4 h-4" />}
              onClick={onWhatsAppClick}
              className="text-sm px-3 py-1.5"
            >
              Join Our WhatsApp Community
            </WaitlistButton>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img 
            src="/lovable-uploads/c6337518-bf06-484f-ae02-dd818a8cee61.png"
            alt="African farmer with harvested crops"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            style={{
              maxHeight: "400px",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
