import React from 'react';
import { ArrowLeft, ChevronDown, Ruler, Zap, Wind, Sun, Settings, Leaf } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, Variants } from 'framer-motion';

export const Hero: React.FC = () => {
  // Floating animations for background icons
  const floatAnimation: Variants = {
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

  const reverseFloatAnimation: Variants = {
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

  // Staggered text entrance animations with blur effect
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-gray-50">
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

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          className="text-right z-20 order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-right"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pulse-500/10 border border-pulse-500/20 text-pulse-600 text-sm font-bold mb-6"
            >
              <Settings className="w-4 h-4 animate-spin-slow" />
              <span>מומחים בהנדסה אזרחית וקיימות</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 w-full">
              <span className="block overflow-hidden">
                <motion.span variants={itemVariants} className="block">
                  משלבים קיימות,
                </motion.span>
              </span>
              <span className="block overflow-hidden pt-2">
                <motion.span 
                  variants={itemVariants}
                  className="block text-transparent bg-clip-text bg-gradient-to-l from-pulse-600 to-blue-600 pb-2"
                >
                  הנדסה וחדשנות
                </motion.span>
              </span>
            </h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl lg:max-w-none lg:pl-12 lg:border-r-4 lg:border-pulse-500 lg:pr-6"
          >
            אנחנו מבלים כ־90% מחיינו בתוך מבנים. לתכנון נכון יש חשיבות עצומה על איכות חיינו. ב-PULSE אנחנו יוצרים מבנים שמשלבים הנדסה מתקדמת עם אחריות סביבתית.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center lg:justify-start w-full"
          >
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pulse-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                <Button size="lg" href="#about" className="relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: '100%' }}
                      animate={{ x: '-100%' }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 1 }}
                    />
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    מי אנחנו
                </Button>
            </div>

            <Button variant="outline" size="lg" href="#solutions" className="bg-white/50 backdrop-blur-sm hover:bg-white border-pulse-200 text-gray-700 hover:text-pulse-600">
              תחומי התמחות
            </Button>
          </motion.div>
        </motion.div>

        {/* Images Composition */}
        <div className="relative h-[380px] md:h-[500px] lg:h-[600px] block order-2 lg:order-2 perspective-1000 mt-8 lg:mt-0 w-full">
           
           {/* Floating Icons Background */}
           <motion.div variants={floatAnimation} animate="animate" className="absolute top-0 right-0 lg:top-10 lg:right-10 z-30 transform scale-75 lg:scale-100">
              <div className="bg-white/90 backdrop-blur p-3 lg:p-4 rounded-2xl border border-gray-100 shadow-xl text-yellow-500">
                <Sun className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
           </motion.div>
           
           <motion.div variants={reverseFloatAnimation} animate="animate" className="absolute bottom-10 right-4 lg:bottom-20 lg:right-20 z-30 transform scale-75 lg:scale-100">
              <div className="bg-white/90 backdrop-blur p-3 lg:p-4 rounded-2xl border border-gray-100 shadow-xl text-blue-500">
                <Wind className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
           </motion.div>

           <motion.div 
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 left-[-10px] lg:left-0 z-30 transform scale-75 lg:scale-100"
           >
              <div className="bg-white/90 backdrop-blur p-3 lg:p-4 rounded-2xl border border-gray-100 shadow-xl text-pulse-500">
                <Leaf className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
           </motion.div>

           {/* Main Images with Loop Animation */}
           <motion.div 
             initial={{ opacity: 0, rotateY: 30, x: 50 }}
             animate={{ opacity: 1, rotateY: 0, x: 0 }}
             transition={{ duration: 1 }}
             className="absolute top-0 right-4 lg:right-8 w-[75%] lg:w-[65%] h-[80%] lg:h-[85%] rounded-3xl overflow-hidden shadow-2xl border border-white z-10 bg-gray-200"
           >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
              <motion.img 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=70&w=800&auto=format&fit=crop" 
                alt="Engineering Construction" 
                className="w-full h-full object-cover"
                loading="eager"
              />
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: -30, y: 30 }}
             animate={{ opacity: 1, x: 0, y: 0 }}
             transition={{ duration: 1, delay: 0.4 }}
             className="absolute bottom-4 lg:bottom-8 left-0 w-[65%] lg:w-[55%] h-[45%] lg:h-[50%] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white z-20 bg-gray-100"
           >
              <motion.img 
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=70&w=800&auto=format&fit=crop" 
                alt="Engineers at work" 
                className="w-full h-full object-cover"
                loading="eager"
              />
           </motion.div>

           {/* Floating Badge - Energy Efficiency */}
           <motion.div
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 1.2, type: "spring" }}
             className="absolute top-[10%] left-0 lg:top-[20%] lg:left-[10%] bg-white/95 backdrop-blur-md p-2 lg:p-4 rounded-2xl border border-gray-100 shadow-xl z-40 transform scale-90 lg:scale-100 origin-left"
           >
             <div className="flex items-center gap-2 lg:gap-3">
               <div className="bg-pulse-50 p-2 rounded-xl">
                 <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-pulse-600" />
               </div>
               <div>
                 <div className="text-lg lg:text-xl font-bold text-gray-900 font-mono">Net Zero</div>
                 <div className="text-[10px] lg:text-xs text-gray-500">התייעלות אנרגטית</div>
               </div>
             </div>
           </motion.div>

           {/* Floating Badge - Precision */}
           <motion.div
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 1.5, type: "spring" }}
             className="absolute bottom-[30%] right-0 lg:bottom-[40%] lg:right-[-20px] bg-white/95 backdrop-blur-md p-2 lg:p-4 rounded-2xl border border-gray-100 shadow-xl z-40 transform scale-90 lg:scale-100 origin-right"
           >
             <div className="flex items-center gap-2 lg:gap-3">
               <div className="bg-blue-50 p-2 rounded-xl">
                 <Ruler className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
               </div>
               <div>
                 <div className="text-lg lg:text-xl font-bold text-gray-900 font-mono">100%</div>
                 <div className="text-[10px] lg:text-xs text-gray-500">דיוק הנדסי</div>
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 z-20 cursor-pointer hover:text-pulse-500 transition-colors hidden md:block"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};