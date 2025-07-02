import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { insertContactSchema, type InsertContact } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';

export const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
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
            Get In Touch
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-primary-400">
                Let's Connect
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-foreground-muted">contact@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-foreground-muted">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-foreground-muted">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6 text-primary-400">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    className="cursor-hover w-12 h-12 bg-background-secondary border border-primary-800/30 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="cursor-hover w-12 h-12 bg-background-secondary border border-primary-800/30 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-12 backdrop-blur-glass rounded-lg p-6 border border-primary-800/30">
                <h3 className="text-lg font-semibold mb-3 text-primary-400">
                  Availability
                </h3>
                <p className="text-foreground-muted mb-4">
                  I'm currently available for freelance projects and full-time opportunities.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-400">Available for new projects</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="backdrop-blur-glass rounded-lg p-8 border border-primary-800/30"
            >
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Send Message
              </h2>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-600/20 border border-green-600/30 rounded-lg"
                >
                  <p className="text-green-400">
                    Thank you! Your message has been sent successfully.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className="cursor-hover w-full px-4 py-3 bg-background-secondary border border-primary-800/30 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-colors text-foreground"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="cursor-hover w-full px-4 py-3 bg-background-secondary border border-primary-800/30 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-colors text-foreground"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className="cursor-hover w-full px-4 py-3 bg-background-secondary border border-primary-800/30 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent outline-none transition-colors text-foreground resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || contactMutation.isPending}
                  className="cursor-hover w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  {isSubmitting || contactMutation.isPending ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {contactMutation.isError && (
                  <p className="text-sm text-red-400 text-center">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};