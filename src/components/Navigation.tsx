import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Features', id: 'features' },
  { label: 'How it Works', id: 'how-it-works' },
  { label: 'About', id: 'about' },
  { label: 'Why Us', id: 'trust' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ['hero', 'features', 'how-it-works', 'about', 'trust', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-black text-blue-600 tracking-tighter">CURELYSTICS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-gray-100/50 p-2 rounded-2xl relative gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-2.5 text-sm font-semibold transition-colors duration-300 z-10 ${activeSection === item.id ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'
                  }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-xl shadow-sm border border-gray-100"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${activeSection === 'contact'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                : 'bg-gray-900 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-100'
                }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-gray-100 rounded-xl text-gray-900"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-100 bg-white shadow-xl">
            <div className="flex flex-col space-y-2 px-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-6 py-3 text-base font-bold rounded-xl transition-all ${activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:bg-gray-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 active:scale-95 transition-all"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
