import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/Priyanshu-Ranjan",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      href: "https://github.com/priyanshuranjan24",
      label: "GitHub",
      color: "hover:text-gray-800"
    },
    {
      icon: Mail,
      href: "mailto:sharmapriyanshu317@gmail.com",
      label: "Email",
      color: "hover:text-teal-600"
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Priyanshu Ranjan
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Computer Science Engineer passionate about Machine Learning, Data Analysis, and Web Development. 
              Ready to contribute to innovative projects and make a meaningful impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <p>Patna, Bihar</p>
              <a 
                href="tel:+91960859088"
                className="block hover:text-blue-400 transition-colors duration-300"
              >
                +91-9608598088
              </a>
              <a 
                href="mailto:sharmapriyanshu317@gmail.com"
                className="block hover:text-blue-400 transition-colors duration-300"
              >
                sharmapriyanshu317@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" />
            <span>by Priyanshu Ranjan</span>
          </div>
          
          <div className="text-gray-300 text-sm">
            © {currentYear} Priyanshu Ranjan. All rights reserved.
          </div>
        </div>

        {/* Additional Footer Note */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            This portfolio showcases my journey as a Computer Science Engineer. 
            I'm always excited to connect with fellow developers, potential employers, and collaborators. 
            Let's build something amazing together!
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
