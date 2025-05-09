import { useState } from "react";
import FeatureCard from "@/components/FeatureCard";
import Section from "@/components/Section";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import WaitlistForm from "@/components/WaitlistForm";
import WaitlistButton from "@/components/WaitlistButton";
import Header from "@/components/Header";
import RoleTabs from "@/components/RoleTabs";
import { toast } from "sonner";
import { 
  LineChart, CloudSun, Wallet, Handshake, Store, 
  MessageCircle, Facebook, Instagram, Linkedin, Mail, Phone, X 
} from "lucide-react";

const Index = () => {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    toast.success("Welcome to our community!", {
      description: "Connect with farmers and AgriTech enthusiasts.",
    });
  };

  const navigate = (url: string) => {
    if (typeof window !== "undefined") {
      if (window.hasOwnProperty("lovableNavigate")) {
        // @ts-ignore - lovableNavigate is a Lovable-specific function
        window.lovableNavigate(url);
      } else {
        window.location.href = url;
      }
    }
  };

  return (
    <div className="min-h-screen font-montserrat bg-white text-gray-800">
      <Header 
        onWhatsAppClick={handleWhatsAppClick}
      />

      <Dialog open={showWaitlistForm} onOpenChange={setShowWaitlistForm}>
        <DialogContent className="sm:max-w-[425px]">
          <WaitlistForm onClose={() => setShowWaitlistForm(false)} />
        </DialogContent>
      </Dialog>

      <Section className="relative bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/9395ed0e-9e7c-409e-9a9d-655ba2ad06ae.png" 
            alt="Happy farmer with fresh produce" 
            className="w-full h-full object-cover opacity-15"
            draggable={false}
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
              title="AI Crop & Human Consultation"
              description="Get personalized crop care in Twi and English using AI-powered voice and text support. Detect pests via image upload and receive organic treatment suggestions."
              isMVP={true}
            />
            <FeatureCard 
              icon={CloudSun} 
              title="Hyperlocal Weather Forecast"
              description="Real-time local weather planning tailored to your specific farm location."
              isMVP={true}
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
              isMVP={true}
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
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-agrilync-teal">
              <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.1s' }}>Benefits</span>
              <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.2s' }}>&nbsp;</span>
              <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.3s' }}>for</span>
              <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.4s' }}>&nbsp;</span>
              <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.5s' }}>Each</span>
              <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.6s' }}>&nbsp;</span>
              <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.7s' }}>Role</span>
            </h2>
            <p className="text-gray-700 mt-2">
              Discover the unique advantages AgriLync brings to Farmers, Entrepreneurs, Buyers, Change Agents, and Investors.
            </p>
          </div>
          <RoleTabs />
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-agrilync-teal">
              Why Choose Us?
            </h2>
            <p className="text-gray-700 text-lg">
              The future of African Agriculture is digital. Be a pioneer. Access cutting-edge AI tools, financing, and a connected marketplace through AgriLync.
            </p>
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
                <a href="https://twitter.com/agri_lync" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <X size={24} />
                </a>
                <a href="https://www.instagram.com/agri_lync?igsh=MWl0c2d3MXFpeTFzYw==" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/company/agrinexusgh/" target="_blank" rel="noopener noreferrer"
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
