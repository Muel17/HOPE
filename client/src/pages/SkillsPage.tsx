import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export const SkillsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(skills.map(skill => skill.category)))];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const SkillLevel = ({ level }: { level: number }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.div
            key={star}
            className={`w-3 h-3 rounded-full ${
              star <= level ? 'bg-primary-400' : 'bg-gray-600'
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: star * 0.1 }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            My Skills
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels 
            across various technologies and development areas.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-background-secondary rounded-lg p-2 border border-primary-800/30">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-hover px-4 py-2 rounded-md transition-all capitalize ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'text-foreground-muted hover:text-primary-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.15, ease: "easeOut" }
              }}
              className="skill-card bg-background-secondary rounded-lg p-6 border border-primary-800/30 cursor-hover transform-gpu"
              style={{ willChange: 'transform' }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-primary-400 mb-4 capitalize">
                  {skill.category}
                </p>
                <div className="flex justify-center">
                  <SkillLevel level={skill.level} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Skills Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.filter(cat => cat !== 'all').map((category, index) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              const avgLevel = categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length;
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center backdrop-blur-glass rounded-lg p-6 border border-primary-800/30"
                >
                  <h3 className="text-xl font-semibold mb-2 text-primary-400 capitalize">
                    {category}
                  </h3>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {categorySkills.length}
                  </div>
                  <p className="text-sm text-foreground-muted mb-3">
                    Technologies
                  </p>
                  <div className="flex justify-center">
                    <SkillLevel level={Math.round(avgLevel)} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Learning Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-600"></div>
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                >
                  <div className="absolute left-2 w-4 h-4 bg-primary-600 rounded-full border-4 border-background"></div>
                  <div className="ml-12 backdrop-blur-glass rounded-lg p-6 border border-primary-800/30">
                    <h3 className="text-lg font-semibold text-primary-400 mb-2">2022 - Started Web Development</h3>
                    <p className="text-foreground-muted">Began learning HTML, CSS, and JavaScript fundamentals</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                >
                  <div className="absolute left-2 w-4 h-4 bg-primary-600 rounded-full border-4 border-background"></div>
                  <div className="ml-12 backdrop-blur-glass rounded-lg p-6 border border-primary-800/30">
                    <h3 className="text-lg font-semibold text-primary-400 mb-2">2023 - Frontend Focus</h3>
                    <p className="text-foreground-muted">Mastered React, TypeScript, and modern CSS frameworks</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                >
                  <div className="absolute left-2 w-4 h-4 bg-primary-600 rounded-full border-4 border-background"></div>
                  <div className="ml-12 backdrop-blur-glass rounded-lg p-6 border border-primary-800/30">
                    <h3 className="text-lg font-semibold text-primary-400 mb-2">2024 - Full Stack Development</h3>
                    <p className="text-foreground-muted">Expanded to backend technologies and cloud platforms</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};