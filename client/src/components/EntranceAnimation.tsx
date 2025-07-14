import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const EntranceAnimation = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Auto-hide intro after 2.5 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 pointer-events-none bg-black flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Hi Folks!
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              Welcome to my universe! 
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};