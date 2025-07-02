import { useEffect, useRef } from 'react';

export const ParallaxBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const planetsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      const rate2 = scrolled * -0.3;

      if (starsRef.current) {
        starsRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
      if (planetsRef.current) {
        planetsRef.current.style.transform = `translate3d(0, ${rate2}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate stars
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    animationDelay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-night-sky" />
      
      {/* Stars layer */}
      <div ref={starsRef} className="parallax-layer">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.animationDelay}s`,
            }}
          />
        ))}
      </div>

      {/* Planets layer */}
      <div ref={planetsRef} className="parallax-layer">
        {/* Moon */}
        <div
          className="absolute w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full opacity-80"
          style={{ top: '15%', right: '10%' }}
        />
        
        {/* Planet 1 */}
        <div
          className="absolute w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-60"
          style={{ top: '30%', left: '5%' }}
        />
        
        {/* Planet 2 */}
        <div
          className="absolute w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-70"
          style={{ top: '60%', right: '20%' }}
        />
        
        {/* Distant stars cluster */}
        <div
          className="absolute w-2 h-2 bg-white rounded-full opacity-40 animate-pulse"
          style={{ top: '25%', left: '80%' }}
        />
        <div
          className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
          style={{ top: '28%', left: '82%' }}
        />
        <div
          className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-45 animate-pulse"
          style={{ top: '23%', left: '85%' }}
        />
      </div>
    </div>
  );
};