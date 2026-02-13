import React from 'react';
import { Section } from './ui/Section';
import { Ruler, ClipboardCheck, Zap, Thermometer, Wind, Sun, FileCheck, BookOpen, HardHat } from 'lucide-react';

export const Services: React.FC = () => {
  const servicesList = [
    { 
      title: "אישורי קונסטרוקציה", 
      icon: Ruler, 
      description: "בדיקה ואישור של תוכניות קונסטרוקציה להבטחת יציבות, בטיחות ועמידות המבנה לאורך זמן, תוך עמידה בתקנים המחמירים ביותר." 
    },
    { 
      title: "פיקוח וניהול פרויקט", 
      icon: HardHat, 
      description: "ליווי צמוד באתר הבנייה, פיקוח על איכות הביצוע, ניהול לוחות זמנים ובקרת תקציב קפדנית להבטחת הצלחת הפרויקט." 
    },
    { 
      title: "ייעוץ תרמי ואנרגטי", 
      icon: Thermometer, 
      description: "אופטימיזציה של מעטפת המבנה וחיסכון באנרגיה באמצעות תכנון פסיבי חכם וניתוח מעמיק של ביצועי המבנה." 
    },
    { 
      title: "סימולציות מיקרו-אקלים", 
      icon: Zap, 
      description: "שימוש במודלים ממוחשבים מתקדמים לניתוח תנאי הסביבה, זרימת אוויר ונוחות תרמית במרחב הציבורי והפרטי." 
    },
    { 
      title: "ניתוח הצללות ורוח", 
      icon: Wind, 
      description: "בחינת משטר הרוחות וההצללות לתכנון פתחים יעיל, מניעת מנהרות רוח ויצירת אזורים מוצלים ונעימים לשהייה." 
    },
    { 
      title: "בדיקות סנוור", 
      icon: Sun, 
      description: "זיהוי מוקדם ומניעה של מטרדי סנוור מחזיתות זכוכית למבנים סמוכים ולמשתמשי הדרך, בהתאם לדרישות התכנון." 
    },
    { 
      title: "תקינה ישראלית ובינלאומית", 
      icon: FileCheck, 
      description: "הכנת דוחות והגשות לקבלת תווי תקן לבנייה ירוקה (ת'י 5281, LEED, BREEAM) וליווי תהליך ההסמכה מול הרשויות." 
    },
    { 
      title: "ייעוץ חומרים והדרכות", 
      icon: BookOpen, 
      description: "מתן חוות דעת מקצועיות על חומרים ושיטות בנייה חדשניות, וביצוע הרצאות והדרכות לצוותי תכנון וביצוע." 
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
                  className="group bg-white border border-gray-200 p-8 rounded-3xl hover:border-pulse-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
                >
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pulse-500 group-hover:text-white transition-all duration-300 text-pulse-600 shadow-sm border border-gray-100">
                        <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pulse-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};