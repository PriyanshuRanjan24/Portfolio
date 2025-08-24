import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 bg-white/20 rounded-full mb-8 flex items-center justify-center backdrop-blur-sm border border-white/30">
            <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-white">PR</span>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Priyanshu Ranjan
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-blue-100 animate-fade-in-delay-1">
            Computer Science Engineer
          </p>
          
          <p className="text-lg mb-8 text-blue-200 max-w-2xl animate-fade-in-delay-2">
            B.Tech CSE Graduate passionate about Machine Learning, Data Analysis, and Web Development. 
            Building innovative solutions with modern technologies.
          </p>

          {/* Location */}
          <p className="text-blue-200 mb-8 animate-fade-in-delay-3">
            📍 Patna, Bihar, India
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mb-12 animate-fade-in-delay-4">
            <a 
              href="mailto:sharmapriyanshu317@gmail.com"
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/Priyanshu-Ranjan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/priyanshuranjan24"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-5">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Learn More About Me
            </button>
            <a 
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:scale-110 transition-transform duration-300"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8 text-white/70" />
          </button>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float-delay"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-float"></div>
    </section>
  );
};

export default Hero;