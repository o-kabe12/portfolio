import { Github, Heart } from 'lucide-react';
import XIcon from '../assets/img/XIcon';
import NoteIcon from '../assets/img/NoteIcon';
import ZennIcon from '../assets/img/ZennIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} color="#fff" />, href: "https://github.com/o-kabe12/", label: "GitHub" },
    { icon: <XIcon size={20} color="#fff" />, href: "https://x.com/8mNjXtrehu33800", label: "X" },
    { icon: <NoteIcon size={20} color="#fff" />, href: "https://note.com/firm_orca8445", label: "Note" },
    { icon: <ZennIcon size={20} color="#fff" />, href: "https://zenn.dev/koo1201", label: "Zenn" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Works", href: "#works" },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-t from-black via-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-6">
          OKABE
        </div>
        <div className="md:flex justify-between mb-8">
          {/* Brand Section */}
          <div className="w-full md:w-1/2 space-y-4">
            <p className="text-gray-400 leading-relaxed">
              Crafting digital experiences with passion and precision. 
              Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 
                           hover:text-white hover:border-gray-500 hover:bg-gray-700 
                           transition-all duration-300 group"
                  aria-label={link.label}
                >
                  <div className="group-hover:scale-110 transition-transform duration-200">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4 w-full md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 
                           hover:color-white"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.href.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Okabe. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={14} className="mx-2 text-red-500 animate-pulse" />
              <span>in Japan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-emerald-500 
                 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 
                 transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;