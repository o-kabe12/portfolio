import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time order tracking.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "AI Chat Application",
      description: "Modern chat application with AI integration, featuring real-time messaging, file sharing, and smart response suggestions.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "OpenAI API", "WebSocket", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Weather API", "Chart.js", "PWA"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing modern design principles, smooth animations, and optimized performance.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false
    },
    {
      title: "Blockchain Voting System",
      description: "Secure voting platform built on blockchain technology, ensuring transparency and immutable voting records.",
      image: "https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden 
                         hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl
                         ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center bg-gradient-to-r from-blue-500 to-emerald-500 px-3 py-1 rounded-full">
                    <Sparkles size={14} className="mr-1 text-white" />
                    <span className="text-white text-sm font-medium">Featured</span>
                  </div>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={18} className="mr-2" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 
                     text-white font-semibold rounded-lg hover:from-blue-600 hover:to-emerald-600 
                     transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;