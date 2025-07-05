import { Code2, Briefcase } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={24} />,
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 70 },
        { name: "React/Next.js", level: 30 },
        { name: "TypeScript", level: 20 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Briefcase size={24} />,
      title: "Design & Tools",
      skills: [
        { name: "XD / Figma cording", level: 90 },
        { name: "Git", level: 80 },
        { name: "Supabase", level: 10 },
        { name: "生成AI（ChatGPT / Copilot等）活用", level: 70 }
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-gray-100 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out transform group-hover/skill:scale-x-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;