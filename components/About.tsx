import React from 'react';
import { Section } from './ui/Section';
import { Leaf, Ruler, Lightbulb, Users } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: Leaf, value: "ירוק", label: "תקני בנייה מחמירים" },
    { icon: Ruler, value: "מדויק", label: "תכנון הנדסי מתקדם" },
    { icon: Lightbulb, value: "חכם", label: "חדשנות טכנולוגית" },
    { icon: Users, value: "אנושי", label: "תכנון מוכוון דייר" },
  ];

  return (
    <Section id="about" className="bg-white">
       <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
         <div className="relative">
            <div className="absolute inset-0 bg-pulse-200/50 blur-[80px] rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop" 
              alt="Team Planning" 
              className="relative z-10 rounded-3xl shadow-2xl border border-white"
            />
            {/* Overlay Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-gray-900 mb-1">PULSE</div>
                <div className="text-sm text-pulse-600">Engineering & Sustainability</div>
            </div>
         </div>
         
         <div className="text-right">
           <div className="inline-block px-4 py-2 bg-pulse-50 rounded-full text-pulse-700 font-semibold text-sm mb-6 border border-pulse-100">
             החזון שלנו
           </div>
           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
             מובילים שינוי <br/>
             <span className="text-gray-500">בענף הבנייה</span>
           </h2>
           <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
             <p className="font-medium text-gray-900 text-xl">
               PULSE היא חברה מובילה בתחומי הקיימות וההנדסה, המתמחה בפיתוח פתרונות חכמים וברי קיימא למבנים ותשתיות.
             </p>
             <p>
               אנו מחברים בין ידע הנדסי מתקדם לחשיבה חדשנית, במטרה ליצור שינוי משמעותי בענף.
               אנו מאמינים כי תכנון נכון הוא המפתח לאיכות חיים, חיסכון כלכלי ושמירה על הסביבה עבור הדורות הבאים.
             </p>
           </div>

           <div className="grid grid-cols-2 gap-6 mt-10">
             {stats.map((stat, i) => (
               <div key={i} className="flex items-center gap-4">
                 <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <stat.icon className="w-5 h-5 text-pulse-600" />
                 </div>
                 <div>
                   <div className="font-bold text-gray-900">{stat.value}</div>
                   <div className="text-xs text-gray-500">{stat.label}</div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
    </Section>
  );
};