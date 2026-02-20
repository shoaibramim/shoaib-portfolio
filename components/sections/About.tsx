import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { profileData } from "../../data/portfolioData";
import { MdMemory, MdCode, MdScience } from "react-icons/md";

export const About: React.FC = () => {
  const cards = [
    {
      title: "AI & Deep Learning",
      icon: (
        <span className="text-accent mb-4 block">
          <MdMemory size={32} />
        </span>
      ),
      desc: "Architecting and training neural networks for computer vision, NLP, and predictive modeling.",
    },
    {
      title: "Full Stack Engineering",
      icon: (
        <span className="text-accent mb-4 block">
          <MdCode size={32} />
        </span>
      ),
      desc: "Building robust, scalable architectures using React, Next.js, Firebase, MongoDB, FastAPI, and robust databases.",
    },
    {
      title: "Research & Experimentation",
      icon: (
        <span className="text-accent mb-4 block">
          <MdScience size={32} />
        </span>
      ),
      desc: "Bridging the gap between academic research and production-ready technological solutions.",
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
            Based in {profileData.location}, I thrive in environments that
            challenge me to continuously learn and apply new methodologies.
            Whether it's training a model to detect plant diseases or designing
            a seamless user interface, my goal is always to deliver impactful
            results.
          </p>

          <div className="pt-6 border-t border-bgSecondary">
            <h3 className="text-white font-semibold mb-4">Core Focus Areas</h3>
            <ul className="space-y-3">
              {[
                "Computer Vision & LLMs",
                "Modern Web Architectures",
                "UI/UX & Product Design",
                "Algorithmic Problem Solving",
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
