import { useState, useEffect } from 'react';
import { ChevronDown, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Frontend Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToWorks = () => {
    const element = document.getElementById('works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="text-blue-400 mr-3" size={32} />
          <span className="text-blue-400 font-medium tracking-wider">WELCOME TO MY PORTFOLIO</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Hi, I'm{' '}
          </span>
          <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            Okabe
          </span>
        </h1>

        <div className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 h-16 flex items-center justify-center">
          <Code className="text-emerald-400 mr-3" size={32} />
          <span className="text-gray-300">
            {text}
            {isTyping && <span className="animate-pulse">|</span>}
          </span>
        </div>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          このサイトはokabeのポートフォリオサイトです。
          <br/>
          私のスキルや作品を紹介していますので、ぜひご覧ください。
          <br/>
          SNSやGithubについてもリンクをまとめています。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToWorks}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-lg
                     hover:from-blue-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-300
                     shadow-lg hover:shadow-xl"
          >
            Explore My Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToWorks}
          className="text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;