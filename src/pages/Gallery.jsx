import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO';

function Gallery() {
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

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80',
      title: 'الأنشطة التعليمية في حضانة دير الغصون'
    },
    {
      url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80',
      title: 'وقت اللعب والمرح'
    },
    {
      url: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80',
      title: 'فصولنا الدراسية'
    },
    {
      url: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80',
      title: 'الأنشطة الفنية والإبداعية'
    },
    {
      url: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80',
      title: 'الحديقة الخارجية'
    },
    {
      url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80',
      title: 'نشاطات القراءة والقصص'
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
          title="معرض الصور"
          description="شاهد لحظات مميزة من حضانة جمعية دير الغصون في طولكرم. صور من أنشطتنا وفعالياتنا اليومية مع الأطفال."
          keywords="صور حضانة دير الغصون, معرض صور الحضانة, أنشطة الأطفال في طولكرم, فعاليات الحضانة"
          url="/gallery"
        />
        <div className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <h1 className="text-4xl font-bold mb-4">معرض الصور</h1>
              <p className="text-xl text-gray-600">لمحات من الحياة اليومية في حضانتنا</p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {images.map((image, index) => (
                <motion.div 
                  key={index} 
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3 
                      className="text-white text-xl font-bold text-center"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {image.title}
                    </motion.h3>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Gallery