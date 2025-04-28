import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

interface FormData {
  contact: string;
}

const WaitlistForm = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    contact: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API request time delay of 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const response = await fetch('https://agrilync-wl-be.onrender.com/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactInfo: formData.contact,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message, {
          className: "animate-slide-up font-semibold",
          duration: 1000,
        });
        onClose();
        navigate('/thank-you');
      } else {
        toast.error(data.message || 'Failed to join the waitlist.', {
          className: "animate-slide-up font-semibold",
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', {
        className: "animate-slide-up font-semibold",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      <div>
        <Input
          placeholder="Email or Phone Number"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          required
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-agrilync-magenta hover:bg-agrilync-magenta/90"
        isLoading={isLoading}
        loadingText="Joining..."
      >
        Join the Waitlist
      </Button>
    </form>
  );
};

export default WaitlistForm;
