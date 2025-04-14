import React from 'react'
import { Heart, Star, Users, Calendar } from 'lucide-react'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">أهلاً بكم في روضة الأطفال السعيدة</h1>
              <p className="text-xl mb-8">نوفر بيئة تعليمية آمنة ومحفزة لنمو طفلك</p>
              <button className="btn-primary text-lg">اكتشف برامجنا</button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">رعاية محبة</h3>
              <p className="text-gray-600">نقدم رعاية شخصية لكل طفل</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">تعليم متميز</h3>
              <p className="text-gray-600">مناهج تعليمية متطورة</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">معلمون مؤهلون</h3>
              <p className="text-gray-600">فريق تعليمي ذو خبرة</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-danger mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">أنشطة متنوعة</h3>
              <p className="text-gray-600">برامج ترفيهية وتعليمية</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Preview */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">برامجنا التعليمية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80" 
                alt="برنامج الحضانة"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">برنامج الحضانة</h3>
                <p className="text-gray-600 mb-4">للأطفال من عمر 2-3 سنوات</p>
                <button className="btn-secondary w-full">المزيد من التفاصيل</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80" 
                alt="برنامج الروضة"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">برنامج الروضة</h3>
                <p className="text-gray-600 mb-4">للأطفال من عمر 3-4 سنوات</p>
                <button className="btn-secondary w-full">المزيد من التفاصيل</button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80" 
                alt="برنامج التمهيدي"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">برنامج التمهيدي</h3>
                <p className="text-gray-600 mb-4">للأطفال من عمر 4-5 سنوات</p>
                <button className="btn-secondary w-full">المزيد من التفاصيل</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home