import React from "react";
import { profileData } from "../../data/portfolioData";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bgPrimary border-t border-gray-800 py-8 mt-12">
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-textSecondary text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} {profileData.name}. All rights
          reserved.
        </div>

        <div className="flex gap-6">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub size={24} />
          </a>
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={24} />
          </a>
          <a
            href={profileData.socials.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors"
          >
            <span className="sr-only">Behance</span>
            <FaBehance size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
