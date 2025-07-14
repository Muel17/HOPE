import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with 3D Parallax */}
      <section className="h-screen flex items-center justify-center relative">
        <div ref={heroRef} className="text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl lg:text-8xl font-bold mb-6">
              <span className="gradient-text">Welcome</span>
            </h1>
            <h2 className="text-2xl lg:text-4xl text-foreground-muted mb-8">
              I'm a <span className="text-primary-400 text-glow">Cyber Security and Web Developer</span>
            </h2>
            <p className="text-lg lg:text-xl text-foreground-muted mb-12 max-w-2xl mx-auto">
              Crafting digital experiences with modern web technologies, 
              interactive design, and CyberSecurity penetration testing. 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center space-x-6 mb-16"
          >
            <Link href="/projects">
              <button className="cursor-hover bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="cursor-hover border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-background px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </button>
            </Link>
            <a href="/assets/CV SAMUEL.pdf" download="CV SAMUEL.pdf">
              <button className="cursor-hover border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-background px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                My CV
              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/MUEL17" className="cursor-hover text-foreground-muted hover:text-primary-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/samuel-j-sambuaga" className="cursor-hover text-foreground-muted hover:text-primary-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:samuelnichole195@gmail.com" className="cursor-hover text-foreground-muted hover:text-primary-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-400 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-6 h-6 border-2 border-primary-500 rounded-full opacity-40"
          animate={{
            y: [0, -30, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50"
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-primary-400 animate-bounce" size={32} />
        </motion.div>
      </section>

      {/* Quick About Section */}
      <section className="section-padding bg-gradient-to-b from-background to-background-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 gradient-text">
              About Me
            </h2>
            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating interactive experiences that combine functionality with beautiful design. 
              My journey in tech spans across frontend frameworks, backend development, and everything in between, also i do love about
              CyberSecurity penetration testing, do solve some challenges and make environments more secure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                className="backdrop-blur-glass rounded-lg p-6 border border-primary-800/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-primary-400 mb-2">10+</div>
                <div className="text-foreground-muted">Projects Completed</div>
              </motion.div>
              <motion.div
                className="backdrop-blur-glass rounded-lg p-6 border border-primary-800/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-primary-400 mb-2">2+</div>
                <div className="text-foreground-muted">Years Experience</div>
              </motion.div>
              <motion.div
                className="backdrop-blur-glass rounded-lg p-6 border border-primary-800/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-primary-400 mb-2">15+</div>
                <div className="text-foreground-muted">Technologies Handle</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};