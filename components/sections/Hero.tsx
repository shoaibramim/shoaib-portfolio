import { useState, useEffect, type FC } from "react";
import { motion } from "framer-motion";
import { profileData } from "../../data/portfolioData";
import { Button } from "../ui/Button";
import { PDFViewerModal } from "../ui/PDFViewerModal";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";

const heroIdentitySequence = [
  { alias: "Ironman", intro: "I am" },
  { alias: "Spiderman", intro: "I am" },
  { alias: "Eren Yeager", intro: "Ore no nawa" },
  { alias: "Groot", intro: "I am" },
  { alias: "Who Knocks", intro: "I am the one" },
  { alias: "Vengeance", intro: "I am" },
  { alias: "The Night", intro: "I am" },
  { alias: "Batman", intro: "I am" },
  { alias: "James Bond", intro: "The name is Bond." },
  { alias: "Daredevil", intro: "I am" },
  { alias: "Inevitable", intro: "I am" },
  { alias: "Kira", intro: "So da. Boku ga" },
  { alias: "Loki, of Asgard", intro: "I am" },
  { alias: "Deadpool", intro: "The name's" },
];

const defaultIntro = "Hello, I am";

export const Hero: FC = () => {
  const [cvOpen, setCvOpen] = useState(false);
  const [displayName, setDisplayName] = useState(heroIdentitySequence[0].alias);
  const [displayIntro, setDisplayIntro] = useState(
    heroIdentitySequence[0].intro,
  );

  useEffect(() => {
    let index = 1;
    const aliasIntervalMs = 125;

    const intervalId = window.setInterval(() => {
      if (index < heroIdentitySequence.length) {
        const { alias, intro } = heroIdentitySequence[index];
        setDisplayName(alias);
        setDisplayIntro(intro);
        index += 1;
        return;
      }

      window.clearInterval(intervalId);
      setDisplayName(profileData.name);
      setDisplayIntro(defaultIntro);
    }, aliasIntervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 relative z-10 w-full">
        <div className="max-w-5xl 2xl:max-w-6xl">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
              {displayIntro}
            </p>
            <h1 className="w-full text-[clamp(2.75rem,7vw,6.5rem)] font-bold tracking-tight leading-none text-white mb-6 whitespace-nowrap">
              {displayName}
            </h1>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-textSecondary mb-8">
              {profileData.role}
            </h2>
            <p className="text-lg md:text-xl text-textSecondary max-w-2xl leading-relaxed mb-10">
              Designing human-centered interfaces and engineering intelligent
              systems that feel simple, reliable, and delightful to use.
            </p>
          </motion.div>

          <motion.div
            initial={false}
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
              variant="secondary"
              onClick={() => setCvOpen(true)}
              icon={<FaFilePdf size={18} />}
            >
              View CV
            </Button>
          </motion.div>
        </div>
      </div>

      <PDFViewerModal
        isOpen={cvOpen}
        onClose={() => setCvOpen(false)}
        pdfPath="/Shoaib_Uddin_CV.pdf"
        fileName="Shoaib_Uddin_CV.pdf"
        title="Curriculum Vitae"
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center [@media(max-height:800px)]:hidden"
        initial={false}
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
