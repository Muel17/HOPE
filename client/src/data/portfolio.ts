import { Project, Skill, Certification } from "@shared/schema";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with React and Node.js",
    fullDescription: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. The platform supports multiple payment methods and includes real-time inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
    imageUrl: "/api/placeholder/600/400",
    projectUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    fullDescription: "A comprehensive task management application that enables teams to collaborate effectively. Built with React and Firebase, it features real-time synchronization, drag-and-drop task organization, team chat, file attachments, deadline tracking, and detailed project analytics.",
    technologies: ["React", "Firebase", "Material-UI", "WebSocket", "PWA"],
    imageUrl: "/api/placeholder/600/400",
    projectUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/username/task-manager",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with data visualization",
    fullDescription: "An interactive weather dashboard that provides detailed weather information and forecasts. Features include current weather conditions, 7-day forecasts, interactive maps, weather alerts, historical data visualization, and location-based weather tracking using OpenWeatherMap API.",
    technologies: ["Vue.js", "Chart.js", "OpenWeatherMap API", "Tailwind CSS"],
    imageUrl: "/api/placeholder/600/400",
    projectUrl: "https://example-weather.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    featured: false,
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description: "Analytics platform for social media insights",
    fullDescription: "A comprehensive social media analytics platform that helps businesses track their social media performance across multiple platforms. Includes engagement metrics, audience demographics, content performance analysis, competitor tracking, and automated reporting features.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "D3.js"],
    imageUrl: "/api/placeholder/600/400",
    projectUrl: "https://example-analytics.com",
    githubUrl: "https://github.com/username/social-analytics",
    featured: true,
  },
];

export const skills: Skill[] = [
  // Frontend Skills
  { id: "1", name: "React", category: "Frontend", level: 5, icon: "⚛️" },
  { id: "2", name: "Vue.js", category: "Frontend", level: 4, icon: "🟢" },
  { id: "3", name: "JavaScript", category: "Frontend", level: 5, icon: "🟨" },
  { id: "4", name: "TypeScript", category: "Frontend", level: 4, icon: "🔷" },
  { id: "5", name: "HTML5", category: "Frontend", level: 5, icon: "🧡" },
  { id: "6", name: "CSS3", category: "Frontend", level: 5, icon: "🎨" },
  { id: "7", name: "Tailwind CSS", category: "Frontend", level: 5, icon: "🌊" },
  
  // Backend Skills
  { id: "8", name: "Node.js", category: "Backend", level: 4, icon: "🟢" },
  { id: "9", name: "Python", category: "Backend", level: 4, icon: "🐍" },
  { id: "10", name: "Express.js", category: "Backend", level: 4, icon: "🚀" },
  { id: "11", name: "FastAPI", category: "Backend", level: 3, icon: "⚡" },
  { id: "12", name: "RESTful APIs", category: "Backend", level: 5, icon: "🔗" },
  
  // Database Skills
  { id: "13", name: "MongoDB", category: "Database", level: 4, icon: "🍃" },
  { id: "14", name: "PostgreSQL", category: "Database", level: 4, icon: "🐘" },
  { id: "15", name: "Redis", category: "Database", level: 3, icon: "🔴" },
  
  // DevOps & Tools
  { id: "16", name: "Git", category: "Tools", level: 5, icon: "📂" },
  { id: "17", name: "Docker", category: "DevOps", level: 3, icon: "🐳" },
  { id: "18", name: "AWS", category: "DevOps", level: 3, icon: "☁️" },
  { id: "19", name: "Vercel", category: "DevOps", level: 4, icon: "▲" },
];

export const certifications: Certification[] = [
  {
    id: "1",
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://example-credential.com",
    imageUrl: "/api/placeholder/300/200",
    description: "Demonstrated proficiency in developing and maintaining applications on the AWS platform, including core AWS services, security best practices, and deployment strategies.",
  },
  {
    id: "2",
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    credentialUrl: "https://example-credential.com",
    imageUrl: "/api/placeholder/300/200",
    description: "Comprehensive certification covering React fundamentals, advanced patterns, state management, testing, and best practices for building scalable React applications.",
  },
  {
    id: "3",
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialUrl: "https://example-credential.com",
    imageUrl: "/api/placeholder/300/200",
    description: "Complete full-stack web development certification covering HTML, CSS, JavaScript, React, Node.js, databases, and modern development practices.",
  },
  {
    id: "4",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialUrl: "https://example-credential.com",
    imageUrl: "/api/placeholder/300/200",
    description: "Advanced certification in JavaScript algorithms, data structures, and problem-solving techniques essential for software development.",
  },
];