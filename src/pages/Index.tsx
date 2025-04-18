import { useState, useEffect } from "react";
import WaitlistButton from "@/components/WaitlistButton";
import FeatureCard from "@/components/FeatureCard";
import Section from "@/components/Section";
import RoleTabs from "@/components/RoleTabs";
import { 
  LineChart, Sprout, Bug, CloudSun, Wallet, Handshake, Store, 
  ArrowDown, Briefcase, ShoppingCart, Coins, MessageCircle, User
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

  return (
    <div className="min-h-screen font-montserrat bg-white text-gray-800">
      <div className={`fixed bottom-0 left-0 right-0 bg-agrilync-teal py-3 px-4 transform transition-transform duration-300 z-50 flex justify-center items-center ${scrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="container max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <h3 className="text-lg font-bold">Ready to Revolutionize Agriculture?</h3>
            <p className="text-sm text-white/80">Join AgriLync's early waitlist today!</p>
          </div>
          <WaitlistButton className="whitespace-nowrap py-2 min-w-[180px]">
            Join the Waitlist
          </WaitlistButton>
        </div>
      </div>

      <header className="container max-w-5xl mx-auto pt-6 pb-4 px-4">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/e15183a9-8a70-4d60-9848-86abc4787185.png" 
            alt="AgriLync Logo" 
            className="h-12 md:h-16"
          />
        </div>
      </header>

      <Section className="bg-gradient-to-b from-white to-gray-50 pt-10 pb-16">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-agrilync-teal leading-tight animate-slide-up">
            Transforming African Agriculture through 
            <span className="block md:inline"> </span>
            <span className="text-[#921573]">AI and Finance Access</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            Join our waitlist today and be among the first to experience AI-powered farming advice, financing, and trade connections!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <WaitlistButton className="text-lg min-w-[200px]">
              Join the Waitlist
            </WaitlistButton>
            <div className="flex items-center animate-bounce-light mt-8 md:mt-0">
              <ArrowDown className="text-agrilync-magenta" size={24} />
              <span className="ml-2 text-agrilync-magenta font-medium">Learn More</span>
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
              >
                Join WhatsApp Group
              </WaitlistButton>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-agrilync-teal text-white">
        <div className="container max-w-5xl mx-auto text-center py-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            🚀 Ready to Revolutionize Agriculture?
          </h2>
          <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
            Join AgriLync's early waitlist and secure your place at the forefront of Africa's AgriTech future!
          </p>
          <WaitlistButton className="text-lg pulse-animation">
            Join the Waitlist
          </WaitlistButton>
        </div>
      </Section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <img 
            src="/lovable-uploads/e15183a9-8a70-4d60-9848-86abc4787185.png" 
            alt="AgriLync Logo" 
            className="h-10 mx-auto mb-4"
          />
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AgriLync. Transforming African Agriculture.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
