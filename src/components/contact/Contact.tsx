import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { FaFacebook, FaLine } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "prakitsra@gmail.com",
      link: "#",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "0982320694",
      link: "#",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Nakhonratchasima ,Thailand",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook size={24} />,
      url: "https://www.facebook.com/prakit.srakaew",
      label: "facebook",
    },

    {
      icon: <FaLine size={24} />,
      url: "https://line.me/ti/p/twe-g706Pl",
      label: "Line",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I would be honored to collaborate with you on your next project.
            Please feel free to reach out to discuss how we can bring your ideas
            to life together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                I'd Love to Hear From You
              </h3>
              <p className="text-gray-300 mb-8">
                I'm always excited about new opportunities and interesting
                projects. Whether you have a question, a project idea, or just
                want to say hello, I'd be delighted to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors duration-300 border border-slate-700 hover:border-purple-500/50"
                >
                  <div className="text-purple-400">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-gray-300">{item.content}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
