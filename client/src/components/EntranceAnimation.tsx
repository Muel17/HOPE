import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const EntranceAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      // Hide entrance overlay when user scrolls down
      if (scrolled > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Show introduction text when scrolling starts
      if (scrolled > 50 && scrolled < 800) {
        setShowIntro(true);
      } else {
        setShowIntro(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Dark entrance overlay */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-black z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Introduction text that appears on scroll */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-40 pointer-events-none"
          >
            <div className="text-center px-8 max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                Welcome to My Universe
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              >
                I'm a passionate developer crafting digital experiences that bridge creativity and technology. 
                Journey through my portfolio where innovation meets artistry.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-8 text-gray-400 text-sm animate-bounce"
              >
                Continue scrolling to explore
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};