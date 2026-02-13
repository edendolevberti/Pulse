import React from 'react';
import { ArrowLeft, ChevronDown, Ruler, Zap, Wind, Sun, Settings, Leaf } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const reverseFloatAnimation = {
    animate: {
      y: [0, 15, 0],
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden bg-gray-50">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-pulse-500/10 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content (Visually Right in RTL) */}
        <div className="text-right z-20 order-1 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pulse-500/10 border border-pulse-500/20 text-pulse-600 text-sm font-bold mb-6"
            >
              <Settings className="w-4 h-4 animate-spin-slow" />
              <span>מומחים בהנדסה אזרחית וקיימות</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "circOut", delay: 0.3 }}
                  className="block"
                >
                  משלבים קיימות,
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: "circOut", delay: 0.5 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-l from-pulse-600 to-blue-600"
                >
                  הנדסה וחדשנות
                </motion.span>
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed pl-4 md:pl-12 border-r-4 border-pulse-500 pr-6"
          >
            אנחנו מבלים כ־90% מחיינו בתוך מבנים – בבית, בעבודה, בלימודים ואפילו בחופשות. 
            לתכנון נכון של מבנים יש חשיבות עצומה, שכן הם עתידים לשרת אותנו עשרות ואף מאות שנים קדימה. 
            החלטות התכנון שמתקבלות היום משפיעות לא רק על איכות חיי הדיירים, אלא גם על ההיבטים הסביבתיים והכלכליים.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" href="#about" className="group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              מי אנחנו
            </Button>
            <Button variant="outline" size="lg" href="#solutions">
              תחומי התמחות
            </Button>
          </motion.div>
        </div>

        {/* Images Composition (Visually Left in RTL) */}
        <div className="relative h-[400px] lg:h-[600px] block order-2 lg:order-2 perspective-1000 mt-12 lg:mt-0">
           
           {/* Floating Icons Background */}
           <motion.div variants={floatAnimation} animate="animate" className="absolute top-0 right-4 lg:top-10 lg:right-10 z-30 transform scale-75 lg:scale-100">
              <div className="bg-white/90 backdrop-blur p-4 rounded-2xl border border-gray-100 shadow-xl text-yellow-500">
                <Sun className="w-8 h-8" />
              </div>
           </motion.div>
           
           <motion.div variants={reverseFloatAnimation} animate="animate" className="absolute bottom-10 right-10 lg:bottom-20 lg:right-20 z-30 transform scale-75 lg:scale-100">
              <div className="bg-white/90 backdrop-blur p-4 rounded-2xl border border-gray-100 shadow-xl text-blue-500">
                <Wind className="w-8 h-8" />
              </div>
           </motion.div>

           <motion.div 
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 left-[-10px] lg:left-0 z-30 transform scale-75 lg:scale-100"
           >
              <div className="bg-white/90 backdrop-blur p-4 rounded-2xl border border-gray-100 shadow-xl text-pulse-500">
                <Leaf className="w-8 h-8" />
              </div>
           </motion.div>

           {/* Main Images with Loop Animation */}
           <motion.div 
             initial={{ opacity: 0, rotateY: 30, x: 100 }}
             animate={{ opacity: 1, rotateY: 0, x: 0 }}
             transition={{ duration: 1 }}
             className="absolute top-0 right-4 lg:right-8 w-[75%] lg:w-[65%] h-[85%] rounded-3xl overflow-hidden shadow-2xl border border-white z-10"
           >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
              <motion.img 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                alt="Engineering Construction" 
                className="w-full h-full object-cover"
              />
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: -50, y: 50 }}
             animate={{ opacity: 1, x: 0, y: 0 }}
             transition={{ duration: 1, delay: 0.4 }}
             className="absolute bottom-4 lg:bottom-8 left-0 w-[65%] lg:w-[55%] h-[50%] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white z-20 bg-gray-100"
           >
              <motion.img 
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                alt="Engineers at work" 
                className="w-full h-full object-cover"
              />
           </motion.div>

           {/* Floating Badge - Energy Efficiency */}
           <motion.div
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 1.2, type: "spring" }}
             className="absolute top-[15%] left-0 lg:top-[20%] lg:left-[10%] bg-white/95 backdrop-blur-md p-3 lg:p-4 rounded-2xl border border-gray-100 shadow-xl z-40 transform scale-90 lg:scale-100 origin-left"
           >
             <div className="flex items-center gap-3">
               <div className="bg-pulse-50 p-2 rounded-xl">
                 <Zap className="w-6 h-6 text-pulse-600" />
               </div>
               <div>
                 <div className="text-xl font-bold text-gray-900 font-mono">Net Zero</div>
                 <div className="text-xs text-gray-500">התייעלות אנרגטית</div>
               </div>
             </div>
           </motion.div>

           {/* Floating Badge - Precision */}
           <motion.div
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 1.5, type: "spring" }}
             className="absolute bottom-[35%] right-0 lg:bottom-[40%] lg:right-[-20px] bg-white/95 backdrop-blur-md p-3 lg:p-4 rounded-2xl border border-gray-100 shadow-xl z-40 transform scale-90 lg:scale-100 origin-right"
           >
             <div className="flex items-center gap-3">
               <div className="bg-blue-50 p-2 rounded-xl">
                 <Ruler className="w-6 h-6 text-blue-600" />
               </div>
               <div>
                 <div className="text-xl font-bold text-gray-900 font-mono">100%</div>
                 <div className="text-xs text-gray-500">דיוק הנדסי</div>
               </div>
             </div>
           </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 text-gray-400 z-20 cursor-pointer hover:text-pulse-500 transition-colors hidden md:block"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};