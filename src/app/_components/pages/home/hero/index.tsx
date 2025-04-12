'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hasPeeked, setHasPeeked] = useState(false)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    // Trigger peek animation after a delay
    const peekTimer = setTimeout(() => {
      setHasPeeked(true)
      
      // Make stickman go back after 4 seconds
      const hideTimer = setTimeout(() => {
        setHasPeeked(false)
      }, 4000)
      
      return () => clearTimeout(hideTimer)
    }, 1500)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(peekTimer)
    }
  }, [])
  
  // Updated team members data with Suyash
  const teamMembers = [
    { id: 1, name: "Suyash", role: "Lead Developer", image: "/suyash.jpg" },
    { id: 2, name: "Sam", role: "Backend" },
    { id: 3, name: "Jordan", role: "AI/ML" },
    { id: 4, name: "Taylor", role: "DevOps" },
  ]
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0">
        {/* Mouse-following gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)`,
            backgroundSize: '100% 100%',
          }}
        />
        
        {/* Grid background */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
        
        {/* New animated gradient background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-purple-900/30" />
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-cyan-900/20" />
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl animate-pulse" 
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl animate-pulse"
          style={{ animationDuration: '12s', animationDelay: '2s' }}
        />
      </div>
      
      {/* Peeking stickman - now much larger */}
      {/* Peeking stickman - now positioned lower */}
      {/* Peeking stickman - positioned much further left initially */}
      {/* Peeking stickman - desktop only */}
      <motion.div 
        className="absolute left-0 top-2/3 transform -translate-y-1/2 z-20 hidden md:block"
        initial={{ x: -400 }}
        animate={{ x: hasPeeked ? -10 : -400 }}
        transition={{ 
          type: "tween",
          ease: "easeOut",
          duration: 0.8  // Using the faster animation duration
        }}
      >
        <Image 
          src="/peek.png" 
          alt="Peeking stickman" 
          width={350}  // Increased from 250 to 350
          height={700}  // Increased from 500 to 700
          className="object-contain"
        />
      </motion.div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-3 flex justify-center">
          <Badge 
            variant="outline" 
            className="font-mono text-xs tracking-wider flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 shadow-lg shadow-blue-900/10"
          >
            <span className="text-blue-400">POWERED BY</span>
            <span className="text-white font-semibold">GBU</span>
            <Image 
              src="/icons/gbu.svg" 
              alt="GBU Logo" 
              width={24} 
              height={12}
              className="inline-block ml-1"
            />
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-md blur-md -z-10"></span>
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Evil Geniuses<br />
          <span className="text-gray-400">Code. Create. Conquer.</span>
        </h1>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          A collective of four brilliant developers from RBU pushing the boundaries of what's possible in software development. We turn complex problems into elegant solutions.
        </p>
        
        {/* Team member avatars */}
        <div className="flex justify-center -space-x-4 mb-10">
          {teamMembers.map((member) => (
            <motion.div 
              key={member.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 * member.id,
                ease: "easeOut" 
              }}
              className="relative group"
            >
              {/* Enhanced tooltip that appears above */}
              <motion.div 
                className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg shadow-lg p-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 border border-blue-500/30"
                initial={{ y: 10, scale: 0.95 }}
                whileHover={{ y: 0, scale: 1 }}
              >
                <div className="text-center">
                  <p className="font-semibold text-white">{member.name}</p>
                  <p className="text-blue-400 text-xs">{member.role}</p>
                  <div className="mt-2 pt-2 border-t border-gray-700">
                    <div className="flex justify-center space-x-2">
                      <span className="text-xs text-gray-400 bg-gray-900/80 px-2 py-1 rounded-full">TypeScript</span>
                      <span className="text-xs text-gray-400 bg-gray-900/80 px-2 py-1 rounded-full">React</span>
                    </div>
                  </div>
                </div>
                {/* Tooltip arrow */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 border-r border-b border-blue-500/30 rotate-45"></div>
              </motion.div>

              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-500 overflow-hidden bg-gray-800 flex items-center justify-center relative z-10">
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="text-2xl font-bold text-blue-400">{member.name.charAt(0)}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-200 transition-colors duration-300"
          >
            Our Projects
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          
          <Link 
            href="/team" 
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white hover:bg-gray-900 transition-colors duration-300"
          >
            Meet The Team
          </Link>
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-gray-500">Technologies we master</p>
          <div className="flex gap-6">
            {['React', 'Node.js', 'Python', 'AI/ML'].map((tech, index) => (
              <motion.div 
                key={tech}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="text-gray-300 text-xs font-medium bg-gray-900/50 px-3 py-1 rounded-full"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle gradient accents */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
    </div>
  )
}