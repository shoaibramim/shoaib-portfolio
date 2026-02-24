import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On direct URL load (e.g. /about), scroll to the matching section
  useEffect(() => {
    const sectionId = window.location.pathname.replace(/^\//, "");
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const top =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const top =
          element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
        history.pushState(null, "", `/${sectionId}`);
      }
    }, 100);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.pushState(null, "", "/");
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Reviews", id: "reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bgPrimary/90 backdrop-blur-md border-b border-bgSecondary py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 flex justify-between items-center">
        <a
          href="/"
          onClick={scrollToTop}
          className="text-2xl font-bold tracking-tighter text-textPrimary flex items-center gap-2"
        >
          <img
            src="/Portfolio_Icon_W.svg"
            alt="Shoaib Uddin logo"
            className="w-8 h-8"
          />
          Shoaib.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`/${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-textSecondary hover:text-accent transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="px-5 py-2 rounded-full border border-bgSecondary hover:border-accent text-sm font-medium transition-all"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-textPrimary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bgSecondary border-b border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`/${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-textSecondary hover:text-accent text-base font-medium py-2 border-b border-gray-800"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="mt-2 px-5 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-white text-sm font-medium text-center transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
