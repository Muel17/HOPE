import { useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export const ParallaxBackground = () => {
  const { isDayMode, toggleTheme } = useTheme();
  const starsRef = useRef<HTMLDivElement>(null);
  const planetsRef = useRef<HTMLDivElement>(null);
  const celestialRef = useRef<HTMLDivElement>(null);
  const mountainsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const rate = scrolled * -0.5;
          const rate2 = scrolled * -0.3;
          const celestialRate = scrolled * -0.1;
          const mountainRate = scrolled * -0.8;

          if (starsRef.current) {
            starsRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
          }
          if (planetsRef.current) {
            planetsRef.current.style.transform = `translate3d(0, ${rate2}px, 0)`;
          }
          if (celestialRef.current) {
            celestialRef.current.style.transform = `translate3d(0, ${celestialRate}px, 0)`;
          }
          if (mountainsRef.current) {
            mountainsRef.current.style.transform = `translate3d(0, ${mountainRate}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate stars with memoization for performance
  const stars = useMemo(() => Array.from({ length: 150 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    animationDelay: Math.random() * 3,
    opacity: Math.random() * 0.8 + 0.2,
  })), []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: -10,
        width: '100vw',
        height: '100vh'
      }}
    >
      {/* Animated background gradient transition */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: isDayMode 
            ? 'linear-gradient(to bottom, #87CEEB, #98D8E8, #F0E68C, #DDA0DD)'
            : 'linear-gradient(to bottom, #1e1b4b, #581c87, #1e293b)'
        }}
        transition={{ duration: 2 }}
      />

      {/* Day Mode Background Elements */}
      <AnimatePresence>
        {isDayMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            {/* Mountains */}
            <div ref={mountainsRef} className="absolute bottom-0 w-full">
              {/* Mountain layers for depth */}
              <div className="absolute bottom-0 w-full h-80">
                {/* Back mountains */}
                <svg viewBox="0 0 1200 300" className="absolute bottom-0 w-full h-full fill-gray-400 opacity-60">
                  <polygon points="0,300 200,50 400,120 600,30 800,100 1000,60 1200,80 1200,300" />
                </svg>
                {/* Middle mountains */}
                <svg viewBox="0 0 1200 300" className="absolute bottom-0 w-full h-full fill-gray-500 opacity-80">
                  <polygon points="0,300 150,100 350,80 550,140 750,40 950,120 1150,90 1200,300" />
                </svg>
                {/* Front mountains */}
                <svg viewBox="0 0 1200 300" className="absolute bottom-0 w-full h-full fill-gray-600">
                  <polygon points="0,300 100,150 300,100 500,180 700,80 900,160 1100,120 1200,300" />
                </svg>
              </div>
            </div>

            {/* Flying birds */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${20 + Math.random() * 40}%`,
                  }}
                  animate={{
                    x: [0, 200, 400],
                    y: [0, -20, 10],
                  }}
                  transition={{
                    duration: 15 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 5,
                  }}
                >
                  <div className="text-gray-700 text-sm transform rotate-12">
                    ⟩⟨
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Clouds */}
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${10 + Math.random() * 30}%`,
                  }}
                  animate={{
                    x: [0, 100],
                  }}
                  transition={{
                    duration: 20 + Math.random() * 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="text-white text-4xl opacity-80">☁</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Night Mode Background Elements */}
      <AnimatePresence>
        {!isDayMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            {/* Enhanced stars layer */}
            <div ref={starsRef} className="absolute inset-0">
              {stars.map((star) => (
                <div
                  key={star.id}
                  className="absolute bg-white rounded-full animate-pulse"
                  style={{
                    left: `${star.left}%`,
                    top: `${star.top}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: star.opacity,
                    animationDelay: `${star.animationDelay}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    boxShadow: star.size > 2 ? '0 0 6px rgba(255, 255, 255, 0.6)' : 'none',
                  }}
                />
              ))}
              
              {/* Constellation patterns */}
              <div className="absolute top-20 left-1/4">
                <div className="relative">
                  <div className="absolute w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ top: '0px', left: '0px' }} />
                  <div className="absolute w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ top: '10px', left: '15px' }} />
                  <div className="absolute w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ top: '25px', left: '30px' }} />
                  <div className="absolute w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ top: '15px', left: '45px' }} />
                </div>
              </div>
            </div>

            {/* Planets and cosmic objects */}
            <div ref={planetsRef} className="absolute inset-0">
              {/* Distant planet 1 */}
              <div
                className="absolute w-6 h-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-60 animate-pulse"
                style={{ top: '30%', left: '8%', animationDuration: '4s' }}
              />
              
              {/* Distant planet 2 */}
              <div
                className="absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-50"
                style={{ top: '70%', right: '15%' }}
              >
                <div className="absolute inset-1 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full opacity-60" />
              </div>
              
              {/* Saturn-like planet with ring */}
              <div className="absolute" style={{ top: '25%', right: '25%' }}>
                <div className="relative w-10 h-10 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-60">
                  <div className="absolute -inset-2 border border-yellow-300 rounded-full opacity-30 transform rotate-12" />
                </div>
              </div>
              
              {/* Nebula effect */}
              <div
                className="absolute w-32 h-20 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-full blur-xl opacity-30 animate-pulse"
                style={{ top: '40%', left: '60%', animationDuration: '6s' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sun/Moon toggle button */}
      <div ref={celestialRef} className="absolute top-10 right-16 pointer-events-auto">
        <motion.button
          onClick={toggleTheme}
          className="group relative cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isDayMode ? (
              // Sun
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                {/* Sun rays */}
                <div className="absolute -inset-8">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-8 bg-yellow-300 rounded-full"
                      style={{
                        transform: `rotate(${i * 45}deg)`,
                        transformOrigin: '50% 100%',
                        top: '0',
                        left: '50%',
                        marginLeft: '-2px',
                      }}
                    />
                  ))}
                </div>
                {/* Sun body */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-yellow-200 via-yellow-400 to-orange-400 rounded-full shadow-2xl">
                  <div className="absolute inset-2 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full opacity-80" />
                  <div className="absolute -inset-4 bg-yellow-200 rounded-full opacity-30 blur-xl animate-pulse" />
                </div>
              </motion.div>
            ) : (
              // Moon
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -180 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                {/* Moon glow */}
                <div className="absolute -inset-8 bg-blue-100 rounded-full opacity-20 blur-2xl animate-pulse" />
                {/* Moon body */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-full shadow-2xl">
                  {/* Moon craters */}
                  <div className="absolute top-2 left-3 w-2 h-2 bg-gray-400 rounded-full opacity-40" />
                  <div className="absolute top-6 right-4 w-1.5 h-1.5 bg-gray-400 rounded-full opacity-30" />
                  <div className="absolute bottom-4 left-6 w-3 h-3 bg-gray-400 rounded-full opacity-25" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
};