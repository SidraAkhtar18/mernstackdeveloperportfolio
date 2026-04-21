import { RiNextjsFill } from "react-icons/ri";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaFigma,
  FaUsers,
  FaBrain,
  FaComments,
  FaLightbulb,
  FaCloud,
  FaLock,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiExpress,
  SiRedux,
  SiCanva,
  SiLaravel,
  SiGithub,
} from "react-icons/si";

import { MdApi } from "react-icons/md";

const Technologies = () => {
  const techCategories = [
    {
      title: "Frontend",
      colorStart: "#0077B6",
      colorEnd: "#90E0EF",
      skills: [
        { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={28} /> },
        { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={28} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" size={28} /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={28} /> },
        { name: "Reactjs", icon: <FaReact color="#61DAFB" size={28} /> },
        { name: "React Native", icon: <FaReact color="#61DAFB" size={28} /> },
        { name: "Nextjs", icon: <RiNextjsFill color="#000000" size={28} /> },
      ],
    },
    {
      title: "Backend",
      colorStart: "#0077B6",
      colorEnd: "#90E0EF",
      skills: [
        { name: "Node.js", icon: <FaNodeJs color="#339933" size={28} /> },
        { name: "Express.js", icon: <SiExpress color="#000000" size={28} /> },
        { name: "API Integration", icon: <MdApi color="#0EA5E9" size={28} /> },
        { name: "Authentication", icon: <FaLock color="#EF4444" size={28} /> },
      ],
    },
    {
      title: "Databases",
      colorStart: "#0077B6",
      colorEnd: "#90E0EF",
      skills: [
        { name: "MongoDB", icon: <SiMongodb color="#47A248" size={28} /> },
        { name: "MySQL", icon: <SiMysql color="#00758F" size={28} /> },
        { name: "Database Design", icon: <FaDatabase color="#6366F1" size={28} /> },
        { name: "Cloud Databases", icon: <FaCloud color="#0EA5E9" size={28} /> },
      ],
    },
    {
      title: "Tools",
      colorStart: "#0077B6",
      colorEnd: "#90E0EF",
      skills: [
        { name: "Git", icon: <FaGitAlt color="#F05032" size={28} /> },
        { name: "Github", icon: <SiGithub color="#181717" size={28} /> },
        { name: "Figma", icon: <FaFigma color="#F24E1E" size={28} /> },
        { name: "Canva", icon: <SiCanva color="#00C4CC" size={28} /> },
      ],
    },
    {
      title: "Soft Skills",
      colorStart: "#0077B6",
      colorEnd: "#90E0EF",
      skills: [
        { name: "Teamwork", icon: <FaUsers color="#3B82F6" size={28} /> },
        { name: "Problem Solving", icon: <FaBrain color="#22C55E" size={28} /> },
        { name: "Communication", icon: <FaComments color="#F59E0B" size={28} /> },
        { name: "Creativity", icon: <FaLightbulb color="#EC4899" size={28} /> },
      ],
    },
  ];
  return (
    <section
      className="py-16"
      id="technologies"
      style={{ backgroundColor: "#CAF0F8" }} // neutralLight background
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
           className="section-title text-4xl md:text-5xl text-center mb-16"
            style={{ color: "#0077B6" }}
        >
          Technologies I Work On
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl border-t-4"
              style={{
                backgroundColor: "#FFFFFF",
                borderTopColor: category.colorStart,
                backgroundImage: `linear-gradient(to right, ${category.colorStart}, ${category.colorEnd})`,
                color: "#CAF0F8",
              }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#CAF0F8" }}>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 rounded-lg p-2 hover:bg-[#E0F7FF] transition"
                    style={{ backgroundColor: "#FFFFFF", color: "#0077B6" }}
                  >
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
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

export default Technologies;
