'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import { Badge } from '@/components/ui/badge'
import { teamMembers } from '@/config/team-data'
import TeamMemberBubble from '@/app/_components/pages/home/about/team-bubble'
import ValuesSection from '@/app/_components/pages/home/about/values'

export default function AboutSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-purple-900/30" />
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-cyan-900/20" />
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl animate-pulse" 
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl animate-pulse"
          style={{ animationDuration: '12s', animationDelay: '2s' }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge 
              variant="outline" 
              className="mb-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 shadow-lg shadow-blue-900/10 font-mono text-xs tracking-wider"
            >
              <span className="text-blue-400">MEET THE</span>
              <span className="text-white font-semibold ml-1">TEAM</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-md blur-md -z-10"></span>
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              The Minds Behind the Magic
              <span className="block text-gray-400 text-2xl mt-2 font-normal">Our team of tech wizards</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Get to know the brilliant developers who make the impossible possible.
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-col gap-12 mb-20">
          {teamMembers.map((member, index) => (
            <TeamMemberBubble
              key={member.id}
              member={member}
              isEven={index % 2 === 0}
              index={index}
              hoveredMember={hoveredMember}
              setHoveredMember={setHoveredMember}
            />
          ))}
        </div>
        
        <ValuesSection />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
    </section>
  )
}