import React from 'react'
import { Link } from 'react-router-dom'
// import { Tree } from 'lucide-react'

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            {/* <Tree className="h-8 w-8 text-primary" /> */}
            <span className="text-xl font-bold text-primary">روضة الأطفال السعيدة</span>
          </Link>
          
          <div className="hidden md:flex space-x-6 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-primary">الرئيسية</Link>
            <Link to="/programs" className="text-gray-700 hover:text-primary">البرامج</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-primary">معرض الصور</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary">اتصل بنا</Link>
          </div>

          <button className="btn-primary">سجل الآن</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar