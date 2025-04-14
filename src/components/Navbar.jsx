import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trees, Menu, X } from 'lucide-react'
import { BsWhatsapp } from 'react-icons/bs'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  }

  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const logoAnimation = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  const buttonAnimation = {
    initial: { scale: 0 },
    animate: { 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    whileHover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    whileTap: { scale: 0.95 }
  }

  const pulseAnimation = {
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 0.25,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const sidebarAnimation = {
    initial: { x: '100%' },
    animate: { 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: { 
      x: '100%',
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  }

  return (
    <>
      <motion.nav 
        className="bg-white shadow-md relative z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div {...logoAnimation}>
              <Link to="/" className="flex items-center space-x-2 space-x-reverse">
                <Trees className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-primary">حضانة جمعية دير الغصون</span>
              </Link>
            </motion.div>
            
            <motion.div 
              className="hidden md:flex space-x-6 space-x-reverse"
              variants={container}
              initial="initial"
              animate="animate"
            >
              {[
                { to: "/", text: "الرئيسية" },
                { to: "/programs", text: "البرامج" },
                { to: "/events", text: "الفعاليات" },
                { to: "/gallery", text: "معرض الصور" },
                { to: "/contact", text: "اتصل بنا" },
              ].map((link, index) => (
                <motion.div key={index} variants={navLinks}>
                  <Link to={link.to} className="text-gray-700 hover:text-primary">
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <motion.button
                className="md:hidden text-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="h-6 w-6" />
              </motion.button>
              <Link to='contact' className="hidden md:flex items-center space-x-4 space-x-reverse">
                <motion.button 
                  className="btn-primary h-14"
                  {...buttonAnimation}
                  {...pulseAnimation}
                >
                  سجل الآن
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6"
              variants={sidebarAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-primary">القائمة</span>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-6 w-6 text-gray-600" />
                </motion.button>
              </div>
              <div className="flex flex-col space-y-4">
                {[
                  { to: "/", text: "الرئيسية" },
                  { to: "/programs", text: "البرامج" },
                  { to: "/events", text: "الفعاليات" },
                  { to: "/gallery", text: "معرض الصور" },
                  { to: "/contact", text: "اتصل بنا" },
                ].map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.to}
                      className="text-gray-700 hover:text-primary block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}
                <Link to='/contact' onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div
                 
                  className="btn-primary h-12 mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  سجل الآن
                </motion.div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Fixed WhatsApp Button */}
      <motion.div
        className="fixed bottom-10 right-10 z-[9999]"
        initial={{ scale: 1 }}
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <a 
          href="https://wa.me/972598817229" 
          target='_blank' 
          rel="noopener noreferrer"
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-16 h-16 bg-green-500 rounded-full opacity-20 animate-ping"></div>
          <div className="absolute w-14 h-14 bg-green-600 rounded-full flex items-center justify-center">
            <BsWhatsapp className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
            تواصل معنا
          </div>
        </a>
      </motion.div>
    </>
  )
}

export default Navbar