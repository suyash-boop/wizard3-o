'use client'

type MobileMenuButtonProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export default function MobileMenuButton({ isMenuOpen, toggleMenu }: MobileMenuButtonProps) {
  return (
    <button 
      onClick={toggleMenu}
      className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors relative"
      aria-label="Toggle menu"
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <span className={`bg-current block h-0.5 w-5 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
        <span className={`bg-current block h-0.5 w-5 rounded-sm my-0.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-current block h-0.5 w-5 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
      </div>
    </button>
  );
}