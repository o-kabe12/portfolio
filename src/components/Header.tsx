import { useState} from 'react';
import { Menu, X, Github } from 'lucide-react';
import XIcon from '../assets/img/XIcon';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/95`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            OKABE
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Works'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/o-kabe12" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="https://x.com/8mNjXtrehu33800" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors duration-200">
              <XIcon size={20} color="#9CA3AF" className='hover:brightness-0 hover:invert hover:saturate-0 hover:filter hover:contrast-200' />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800">
            <nav className="flex flex-col py-4">
              {['About', 'Skills', 'Works'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white py-2 px-4 text-left transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
              <div className="flex justify-center space-x-6 mt-4 pt-4 border-t border-gray-800">
                <a href="https://github.com/o-kabe12/" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Github size={20} />
                </a>
                <a href="https://x.com/8mNjXtrehu33800" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-200">
                  <XIcon size={20} color="#9CA3AF" className='hover:brightness-0 hover:invert hover:saturate-0 hover:filter hover:contrast-200' />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;