import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';

// Mock data for a single cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

// Mock cart items for demonstration purposes
const initialCartItems: CartItem[] = [
  { id: 1, name: "Dorayaki Pancake", price: 3.50, quantity: 2, imageUrl: "https://via.placeholder.com/150/007BFF/FFFFFF?Text=Dorayaki" },
  { id: 2, name: "Memory Bread Slice", price: 5.00, quantity: 1, imageUrl: "https://via.placeholder.com/150/FFC107/000000?Text=Memory+Bread" },
  { id: 3, name: "Gulliver's Tunnel Cake", price: 8.25, quantity: 1, imageUrl: "https://via.placeholder.com/150/28A745/FFFFFF?Text=Tunnel+Cake" },
];

interface FourDPocketCartProps {
  mode?: 'icon' | 'full';
  initialItemCount?: number; // Used for icon mode if cart state is managed globally
}

const FourDPocketCart: React.FC<FourDPocketCartProps> = ({ mode = 'full', initialItemCount = 0 }) => {
  const [items, setItems] = useState<CartItem[]>(initialCartItems);
  const [totalItems, setTotalItems] = useState(initialItemCount);

  useEffect(() => {
    // In a real app, this would sync with a global state manager (e.g., Zustand, Redux)
    console.log('FourDPocketCart loaded');
    if (mode === 'full') {
      const count = items.reduce((sum, item) => sum + item.quantity, 0);
      setTotalItems(count);
    } else {
        setTotalItems(initialItemCount);
    }
  }, [items, mode, initialItemCount]);

  const handleUpdateQuantity = (id: number, delta: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  if (mode === 'icon') {
    return (
      <Link to="/cart-and-checkout" className="relative">
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 0.3 }}
          className="p-2 rounded-full bg-blue-500 text-white"
        >
          <ShoppingBag size={28} />
        </motion.div>
        {totalItems > 0 && (
          <Badge className="absolute -top-1 -right-2 bg-red-500 text-white pointer-events-none">
            {totalItems}
          </Badge>
        )}
      </Link>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl overflow-hidden rounded-3xl border-4 border-blue-500">
        <div className="bg-blue-600 text-white p-4 relative text-center">
            <div 
                className="absolute top-full left-1/2 -translate-x-1/2 w-[150%] h-24 bg-blue-600 rounded-b-full"
                style={{ content: '""', pointerEvents: 'none' }}
            ></div>
            <CardTitle className="text-2xl font-bold font-sans relative z-10">
                What's in your 4D Pocket?
            </CardTitle>
        </div>
        
        <CardContent className="p-0 pt-16 bg-gray-50">
            <ScrollArea className="h-96 px-6">
                <div className="space-y-4">
                    {items.length > 0 ? items.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <div className="flex items-center gap-4">
                                <Avatar className="h-16 w-16 border-2 border-gray-200">
                                    <AvatarImage src={item.imageUrl} alt={item.name} />
                                    <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-grow">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleUpdateQuantity(item.id, -1)}><Minus className="h-4 w-4" /></Button>
                                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleUpdateQuantity(item.id, 1)}><Plus className="h-4 w-4" /></Button>
                                </div>
                                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500" onClick={() => handleRemoveItem(item.id)}>
                                    <Trash2 className="h-5 w-5" />
                                </Button>
                            </div>
                            {index < items.length - 1 && <Separator />}
                        </React.Fragment>
                    )) : (
                        <div className="text-center py-16">
                            <p className="text-gray-500">Your 4D Pocket is empty!</p>
                            <Button asChild className="mt-4 bg-blue-500 hover:bg-blue-600">
                                <Link to="/menu">Find some gadgets!</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </ScrollArea>
        </CardContent>

        {items.length > 0 && (
            <CardFooter className="flex flex-col gap-2 p-6 bg-gray-100 border-t-2 border-dashed">
                <div className="w-full flex justify-between text-lg">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="w-full flex justify-between text-md text-gray-600">
                    <span>Taxes (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <Separator className="my-2"/>
                <div className="w-full flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </CardFooter>
        )}
    </Card>
  );
};

export default FourDPocketCart;