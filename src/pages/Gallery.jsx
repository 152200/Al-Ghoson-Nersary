import React from 'react'
import SEO from '../components/SEO';

function Gallery() {
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
    <>
      <SEO 
        title="معرض الصور"
        description="شاهد لحظات مميزة من حضانة جمعية دير الغصون في طولكرم. صور من أنشطتنا وفعالياتنا اليومية مع الأطفال."
        keywords="صور حضانة دير الغصون, معرض صور الحضانة, أنشطة الأطفال في طولكرم, فعاليات الحضانة"
        url="/gallery"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">معرض الصور</h1>
            <p className="text-xl text-gray-600">لمحات من الحياة اليومية في حضانتنا</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery