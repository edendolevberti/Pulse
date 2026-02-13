import React from 'react';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gradient-to-t from-gray-100 to-gray-50">
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

        <form className="bg-white p-8 rounded-3xl border border-gray-200 shadow-2xl">
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