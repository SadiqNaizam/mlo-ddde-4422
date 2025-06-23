import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { toast } from "sonner";
import { Pocket, Bell } from 'lucide-react';

interface ThemedMenuItemCardProps {
  id: string | number;
  name: string;
  price: number;
  imageUrl: string;
  // A simple prop for the motif, could be expanded later
  motif?: 'bell' | 'star' | 'doraemon'; 
}

const ThemedMenuItemCard: React.FC<ThemedMenuItemCardProps> = ({
  id,
  name,
  price,
  imageUrl,
  motif = 'bell',
}) => {
  console.log('ThemedMenuItemCard loaded for:', name);

  const handleAddToCart = () => {
    // In a real app, this would dispatch to a global state manager (e.g., Zustand, Redux)
    console.log(`Adding item ${id} to 4D Pocket.`);
    toast.success(`${name} added to your 4D Pocket!`, {
      description: "Check the cart to see your delicious choices.",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo add to cart"),
      },
    });
  };

  const renderMotif = () => {
    switch (motif) {
      case 'bell':
        return <Bell className="h-5 w-5 text-yellow-500" />;
      // Add other cases for different motifs if needed
      default:
        return <Bell className="h-5 w-5 text-yellow-500" />;
    }
  };

  return (
    <Card className="w-full overflow-hidden rounded-lg border-2 border-gray-100 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 flex flex-col bg-white">
      <CardHeader className="p-0">
        <AspectRatio ratio={4 / 3}>
          <img
            src={imageUrl || 'https://placehold.co/400x300/E0F2FE/3B82F6?text=Yummy!'}
            alt={name}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </CardHeader>

      <CardContent className="p-4 flex-grow flex flex-col justify-between">
        <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl font-bold text-slate-800" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
                {name}
            </CardTitle>
            {renderMotif()}
        </div>
        <p className="text-lg font-semibold text-blue-600 mt-1">${price.toFixed(2)}</p>
      </CardContent>

      <CardFooter className="p-3 bg-sky-50/50">
        <Button 
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold"
          onClick={handleAddToCart}
        >
          <Pocket className="mr-2 h-5 w-5" />
          Add to 4D Pocket
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ThemedMenuItemCard;