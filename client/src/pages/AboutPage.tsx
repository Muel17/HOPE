import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';

export const AboutPage = () => {
  const highlights = [
    {
      icon: <Code className="text-primary-400" size={24} />,
      title: "Clean Code Advocate",
      description: "I believe in writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: <Palette className="text-primary-400" size={24} />,
      title: "Design-Focused",
      description: "Creating beautiful, intuitive user experiences that combine functionality with aesthetics."
    },
    {
      icon: <Zap className="text-primary-400" size={24} />,
      title: "Performance Optimized",
      description: "Delivering fast, responsive applications that provide excellent user experiences."
    },
    {
      icon: <Users className="text-primary-400" size={24} />,
      title: "Collaborative",
      description: "Working effectively with teams to deliver projects on time and exceed expectations."
    },
    {
      icon: <Award className="text-primary-400" size={24} />,
      title: "Continuous Learner",
      description: "Staying updated with the latest technologies and best practices in web development."
    },
    {
      icon: <Coffee className="text-primary-400" size={24} />,
      title: "Problem Solver",
      description: "Approaching challenges with creativity and persistence to find innovative solutions."
    },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Started Web Development Journey",
      description: "Began learning HTML, CSS, and JavaScript. Built my first website and fell in love with creating digital experiences."
    },
    {
      year: "2023",
      title: "Frontend Specialization",
      description: "Mastered React, TypeScript, and modern CSS frameworks. Started building complex interactive applications."
    },
    {
      year: "2024",
      title: "Full Stack Development",
      description: "Expanded skills to include backend technologies, databases, and cloud platforms. Launched several full-stack projects."
    },
    {
      year: "Present",
      title: "Professional Development",
      description: "Actively working on challenging projects, contributing to open source, and mentoring other developers."
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            About Me
          </h1>
          <p className="text-xl text-foreground-muted max-w-4xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a love for creating exceptional digital experiences. 
            My journey began with curiosity about how websites work, and it has evolved into a career 
            dedicated to building innovative, user-centered applications that make a difference.
          </p>
        </motion.div>

        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="backdrop-blur-glass rounded-lg p-8 border border-primary-800/30">
            <h2 className="text-3xl font-bold mb-6 text-primary-400">My Story</h2>
            <div className="space-y-6 text-foreground-muted leading-relaxed">
              <p>
                My journey into web development started with a simple question: "How do websites work?" 
                What began as curiosity quickly turned into passion as I discovered the power of code 
                to bring ideas to life. I spent countless hours learning, experimenting, and building 
                projects that challenged me to grow.
              </p>
              <p>
                Today, I specialize in creating modern, responsive web applications using cutting-edge 
                technologies. I believe that great software is not just about functionality—it's about 
                creating experiences that users love and that solve real problems in elegant ways.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open 
                source projects, or sharing knowledge with the developer community. I'm always excited 
                to take on new challenges and collaborate with others who share my passion for technology.
              </p>
            </div>
          </div>
        </motion.div>

        {/* What I Bring */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            What I Bring to the Table
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover backdrop-blur-glass rounded-lg p-6 border border-primary-800/30"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {highlight.icon}
                  <h3 className="text-lg font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-foreground-muted leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            My Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-600 hidden md:block"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative flex items-start"
                  >
                    <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-background hidden md:block"></div>
                    <div className="md:ml-20 backdrop-blur-glass rounded-lg p-6 border border-primary-800/30 w-full">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-2xl font-bold text-primary-400">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-foreground-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Personal Interests */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center backdrop-blur-glass rounded-lg p-12 border border-primary-800/30"
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text">
            Beyond Code
          </h2>
          <p className="text-xl text-foreground-muted mb-8 max-w-3xl mx-auto leading-relaxed">
            When I'm not immersed in code, I enjoy exploring new technologies, contributing to open source projects, 
            and connecting with the developer community. I believe that continuous learning and sharing knowledge 
            are essential for growth in this rapidly evolving field.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary-900/30 text-primary-300 rounded-full text-sm border border-primary-800/50">
              Open Source Contributor
            </span>
            <span className="px-4 py-2 bg-primary-900/30 text-primary-300 rounded-full text-sm border border-primary-800/50">
              Tech Enthusiast
            </span>
            <span className="px-4 py-2 bg-primary-900/30 text-primary-300 rounded-full text-sm border border-primary-800/50">
              Continuous Learner
            </span>
            <span className="px-4 py-2 bg-primary-900/30 text-primary-300 rounded-full text-sm border border-primary-800/50">
              Problem Solver
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};