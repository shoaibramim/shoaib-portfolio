import React from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { projectsData } from "../../data/portfolioData";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

export const Projects: React.FC = () => {
  return (
    <Section
      id="projects"
      title="Selected Works"
      subtitle="A collection of recent projects spanning AI, web dev, and UI/UX."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-8">
        {projectsData.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="group flex flex-col bg-bgSecondary rounded-2xl overflow-hidden border border-gray-800 hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 h-full"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-gray-900">
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
              {/* Using standard img instead of next/image for SPA compatibility */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 z-20">
                <span className="px-3 py-1 bg-bgPrimary/80 backdrop-blur-sm text-xs font-semibold text-white rounded-full border border-gray-700">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-textSecondary text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-400 bg-bgPrimary px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-xs text-gray-500 bg-bgPrimary px-2 py-1 rounded">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto pt-4 border-t border-gray-800">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <MdOpenInNew size={16} />
                    Live Demo
                  </a>
                )}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <MdOpenInNew size={16} />
                    Figma Prototype
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
