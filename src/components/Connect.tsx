import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Heart, Coffee } from 'lucide-react';

const Connect = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/Arivuselvam95',
      description: 'Check out my code repositories and open source contributions',
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:from-gray-800 hover:to-black'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/arivuselvam-s',
      description: 'Connect with me professionally and see my career journey',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:from-blue-700 hover:to-blue-900'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:arivuselvam439@gmail.com',
      description: 'Drop me a line for collaborations or opportunities',
      color: 'from-red-500 to-red-700',
      hoverColor: 'hover:from-red-600 hover:to-red-800'
    }
  ];

  const quickStats = [
    { label: 'LeetCode Problems', value: '600+' },
    { label: 'GitHub Repositories', value: '15+' },
    { label: 'Years of Learning', value: '4+' },
    { label: 'Technologies Mastered', value: '10+' }
  ];

  return (
    <section id="connect" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm always excited to connect with fellow developers, potential collaborators, and companies looking for passionate talent.
          </p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${link.color} ${link.hoverColor} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {link.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {link.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                  <span>Connect Now</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Quick <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stats</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A snapshot of my coding journey and achievements
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white animate-fadeInUp">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Coffee className="w-6 h-6" />
              <h3 className="text-2xl font-bold">
                Let's grab a virtual coffee!
              </h3>
            </div>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Whether you want to discuss a potential project, share ideas, or just have a friendly chat about technology, 
              I'm always up for a good conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:arivuselvam439@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Send an Email
              </a>
              <a
                href="https://www.linkedin.com/in/arivuselvam-s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Arivuselvam S</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © 2024 Arivuselvam S. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Connect;