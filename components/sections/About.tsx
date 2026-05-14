import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { profileData } from "../../data/portfolioData";
import { MdMemory, MdCode, MdScience } from "react-icons/md";

export const About: React.FC = () => {
  const cards = [
    {
      title: "UI/UX Engineering",
      icon: (
        <span className="text-accent mb-4 block">
          <MdScience size={32} />
        </span>
      ),
      desc: "Designing clear user flows, crafting design systems, and building polished interfaces with React and Tailwind CSS.",
    },
    {
      title: "AI & Deep Learning",
      icon: (
        <span className="text-accent mb-4 block">
          <MdMemory size={32} />
        </span>
      ),
      desc: "Building and evaluating intelligent systems across computer vision, LLMs, and applied deep learning.",
    },
    {
      title: "Full Stack Development",
      icon: (
        <span className="text-accent mb-4 block">
          <MdCode size={32} />
        </span>
      ),
      desc: "Designing and building scalable web applications from the ground up, with a focus on performance, maintainability, and user experience.",
    },
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:gap-24 gap-12 items-center">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="space-y-6"
        >
          <p className="text-textSecondary text-lg leading-relaxed">
            {profileData.about}
          </p>
          <p className="text-textSecondary text-lg leading-relaxed">
            Based in {profileData.location}, I focus on UI/UX craft and applied
            AI/ML, shaping intuitive experiences, rapid prototypes, and
            intelligent features that stay usable, fast, and accessible.
          </p>

          <div className="pt-6 border-t border-bgSecondary">
            <h3 className="text-white font-semibold mb-4">Core Focus Areas</h3>
            <ul className="space-y-3">
              {[
                "UI/UX Design Systems",
                "Human-centered AI/ML",
                "Computer Vision & LLMs",
                "Frontend Prototyping & Accessibility",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-textSecondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pl-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className={`bg-bgSecondary p-6 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group ${index === 2 ? "sm:col-span-2" : ""}`}
            >
              {card.icon}
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-textSecondary text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
