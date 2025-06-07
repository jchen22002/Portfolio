import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState} from "react";

const Header = () => {
  // Toggle Menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='absolute w-full z-50 transition-all duration-300'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20'>

        {/* Logo + Name */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}  
          className='flex items-center'
        >
          
          <div className="w-10 h-10 flex items-center justify-center hover:animate-spin-slow transition-transform duration-700">
            <svg viewBox="0 0 841.9 595.3" className="w-full h-full text-blue-500">
              <g>
                <g stroke="currentColor" strokeWidth="30" fill="none">
                  <ellipse rx="165" ry="380" cx="420.9" cy="296.5" transform="rotate(0 420.9 296.5)" />
                  <ellipse rx="165" ry="380" cx="420.9" cy="296.5" transform="rotate(60 420.9 296.5)" />
                  <ellipse rx="165" ry="380" cx="420.9" cy="296.5" transform="rotate(120 420.9 296.5)" />
                </g>

                <circle cx="420.9" cy="296.5" r="50" fill="currentColor" />

                <text
                  x="420.9"
                  y="310"
                  textAnchor="middle"
                  fill="black"
                  fontSize="200"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                  dominantBaseline="middle"
                >
                  JC
                </text>
              </g>
            </svg>
          </div>

          <span className='text-lg font-bold'>
            Portfolio
          </span>

        </motion.div>
        
        {/* Navigation Items */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (
            <motion.a 
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}  
              className="relative text-black hover:text-blue-600 font-bold transition-colors duration-300 group"
              href="#">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 rounded group-hover:w-full transition-all duration-300 origin-left"></span>
            </motion.a>
          ))}
        </nav>

        {/* Hamburger Button */}
        <div className="md:hidden flex items-center">
          <motion.button 
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-black"
          >
            { isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </motion.button>
        </div>

      </div>

      {/* Hamburger Nav */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-white shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
            <a 
              onClick={toggleMenu} 
              className="text-black font-bold py-2" 
              key={item} href="#"
            >
              {item}
            </a>
          ))}
        </nav>
      </motion.div>

    </header>
  )
}

export default Header