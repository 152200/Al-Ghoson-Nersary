import React from 'react'
import { BookOpen, Clock, Users, Brain } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO';

const Programs = () => {
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

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <SEO 
          title="البرامج التعليمية"
          description="اكتشف برامجنا التعليمية المتميزة في حضانة جمعية دير الغصون. برامج حضانة متطورة للأطفال في طولكرم."
          keywords="برامج تعليمية للأطفال, حضانة دير الغصون, حضانة في طولكرم, تعليم مبكر"
          url="/programs"
        />
        <div className="py-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <h1 className="text-4xl font-bold mb-4">برامجنا التعليمية</h1>
              <p className="text-xl text-gray-600">برامج تعليمية متكاملة في حضانة جمعية دير الغصون</p>
            </motion.div>

            {/* Programs */}
            <motion.div 
              className="space-y-16"
              variants={staggerContainer}
            >
              {/* Nursery Program */}
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80" 
                    alt="برنامج الحضانة"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                  />
                  <div className="p-8">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <h2 className="text-3xl font-bold mb-4">برنامج الحضانة</h2>
                      <p className="text-gray-600 mb-6">للأطفال من عمر 2-3 سنوات</p>
                      <div className="space-y-4 mb-8">
                        <motion.div 
                          className="flex items-center space-x-3 space-x-reverse"
                          whileHover={{ x: 10 }}
                        >
                          <Clock className="h-6 w-6 text-primary" />
                          <span>7:00 صباحاً - 14:00 مساءً</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center space-x-3 space-x-reverse"
                          whileHover={{ x: 10 }}
                        >
                          <Users className="h-6 w-6 text-primary" />
                          <span>حد أقصى 10 أطفال لكل معلمة</span>
                        </motion.div>
                      </div>
                      <motion.button 
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        سجل الآن
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Kindergarten Program */}
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <h2 className="text-3xl font-bold mb-4">برنامج التأسيس</h2>
                      <p className="text-gray-600 mb-6">للأطفال من عمر 3-4 سنوات</p>
                      <div className="space-y-4 mb-8">
                        <motion.div 
                          className="flex items-center space-x-3 space-x-reverse"
                          whileHover={{ x: 10 }}
                        >
                          <BookOpen className="h-6 w-6 text-primary" />
                          <span>منهج تعليمي متكامل</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center space-x-3 space-x-reverse"
                          whileHover={{ x: 10 }}
                        >
                          <Brain className="h-6 w-6 text-primary" />
                          <span>تنمية المهارات الأساسية</span>
                        </motion.div>
                      </div>
                      <motion.button 
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        سجل الآن
                      </motion.button>
                    </motion.div>
                  </div>
                  <motion.img 
                    src="https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80" 
                    alt="برنامج التأسيس"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Pre-school Program */}
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2">
                  <motion.img 
                    src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80" 
                    alt="برنامج التمهيدي"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                  />
                  <div className="p-8">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <h2 className="text-3xl font-bold mb-4">برنامج التمهيدي</h2>
                      <p className="text-gray-600 mb-6">للأطفال من عمر 4-5 سنوات</p>
                      <div className="space-y-4 mb-8">
                        <motion.div 
                          className="flex items-center space-x-3 space-x-reverse"
                          whileHover={{ x: 10 }}
                        >
                          <BookOpen className="h-6 w-6 text-primary" />
                          <span>تحضير للمرحلة الابتدائية</span>
                        </motion.div>
                        <motion.div 
                          className="flex items-center space-x-3 space-x-reverse"
                          whileHover={{ x: 10 }}
                        >
                          <Brain className="h-6 w-6 text-primary" />
                          <span>تطوير المهارات المتقدمة</span>
                        </motion.div>
                      </div>
                      <motion.button 
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        سجل الآن
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Programs;