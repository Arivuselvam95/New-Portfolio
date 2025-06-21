import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Sparkles, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'arivuselvam439@gmail.com',
      href: 'mailto:arivuselvam439@gmail.com',
      color: 'from-blue-400 via-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 8867205078',
      href: 'tel:+918867205078',
      color: 'from-green-400 via-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Avinashi, Tiruppur',
      href: '#',
      color: 'from-purple-400 via-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/40 dark:bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 animate-fadeInUp">
            <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">Let's Connect</span>
            <Heart className="w-6 h-6 text-red-500 animate-pulse animation-delay-200" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 animate-fadeInUp animation-delay-200">
            Get In <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-shimmer">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-400">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`animate-fadeInLeft ${isVisible ? '' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Let's Start a <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Conversation</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                I'm always excited to work on new projects and connect with fellow developers and companies. 
                Whether you have a project in mind or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.href}
                  className={`group flex items-center gap-6 p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover-lift animate-fadeInLeft ${
                    isVisible ? '' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${200 + index * 150}ms` }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.bgColor} rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  
                  <div className={`relative p-4 rounded-xl bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-all duration-300 animate-pulse-glow`}>
                    {info.icon}
                  </div>
                  <div className="relative">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className={`bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500 rounded-2xl p-8 text-white shadow-xl animate-fadeInLeft ${
              isVisible ? '' : 'opacity-0'
            }`} style={{ animationDelay: '650ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                <h4 className="text-xl font-semibold">Available for Opportunities</h4>
                <Sparkles className="w-5 h-5 animate-spin-slow" />
              </div>
              <p className="opacity-90 text-lg">
                Currently seeking full-time opportunities in software development. 
                Open to remote work and relocation.
              </p>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl animate-fadeInRight ${
            isVisible ? '' : 'opacity-0'
          }`} style={{ animationDelay: '400ms' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Send me a <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Message</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400">I'll get back to you as soon as possible!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-fadeInUp animation-delay-600">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300 hover:bg-white dark:hover:bg-gray-800"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="animate-fadeInUp animation-delay-700">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300 hover:bg-white dark:hover:bg-gray-800"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="animate-fadeInUp animation-delay-800">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300 hover:bg-white dark:hover:bg-gray-800"
                  placeholder="What's this about?"
                />
              </div>

              <div className="animate-fadeInUp animation-delay-900">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white transition-all duration-300 resize-none hover:bg-white dark:hover:bg-gray-800"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl animate-fadeInUp animation-delay-1000 group"
              >
                <Send className="w-5 h-5 group-hover:animate-bounce" />
                Send Message
                {/* <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div> */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;