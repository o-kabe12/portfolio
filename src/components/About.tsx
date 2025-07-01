import React from 'react';
import { Download, MapPin, Calendar, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "5+", icon: <Calendar size={20} /> },
    { label: "Projects Completed", value: "50+", icon: <Coffee size={20} /> },
    { label: "Happy Clients", value: "30+", icon: <MapPin size={20} /> },
    { label: "Technologies", value: "20+", icon: <Coffee size={20} /> }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Hello! I'm <span className="text-white font-semibold">Okabe</span>, a passionate full-stack developer 
                  based in Japan with over 5 years of experience in creating digital solutions that matter.
                </p>
                <p>
                  My journey began with a curiosity for how things work behind the scenes of our favorite applications. 
                  This curiosity evolved into a deep passion for crafting elegant, efficient, and user-centered solutions 
                  that solve real-world problems.
                </p>
                <p>
                  I specialize in modern web technologies, with a strong focus on React, Node.js, and cloud architecture. 
                  I believe in writing clean, maintainable code and creating intuitive user experiences that make 
                  technology accessible to everyone.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or enjoying a good cup of coffee while planning the next big project.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 
                         text-white font-semibold rounded-lg hover:from-blue-600 hover:to-emerald-600 
                         transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
              <a
                href="mailto:contact@okabe.dev"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 
                         font-semibold rounded-lg hover:border-white hover:text-white 
                         transform hover:scale-105 transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 
                            border border-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Okabe Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 
                           text-center hover:border-gray-600 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-3 text-blue-400 group-hover:text-emerald-400 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;