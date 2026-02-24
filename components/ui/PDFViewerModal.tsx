import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Path or URL to the PDF file */
  pdfPath: string;
  /** Suggested filename when downloading */
  fileName?: string;
  /** Label shown in the modal header */
  title?: string;
}

export const PDFViewerModal: React.FC<PDFViewerModalProps> = ({
  isOpen,
  onClose,
  pdfPath,
  fileName = "document.pdf",
  title = "PDF Viewer",
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="pdf-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[49] bg-bgPrimary/85 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal container */}
          <motion.div
            key="pdf-modal-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-20 left-0 right-0 bottom-0 z-[51] flex items-start justify-center p-4 lg:p-6 pointer-events-none"
          >
            {/* Modal Panel */}
            <motion.div
              key="pdf-modal-panel"
              initial={{ opacity: 0, scale: 0.93, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl h-full max-h-[calc(100vh-6rem)] flex flex-col bg-bgSecondary rounded-2xl border border-bgPrimary shadow-2xl shadow-bgPrimary/60 pointer-events-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-bgPrimary flex-shrink-0">
                <span className="text-textPrimary font-semibold text-sm tracking-wide">
                  {title}
                </span>
                <div className="flex items-center gap-2">
                  {/* Download button */}
                  <a
                    href={pdfPath}
                    download={fileName}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-accent text-white hover:bg-accent/80 transition-colors shadow-[0_0_10px_rgba(128,0,0,0.25)]"
                  >
                    <MdFileDownload size={15} />
                    Download
                  </a>
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full bg-bgPrimary/80 hover:bg-accent/20 text-textSecondary hover:text-accent transition-all duration-200 border border-bgPrimary hover:border-accent"
                    aria-label="Close PDF viewer"
                  >
                    <FaTimes size={14} />
                  </button>
                </div>
              </div>

              {/* PDF iframe — uses the browser's native PDF viewer */}
              <div className="flex-1 min-h-0">
                <iframe
                  src={`${pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
                  title={title}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
