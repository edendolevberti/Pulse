import React from 'react';
import { Cpu, BarChart2, Globe, Box } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const AppShowcase: React.FC = () => {
  return (
    <Section id="technology" className="bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Content (Right) */}
          <div className="order-2 lg:order-1 text-right relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              טכנולוגיה <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-pulse-600">
                בשירות התכנון
              </span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              ב-PULSE, אנחנו לא מסתמכים רק על אינטואיציה. אנו משתמשים בכלים טכנולוגיים מתקדמים, סימולציות ממוחשבות ומידול מידע (BIM) כדי לחזות ביצועים אנרגטיים ולייעל את התכנון עוד לפני הנחת הבלוק הראשון.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-pulse-50 p-3 rounded-xl mt-1 border border-pulse-100">
                  <Box className="w-6 h-6 text-pulse-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 text-xl font-bold mb-2">מידול מידע (BIM)</h4>
                  <p className="text-gray-600">תכנון אינטגרטיבי תלת-ממדי המאפשר סנכרון מושלם בין כל מערכות המבנה ומניעת התנגשויות.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl mt-1 border border-blue-100">
                  <BarChart2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-gray-900 text-xl font-bold mb-2">אנליזות אקלימיות</h4>
                  <p className="text-gray-600">סימולציות ממוחשבות של קרינת שמש, הצללה ורוח להתאמה אופטימלית של המבנה לסביבתו.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button>גלה עוד על הטכנולוגיה</Button>
            </div>
          </div>

          {/* Visual (Left) - Simulation/Blueprint visual */}
          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="absolute inset-0 bg-blue-100 blur-[100px] rounded-full opacity-50"></div>
            
            {/* Abstract Tech Composition */}
            <div className="relative z-10 w-full max-w-xl">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white border border-gray-200 rounded-2xl p-2 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-grid-black/[0.05] bg-[length:20px_20px]"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=60&w=600&auto=format&fit=crop" 
                    alt="BIM Modeling" 
                    width="600"
                    height="400"
                    loading="lazy"
                    className="rounded-xl w-full h-auto opacity-90"
                  />
                  
                  {/* Overlay Data Points */}
                  <div className="absolute top-10 right-10 bg-white/90 backdrop-blur border border-pulse-100 p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <Cpu className="w-4 h-4 text-pulse-600" />
                        <span className="text-xs font-mono text-gray-900">ENERGY_EFFICIENCY</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 font-mono">A++</div>
                  </div>

                  <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur border border-blue-100 p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-blue-600" />
                        <span className="text-xs font-mono text-gray-900">CO2_REDUCTION</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 font-mono">-40%</div>
                  </div>
                </motion.div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};