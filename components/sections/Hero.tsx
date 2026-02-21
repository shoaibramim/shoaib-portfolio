import React from "react";
import { motion } from "framer-motion";
import { profileData } from "../../data/portfolioData";
import { Button } from "../ui/Button";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew, MdFileDownload } from "react-icons/md";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
              Hello, I am
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
              {profileData.name}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-textSecondary mb-8">
              {profileData.role}
            </h2>
            <p className="text-lg md:text-xl text-textSecondary max-w-2xl leading-relaxed mb-10">
              Transforming complex problems into elegant solutions. Specializing
              in building scalable web applications and intelligent machine
              learning models.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              href={profileData.socials.github}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FaGithub size={18} />}
            >
              GitHub
            </Button>
            <Button
              href={profileData.socials.huggingface}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              icon={<MdOpenInNew size={20} />}
            >
              HuggingFace
            </Button>
            <Button
              href="/Shoaib_Uddin_CV.pdf"
              variant="secondary"
              download="Shoaib_Uddin_CV.pdf"
              icon={<MdFileDownload size={20} />}
            >
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center [@media(max-height:800px)]:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs text-textSecondary uppercase tracking-widest mb-2">
          Scroll
        </span>
        <motion.div className="w-[1px] h-12 bg-bgSecondary relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-accent absolute top-0"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
