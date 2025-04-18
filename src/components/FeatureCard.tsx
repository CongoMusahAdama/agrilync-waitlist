
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md transition-all duration-300 feature-card border border-gray-100",
      className
    )}>
      <div className="mb-4 text-agrilync-green transform transition-transform hover:scale-110 duration-300">
        <Icon size={32} strokeWidth={1.5} className="animate-bounce-light" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-agrilync-teal">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
