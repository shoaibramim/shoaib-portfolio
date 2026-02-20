import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { skillsData } from "../../data/portfolioData";

export const Skills: React.FC = () => {
  return (
    <Section
      id="skills"
      title="Technical Arsenal"
      subtitle="Tools and technologies I use to build scalable solutions."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {skillsData.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="bg-bgSecondary rounded-2xl p-6 border border-gray-800 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="px-4 py-2 bg-bgPrimary border border-gray-700 text-textSecondary rounded-lg text-sm font-medium hover:border-accent hover:text-white transition-colors cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
