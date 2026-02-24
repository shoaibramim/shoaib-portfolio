import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { PDFViewerModal } from "../ui/PDFViewerModal";
import { educationData } from "../../data/portfolioData";
import {
  MdSchool,
  MdVerified,
  MdOpenInNew,
  MdPictureAsPdf,
} from "react-icons/md";

export const Education: React.FC = () => {
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [activeCert, setActiveCert] = useState<{
    pdfPath: string;
    title: string;
  } | null>(null);

  const openCertModal = (pdfPath: string, title: string) => {
    setActiveCert({ pdfPath, title });
    setCertModalOpen(true);
  };

  const closeCertModal = () => {
    setCertModalOpen(false);
    setActiveCert(null);
  };

  return (
    <Section id="education" title="Educational Background">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:gap-24 gap-16">
        {/* Left Column: Education Timeline */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
            Education
          </h3>

          {/* Timeline */}
          <div className="relative space-y-4 before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-px before:bg-gray-800">
            {educationData.education.map((entry, i) => (
              <motion.div
                key={i}
                className="pl-9 relative"
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {/* Timeline dot */}
                <span className="absolute left-0 top-2 w-[23px] h-[23px] rounded-full border-2 border-accent bg-bgPrimary flex items-center justify-center text-accent">
                  <MdSchool size={11} />
                </span>

                <div className="bg-bgSecondary p-5 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                  {/* Degree + Year + Status badge */}
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                    <h4 className="text-white font-semibold leading-snug">
                      {entry.degree}
                    </h4>
                    <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-0.5 rounded-lg whitespace-nowrap">
                      {entry.year}
                    </span>
                  </div>

                  {/* Institution & field */}
                  <p className="text-textSecondary text-sm mb-2">
                    {entry.institution} &middot; {entry.field}
                  </p>

                  {/* GPA */}
                  {entry.gpa && (
                    <p className="text-textSecondary text-sm">
                      <span className="text-white/70">
                        {entry.scale === "4.00" ? "CGPA" : "GPA"}:
                      </span>{" "}
                      <span className="text-accent font-medium">
                        {entry.gpa}/{entry.scale}
                      </span>
                    </p>
                  )}

                  {/* Relevant courses */}
                  {entry.courses && (
                    <div className="mt-3 pt-3 border-t border-gray-800">
                      <p className="text-xs text-white/50 mb-2 uppercase tracking-wider">
                        Relevant Courses
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {entry.courses.map((course, ci) => (
                          <span
                            key={ci}
                            className="text-xs bg-bgPrimary text-textSecondary px-2 py-0.5 rounded-md border border-gray-800"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Status tag */}
                  {entry.status && (
                    <span className="inline-block text-xs italic text-accent/80 bg-accent/5 border border-accent/20 px-2 py-0.5 mt-2 rounded-md">
                      {entry.status}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Certifications + Achievements */}
        <div className="space-y-12">
          {/* Certifications */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
              Certifications
            </h3>
            <div className="space-y-4">
              {educationData.certifications.map((cert, i) => (
                <div
                  key={i}
                  className="bg-bgSecondary p-5 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <MdVerified size={22} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm leading-snug mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-textSecondary text-xs mb-3">
                        Issued by{" "}
                        <span className="text-accent">{cert.issuer}</span>
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.pdfPath && (
                          <button
                            onClick={() =>
                              openCertModal(cert.pdfPath!, cert.title)
                            }
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors border border-accent/30 hover:border-accent"
                          >
                            <MdPictureAsPdf size={14} />
                            View Certificate
                          </button>
                        )}
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-bgPrimary text-textSecondary hover:text-accent transition-colors border border-gray-800 hover:border-accent"
                        >
                          <MdOpenInNew size={14} />
                          Coursera
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Activities */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-2">
              Achievements &amp; Activities
            </h3>
            <div className="bg-bgSecondary p-5 rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
              <ul className="space-y-4">
                {educationData.activities.map((activity, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-textSecondary text-sm leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate PDF Modal */}
      {activeCert && (
        <PDFViewerModal
          isOpen={certModalOpen}
          onClose={closeCertModal}
          pdfPath={activeCert.pdfPath}
          title={activeCert.title}
          fileName={`${activeCert.title} – Certificate.pdf`}
        />
      )}
    </Section>
  );
};
