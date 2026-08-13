import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

export default function Tooltip({ children, content, className }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-semibold text-white bg-[#050816]/90 border border-white/20 rounded shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md whitespace-nowrap pointer-events-none"
          >
            {content}
            {/* Tooltip arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-[#050816]/90" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 border-4 border-transparent border-t-white/20 -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
