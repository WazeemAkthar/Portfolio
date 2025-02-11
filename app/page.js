"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  Code,
  Layout,
  Database,
  BookText,
  Figma,
} from "lucide-react";
import RadarChart from "./components/RadarChart";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const FrontendskillsData = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "Python", level: 80 },
  { name: "UI Design", level: 70 },
];

const copywritingSkills = [
  { name: "Headline Writing", level: 90 },
  { name: "SEO Copywriting", level: 80 },
  { name: "Persuasive Writing", level: 85 },
  { name: "Email Marketing", level: 75 },
  { name: "Social Media Copy", level: 80 },
  { name: "Storytelling", level: 85 },
  { name: "Ad Copywriting", level: 70 },
  { name: "Brand Voice Development", level: 78 },
  { name: "Content Strategy", level: 82 },
  { name: "Proofreading & Editing", level: 88 },
];

const uiUxSkills = [
  { name: "Wireframing", level: 85 },
  { name: "Prototyping", level: 80 },
  { name: "User Research", level: 75 },
  { name: "Interaction Design", level: 90 },
  { name: "Visual Design", level: 85 },
  { name: "Usability Testing", level: 80 },
  { name: "Design Systems", level: 70 },
  { name: "Typography", level: 80 },
  { name: "Color Theory", level: 85 },
  { name: "Responsive Design", level: 90 },
];

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and payment processing",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "Full Stack",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization",
      tech: ["React", "D3.js", "TailwindCSS", "Firebase"],
      type: "Frontend",
    },
    {
      title: "Task Management API",
      description:
        "RESTful API for task management with authentication and real-time updates",
      tech: ["Node.js", "Express", "PostgreSQL", "WebSocket"],
      type: "Backend",
    },
  ];
  const skills = [
    {
      name: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      level: 90,
    },
    {
      name: "UI/UX Design",
      icon: <Figma className="w-6 h-6" />,
      level: 85,
    },
    { name: "Copywriting", icon: <BookText className="w-6 h-6" />, level: 80 },
  ];

  const links = [
    {
      name: "Github",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/WazeemAkthar",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/wazeem-akthar-03738128a/",
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:aktharwazeem@gmail.com",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Theme Toggle */}
      <motion.button
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-800"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </motion.button>

      {/* Hero Section */}
      <motion.div
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center">
          <motion.h1
            className="text-6xl font-bold mb-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            Wazeem Akthar
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            Frontend Developer & UI Engineer
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              <Github key="github" href="https://github.com/WazeemAkthar" />,
              <Linkedin key="linkedin" />,
              <Mail key="mail" />,
            ].map((icon, index) => (
              <motion.a
                key={index}
                href={links[index].url}
                target="_blank"
                className="p-2 hover:text-blue-400 transition-colors"
                variants={item}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Skills Radar Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        <motion.div>
          <div className="p-4">
            <RadarChart skills={FrontendskillsData} theme={theme} />
          </div>
        </motion.div>

        <motion.div>
          <div className="p-4">
            <RadarChart skills={copywritingSkills} theme={theme} />
          </div>
        </motion.div>

        <motion.div>
          <div className="p-4">
            <RadarChart skills={uiUxSkills} theme={theme} />
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex items-center mb-2">
                  {skill.icon}
                  <span className="ml-2">{skill.name}</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-1000 ease-out group-hover:bg-blue-400"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-gray-800 p-6 rounded-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      activeProject === index
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <motion.div
        className="py-20 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-3xl font-bold mb-8" variants={fadeIn}>
            Get In Touch
          </motion.h2>
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
