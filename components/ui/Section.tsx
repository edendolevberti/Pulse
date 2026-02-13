import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "", noPadding = false }) => {
  return (
    <section 
      id={id} 
      className={`relative overflow-hidden ${noPadding ? '' : 'py-20 md:py-32'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};