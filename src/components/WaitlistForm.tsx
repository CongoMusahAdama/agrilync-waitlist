
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface FormData {
  contact: string;
}

const WaitlistForm = ({ onClose }: { onClose: () => void }) => {
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
        toast.success(data.message || 'Successfully joined the waitlist!', {
          className: "animate-slide-up font-semibold",
          duration: 1000,
        });
        onClose();
        window.location.href = '/thank-you.html';
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
          disabled={isLoading}
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-agrilync-magenta hover:bg-agrilync-magenta/90"
        isLoading={isLoading}
        loadingText="Joining..."
        disabled={isLoading}
        style={{ opacity: isLoading ? 0.8 : 1 }}
      >
        Join the Waitlist
      </Button>
    </form>
  );
};

export default WaitlistForm;
