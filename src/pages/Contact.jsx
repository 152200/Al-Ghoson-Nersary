import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

function Contact() {
  return (
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
              <div className="space-y-4">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">اتصل بنا</h3>
                    <p className="text-gray-600">+966 12 345 6789</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">راسلنا</h3>
                    <p className="text-gray-600">info@happynursery.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">موقعنا</h3>
                    <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">ساعات العمل</h3>
                    <p className="text-gray-600">الأحد - الخميس: 7:00 - 17:00</p>
                    <p className="text-gray-600">السبت: 8:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">تابعنا على</h2>
              <div className="flex space-x-4 space-x-reverse">
                <a href="#" className="text-primary hover:text-opacity-80">
                  تويتر
                </a>
                <a href="#" className="text-primary hover:text-opacity-80">
                  فيسبوك
                </a>
                <a href="#" className="text-primary hover:text-opacity-80">
                  انستغرام
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact