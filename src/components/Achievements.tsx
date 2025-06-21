import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Target, Award, Star, Code, Zap, Sparkles, Crown } from 'lucide-react';

const Achievements = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.achievement-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'LeetCode Master',
      description: 'Solved 600+ Problems',
      detail: 'Strengthened algorithmic skills through consistent problem-solving',
      color: 'from-orange-400 via-red-400 to-pink-500',
      bgColor: 'from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20',
      number: '600+',
      badge: '🏆'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Daily Challenge Champion',
      description: '100 Day Streak',
      detail: 'Completed 100 consecutive days of LeetCode daily challenges',
      color: 'from-green-400 via-emerald-400 to-teal-500',
      bgColor: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20',
      number: '100',
      badge: '🎯'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'HackerRank Excellence',
      description: '40K Hackos Earned',
      detail: 'Demonstrated problem-solving excellence across multiple domains',
      color: 'from-blue-400 via-cyan-400 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      number: '40K',
      badge: '💎'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Academic Excellence',
      description: 'CGPA 8.86/10',
      detail: 'Consistent academic performance in Computer Science Engineering',
      color: 'from-purple-400 via-violet-400 to-purple-600',
      bgColor: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
      number: '8.86',
      badge: '⭐'
    }
  ];

  const certificates = [
    {
      name: 'Prompt Engineering',
      issuer: 'AWS',
      color: 'from-orange-400 to-orange-600',
      icon: '🚀'
    },
    {
      name: 'Cloud Computing',
      issuer: 'NPTEL',
      color: 'from-blue-400 to-blue-600',
      icon: '☁️'
    },
    {
      name: 'Problem Solving',
      issuer: 'HackerRank',
      color: 'from-green-400 to-green-600',
      icon: '🧩'
    },
    {
      name: 'Python Programming',
      issuer: 'HackerRank',
      color: 'from-purple-400 to-purple-600',
      icon: '🐍'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            {['⭐', '🏆', '💎', '🎯'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 animate-fadeInUp">
            <Crown className="w-6 h-6 text-yellow-500 animate-bounce" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">My Journey</span>
            <Crown className="w-6 h-6 text-yellow-500 animate-bounce animation-delay-200" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 animate-fadeInUp animation-delay-200">
            Key <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-400">
            Milestones that showcase my dedication to continuous learning and excellence in technology.
          </p>
        </div>

        {/* Main Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`achievement-item group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover-lift ${
                visibleItems.includes(index) ? 'animate-slideInScale' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              {/* Badge */}
              <div className="absolute -top-4 -right-4 text-3xl animate-bounce-slow">
                {achievement.badge}
              </div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.color} text-white mb-6 group-hover:scale-110 transition-all duration-300 animate-pulse-glow`}>
                  {achievement.icon}
                </div>
                
                {/* Number */}
                <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.number}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">
                  {achievement.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
                  {achievement.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Certificates Section */}
        <div className="bg-gradient-to-br from-white/60 via-blue-50/60 to-purple-50/60 dark:from-gray-800/60 dark:via-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm rounded-3xl p-10 shadow-xl mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-blue-500 animate-spin-slow" />
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                Professional <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Certificates</span>
              </h3>
              <Sparkles className="w-6 h-6 text-purple-500 animate-spin-slow animation-delay-500" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Industry-recognized certifications that validate my expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={cert.name}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fadeInUp hover-lift"
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 animate-bounce-slow">
                    {cert.icon}
                  </div>
                  <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color} text-white mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Problems Solved', value: '700+', icon: <Code className="w-6 h-6" />, color: 'from-orange-400 to-red-500' },
            { label: 'Days of Coding', value: '300+', icon: <Target className="w-6 h-6" />, color: 'from-green-400 to-emerald-500' },
            { label: 'Certificates', value: '4', icon: <Award className="w-6 h-6" />, color: 'from-blue-400 to-cyan-500' },
            { label: 'CGPA', value: '8.86', icon: <Star className="w-6 h-6" />, color: 'from-purple-400 to-pink-500' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fadeInUp"
              style={{ animationDelay: `${800 + index * 150}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} text-white rounded-full mb-4 hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                <span className="group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </span>
              </div>
              <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;