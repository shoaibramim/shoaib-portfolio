import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../../types";
import { FaGithub, FaTimes } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop — fixed below navbar */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[49] bg-bgPrimary/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel container — pointer-events-none so clicks on empty area hit the backdrop */}
          <motion.div
            key="modal-panel-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-20 left-0 right-0 bottom-0 z-[51] flex items-start justify-center p-4 lg:p-6 pointer-events-none"
          >
            {/* Modal Panel */}
            <motion.div
              key="modal-panel"
              initial={{ opacity: 0, scale: 0.93, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-full flex flex-col bg-bgSecondary rounded-2xl border border-bgPrimary shadow-2xl shadow-bgPrimary/60 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-bgPrimary/80 hover:bg-accent/20 text-textSecondary hover:text-accent transition-all duration-200 border border-bgPrimary hover:border-accent"
                aria-label="Close modal"
              >
                <FaTimes size={16} />
              </button>

              {/* Image */}
              <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-t-2xl bg-bgPrimary flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bgSecondary via-transparent to-transparent" />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-bgPrimary/80 backdrop-blur-sm text-xs font-semibold text-textPrimary rounded-full border border-bgPrimary">
                  {project.category}
                </span>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-textPrimary mb-4">
                  {project.title}
                </h2>

                <p className="text-textSecondary leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* All Tags */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-textSecondary uppercase tracking-wider mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-accent bg-accent/5 border border-accent/20 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.githubUrl ||
                  project.liveUrl ||
                  project.figmaUrl ||
                  project.manuscriptUrl) && (
                  <div className="pt-5 border-t border-bgPrimary">
                    <h3 className="text-xs font-semibold text-textSecondary uppercase tracking-wider mb-4">
                      Links
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bgPrimary border border-bgPrimary hover:border-accent text-textSecondary hover:text-accent transition-all duration-200 text-sm font-medium"
                        >
                          <FaGithub size={16} />
                          View Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bgPrimary border border-bgPrimary hover:border-accent text-textSecondary hover:text-accent transition-all duration-200 text-sm font-medium"
                        >
                          <MdOpenInNew size={16} />
                          Live Demo
                        </a>
                      )}
                      {project.manuscriptUrl && (
                        <a
                          href={project.manuscriptUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bgPrimary border border-bgPrimary hover:border-accent text-textSecondary hover:text-accent transition-all duration-200 text-sm font-medium"
                        >
                          <MdOpenInNew size={16} />
                          Manuscript
                        </a>
                      )}
                      {project.figmaUrl && (
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bgPrimary border border-bgPrimary hover:border-accent text-textSecondary hover:text-accent transition-all duration-200 text-sm font-medium"
                        >
                          <MdOpenInNew size={16} />
                          Figma Prototype
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
