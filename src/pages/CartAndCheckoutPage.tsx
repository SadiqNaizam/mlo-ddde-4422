import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FourDPocketCart from '@/components/FourDPocketCart';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Truck, User } from 'lucide-react';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  deliveryOption: z.enum(['delivery', 'pickup'], { required_error: "Please select an option." }),
  address: z.string().min(10, { message: "Address must be at least 10 characters." }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Card number must be 16 digits." }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Format must be MM/YY." }),
  cvc: z.string().regex(/^\d{3}$/, { message: "CVC must be 3 digits." }),
});

const CartAndCheckoutPage = () => {
  console.log('CartAndCheckoutPage loaded');
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      deliveryOption: "delivery",
      address: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted with values:", values);
    toast.success("Your order is on its way!", {
      description: "You will be redirected to the confirmation page.",
    });
    // Navigate to the confirmation page after a short delay
    setTimeout(() => {
      navigate('/order-confirmation'); // Path from App.tsx
    }, 1500);
  }

  return (
    <div className="flex flex-col min-h-screen bg-sky-50" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left side: Cart Summary */}
            <div className="lg:col-span-2">
              <FourDPocketCart mode="full" />
            </div>

            {/* Right side: Checkout Form */}
            <div className="lg:col-span-3">
              <Card className="shadow-lg border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-blue-800">Checkout</CardTitle>
                  <CardDescription>Please fill in your details to complete the order.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      {/* Section 1: Contact Info */}
                      <section className="space-y-4">
                        <h3 className="text-xl font-semibold flex items-center text-slate-700"><User className="mr-2 h-5 w-5"/>Contact Information</h3>
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Nobita Nobi" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="nobita@doraemon.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </section>
                      
                      <Separator/>

                      {/* Section 2: Delivery */}
                      <section className="space-y-4">
                        <h3 className="text-xl font-semibold flex items-center text-slate-700"><Truck className="mr-2 h-5 w-5"/>Delivery Details</h3>
                         <FormField
                          control={form.control}
                          name="deliveryOption"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Delivery Method</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl><RadioGroupItem value="delivery" /></FormControl>
                                    <FormLabel className="font-normal">Delivery</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl><RadioGroupItem value="pickup" /></FormControl>
                                    <FormLabel className="font-normal">Pickup</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Delivery Address</FormLabel>
                              <FormControl>
                                <Input placeholder="123 Anywhere Door Avenue" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </section>
                      
                      <Separator/>
                      
                      {/* Section 3: Payment */}
                       <section className="space-y-4">
                        <h3 className="text-xl font-semibold flex items-center text-slate-700"><CreditCard className="mr-2 h-5 w-5"/>Payment Information</h3>
                        <FormField control={form.control} name="cardNumber" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Card Number</FormLabel>
                                <FormControl><Input placeholder="0000 0000 0000 0000" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <div className="flex gap-4">
                            <FormField control={form.control} name="expiryDate" render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Expiry (MM/YY)</FormLabel>
                                    <FormControl><Input placeholder="MM/YY" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                            <FormField control={form.control} name="cvc" render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>CVC</FormLabel>
                                    <FormControl><Input placeholder="123" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                        </div>
                       </section>

                      <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-lg py-6 font-bold" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Placing Order...' : 'Place Order Now!'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CartAndCheckoutPage;