import React from 'react';
import { Section } from './ui/Section';
import { Ruler, ClipboardCheck, Zap, Thermometer, Wind, Sun, FileCheck, BookOpen, HardHat } from 'lucide-react';

export const Services: React.FC = () => {
  const servicesList = [
    { 
      title: "אישורי קונסטרוקציה", 
      icon: Ruler, 
      description: "בדיקה ואישור של תוכניות קונסטרוקציה להבטחת יציבות, בטיחות ועמידות המבנה לאורך זמן.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=60&w=600&auto=format&fit=crop"
    },
    { 
      title: "פיקוח וניהול פרויקט", 
      icon: HardHat, 
      description: "ליווי צמוד באתר הבנייה, פיקוח על איכות הביצוע, ניהול לוחות זמנים ובקרת תקציב קפדנית.", 
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=60&w=600&auto=format&fit=crop"
    },
    { 
      title: "ייעוץ תרמי ואנרגטי", 
      icon: Thermometer, 
      description: "אופטימיזציה של מעטפת המבנה וחיסכון באנרגיה באמצעות תכנון פסיבי חכם וניתוח מעמיק.", 
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=60&w=600&auto=format&fit=crop"
    },
    { 
      title: "סימולציות מיקרו-אקלים", 
      icon: Zap, 
      description: "שימוש במודלים ממוחשבים מתקדמים לניתוח תנאי הסביבה, זרימת אוויר ונוחות תרמית.", 
      image: "https://images.unsplash.com/photo-1534081333815-ae5019106622?q=60&w=600&auto=format&fit=crop"
    },
    { 
      title: "ניתוח הצללות ורוח", 
      icon: Wind, 
      description: "בחינת משטר הרוחות וההצללות לתכנון פתחים יעיל, מניעת מנהרות רוח ויצירת אזורים מוצלים.", 
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=60&w=600&auto=format&fit=crop"
    },
    { 
      title: "בדיקות סנוור", 
      icon: Sun, 
      description: "זיהוי מוקדם ומניעה של מטרדי סנוור מחזיתות זכוכית למבנים סמוכים ולמשתמשי הדרך.", 
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=60&w=600&auto=format&fit=crop"
    },
    { 
      title: "תקינה ישראלית ובינלאומית", 
      icon: FileCheck, 
      description: "הכנת דוחות והגשות לקבלת תווי תקן לבנייה ירוקה (ת'י 5281, LEED, BREEAM).", 
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=60&w=600&auto=format&fit=crop"
    },
    { 
      title: "ייעוץ חומרים והדרכות", 
      icon: BookOpen, 
      description: "מתן חוות דעת מקצועיות על חומרים ושיטות בנייה חדשניות, והדרכות לצוותים.", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=60&w=600&auto=format&fit=crop"
    },
  ];

  return (
    <Section id="services" className="bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pulse-200/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-pulse-100 rounded-full text-pulse-700 font-semibold text-sm mb-6 border border-pulse-200">
            השירותים שלנו
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            מגוון שירותים <span className="text-transparent bg-clip-text bg-gradient-to-l from-pulse-600 to-blue-600">תחת קורת גג אחת</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
             אנו מציעים מגוון רחב של שירותים מקצועיים בתחומי הייעוץ של הנדסה וקיימות, המלווים את הפרויקט משלב התכנון הראשוני ועד המסירה.
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
             כל שירות מותאם אישית לצורכי הלקוח, במטרה למקסם את היעילות האנרגטית, הביצועים הסביבתיים והאיכות הכוללת של הסביבה הבנויה.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, idx) => (
                <div 
                  key={idx} 
                  className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 hover:border-pulse-500/50 hover:shadow-xl transition-all duration-500 flex flex-col h-full"
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 bg-gray-100">
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            loading="lazy"
                            width="600"
                            height="400"
                            className="w-full h-full object-cover opacity-10 group-hover:opacity-25 transition-all duration-700 transform group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/40"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col items-start text-right">
                        <div className="w-14 h-14 bg-white/80 backdrop-blur rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pulse-500 group-hover:text-white transition-all duration-300 text-pulse-600 shadow-sm border border-gray-100 group-hover:scale-110 group-hover:rotate-3">
                            <service.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pulse-600 transition-colors">{service.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow font-medium">{service.description}</p>
                        
                        {/* Decorative bottom line */}
                        <div className="mt-6 w-12 h-1 bg-pulse-100 rounded-full group-hover:w-full group-hover:bg-pulse-500 transition-all duration-500"></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};