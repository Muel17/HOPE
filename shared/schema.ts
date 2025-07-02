import { z } from "zod";

// Contact form schema for form validation
export const insertContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Types
export type InsertContact = z.infer<typeof insertContactSchema>;

// Project data structure for portfolio items
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

// Skill data structure
export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1-5 scale
  icon: string;
}

// Certification data structure
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  imageUrl?: string;
  description: string;
}