import React from 'react'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <>
      <SEO 
        title="اتصل بنا"
        description="تواصل مع حضانة جمعية دير الغصون في طولكرم. نحن هنا للإجابة على استفساراتكم وتسجيل أطفالكم."
        keywords="اتصل بحضانة دير الغصون, تواصل معنا, تسجيل في الحضانة, عنوان الحضانة في طولكرم"
        url="/contact"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">اتصل بنا</h1>
            <p className="text-xl text-gray-600">نحن هنا للإجابة على جميع استفساراتك</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">اتصل بنا</h3>
                      <p className="text-gray-600" dir="ltr">+970 92 294 3415</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">راسلنا</h3>
                      <p className="text-gray-600">info@deiralghosonnursery.ps</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">موقعنا</h3>
                      <p className="text-gray-600">دير الغصون، طولكرم، فلسطين</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">ساعات العمل</h3>
                      <p className="text-gray-600">الأحد - الخميس: 7:00 - 14:00</p>
                      <p className="text-gray-600">السبت: 8:00 - 14:00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <MessageSquare className="h-6 w-6 text-[#25D366]" />
                    <div>
                      <h3 className="font-semibold">واتساب</h3>
                      <a 
                        href="https://wa.me/970922943415"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:underline"
                      >
                        تواصل معنا عبر واتساب
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#25D366] rounded-lg shadow-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">تواصل معنا مباشرة</h2>
                <p className="mb-6">احصل على رد سريع لجميع استفساراتك عبر الواتساب</p>
                <a 
                  href="https://wa.me/970922943415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-[#25D366] px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  ابدأ محادثة
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact