'use client'
import { motion } from 'motion/react';
import { useState } from 'react';
import Logo from '../navbar/logo';
import FooterLinks from './footer-links';
import FooterSocialIcons from './footer-social-icons';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async () => {
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (!res.ok) throw new Error();
      
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000); // Reset status after 3 seconds
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-black pointer-events-none" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundSize: '100px 100px'
        }} 
      />
      
      {/* Glow effect */}
      <motion.div 
        className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12">
          {/* Logo and description */}
          <div className="col-span-1 text-center sm:text-left flex flex-col items-center sm:items-start">
            <div className="w-32 sm:w-auto mb-4 sm:mb-0">
              <Logo />
            </div>
            <p className="mt-4 text-sm text-white/60 max-w-xs mx-auto sm:mx-0">
              A collective of four brilliant developers from RBU pushing the boundaries of what's possible in software development. We turn complex problems into elegant solutions.
            </p>
          </div>
          
          {/* Footer links */}
          <FooterLinks />
          
          {/* Newsletter signup */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1 text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-white/60 mb-4">Subscribe to our newsletter for updates and new features.</p>
            <div className="flex flex-col gap-2 max-w-xs mx-auto sm:mx-0">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/20"
              />
              <button 
                onClick={handleSubscribe}
                className="w-full sm:w-auto bg-white text-black font-medium text-sm px-4 py-2 rounded-md hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </div>
            {status === 'success' && (
              <p className="text-xs text-green-500 mt-2">Mail successfully added!</p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-500 mt-2">Failed to subscribe. Please try again.</p>
            )}
          </div>
        </div>
        
        {/* Bottom section with copyright and social icons */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50 text-center sm:text-left order-2 sm:order-1">
            © {new Date().getFullYear()} Evil Geniuses(GDG). All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 order-1 sm:order-2">
            <FooterSocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}