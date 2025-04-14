import React from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO';

const Events = () => {
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

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
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <SEO 
          title="الفعاليات والأنشطة"
          description="تعرف على فعاليات وأنشطة حضانة جمعية دير الغصون. برامج ترفيهية وتعليمية متنوعة على مدار العام."
          keywords="فعاليات حضانة دير الغصون, أنشطة للأطفال في طولكرم, برامج ترفيهية, مهرجانات أطفال"
          url="/events"
        />
        <div className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <h1 className="text-4xl font-bold mb-4">الفعاليات والأنشطة</h1>
              <p className="text-xl text-gray-600">تعرف على أحدث فعالياتنا وأنشطتنا القادمة</p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 gap-8"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              {events.map((event) => (
                <motion.div 
                  key={event.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid md:grid-cols-2">
                    <motion.img 
                      src={event.image} 
                      alt={event.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="p-8">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
                        <div className="space-y-4 mb-6">
                          <motion.div 
                            className="flex items-center space-x-3 space-x-reverse"
                            whileHover={{ x: 10 }}
                          >
                            <Calendar className="h-6 w-6 text-primary" />
                            <span>{event.date}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center space-x-3 space-x-reverse"
                            whileHover={{ x: 10 }}
                          >
                            <Clock className="h-6 w-6 text-primary" />
                            <span>{event.time}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center space-x-3 space-x-reverse"
                            whileHover={{ x: 10 }}
                          >
                            <MapPin className="h-6 w-6 text-primary" />
                            <span>{event.location}</span>
                          </motion.div>
                        </div>
                        <p className="text-gray-600 mb-6">{event.description}</p>
                        <motion.button 
                          className="btn-primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          سجل للحضور
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Events