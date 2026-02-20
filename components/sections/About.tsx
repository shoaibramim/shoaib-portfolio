import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { profileData } from "../../data/portfolioData";

export const About: React.FC = () => {
  const cards = [
    {
      title: "AI & Deep Learning",
      icon: (
        <svg
          className="w-8 h-8 text-accent mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      desc: "Architecting and training neural networks for computer vision, NLP, and predictive modeling.",
    },
    {
      title: "Full Stack Engineering",
      icon: (
        <svg
          className="w-8 h-8 text-accent mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      desc: "Building robust, scalable architectures using React, Next.js, Firebase, MongoDB, FastAPI, and robust databases.",
    },
    {
      title: "Research & Experimentation",
      icon: (
        <svg
          className="w-8 h-8 text-accent mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
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
