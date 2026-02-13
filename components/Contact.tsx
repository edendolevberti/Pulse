import React, { useRef } from 'react';
import { Mail, Phone, MapPin, Leaf } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to the container
  // Offset ensures animation completes fully when section is in view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center 60%"]
  });

  // Transform definitions
  // P: Comes from far left
  const pX = useTransform(scrollYProgress, [0, 1], ["-50vw", "0vw"]);
  const pOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]); 
  
  // U: Comes from left
  const uX = useTransform(scrollYProgress, [0, 1], ["-25vw", "0vw"]);
  const uOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  // L: Comes from top
  const lY = useTransform(scrollYProgress, [0, 1], ["-100px", "0px"]);
  const lOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  // S: Comes from right
  const sX = useTransform(scrollYProgress, [0, 1], ["25vw", "0vw"]);
  const sOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  // E: Comes from far right
  const eX = useTransform(scrollYProgress, [0, 1], ["50vw", "0vw"]);
  const eOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  // Subtitle animation
  const subY = useTransform(scrollYProgress, [0.8, 1], [30, 0]);
  const subOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  return (
    <Section id="contact" className="bg-gradient-to-t from-gray-100 to-gray-50 overflow-hidden">
      
      {/* Custom Styles for Construction Image Text */}
      <style>{`
        .construction-text {
          /* Construction image - Cranes and sunset/structure for high contrast */
          background-image: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed; /* Creates the continuous effect across the viewport */
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(0,0,0,0.9); /* Dark stroke to define letters */
          filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2));
        }
        
        /* Mobile adjustment */
        @media (max-width: 768px) {
          .construction-text {
            -webkit-text-stroke: 1px rgba(0,0,0,0.9);
            background-attachment: scroll; /* Fallback for mobile */
            background-size: 150% auto;
          }
        }
      `}</style>

      {/* Scroll Animated Logo Header - Background removed */}
      <div 
        ref={containerRef}
        className="flex flex-col items-center justify-center mb-16 md:mb-24 py-16 relative min-h-[180px] w-full"
      >
        <div dir="ltr" className="flex items-center justify-center gap-0.5 md:gap-2 relative z-10 w-full overflow-visible">
            <motion.span style={{ x: pX, opacity: pOpacity }} className="construction-text text-8xl md:text-[10rem] lg:text-[13rem] font-black tracking-tighter cursor-default select-none leading-none">P</motion.span>
            <motion.span style={{ x: uX, opacity: uOpacity }} className="construction-text text-8xl md:text-[10rem] lg:text-[13rem] font-black tracking-tighter cursor-default select-none leading-none">U</motion.span>
            <motion.span style={{ y: lY, opacity: lOpacity }} className="construction-text text-8xl md:text-[10rem] lg:text-[13rem] font-black tracking-tighter cursor-default select-none leading-none">L</motion.span>
            <motion.span style={{ x: sX, opacity: sOpacity }} className="construction-text text-8xl md:text-[10rem] lg:text-[13rem] font-black tracking-tighter cursor-default select-none leading-none">S</motion.span>
            <motion.span style={{ x: eX, opacity: eOpacity }} className="construction-text text-8xl md:text-[10rem] lg:text-[13rem] font-black tracking-tighter cursor-default select-none leading-none">E</motion.span>
        </div>
        
        <motion.div
            style={{ opacity: subOpacity, y: subY }}
            className="flex items-center gap-2 mt-4 md:mt-8 text-pulse-600 font-bold tracking-widest uppercase text-xs md:text-base bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full border border-pulse-100 shadow-sm z-20"
        >
             <Leaf className="w-4 h-4 md:w-5 md:h-5" />
             <span>Sustainability & Engineering</span>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">בואו נבנה <br/> את העתיד ביחד</h2>
          <p className="text-gray-600 text-lg mb-10">
            מתכננים פרויקט חדש? מעוניינים בייעוץ הנדסי או סביבתי?
            צוות המומחים שלנו ישמח לעמוד לרשותכם.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <Mail className="w-6 h-6 text-pulse-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">אימייל</h4>
                <a href="mailto:info@pulse-eng.co.il" className="text-gray-600 hover:text-pulse-600 transition-colors">info@pulse-eng.co.il</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
               <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <Phone className="w-6 h-6 text-pulse-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">טלפון</h4>
                <a href="tel:*5555" className="text-gray-600 hover:text-pulse-600 transition-colors">*5555</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <MapPin className="w-6 h-6 text-pulse-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold">משרדים</h4>
                <p className="text-gray-600">תל אביב, ישראל</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-white p-8 rounded-3xl border border-gray-200 shadow-2xl relative z-10">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-pulse-100 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">שם מלא</label>
              <input type="text" id="name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-pulse-500 focus:ring-1 focus:ring-pulse-500 transition-all text-right" placeholder="ישראל ישראלי" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">אימייל</label>
              <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-pulse-500 focus:ring-1 focus:ring-pulse-500 transition-all text-right" placeholder="israel@company.com" dir="ltr" />
            </div>
          </div>
          
          <div className="space-y-2 mb-6">
             <label htmlFor="type" className="text-sm font-medium text-gray-700">סוג הפרויקט</label>
             <select id="type" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-pulse-500 focus:ring-1 focus:ring-pulse-500 transition-all appearance-none text-right">
               <option>תכנון מבנה חדש</option>
               <option>ייעוץ בנייה ירוקה</option>
               <option>התייעלות אנרגטית</option>
               <option>תשתיות</option>
               <option>אחר</option>
             </select>
          </div>

          <div className="space-y-2 mb-8">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">פרטים נוספים</label>
            <textarea id="message" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-pulse-500 focus:ring-1 focus:ring-pulse-500 transition-all text-right" placeholder="ספר לנו על הפרויקט שלך..."></textarea>
          </div>

          <Button type="button" className="w-full">שלח הודעה</Button>
        </form>
      </div>
    </Section>
  );
};