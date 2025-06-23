import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemedMenuItemCard from '@/components/ThemedMenuItemCard';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Placeholder data for "Doraemon's Favorites"
const favoriteItems = [
  {
    id: 1,
    name: "Dorayaki Pancake",
    price: 4.50,
    imageUrl: "https://i.pinimg.com/564x/f3/d3/18/f3d318e8d83a4112638842c833214815.jpg",
    motif: 'bell' as 'bell',
  },
  {
    id: 2,
    name: "Memory Bread Toast",
    price: 5.00,
    imageUrl: "https://i.pinimg.com/564x/0f/64/74/0f64749f195d85202888f8303e06f971.jpg",
    motif: 'star' as 'star',
  },
  {
    id: 3,
    name: "Anywhere Door-nuts",
    price: 6.20,
    imageUrl: "https://i.pinimg.com/564x/3b/b1/7d/3bb17d84f8845e2a27771f28b3034298.jpg",
    motif: 'doraemon' as 'doraemon',
  },
  {
    id: 4,
    name: "Time Furoshiki Wrap",
    price: 8.00,
    imageUrl: "https://i.pinimg.com/564x/cc/95/9b/cc959bc29864275f0a0c64e622b79b3a.jpg",
    motif: 'bell' as 'bell',
  },
  {
    id: 5,
    name: "Small Light Smoothie",
    price: 7.50,
    imageUrl: "https://i.pinimg.com/564x/7d/c1/96/7dc19630acb5b15b3a623a3163fa942f.jpg",
    motif: 'star' as 'star',
  },
];

const Homepage = () => {
  console.log('Homepage loaded');

  return (
    <div className="bg-sky-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center text-white py-24 md:py-32"
          style={{ backgroundImage: "url('https://wallpapers.com/images/hd/doraemon-eating-dorayaki-xsz03o6sh8jum3q3.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
              Welcome to Doraemon's Delights!
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              A magical place where every dish is an adventure waiting to happen. Come and taste the future!
            </p>
            <Button asChild size="lg" className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg">
              <Link to="/menu">Explore Our Gadget Menu</Link>
            </Button>
          </div>
        </section>

        {/* Doraemon's Favorites Carousel Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
              Doraemon's Favorites
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {favoriteItems.map((item) => (
                  <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                    <ThemedMenuItemCard {...item} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </section>
        
        {/* About/Concept Section */}
        <section className="py-16 md:py-24 bg-sky-50">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img 
                        src="https://i.pinimg.com/564x/a4/c8/1c/a4c81cf267f564147a46048d08ef9a07.jpg" 
                        alt="Doraemon and friends enjoying a meal"
                        className="rounded-xl shadow-lg w-full h-auto object-cover"
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-blue-800 mb-4" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
                        More Than a Meal, It's an Adventure!
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        At Doraemon's Delights, we believe food should be fun, surprising, and full of joy. Inspired by Doraemon's amazing gadgets from the 22nd century, our menu is crafted to bring a smile to your face and a wonder to your taste buds. Join us for an unforgettable culinary journey!
                    </p>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Homepage;