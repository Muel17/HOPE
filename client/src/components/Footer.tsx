import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'wouter';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-primary-800/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">Samuel J Sambuaga</h3>
            <p className="text-foreground-muted mb-4">
              Trying to be a better person :) 
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="cursor-hover text-foreground-muted hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="cursor-hover text-foreground-muted hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="cursor-hover text-foreground-muted hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <div className="cursor-hover text-foreground-muted hover:text-primary-400 transition-colors">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="cursor-hover text-foreground-muted hover:text-primary-400 transition-colors">
                    About
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <div className="cursor-hover text-foreground-muted hover:text-primary-400 transition-colors">
                    Projects
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="cursor-hover text-foreground-muted hover:text-primary-400 transition-colors">
                    Contact
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Technologies</h4>
            <ul className="space-y-2">
              <li className="text-foreground-muted">React & TypeScript</li>
              <li className="text-foreground-muted">Node.js & Express</li>
              <li className="text-foreground-muted">Tailwind CSS</li>
              <li className="text-foreground-muted">Three.js & WebGL</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-foreground-muted">Available for freelance work</p>
              <p className="text-foreground-muted">
                <span className="text-primary-400">Email: Samuelnichole195@gmail.com</span> Contact: 089671447385
              </p>
              <p className="text-foreground-muted">
                <span className="text-primary-400">Location:</span> Karawang, Indonesia 
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-800/30 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground-muted text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <p className="text-foreground-muted text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="text-red-400 mx-1" size={16} /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};