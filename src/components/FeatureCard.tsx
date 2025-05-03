
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  isMVP?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, className, isMVP }: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md transition-all duration-300 feature-card border border-gray-100",
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-agrilync-green transform transition-transform hover:scale-110 duration-300">
          <Icon size={32} strokeWidth={1.5} className="animate-bounce-light" />
        </div>
        {isMVP && (
          <Badge className="bg-purple-600 hover:bg-purple-700">v1</Badge>
        )}
      </div>
      <h3 className="text-lg font-bold mb-2 text-agrilync-teal">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
