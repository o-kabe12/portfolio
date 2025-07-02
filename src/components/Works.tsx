import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Works = () => {
  const projects = [
    {
      title: "Jicoca - エンジニア向け自己紹介カードアプリ",
      description: "エンジニア向けの自己紹介カードを作成・共有できるアプリ。",
      image: "/images/works_001.jpg",
      technologies: ["Next.js","TypeScript", "Tailwind CSS", "Supabase","Copilot","Vercel"],
      github: "https://github.com/o-kabe12/self-introduction-card",
      live: "https://self-introduction-card.vercel.app/",
      featured: false
    },
    {
      title: "30days Essence",
      description: "本当に必要なものだけを手に入れるためのほしい物リストアプリ ※ユーザー機能未実装",
      image: "/images/works_002.jpg",
      technologies: ["Next.js","TypeScript", "Tailwind CSS", "Supabase","Copilot","Vercel"],
      github: "https://github.com/o-kabe12/30days-essence",
      live: "https://30days-essence-1v2a.vercel.app/",
      featured: false
    },
    {
      title: "CalPlog",
      description: "１日のカロリーとタンパク質を簡単に計算・記録できるアプリです。",
      image: "/images/works_003.jpg",
      technologies: ["Next.js","TypeScript", "Tailwind CSS", "firebase","Copilot","Vercel","NextAuth.js"],
      github: "https://github.com/o-kabe12/calplog",
      live: "https://calplog.vercel.app/",
      featured: false
    },
  ];

  return (
    <section id="works" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              My Work
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            This area shows my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden 
                         hover:border-gray-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl
                         ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center bg-gradient-to-r from-blue-500 to-emerald-500 px-3 py-1 rounded-full">
                    <Sparkles size={14} className="mr-1 text-white" />
                    <span className="text-white text-sm font-medium">Featured</span>
                  </div>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={18} className="mr-2" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/o-kabe12?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 
                     text-white font-semibold rounded-lg hover:from-blue-600 hover:to-emerald-600 
                     transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;