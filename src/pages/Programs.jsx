import React from 'react'
import { BookOpen, Clock, Users, Brain } from 'lucide-react'

function Programs() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">برامجنا التعليمية</h1>
          <p className="text-xl text-gray-600">برامج تعليمية متكاملة لكل مرحلة عمرية</p>
        </div>

        {/* Programs */}
        <div className="space-y-16">
          {/* Nursery Program */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <img 
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80" 
                alt="برنامج الحضانة"
                className="h-full w-full object-cover"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">برنامج الحضانة</h2>
                <p className="text-gray-600 mb-6">للأطفال من عمر 2-3 سنوات</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Clock className="h-6 w-6 text-primary" />
                    <span>7:00 صباحاً - 2:00 مساءً</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Users className="h-6 w-6 text-primary" />
                    <span>حد أقصى 10 أطفال لكل معلمة</span>
                  </div>
                </div>
                <button className="btn-primary">سجل الآن</button>
              </div>
            </div>
          </div>

          {/* Kindergarten Program */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">برنامج الروضة</h2>
                <p className="text-gray-600 mb-6">للأطفال من عمر 3-4 سنوات</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <span>منهج تعليمي متكامل</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Brain className="h-6 w-6 text-primary" />
                    <span>تنمية المهارات الأساسية</span>
                  </div>
                </div>
                <button className="btn-primary">سجل الآن</button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80" 
                alt="برنامج الروضة"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Pre-school Program */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <img 
                src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80" 
                alt="برنامج التمهيدي"
                className="h-full w-full object-cover"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">برنامج التمهيدي</h2>
                <p className="text-gray-600 mb-6">للأطفال من عمر 4-5 سنوات</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <span>تحضير للمرحلة الابتدائية</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Brain className="h-6 w-6 text-primary" />
                    <span>تطوير المهارات المتقدمة</span>
                  </div>
                </div>
                <button className="btn-primary">سجل الآن</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programs