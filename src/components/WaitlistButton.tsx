
import { cn } from "@/lib/utils";

interface WaitlistButtonProps {
  className?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  link?: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const WaitlistButton = ({ 
  className, 
  variant = "primary", 
  children,
  link = "https://docs.google.com/forms/d/e/1FAIpQLSe5IQ5V9B2uV9PapVVkNxR649I-Lcfel-uEWyC8g2ssFM6bZg/viewform?usp=dialog",
  icon,
  onClick
}: WaitlistButtonProps) => {
  const baseStyles = "py-3 px-6 rounded-md font-semibold transition-all duration-300 inline-flex items-center gap-2 text-center cta-button";
  
  const variantStyles = {
    primary: "bg-agrilync-magenta text-white hover:bg-opacity-90",
    secondary: "bg-agrilync-green text-agrilync-teal hover:bg-opacity-90"
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      onClick={handleClick}
    >
      {icon}
      {children}
    </a>
  );
};

export default WaitlistButton;
