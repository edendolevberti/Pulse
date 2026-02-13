import React from 'react';
import { Leaf, Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-pulse-600 fill-pulse-600" />
              <span className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>PULSE</span>
            </a>
            <p className="text-gray-600 text-sm leading-relaxed">
              משלבים קיימות, הנדסה וחדשנות ליצירת סביבת חיים טובה יותר.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">שירותים</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-pulse-600 transition-colors">בנייה ירוקה</a></li>
              <li><a href="#" className="hover:text-pulse-600 transition-colors">התייעלות אנרגטית</a></li>
              <li><a href="#" className="hover:text-pulse-600 transition-colors">ייעוץ סביבתי</a></li>
              <li><a href="#" className="hover:text-pulse-600 transition-colors">תכנון עירוני</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">חברה</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-pulse-600 transition-colors">אודות</a></li>
              <li><a href="#" className="hover:text-pulse-600 transition-colors">פרויקטים</a></li>
              <li><a href="#" className="hover:text-pulse-600 transition-colors">חדשות</a></li>
              <li><a href="#" className="hover:text-pulse-600 transition-colors">צור קשר</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">עקבו אחרינו</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-pulse-500 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-pulse-500 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-pulse-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} PULSE. כל הזכויות שמורות.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">מדיניות פרטיות</a>
            <a href="#" className="hover:text-gray-700">תנאי שימוש</a>
          </div>
        </div>
      </div>
    </footer>
  );
};