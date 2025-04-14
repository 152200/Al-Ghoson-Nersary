import React from 'react'
import { Phone, Mail, MapPin, TreePine } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <TreePine className="h-8 w-8" />
              <span className="text-xl font-bold">روضة الأطفال السعيدة</span>
            </div>
            <p className="text-sm">نحن نؤمن بأن كل طفل يستحق أفضل بداية في رحلة التعلم</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Phone className="h-5 w-5" />
                <span>+966 12 345 6789</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Mail className="h-5 w-5" />
                <span>info@happynursery.com</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <MapPin className="h-5 w-5" />
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">ساعات العمل</h3>
            <ul className="space-y-2">
              <li>الأحد - الخميس: 7:00 - 17:00</li>
              <li>الجمعة: مغلق</li>
              <li>السبت: 8:00 - 14:00</li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">النشرة البريدية</h3>
            <p className="mb-4">اشترك للحصول على آخر الأخبار والتحديثات</p>
            <div className="flex">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="px-4 py-2 rounded-r-lg w-full text-gray-800"
              />
              <button className="bg-accent text-gray-800 px-6 py-2 rounded-l-lg hover:bg-opacity-90">
                اشتراك
              </button>
            </div>
          </div> */}
        </div>
      </div>
      
      <div className="bg-[#4ca02f] py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 روضة الأطفال السعيدة. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer