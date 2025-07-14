import { Project, Skill, Certification } from "@shared/schema";

export const projects: Project[] = [
    {
    id: "1",
    title: "Ticketing Cinema System With Supabase",
    description: "Modern e-commerce solution with React and Node.js",
    fullDescription: "A full-stack e-commerce platform built with React, Node.js, TS, and Supabase. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard. The platform supports multiple payment methods and includes real-time inventory management.",
    technologies: ["React", "Node.js", "Supabase", "Stripe", "TS", "Express"],
    imageUrl: "/assets/images1.png",
    projectUrl: "https://youtu.be/dQw4w9WgXcQ",
    githubUrl: "https://github.com/Muel17/KADA",
    featured: true,
  },
  {
    id: "2",
    title: "Security Audit and Compliance Tool",
    description: "Comprehensive tool for security audits and compliance checks with Standards: ISO/IEC 27001",
    fullDescription: "Poject SCA: Security Audit and Compliance (SCA) tool aligned with ISO/IEC 27001 standards. Conducted gap analysis of system controls, evaluated policy documentation, access controls, and data protection measures across four example companies. Delivered audit findings and actionable recommendations to improve compliance readiness.",
    technologies: [ "ISO/IEC 27001",
    "Gap Analysis",
    "Policy Documentation",
    "Access Control Review",
    "Data Protection Assessment",
    "Analytics"],
    imageUrl: "/assets/images2.png",
    projectUrl: " https://drive.google.com/file/d/1sO7IFC8jnsYd-QU7I4FveWcwXNM85zsk/view?usp=sharing",
    githubUrl: "https://medium.com/@itsidkwhy12/sca-audit-and-compliance-ef4f788223e7r",
    featured: true,
  },
  {
    id: "3",
    title: "Security Risk Management",
    description: "Website-based Risk Assessment Manager for cybersecurity risk analysis and visualization using NIST 800-30 framework.",
    fullDescription: "Final project (Feb 2025): Built a website-based Risk Assessment Manager to analyze and visualize 30+ cybersecurity risks. Applied NIST 800-30 to assess threats, vulnerabilities, and controls across simulated systems. Integrated MISP for real-world threat intelligence enrichment. Created interactive dashboards with Plotly to support risk-based decision-making.",
    technologies: [
    "Python",
    "MISP",
    "Plotly",
    "NIST 800-30"
  ],
    imageUrl: "/assets/images4.png",
    projectUrl: "https://drive.google.com/file/d/1sO7IFC8jnsYd-QU7I4FveWcwXNM85zsk/view?usp=sharing",
    githubUrl: "https://drive.google.com/file/d/1sO7IFC8jnsYd-QU7I4FveWcwXNM85zsk/view?usp=sharing",
    featured: false,
},
  {
  id: "4",
  title: "Digital Forensic Investigation - Client Company X",
  description: "Final project: Forensic analysis of disk image and PCAP files for a human trafficking case.",
  fullDescription: "March 2025 - May 2025: Conducted forensic analysis on disk image and PCAP files related to a human imprisonment case for Client Company X. Utilized technical tools and methods to investigate and uncover hidden data and passwords. Played a key role in identifying critical digital evidence that supported the case findings. Created a comprehensive forensic report and provided technical insights and assessments to support legal decisions.",
  technologies: [
    "Autopsy",
    "Wireshark",
    "Disk Image Analysis",
    "PCAP Analysis",
    "Password Recovery",
    "Digital Forensics"
  ],
  imageUrl: "/assets/images3.png",
  projectUrl: "https://drive.google.com/file/d/1umxpDHFGmqgGV2JDcww0P70rAaE6pW4L/view?usp=sharing",
  githubUrl: "https://drive.google.com/file/d/1umxpDHFGmqgGV2JDcww0P70rAaE6pW4L/view?usp=sharing",
  featured: false,
},

{
  "id": "7",
  "title": "Full-Stack Cinema Booking System",
  "description": "A modern, full-stack web application for booking movie tickets, built with Next.js, React, and MongoDB.",
  "fullDescription": "Architected and developed a scalable, server-rendered Cinema Booking System using Next.js and React, role as an backend also frontend in this type of project entirely in TypeScript for robust, type-safe code. The application features a dynamic front-end for seamless movie Browse and seat selection. It utilizes MongoDB as the NoSQL database to manage all data for movies, user accounts, and bookings. The system is integrated with Amazon Web Services (AWS) for scalable cloud functionalities, such as storing movie posters in S3. The entire application is deployed and hosted on Netlify, ensuring high availability and a seamless CI/CD pipeline.",
  "technologies": [
    "Next.js",
    "React",
    "MongoDB",
    "TypeScript",
    "AWS",
    "Netlify",
    "Node.js"
  ],
  "imageUrl": "/assets/images 5.png",
  "projectUrl": "https://cinema-booking-system.netlify.app/",
  "githubUrl": "https://github.com/AwarewarAlmighty/Cinema-Booking-System",
  "featured": true
}
];

export const skills: Skill[] = [
  // Frontend (Minimal for Cyber)
  { id: "1", name: "React", category: "Frontend", level: 4, icon: "⚛️" },
  { id: "2", name: "JavaScript", category: "Frontend", level: 4, icon: "🟨" },
  { id: "3", name: "HTML5", category: "Frontend", level: 5, icon: "🧡" },
  { id: "4", name: "CSS3", category: "Frontend", level: 4, icon: "🎨" },
    { id: "5", name: "Tailwind CSS", category: "Frontend", level: 5, icon: "🌊" },

  // Backend / Scripting
  { id: "6", name: "Node.js", category: "Backend", level: 3, icon: "🟢" },
  { id: "7", name: "Python", category: "Backend", level: 2, icon: "🐍" },
  { id: "8", name: "Express.js", category: "Backend", level: 3, icon: "🚀" },
  { id: "9", name: "RESTful APIs", category: "Backend", level: 3, icon: "🔗" },

  // Database
  { id: "10", name: "MongoDB", category: "Database", level: 5, icon: "🍃" },
  { id: "11", name: "PostgreSQL", category: "Database", level: 3, icon: "🐘" },
  { id: "12", name: "MySQL", category: "Database", level: 5, icon: "🐬" },

  // Cybersecurity Tools
  { id: "13", name: "Nmap", category: "Cybersecurity", level: 4, icon: "📡" },
  { id: "14", name: "Burp Suite", category: "Cybersecurity", level: 4, icon: "🕷️" },
  { id: "15", name: "Wireshark", category: "Cybersecurity", level: 4, icon: "🦈" },
  { id: "16", name: "SQLMap", category: "Cybersecurity", level: 4, icon: "💉" },
  { id: "17", name: "John the Ripper", category: "Cybersecurity", level: 3, icon: "🧙" },
  { id: "18", name: "Hashcat", category: "Cybersecurity", level: 3, icon: "🐱" },
  { id: "19", name: "Metasploit", category: "Cybersecurity", level: 3, icon: "💣" },
  { id: "20", name: "Autopsy", category: "Cybersecurity", level: 5, icon: "🧬" },
  { id: "21", name: "MISP", category: "Cybersecurity", level: 3, icon: "🛰️" },
  { id: "22", name: "Ghidra", category: "Cybersecurity", level: 3, icon: "🧠" },
  { id: "23", name: "GDB", category: "Cybersecurity", level: 3, icon: "🔍" },
  { id: "24", name: "Dalfox", category: "Cybersecurity", level: 2, icon: "🛡️" },

  // DevOps & Tools
  { id: "25", name: "Git", category: "Tools", level: 5, icon: "📂" },
  { id: "26", name: "Docker", category: "DevOps", level: 3, icon: "🐳" },
  { id: "27", name: "AWS", category: "DevOps", level: 2, icon: "☁️" },
  { id: "28", name: "Vercel", category: "DevOps", level: 4, icon: "▲" },
];

export const certifications: Certification[] = [
  {
    id: "1",
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://example-credential.com",
    imageUrl: "/assets/images1.png",
    description: "Demonstrated proficiency in developing and maintaining applications on the AWS platform, including core AWS services, security best practices, and deployment strategies.",
  },
  {
    id: "2",
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2023",
    credentialUrl: "https://example-credential.com",
    imageUrl: "/assets/images1.png",
    description: "Comprehensive certification covering React fundamentals, advanced patterns, state management, testing, and best practices for building scalable React applications.",
  },
  {
    id: "3",
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialUrl: "https://example-credential.com",
    imageUrl: "/assets/images1.png",
    description: "Complete full-stack web development certification covering HTML, CSS, JavaScript, React, Node.js, databases, and modern development practices.",
  },
  {
    id: "4",
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    credentialUrl: "https://example-credential.com",
    imageUrl: "/assets/images1.png",
    description: "Advanced certification in JavaScript algorithms, data structures, and problem-solving techniques essential for software development.",
  },
];