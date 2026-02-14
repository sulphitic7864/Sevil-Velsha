import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Approach", "Program", "About"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          <span className="tracking-wide">SEVIL VELSHA</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-gray-700 hover:text-black transition"
            >
              {item}
            </a>
          ))}

          <a href="mailto:sevilvay@gmail.com" className="px-5 py-2 text-sm border text-black border-gray-300 rounded-full hover:bg-gray-100 transition">
            Apply Now
          </a>
        </div>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="flex flex-col px-4 py-6 gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}

              <button className="w-fit px-5 py-2 text-black text-sm border border-gray-300 rounded-full">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
