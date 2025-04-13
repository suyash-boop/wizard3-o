'use client'
import { useState, useEffect } from "react";
import NavLinks from "./nav-links";
import SocialIcons from "./social-icons";
import LoginButton from "./login-button";
import MobileMenu from "./mobile-menu";
import MobileMenuButton from "./mobile-menu-button";
import Logo from "./logo";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  useEffect(() => {
    setScrolled(window.scrollY > 10);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header 
      className={`fixed w-full top-0 z-40 ${
        scrolled 
          ? 'bg-blue-950/80 backdrop-blur-xl py-2'
          : 'bg-transparent py-5'
      } transition-all duration-500 ease-out`}
    >
      {/* Blue gradient line instead of white */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ease-out ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>  {/* Changed to blue gradient */}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <div className="flex-grow flex items-center justify-center">
            <NavLinks 
              activeSection={activeSection} 
              setActiveSection={setActiveSection} 
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
          
          <div className="flex-shrink-0 flex items-center gap-3 md:gap-5 justify-end">
            <div className="hidden sm:flex items-center gap-3 md:gap-5">
              <SocialIcons />
            </div>
            
            <LoginButton />
            
            <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      
      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        scrolled={scrolled} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
}