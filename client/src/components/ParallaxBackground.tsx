import { useEffect, useRef, useMemo } from 'react';

export const ParallaxBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const planetsRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const rate = scrolled * -0.5;
          const rate2 = scrolled * -0.3;
          const moonRate = scrolled * -0.1;

          if (starsRef.current) {
            starsRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
          }
          if (planetsRef.current) {
            planetsRef.current.style.transform = `translate3d(0, ${rate2}px, 0)`;
          }
          if (moonRef.current) {
            moonRef.current.style.transform = `translate3d(0, ${moonRate}px, 0)`;
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
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced night sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900" />
      
      {/* Moon with glow effect */}
      <div ref={moonRef} className="absolute top-10 right-16">
        {/* Moon glow */}
        <div className="absolute -inset-8 bg-yellow-100 rounded-full opacity-20 blur-2xl animate-pulse" />
        {/* Moon body */}
        <div className="relative w-24 h-24 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-full shadow-2xl">
          {/* Moon craters */}
          <div className="absolute top-2 left-3 w-2 h-2 bg-gray-400 rounded-full opacity-40" />
          <div className="absolute top-6 right-4 w-1.5 h-1.5 bg-gray-400 rounded-full opacity-30" />
          <div className="absolute bottom-4 left-6 w-3 h-3 bg-gray-400 rounded-full opacity-25" />
        </div>
      </div>
      
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
    </div>
  );
};