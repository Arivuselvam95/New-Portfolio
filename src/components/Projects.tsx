import React from 'react';
import { Github, ExternalLink, Calendar, Users, Code, Database, Globe, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Agri System',
      duration: 'January 2025 - May 2025',
      description: 'A comprehensive full-stack application designed to enhance agricultural practices through technology, helping farmers make data-driven decisions.',
      features: [
        'Crop price prediction using machine learning algorithms',
        'Region-based crop selection and recommendations',
        'E-commerce module for agricultural products',
        'Weather integration for farming insights',
        'User-friendly dashboard for farmers'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning', 'Weather API'],
      category: 'Full Stack',
      status: 'In Progress',
      color: 'from-green-500 to-emerald-500',
      icon: <Globe className="w-6 h-6" />,
      githubUrl : 'https://github.com/Arivuselvam95/ArgiTrade.git',
    },
    {
      title: 'Gemini AI Clone',
      duration: 'September 2024 - October 2024',
      description: 'An intelligent chatbot application that mimics Google\'s Gemini AI, providing real-time conversational capabilities with a modern interface.',
      features: [
        'Real-time conversational AI capabilities',
        'Modern and intuitive user interface',
        'Gemini-AI API integration',
        'Responsive design for all devices',
        'Chat history and context management'
      ],
      technologies: ['React', 'JavaScript', 'Gemini-AI API', 'CSS', 'REST API'],
      category: 'Frontend',
      status: 'Completed',
      color: 'from-purple-500 to-pink-500',
      icon: <Zap className="w-6 h-6" />,
      githubUrl : 'https://github.com/Arivuselvam95/Gemini.git',
    },
    {
      title: 'Dealer Management System',
      duration: 'November 2024',
      description: 'A secure and comprehensive system for managing dealers with advanced security features and incident tracking capabilities.',
      features: [
        'Secure user authentication with encryption',
        'Automated email credential delivery system',
        'Incident management and tracking',
        'User role management and permissions',
        'Real-time notifications and alerts'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'bcrypt', 'Email Integration'],
      category: 'Full Stack',
      status: 'Completed',
      color: 'from-blue-500 to-cyan-500',
      icon: <Database className="w-6 h-6" />,
      githubUrl : 'https://github.com/Arivuselvam95/Dealer-App.git',
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Completed' 
      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      : 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions I've built, demonstrating my expertise in full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                {/* Title and Status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  {project.duration}
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2 max-h-32 overflow-y-auto">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button onClick={() => window.open(project.githubUrl, '_blank')} className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  {/* <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Project <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Statistics</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Total Projects', value: '3', icon: <Code className="w-6 h-6" /> },
              { label: 'Completed', value: '2', icon: <Database className="w-6 h-6" /> },
              { label: 'In Progress', value: '1', icon: <Zap className="w-6 h-6" /> },
              { label: 'Technologies', value: '10+', icon: <Globe className="w-6 h-6" /> }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;