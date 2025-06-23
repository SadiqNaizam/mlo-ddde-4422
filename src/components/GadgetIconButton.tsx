import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface GadgetIconButtonProps {
  to: string;
  label: string;
  icon: React.ReactElement;
  ariaLabel: string;
}

const GadgetIconButton: React.FC<GadgetIconButtonProps> = ({ to, label, icon, ariaLabel }) => {
  console.log('GadgetIconButton loaded for:', label);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link to={to} aria-label={ariaLabel}>
          <motion.div
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="inline-block"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-14 w-14 bg-sky-100 text-sky-600 hover:bg-sky-200 hover:text-sky-700 transition-colors duration-200"
            >
              {/* Clone the icon to apply custom classes */}
              {React.cloneElement(icon, { className: 'h-7 w-7' })}
            </Button>
          </motion.div>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-semibold">{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default GadgetIconButton;