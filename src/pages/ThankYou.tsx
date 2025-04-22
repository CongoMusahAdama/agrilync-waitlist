
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="text-center space-y-6 max-w-lg mx-auto p-6">
        <div className="animate-bounce mb-8">
          <CheckCircle className="w-20 h-20 mx-auto text-green-500" />
        </div>
        <h1 className="text-4xl font-bold text-agrilync-teal animate-fade-in">
          Thank You for Joining!
        </h1>
        <p className="text-xl text-gray-600 animate-fade-in delay-200">
          Welcome to the AgriLync community. We'll keep you updated on our progress and notify you when we launch.
        </p>
        <div className="pt-8 animate-fade-in delay-300">
          <Button 
            onClick={() => navigate('/')}
            className="bg-agrilync-magenta hover:bg-agrilync-magenta/90"
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
