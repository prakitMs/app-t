import { Code2, Palette, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "I strive to write maintainable, scalable code following industry best practices",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Focus",
      description:
        "I enjoy creating beautiful, user-centered interfaces with attention to detail",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description:
        "I focus on optimizing applications for speed and seamless user experience",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {
              "I'm a dedicated frontend developer with a genuine passion for modern web technologies. I find great satisfaction in bringing creative designs to life and building exceptional user experiences that can make a meaningful difference."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-purple-500/50"
            >
              <div className="text-purple-400 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
