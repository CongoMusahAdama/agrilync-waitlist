
import { useState } from "react";
import { cn } from "@/lib/utils";
import { User, Briefcase, ShoppingCart, Sprout, Coins } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Role {
  id: string;
  icon: React.ReactNode;
  name: string;
  benefits: string[];
  version?: string;
}

const roles: Role[] = [
  {
    id: "farmers",
    icon: <User className="w-5 h-5" />,
    name: "Farmers",
    benefits: [
      "Access AI-powered crop advisory for optimal planting and harvesting",
      "Receive early pest and disease warnings to protect your yield",
      "Get hyperlocal weather forecasts for better planning",
      "Access financing for farm inputs and expansion",
      "Connect directly with buyers for fair prices"
    ],
    version: "v1"
  },
  {
    id: "entrepreneurs",
    icon: <Briefcase className="w-5 h-5" />,
    name: "Entrepreneurs",
    benefits: [
      "Launch and scale agribusiness with dedicated support",
      "Access working capital financing for business growth",
      "Connect with farmers to source quality produce",
      "Access training and mentorship opportunities",
      "Join a network of like-minded agri-entrepreneurs"
    ]
  },
  {
    id: "buyers",
    icon: <ShoppingCart className="w-5 h-5" />,
    name: "Buyers",
    benefits: [
      "Access quality produce directly from farmers",
      "Verify produce quality and traceability",
      "Secure bulk purchases with confidence",
      "Schedule deliveries based on harvest forecasts",
      "Build lasting relationships with reliable producers"
    ]
  },
  {
    id: "change-agents",
    icon: <Sprout className="w-5 h-5" />,
    name: "Change Agents",
    benefits: [
      "Drive agricultural innovation in your community",
      "Connect farmers to valuable resources and knowledge",
      "Earn commission by expanding the AgriLync network",
      "Access training to enhance your agricultural expertise",
      "Build a sustainable impact business model"
    ],
    version: "v1"
  },
  {
    id: "investors",
    icon: <Coins className="w-5 h-5" />,
    name: "Potential Investors",
    benefits: [
      "Fund specific farm projects with transparent tracking",
      "Diversify your portfolio with agricultural investments",
      "Support sustainable farming practices",
      "Monitor your investment performance in real-time",
      "Contribute to food security and economic development"
    ],
    version: "v1"
  }
];

const RoleTabs = () => {
  const [activeRole, setActiveRole] = useState(roles[0].id);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {roles.map(role => (
          <button
            key={role.id}
            onClick={() => setActiveRole(role.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 relative",
              activeRole === role.id 
                ? "bg-agrilync-teal text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            {role.icon}
            <span className="hidden md:inline">{role.name}</span>
            {role.version && (
              <Badge 
                variant="secondary" 
                className="absolute -top-2 -right-2 bg-agrilync-green text-agrilync-teal text-xs px-1.5 py-0.5"
              >
                {role.version}
              </Badge>
            )}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
        {roles.map(role => (
          <div 
            key={role.id}
            className={cn(
              "transition-all duration-300 role-content",
              activeRole === role.id ? "block animate-fade-in" : "hidden"
            )}
          >
            <h3 className="text-xl font-bold mb-4 text-agrilync-teal flex items-center gap-2">
              {role.icon}
              <span>For {role.name}</span>
              {role.version && (
                <Badge 
                  variant="outline" 
                  className="bg-agrilync-green text-agrilync-teal ml-2 text-xs"
                >
                  {role.version}
                </Badge>
              )}
            </h3>
            <ul className="space-y-2">
              {role.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-agrilync-green mt-1">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleTabs;
