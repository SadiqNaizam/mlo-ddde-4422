import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Cat } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 text-white">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
               <Cat className="h-6 w-6 text-yellow-300" />
               <h3 className="text-lg font-bold">Doraemon's Delights</h3>
            </div>
            <p className="mt-2 text-sm text-blue-100 max-w-xs">
              Serving joyful meals and adventures from our 4D Pocket!
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
             <h4 className="font-semibold mb-2">Explore</h4>
             <nav className="flex flex-col gap-1 text-sm text-blue-100">
                {/* These routes do not exist in App.tsx, so we use '#' as a placeholder */}
                <Link to="#" className="hover:text-yellow-300 transition-colors">Contact Us</Link>
                <Link to="#" className="hover:text-yellow-300 transition-colors">Terms of Service</Link>
                <Link to="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</Link>
             </nav>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild className="text-white hover:bg-blue-600 hover:text-yellow-300">
                <Link to="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-white hover:bg-blue-600 hover:text-yellow-300">
                <Link to="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-white hover:bg-blue-600 hover:text-yellow-300">
                <Link to="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-blue-400 pt-6 text-center text-sm text-blue-200">
          <p>&copy; {currentYear} Doraemon's Delights. All Gadgets Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;