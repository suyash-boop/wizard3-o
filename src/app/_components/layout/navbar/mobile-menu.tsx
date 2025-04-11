'use client'
import { navItems } from "@/config/nav-items";
import SocialIcons from "./social-icons";
import { useEffect } from "react";
import { X, ChevronRight } from "lucide-react";

type MobileMenuProps = {
  isMenuOpen: boolean;
  scrolled: boolean;
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
};

export default function MobileMenu({ 
  isMenuOpen, 
  scrolled,
  activeSection, 
  setActiveSection, 
  setIsMenuOpen 
}: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // Small delay to ensure smooth animation
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
      }, 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div 
      className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-xl z-50 transition-all duration-400 ease-in-out ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Subtle background gradient that won't cause a white line */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/95 pointer-events-none"></div>
      
      <div className="relative h-full flex flex-col p-6">
        {/* Close button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Menu items */}
        <div className="flex-1 flex flex-col items-center justify-center py-4 space-y-6">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.label;
            
            return (
              <div 
                key={item.label} 
                className="w-full"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  transitionDelay: isMenuOpen ? `${idx * 70 + 100}ms` : '0ms'
                }}
              >
                <a 
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(item.label);
                    setIsMenuOpen(false);
                  }}
                  className={`flex justify-center items-center px-4 py-4 text-lg font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && <ChevronRight className="ml-2 w-4 h-4" />}
                </a>
              </div>
            );
          })}
        </div>
        
        {/* Social icons in mobile menu - centered layout */}
        <div 
          className="flex items-center justify-center gap-8 px-4 py-6 border-t border-white/10 mt-auto"
          style={{
            opacity: isMenuOpen ? 1 : 0,
            transition: 'opacity 0.3s ease',
            transitionDelay: isMenuOpen ? '400ms' : '0ms'
          }}
        >
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}