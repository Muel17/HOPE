import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import { certifications } from '@/data/portfolio';

export const CertificationsPage = () => {
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
            Certifications
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise 
            and commitment to continuous learning in the field of technology.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center backdrop-blur-glass rounded-lg p-6 border border-primary-800/30">
            <div className="text-4xl font-bold text-primary-400 mb-2">
              {certifications.length}
            </div>
            <div className="text-foreground-muted">Total Certifications</div>
          </div>
          <div className="text-center backdrop-blur-glass rounded-lg p-6 border border-primary-800/30">
            <div className="text-4xl font-bold text-primary-400 mb-2">
              {new Set(certifications.map(cert => cert.issuer)).size}
            </div>
            <div className="text-foreground-muted">Different Providers</div>
          </div>
          <div className="text-center backdrop-blur-glass rounded-lg p-6 border border-primary-800/30">
            <div className="text-4xl font-bold text-primary-400 mb-2">
              2024
            </div>
            <div className="text-foreground-muted">Latest Year</div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover bg-background-secondary rounded-lg overflow-hidden border border-primary-800/30"
            >
              {cert.imageUrl && (
                <div className="h-40 overflow-hidden">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Award className="text-primary-400" size={20} />
                    <h3 className="text-xl font-bold text-foreground">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-foreground-muted mb-4 font-medium">
                  {cert.issuer}
                </p>
                
                <p className="text-foreground-muted mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-foreground-muted">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                  
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-hover flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <span className="text-sm">View Credential</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 backdrop-blur-glass rounded-lg p-12 border border-primary-800/30"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            Continuous Learning
          </h2>
          <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
            I believe in staying current with the latest technologies and best practices. 
            These certifications represent my ongoing commitment to professional development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary-900/30 text-primary-300 rounded-full text-sm border border-primary-800/50">
              AWS Cloud
            </span>
            <span className="px-4 py-2 bg-primary-900/30 text-primary-300 rounded-full text-sm border border-primary-800/50">
              React Development
            </span>
            <span className="px-4 py-2 bg-primary-900/30 text-primary-300 rounded-full text-sm border border-primary-800/50">
              Full Stack Development
            </span>
            <span className="px-4 py-2 bg-primary-900/30 text-primary-300 rounded-full text-sm border border-primary-800/50">
              Algorithm Design
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};