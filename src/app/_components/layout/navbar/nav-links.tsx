'use client'
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { navItems } from '@/config/nav-items';

type NavLinksProps = {
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
};

export default function NavLinks({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }: NavLinksProps) {
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const hoverRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const router = useRouter();
  
  const handleMouseEnter = (item: string) => {
    setHoverItem(item);
  };
  
  const handleMouseLeave = () => {
    setHoverItem(null);
  };
  
  const handleNavigation = (e: React.MouseEvent, path: string, label: string) => {
    e.preventDefault();
    setActiveSection(activeSection === label ? null : label);
    
    if (isMenuOpen) setIsMenuOpen(false);
    
    // Handle hash links for scrolling
    if (path.startsWith('#')) {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle regular page navigation
      router.push(path);
    }
  };
  
  return (
    <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
      <div className="flex items-center space-x-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.label;
          
          return (
            <a 
              key={item.label}
              href={item.path}
              onClick={(e) => handleNavigation(e, item.path, item.label)}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
              className={`px-4 py-2 text-sm font-medium relative transition-all duration-300 rounded-md ${
                isActive 
                  ? 'text-white'
                  : 'text-gray-300 hover:text-blue-200'
              }`}
              ref={(el: HTMLAnchorElement | null) => {
                hoverRefs.current[item.label] = el;
              }}
            >
              {/* Magical hover indicator with blue effect */}
              <span className={`absolute bottom-0 left-1/2 w-1/2 h-[2px] bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 transform -translate-x-1/2 transition-all duration-300 ${
                hoverItem === item.label || isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}></span>
              
              {/* Removed the background glow effect */}
              
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}