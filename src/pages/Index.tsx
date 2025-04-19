import { useState, useEffect } from "react";
import WaitlistButton from "@/components/WaitlistButton";
import FeatureCard from "@/components/FeatureCard";
import Section from "@/components/Section";
import RoleTabs from "@/components/RoleTabs";
import { toast } from "sonner";
import { 
  LineChart, Sprout, Bug, CloudSun, Wallet, Handshake, Store, 
  MessageCircle, Facebook, Instagram, Linkedin, Mail, Phone, X,
  User
} from "lucide-react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWaitlistClick = (e: React.MouseEvent) => {
    toast.success("Thank you for joining our waitlist!", {
      description: "We'll contact you soon with more information.",
    });
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    toast.success("Welcome to our community!", {
      description: "Connect with farmers and AgriTech enthusiasts.",
    });
  };

  return (
    <div className="min-h-screen font-montserrat bg-white text-gray-800">
      {/* Header with navigation */}
      <header className="container max-w-5xl mx-auto pt-6 pb-4 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <User className="w-6 h-6 text-agrilync-teal" />
            <span className="text-xl font-bold text-agrilync-teal">AgriLync</span>
          </div>
          <div className="flex items-center gap-4">
            <WaitlistButton 
              variant="secondary"
              className="hidden md:flex"
              onClick={handleWhatsAppClick}
              link="https://chat.whatsapp.com/Juajl1hFw2vDV6JR3kymUe"
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Join WhatsApp Community
            </WaitlistButton>
            <WaitlistButton onClick={handleWaitlistClick} className="hidden md:flex">
              Join the Waitlist
            </WaitlistButton>
          </div>
        </div>
      </header>

      <Section className="bg-gradient-to-b from-white to-gray-50 pt-10 pb-16">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-agrilync-teal leading-tight">
                Transforming African Agriculture through{" "}
                <span className="text-agrilync-magenta animate-pulse-text">
                  AI and Finance Access
                </span>
              </h1>
              <p className="text-lg mb-8 text-gray-700">
                Join our waitlist and be the first to connect with farmers, buyers, and investors through smart AI-driven tools!
              </p>
              <WaitlistButton 
                className="text-lg inline-flex items-center gap-2"
                onClick={handleWaitlistClick}
              >
                Join the Waitlist
                <span className="text-xl">→</span>
              </WaitlistButton>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/9395ed0e-9e7c-409e-9a9d-655ba2ad06ae.png"
                alt="Farmer using AgriLync platform"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="relative bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/7bba4704-0754-4ba4-90f9-82a5ef93af03.png" 
            alt="Happy farmer with fresh produce" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        </div>
        <div className="container max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-agrilync-teal text-center animate-slide-up">
            Discover Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={LineChart} 
              title="AI Crop Advisory"
              description="Smart, personalized planting and harvesting advice based on soil conditions and market trends."
            />
            <FeatureCard 
              icon={Bug} 
              title="AI Pest & Disease Alerts"
              description="Early warnings to protect your crops before damage becomes severe."
            />
            <FeatureCard 
              icon={CloudSun} 
              title="Hyperlocal Weather Forecast"
              description="Real-time local weather planning tailored to your specific farm location."
            />
            <FeatureCard 
              icon={Wallet} 
              title="Financing Platform"
              description="Input loans and farm expansion financing with flexible repayment options."
            />
            <FeatureCard 
              icon={Handshake} 
              title="FarmPartner Initiative"
              description="Find investors for your farm inputs and share the harvest benefits."
            />
            <FeatureCard 
              icon={Store} 
              title="E-commerce Marketplace"
              description="Buy inputs and sell produce — no middlemen, better margins."
            />
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-agrilync-teal text-center">
            How AgriLync Empowers You
          </h2>
          <RoleTabs />
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <div className="grid grid-cols-3 gap-6">
                <div className="flex justify-center">
                  <User size={48} className="text-agrilync-green" />
                </div>
                <div className="flex justify-center">
                  <Handshake size={48} className="text-agrilync-teal" />
                </div>
                <div className="flex justify-center">
                  <Wallet size={48} className="text-agrilync-green" />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-agrilync-teal">
                Why Choose Us?
              </h2>
              <p className="text-gray-700 text-lg">
                The future of African Agriculture is digital. Be a pioneer. Access cutting-edge AI tools, financing, and a connected marketplace through AgriLync.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-100">
        <div className="container max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-3/4 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-agrilync-teal">Join Our Community</h3>
              <p className="text-gray-700">
                Connect with other farmers, entrepreneurs, buyers, and investors! Get real-time updates, learning materials, and feature previews.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <WaitlistButton 
                variant="secondary"
                link="https://chat.whatsapp.com/Juajl1hFw2vDV6JR3kymUe"
                icon={<MessageCircle className="w-5 h-5" />}
                onClick={handleWhatsAppClick}
              >
                Join WhatsApp Group
              </WaitlistButton>
            </div>
          </div>
        </div>
      </Section>

      <footer className="bg-gray-900 text-white py-10">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About AgriLync</h3>
              <p className="text-gray-400">
                Transforming African Agriculture through AI and Finance Access. 
                Empowering farmers with technology and resources.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="flex flex-col gap-2">
                <a href="tel:+233506626068" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <Phone size={16} /> 050 662 6068
                </a>
                <a href="mailto:agrilync@gmail.com" className="text-gray-400 hover:text-white flex items-center gap-2">
                  <Mail size={16} /> agrilync@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://facebook.com/agrilync" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://twitter.com/agrilync" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <X size={24} />
                </a>
                <a href="https://instagram.com/agrilync" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://linkedin.com/company/agrilync" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} AgriLync. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
