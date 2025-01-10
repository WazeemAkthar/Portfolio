'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Code, Layout, Database } from 'lucide-react';
import { useState } from 'react';

// Fade in animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

// Stagger animation for lists
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management and payment processing",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "Full Stack",
      link: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization",
      tech: ["React", "D3.js", "TailwindCSS", "Firebase"],
      type: "Frontend",
      link: "#"
    },
    {
      title: "Task Management API",
      description: "RESTful API for task management with authentication and real-time updates",
      tech: ["Node.js", "Express", "PostgreSQL", "WebSocket"],
      type: "Backend",
      link: "#"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: <Layout className="w-6 h-6" />, level: 90 },
    { name: "Backend Development", icon: <Database className="w-6 h-6" />, level: 85 },
    { name: "UI/UX Design", icon: <Code className="w-6 h-6" />, level: 80 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-800 opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>
        
        <motion.div 
          className="z-10 text-center px-4"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            John Doe
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Frontend Developer & UI Engineer
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[<Github key="github" />, <Linkedin key="linkedin" />, <Mail key="mail" />].map((icon, index) => (
              <motion.button
                key={index}
                className="p-2 hover:text-blue-400 transition-colors"
                variants={item}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        className="py-20 px-4 bg-gray-800"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            variants={fadeIn}
          >
            Skills
          </motion.h2>
          <motion.div 
            className="grid gap-8"
            variants={container}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group"
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-2">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <span className="ml-2">{skill.name}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-500 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.level / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        className="py-20 px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            variants={fadeIn}
          >
            Projects
          </motion.h2>
          <motion.div 
            className="grid gap-8"
            variants={container}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-gray-800 p-6 rounded-lg cursor-pointer"
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <motion.div 
                  className="absolute inset-0 bg-blue-500 rounded-lg opacity-0 group-hover:opacity-5"
                  initial={false}
                  animate={{ scale: activeProject === index ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={container}
                      initial="hidden"
                      animate="show"
                    >
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                          variants={item}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: activeProject === index ? 1 : 0,
                      x: activeProject === index ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        className="py-20 px-4 bg-gray-800"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-8"
            variants={fadeIn}
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.button
            className="group inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
            <motion.div
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}