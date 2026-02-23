import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { profileData } from "../../data/portfolioData";

// Social links
const socials = [
  { icon: FaGithub, href: profileData.socials.github, label: "GitHub" },
  { icon: FaLinkedin, href: profileData.socials.linkedin, label: "LinkedIn" },
  {
    icon: FaBehance,
    href: profileData.socials.behance as string,
    label: "Behance",
  },
];

// Chain-link visuals

const ChainLink: React.FC<{ index: number }> = ({ index }) => {
  const isVertical = index % 2 === 0;
  return (
    <div
      className={`
        flex-shrink-0 rounded-full
        border border-gray-500/55
        ${isVertical ? "w-[4px] h-[12px]" : "w-[4px] h-[3px]"}
      `}
    />
  );
};

const Chain: React.FC<{ links?: number }> = ({ links = 30 }) => (
  <div className="flex flex-col items-center" style={{ gap: "1.5px" }}>
    {Array.from({ length: links }).map((_, i) => (
      <ChainLink key={i} index={i} />
    ))}
  </div>
);

// Main Sidebar component
export const SocialSidebar: React.FC = () => {
  /**
   * `yOffset` – amount of pixels the sidebar is pushed *below* its natural
   * centred position.
   */
  const initialOffset =
    typeof window !== "undefined" ? window.innerHeight * 0.3 : 200;

  const [yOffset, setYOffset] = useState(initialOffset);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Scroll-based upward travel
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const travelThreshold =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(1, scrolled / travelThreshold);
      const newOffset = window.innerHeight * 0.3 * (1 - progress);
      setYOffset(Math.max(0, newOffset));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Footer visibility detection
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.08 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="
        fixed right-5 xl:right-8 top-0 bottom-0
        z-40 hidden lg:flex items-center
        pointer-events-none select-none
      "
    >
      <AnimatePresence>
        {!isFooterVisible && (
          <motion.div
            key="social-sidebar"
            initial={{ opacity: 0, x: 48, y: initialOffset }}
            animate={{ opacity: 1, x: 0, y: yOffset }}
            exit={{
              opacity: 0,
              x: 48,
              transition: { duration: 0.38, ease: "easeIn" },
            }}
            transition={{
              opacity: { duration: 0.55, ease: "easeOut" },
              x: { type: "spring", stiffness: 110, damping: 22 },
              y: { type: "spring", stiffness: 55, damping: 18 },
            }}
            className="flex flex-col items-center pointer-events-auto"
            style={{ willChange: "transform, opacity" }}
          >
            {/* Top chain */}
            <Chain links={90} />

            {/* Social icon buttons */}
            <div className="flex flex-col items-center gap-[18px] py-[14px] px-[2px]">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    relative text-gray-500 hover:text-accent
                    transition-colors duration-200
                  "
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.88 }}
                >
                  <Icon size={19} />
                  {/* Subtle glow ring on hover */}
                  <motion.span
                    className="
                      absolute inset-0 rounded-full
                      bg-accent/10 blur-[6px] -z-10
                    "
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Bottom chain */}
            <Chain links={70} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
