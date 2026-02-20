import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center md:text-left"
        >
          {title && (
            <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
              {title}
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
            </h2>
          )}
          {subtitle && <p className="text-textSecondary text-lg md:text-xl max-w-2xl">{subtitle}</p>}
        </motion.div>
      )}
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          },
          hidden: {}
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};