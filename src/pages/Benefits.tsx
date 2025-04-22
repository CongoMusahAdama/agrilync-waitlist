
import RoleTabs from "@/components/RoleTabs";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Benefits = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-montserrat bg-white text-gray-800 flex flex-col">
      <header className="bg-agrilync-teal py-8 text-white mb-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">Benefits for Each Role</h1>
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
