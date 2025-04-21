
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
  link,
  icon,
  onClick
}: WaitlistButtonProps) => {
  const baseStyles = "py-2 px-4 rounded-md font-semibold transition-all duration-300 inline-flex items-center gap-2 text-center";
  
  const variantStyles = {
    primary: "bg-agrilync-magenta text-white hover:bg-opacity-90",
    secondary: "bg-agrilync-green text-agrilync-teal hover:bg-opacity-90"
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };

  if (link) {
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
  }

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        className
      )}
      onClick={handleClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default WaitlistButton;
