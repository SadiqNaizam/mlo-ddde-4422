import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react';
import GadgetIconButton from '@/components/GadgetIconButton';
import FourDPocketCart from '@/components/FourDPocketCart';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Homepage">
          <Bell className="h-8 w-8 text-yellow-400" />
          <span className="text-xl font-bold text-blue-800">Doraemon's Delights</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {/* We assume GadgetIconButton is a component that internally handles navigation via a 'to' prop */}
          <GadgetIconButton to="/">
            Home
          </GadgetIconButton>
          <GadgetIconButton to="/menu">
            Menu
          </GadgetIconButton>
        </nav>

        <div className="flex items-center">
          {/* We assume FourDPocketCart is a self-contained component with its own logic and link to the cart page */}
          <FourDPocketCart />
        </div>
      </div>
    </header>
  );
};

export default Header;