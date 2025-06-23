import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedPageTransition from '@/components/AnimatedPageTransition';
import ThemedMenuItemCard from '@/components/ThemedMenuItemCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Themed placeholder data for the menu
const menuItems = [
  { 
    id: 1, 
    name: "Classic Dorayaki", 
    price: 3.50, 
    imageUrl: "https://i.pinimg.com/originals/f3/f1/e9/f3f1e944ab8b25110a18413b5628522e.jpg",
    category: "dorayaki-delights"
  },
  { 
    id: 2, 
    name: "Memory Bread Toast", 
    price: 5.50, 
    imageUrl: "https://i.ytimg.com/vi/63dHwT2bW2I/maxresdefault.jpg",
    category: "gadget-meals"
  },
  { 
    id: 3, 
    name: "Giant's Hearty Stew", 
    price: 12.00, 
    imageUrl: "https://cdn.vox-cdn.com/thumbor/XnC3_V2__vV3_1211y22_2naTFY=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68798580/pork_and_veggie_curry.0.jpg",
    category: "giants-stews"
  },
  { 
    id: 4, 
    name: "Strawberry Cream Dorayaki", 
    price: 4.00, 
    imageUrl: "https://www.justonecookbook.com/wp-content/uploads/2023/04/Strawberry-Dorayaki-9118-I.jpg",
    category: "dorayaki-delights"
  },
  { 
    id: 5, 
    name: "Translation Jelly", 
    price: 2.50, 
    imageUrl: "https://i.pinimg.com/564x/40/2a/35/402a35368c5b3c58229b14c330f8823f.jpg",
    category: "gadget-meals"
  },
  { 
    id: 6, 
    name: "Suneo's Special Ramen", 
    price: 11.50, 
    imageUrl: "https://i.pinimg.com/736x/89/dc/a1/89dca1b83597813735bb5474411e3b1f.jpg",
    category: "giants-stews"
  },
  {
    id: 7,
    name: "Anywhere Door Macarons",
    price: 6.00,
    imageUrl: "https://i.pinimg.com/originals/cb/09/a6/cb09a696c74381734c56847144e5a322.jpg",
    category: "gadget-meals"
  },
  {
    id: 8,
    name: "Chocolate Filled Dorayaki",
    price: 3.75,
    imageUrl: "https://www.siftandsimmer.com/wp-content/uploads/2021/01/doraemon-dorayaki-1-1.jpg",
    category: "dorayaki-delights"
  }
];

const MenuPage = () => {
  console.log('MenuPage loaded');

  const categories = [
    { id: "gadget-meals", name: "Gadget Meals" },
    { id: "dorayaki-delights", name: "Dora-yaki Delights" },
    { id: "giants-stews", name: "Giant's Stews" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-sky-50" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
      <Header />
      <AnimatedPageTransition className="flex-grow">
        <main className="container py-8 md:py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">Doraemon's Menu</h1>
            <p className="mt-4 text-lg text-slate-600">Discover a taste of the 22nd century!</p>
          </div>

          <Tabs defaultValue="gadget-meals" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:w-auto md:mx-auto md:inline-grid bg-blue-100 p-2 rounded-full mb-8">
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="text-base rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {menuItems
                    .filter((item) => item.category === cat.id)
                    .map((item) => (
                      <ThemedMenuItemCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                      />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </main>
      </AnimatedPageTransition>
      <Footer />
    </div>
  );
};

export default MenuPage;