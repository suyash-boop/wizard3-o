'use client'
import { useState, useRef } from "react";
import { navItems } from "@/config/nav-items";

type NavLinksProps = {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

export default function NavLinks({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }: NavLinksProps) {
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const hoverRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  
  const handleMouseEnter = (item: string) => {
    setHoverItem(item);
  };
  
  const handleMouseLeave = () => {
    setHoverItem(null);
  };
  
  return (
    <nav className="hidden md:flex items-center">
      <div className="flex items-center space-x-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.label;
          
          return (
            <a 
              key={item.label}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection(activeSection === item.label ? null : item.label);
                if (isMenuOpen) setIsMenuOpen(false);
              }}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
              className={`px-4 py-2 text-sm font-medium relative transition-all duration-300 rounded-md ${
                isActive 
                  ? 'text-white bg-blue-800/30 shadow-[0_0_10px_rgba(59,130,246,0.3)]'  // Changed to blue theme
                  : 'text-gray-300 hover:text-blue-200'  // Changed hover color to blue
              }`}
              ref={(el: HTMLAnchorElement | null) => {
                hoverRefs.current[item.label] = el;
              }}
            >
              {/* Magical hover indicator with blue effect */}
              <span className={`absolute bottom-0 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 transform -translate-x-1/2 transition-all duration-300 ${
                hoverItem === item.label || isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}></span>
              
              {/* Subtle blue glow on hover */}
              {(hoverItem === item.label || isActive) && (
                <span className="absolute inset-0 rounded-md bg-blue-500/5 blur-sm -z-10"></span>
              )}
              
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}