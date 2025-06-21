import React from 'react';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Titan Company Limited',
      location: 'Bengaluru',
      position: 'Full Stack Development Intern',
      duration: 'November 2024',
      type: 'Internship',
      description: 'Company focused on manufacturing and marketing of watches and jewelry',
      achievements: [
        'Developed a secure Dealer Management System using React, Node.js, and MongoDB',
        'Implemented encrypted user authentication with bcrypt for enhanced security',
        'Built automated email credential delivery system for streamlined user onboarding',
        'Created incident tracking features to enhance operational efficiency'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'bcrypt', 'Email Integration'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      company: 'Frenzo Technologies',
      location: 'Coimbatore',
      position: 'Python and Web Development Intern',
      duration: 'July 2024 - August 2024',
      type: 'Internship',
      description: 'A company involved in tech solutions, specializing in web and app development',
      achievements: [
        'Worked on dynamic web applications using Django and Python',
        'Contributed to both backend logic and frontend development',
        'Developed user interfaces using HTML, CSS, and JavaScript',
        'Participated in team-based development and real-time module integration'
      ],
      technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Team Collaboration'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional internships that have shaped my technical skills and industry understanding.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fadeInUp`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                    {/* Company Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                            <Building className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.company}
                          </h3>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-lg font-semibold text-gray-900 dark:text-white">
                            {exp.position}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-4">
              Ready for New Opportunities
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Looking for full-time opportunities to contribute to innovative projects and grow my career in tech.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;