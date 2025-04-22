
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  contact: string;
  password: string;
}

const WaitlistForm = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "You're on a right path to farm faster, trade better and access finance", 
      {
        className: "animate-slide-up font-semibold",
        duration: 5000,
      }
    );
    onClose();
    navigate('/thank-you');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      <div>
        <Input
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <Input
          placeholder="Email or Phone Number"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          required
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>
      <Button type="submit" className="w-full bg-agrilync-magenta hover:bg-agrilync-magenta/90">
        Join the Waitlist
      </Button>
    </form>
  );
};

export default WaitlistForm;
