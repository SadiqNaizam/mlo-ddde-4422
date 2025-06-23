import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedPageTransition from '@/components/AnimatedPageTransition';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, PartyPopper } from 'lucide-react';

// Mock order data - in a real app, this would come from state or route params
const mockOrder = {
  id: 'DORA-12345',
  items: [
    { name: 'Dorayaki Pancake', quantity: 2, price: 3.50 },
    { name: 'Memory Bread Slice', quantity: 1, price: 5.00 },
  ],
  total: 12.00, // Assuming this is the final total
};

const OrderConfirmationPage = () => {
  console.log('OrderConfirmationPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-sky-50" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
      <Header />
      <AnimatedPageTransition className="flex-grow">
        <main className="container py-12 md:py-24 flex items-center justify-center">
          <Card className="w-full max-w-lg shadow-2xl rounded-2xl border-2 border-blue-400 overflow-hidden">
            <CardHeader className="text-center bg-blue-100 p-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                className="mx-auto w-fit p-3 bg-green-500 rounded-full"
              >
                <CheckCircle className="h-10 w-10 text-white" />
              </motion.div>
              <CardTitle className="text-3xl font-bold text-blue-800 mt-4">Order Successful!</CardTitle>
              <CardDescription className="text-md text-slate-600">
                Your delicious adventure is being prepared!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', delay: 0.5 }}
                className="flex justify-center"
              >
                <img 
                  src="https://i.pinimg.com/originals/c8/d9/3a/c8d93a74a1de418a03495d43e5907c11.png" 
                  alt="Doraemon giving a thumbs up" 
                  className="h-48"
                />
              </motion.div>
              <p className="text-lg text-slate-700 mt-4">
                Thank you for your order! We're using our best gadgets to make it perfect.
              </p>
              
              <div className="text-left mt-6 bg-gray-50 p-4 rounded-lg border">
                <h3 className="font-bold text-lg mb-2">Order Summary</h3>
                <p className="text-sm text-gray-500">Order ID: <span className="font-mono">{mockOrder.id}</span></p>
                <Separator className="my-3" />
                <ul className="space-y-2">
                  {mockOrder.items.map(item => (
                    <li key={item.name} className="flex justify-between items-center text-slate-800">
                      <span>{item.quantity} x {item.name}</span>
                      <span className="font-semibold">${(item.quantity * item.price).toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
                <Separator className="my-3" />
                <div className="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span>${mockOrder.total.toFixed(2)}</span>
                </div>
              </div>

            </CardContent>
            <CardFooter className="bg-gray-50/50 p-6">
              <Button asChild size="lg" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold">
                <Link to="/"> {/* Path from App.tsx */}
                  <PartyPopper className="mr-2 h-5 w-5"/>
                  Back to Homepage
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </main>
      </AnimatedPageTransition>
      <Footer />
    </div>
  );
};

export default OrderConfirmationPage;