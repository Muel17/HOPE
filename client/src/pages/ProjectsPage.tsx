import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { projects } from '@/data/portfolio';

interface ProjectModalProps {
  project: typeof projects[0];
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-background-secondary rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary-800/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold gradient-text">{project.title}</h2>
              <button
                onClick={onClose}
                className="cursor-hover text-foreground-muted hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {project.imageUrl && (
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}
            
            <p className="text-foreground-muted mb-6 leading-relaxed">
              {project.fullDescription}
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-900/30 text-primary-300 rounded-full text-sm border border-primary-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-hover flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-hover flex items-center space-x-2 border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-background px-4 py-2 rounded-lg transition-colors"
                >
                  <Github size={16} />
                  <span>View Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects;

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
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
            My Projects
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Explore my latest work and creative solutions. Each project represents 
            a unique challenge and innovative approach to modern web development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-background-secondary rounded-lg p-1 border border-primary-800/30">
            <button
              onClick={() => setFilter('all')}
              className={`cursor-hover px-6 py-2 rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'text-foreground-muted hover:text-primary-400'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`cursor-hover px-6 py-2 rounded-md transition-colors ${
                filter === 'featured'
                  ? 'bg-primary-600 text-white'
                  : 'text-foreground-muted hover:text-primary-400'
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover bg-background-secondary rounded-lg overflow-hidden border border-primary-800/30 cursor-hover"
              onClick={() => openModal(project)}
            >
              {project.imageUrl && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  {project.featured && (
                    <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-foreground-muted mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-900/30 text-primary-300 rounded text-sm border border-primary-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-foreground-muted text-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  {project.projectUrl && (
                    <ExternalLink className="text-primary-400" size={18} />
                  )}
                  {project.githubUrl && (
                    <Github className="text-primary-400" size={18} />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-foreground-muted">
            <p>No projects found for the selected filter.</p>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={closeModal}
      />
    </div>
  );
};