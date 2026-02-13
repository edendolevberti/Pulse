import React from 'react';
import { Recycle, Sun, Wind, Layout } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Solutions: React.FC = () => {
  const services = [
    {
      icon: Recycle,
      title: "בנייה ירוקה וקיימות",
      description: "ליווי פרויקטים להסמכה לתקני בנייה ירוקה (ת'י 5281, LEED). ניתוח מחזור חיים של מבנים, בחירת חומרים ידידותיים לסביבה ומזעור טביעת הרגל הפחמנית.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=60&w=600&auto=format&fit=crop"
    },
    {
      icon: Sun,
      title: "התייעלות אנרגטית",
      description: "תכנון מערכות אנרגיה חכמות וניתוח תרמי מתקדם. אנו משתמשים בסימולציות ממוחשבות כדי למקסם את אור השמש הטבעי ולמזער את צריכת החשמל לקירור וחימום.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=60&w=600&auto=format&fit=crop"
    },
    {
      icon: Wind,
      title: "פיזיקה של המבנה",
      description: "ייעוץ אקלימי, ניתוחי הצללות, זרימת אוויר ונוחות תרמית. יצירת סביבת מחיה ועבודה בריאה יותר באמצעות תכנון פסיבי חכם.",
      image: "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?q=60&w=600&auto=format&fit=crop"
    },
    {
      icon: Layout,
      title: "תכנון עירוני וסביבתי",
      description: "פתרונות הנדסיים לתשתיות עירוניות, ניהול משאבי מים ונגר עילי, ותכנון מרחבים ציבוריים המקדמים קיימות ואיכות חיים.",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=60&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <Section id="solutions" className="bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            תחומי <span className="text-pulse-600">ההתמחות שלנו</span>
          </h2>
          <p className="text-gray-600 text-xl">
            גישה הוליסטית המשלבת תכנון אדריכלי, הנדסה מתקדמת וטכנולוגיה ליצירת מבנים טובים יותר.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 hover:border-pulse-500/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  loading="lazy"
                  width="600"
                  height="400"
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-all duration-700 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
              </div>

              <div className="relative z-10 p-8 h-full flex flex-col items-start text-right">
                <div className="bg-white p-3 rounded-2xl mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-pulse-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>

                <Button variant="outline" className="mt-auto group-hover:bg-pulse-500 group-hover:text-white group-hover:border-pulse-500">
                  קרא עוד
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};