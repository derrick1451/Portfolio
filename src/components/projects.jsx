import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaCode,
  FaEye,
  FaStar,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Book Store",
    category: "Frontend Development",
    description:
      "Bookstore is a web app that allows users to add a book, remove a selected book and display list of books.",
    longDescription:
      "The Bookstore is a CRUD web app that lets users add (title, author), delete, and view books. Built with React/Node.js (or vanilla JS with LocalStorage), it features a clean UI with optional search/sort. Scalable for auth, APIs, or databases, it's perfect for learning full-stack development.",
    technologies: ["React", "CSS", "JavaScript", "React Router"],
    image: "../src/assets/bookstore.png",
    liveLink: "https://bookstore-hynh.onrender.com/",
    githubLink: "https://github.com/derrick1451/bookstore",
    featured: false,
    status: "Completed",
    duration: "1 months",
  },
  {
    id: 2,
    title: "Todo List",
    category: "Frontend Development",
    description:
      "This is a basic to-do List application. Users can Edit, Update, and Delete todos. Built with HTML,CSS, Webpack and JavaScript.",
    longDescription:
      "A simple to-do app enabling users to add, edit, update, and delete tasks. Built with HTML, CSS, JavaScript, and Webpack, it offers essential CRUD functionality in a clean interface. Perfect for learning core web development.",
    technologies: ["HTML", "CSS", "JavaScript", "Webpack"],
    image: "../src/assets/crop.png",
    liveLink: "https://derrick1451.github.io/todo-list/",
    githubLink: "https://github.com/derrick1451/todo-list",
    featured: false,
    status: "Completed",
    duration: "1 months",
  },
  {
    id: 3,
    title: "Math-Magician",
    category: "Frontend Development",
    description: "math-magician is a single page app made with react thats helps a user to make simple calculation with the calculator and also display random quotes.",
    longDescription:
      "Math Magician is a React-powered SPA featuring a calculator for basic arithmetic and a random quote generator, blending utility with inspiration in one minimalist interface.Developed a collaborative task management application with drag-and-drop functionality, real-time updates using WebSockets, team collaboration features, and advanced filtering options. Integrated with third-party APIs for enhanced productivity.",
    technologies: ["React", "CSS", "JavaScript", "React Router"],
    image: "../src/assets/cal.png",
    liveLink: "https://math-magician-7wfm.onrender.com/",
    githubLink: "https://github.com/derrick1451/math-magician",
    featured: false,
    status: "Completed",
    duration: "1 months",
  },
  {
    id: 5,
    title: "Task Management App",
    category: "Frontend Development",
    description: "Collaborative task management tool with real-time updates",
    longDescription:
      "Developed a collaborative task management application with drag-and-drop functionality, real-time updates using WebSockets, team collaboration features, and advanced filtering options. Integrated with third-party APIs for enhanced productivity.",
    technologies: ["React", "TypeScript", "Socket.io", "Firebase"],
    image: "../src/assets/capstone.png",
    liveLink: "https://project-demo.com",
    githubLink: "https://github.com/username/project",
    featured: false,
    status: "Completed",
    duration: "2 months",
  },
  // Add more unique projects here
];

const ProjectCard = ({ project, setSelectedProject, index }) => {
  return (
    <motion.div
      className={`group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
        project.featured ? "border-2 border-yellow-400" : ""
      }`}
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <FaStar size={12} /> Featured
          </span>
        </div>
      )}

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex gap-2">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <FaEye size={16} />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75"
            onClick={(e) => e.stopPropagation()}
          >
            <FaCode size={16} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {project.category}
          </span>
          <span className="text-xs text-green-600 dark:text-green-400 font-medium">
            {project.status}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Duration: {project.duration}
          </span>
          <button
            onClick={() => setSelectedProject(project)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full"
          >
            <FaTimes size={20} />
          </button>
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <FaStar size={14} /> Featured Project
              </span>
            </div>
          )}
        </div>

        <div className="p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                {project.category}
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                {project.title}
              </h2>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <span className="text-green-600 dark:text-green-400 font-medium text-sm">
                {project.status}
              </span>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {project.duration}
              </p>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
            {project.longDescription}
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 transform hover:scale-105"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 transform hover:scale-105"
            >
              <FaGithub /> View Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Full-Stack Development",
    "Frontend Development",
    "Backend Development",
  ];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Showcasing my passion for creating innovative solutions through
            code. Each project represents a unique challenge and learning
            experience.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
