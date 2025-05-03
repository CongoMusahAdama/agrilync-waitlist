import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface HeaderProps {
  onWhatsAppClick: (e: React.MouseEvent) => void;
}

const Header = ({ onWhatsAppClick }: HeaderProps) => {
  const [contact, setContact] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://agrilync-wl-be.onrender.com/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactInfo: contact,
        }),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = '/thank-you';
      } else {
        alert(data.message || 'Failed to join the waitlist.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className="container max-w-5xl mx-auto pt-6 pb-4 px-4">
      <div className="flex justify-start items-center mb-8 gap-3">
        <img 
          src="/lovable-uploads/agrilync.png"
          alt="AgriLync Logo"
          className="h-[60px] object-contain"
          draggable={false}
        />
        <span className="text-3xl font-semibold text-agrilync-teal font-sans select-none">
          AgriLync
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-agrilync-teal leading-tight">
            Transforming African Agriculture through{" "}
            <span className="text-agrilync-magenta animate-pulse-text">
              AI and Finance Access
            </span>
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Join our waitlist and be the first to connect with farmers, buyers, and investors through smart AI-driven tools!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <Input
              placeholder="Email or Phone Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="flex-grow"
            />
            <Button 
              type="submit" 
              className="bg-agrilync-magenta hover:bg-agrilync-magenta/90"
              isLoading={isLoading}
              loadingText="Joining..."
            >
              Join Waitlist
            </Button>
          </form>
        </div>
        <div className="w-full md:w-1/2 order-2 md:order-2">
          <img 
            src="/lovable-uploads/39e1d2ab-46f8-4b52-b6d2-66c0515f4cc6.png"
            alt="African farmer showcasing harvested coffee beans with a bright smile"
            className="w-full rounded-lg shadow-xl"
            style={{
              height: '500px',
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              imageRendering: 'crisp-edges',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden'
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
