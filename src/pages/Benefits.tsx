
import RoleTabs from "@/components/RoleTabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Benefits = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-montserrat bg-white text-gray-800 flex flex-col">
      <header className="bg-agrilync-teal py-8 text-white mb-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">
          <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.1s' }}>Benefits</span>
          <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.2s' }}>&nbsp;</span>
          <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.3s' }}>for</span>
          <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.4s' }}>&nbsp;</span>
          <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.5s' }}>Each</span>
          <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.6s' }}>&nbsp;</span>
          <span className="inline-block animate-fadeSlideIn" style={{ animationDelay: '0.7s' }}>Role</span>
        </h1>
        <p className="mt-2 text-lg max-w-2xl mx-auto">
          Discover the unique advantages AgriLync brings to Farmers, Entrepreneurs, Buyers, Change Agents, and Investors.
        </p>
      </header>
      <main className="flex-1">
        <RoleTabs />
        <div className="flex justify-center mt-10">
          <Button variant="outline" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Benefits;
