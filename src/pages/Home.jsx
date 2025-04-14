import React from 'react'
import { Heart, Star, Users, Calendar, Clock, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO';

function Home() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'اليوم المفتوح',
      date: '2024-03-25',
      time: '10:00 صباحاً - 2:00 مساءً',
      location: 'المقر الرئيسي للروضة',
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'مهرجان الربيع',
      date: '2024-04-15',
      time: '9:00 صباحاً - 1:00 مساءً',
      location: 'حديقة الروضة',
      image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80'
    }
  ]

  return (
    <>
      <SEO 
        title="الرئيسية"
        description="حضانة جمعية دير الغصون في طولكرم - بيئة تعليمية آمنة ومحفزة لنمو طفلك. نقدم برامج تعليمية متميزة للأطفال."
        keywords="حضانة طولكرم, حضانة أطفال, تعليم مبكر, حضانة دير الغصون, روضة أطفال"
        url="/"
      />
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
                <h1 className="text-5xl font-bold mb-4">أهلاً بكم في حضانة جمعية دير الغصون</h1>
                <p className="text-xl mb-8">نوفر بيئة تعليمية آمنة ومحفزة لنمو طفلك</p>
                <Link to="/programs" className="btn-primary text-lg inline-block">اكتشف برامجنا</Link>
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
                  <Link to="/programs" className="btn-secondary w-full block text-center">المزيد من التفاصيل</Link>
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
                  <Link to="/programs" className="btn-secondary w-full block text-center">المزيد من التفاصيل</Link>
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
                  <Link to="/programs" className="btn-secondary w-full block text-center">المزيد من التفاصيل</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">الفعاليات القادمة</h2>
              <p className="text-xl text-gray-600">انضم إلينا في فعالياتنا المميزة</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3 space-x-reverse">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-3 space-x-reverse">
                          <Clock className="h-5 w-5 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-3 space-x-reverse">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Link to="/events" className="btn-primary block text-center">سجل للحضور</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/events" className="btn-secondary inline-block">عرض جميع الفعاليات</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home