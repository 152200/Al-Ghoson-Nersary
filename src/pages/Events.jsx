import React from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'
import SEO from '../components/SEO';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'اليوم المفتوح',
      date: '2024-03-25',
      time: '10:00 صباحاً - 2:00 مساءً',
      description: 'فرصة للأهالي للتعرف على برامجنا وزيارة مرافقنا والتحدث مع معلمينا',
      location: 'حضانة جمعية دير الغصون',
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'مهرجان الربيع',
      date: '2024-04-15',
      time: '9:00 صباحاً - 1:00 مساءً',
      description: 'احتفال ممتع مع أنشطة متنوعة وعروض فنية يقدمها أطفالنا',
      location: 'حديقة الحضانة',
      image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'ورشة عمل للأهالي',
      date: '2024-05-01',
      time: '5:00 مساءً - 7:00 مساءً',
      description: 'ورشة عمل تربوية للأهالي حول التعامل مع تحديات مرحلة الطفولة المبكرة',
      location: 'قاعة الاجتماعات - دير الغصون',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80'
    }
  ]

  return (
    <>
      <SEO 
        title="الفعاليات والأنشطة"
        description="تعرف على فعاليات وأنشطة حضانة جمعية دير الغصون. برامج ترفيهية وتعليمية متنوعة على مدار العام."
        keywords="فعاليات حضانة دير الغصون, أنشطة للأطفال في طولكرم, برامج ترفيهية, مهرجانات أطفال"
        url="/events"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">الفعاليات والأنشطة</h1>
            <p className="text-xl text-gray-600">تعرف على أحدث فعالياتنا وأنشطتنا القادمة</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Calendar className="h-6 w-6 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Clock className="h-6 w-6 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <MapPin className="h-6 w-6 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <button className="btn-primary">سجل للحضور</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Events