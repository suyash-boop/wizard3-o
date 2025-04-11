'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import { TeamMember } from '@/config/team-data'

type TeamMemberBubbleProps = {
  member: TeamMember
  isEven: boolean
  index: number
  hoveredMember: number | null
  setHoveredMember: (id: number | null) => void
}

export default function TeamMemberBubble({ 
  member, 
  isEven, 
  index, 
  hoveredMember, 
  setHoveredMember 
}: TeamMemberBubbleProps) {
  return (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * member.id }}
      className={`relative max-w-2xl ${isEven ? 'self-start' : 'self-end'}`}
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      <div className={`flex items-start ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`w-16 h-16 rounded-full flex-shrink-0 relative shadow-lg border-2 border-blue-500/70 ${isEven ? 'mr-4' : 'ml-4'}`}>
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover rounded-full"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-full">
              <span className="text-2xl font-bold text-blue-400">{member.name.charAt(0)}</span>
            </div>
          )}
          
          {member.superpower && (
            <div className="absolute -bottom-1 -right-1 bg-blue-900/80 text-xs px-2 py-1 rounded-full border border-blue-500/50 shadow-lg shadow-blue-900/20">
              ✨
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className={`flex items-center mb-2 ${isEven ? '' : 'justify-end'}`}>
            <h3 className="text-xl font-bold text-white mr-2">{member.name}</h3>
            <span className="text-sm text-blue-400">{member.role}</span>
          </div>
          
          <div className={`bg-gray-900/80 backdrop-blur-sm p-4 rounded-2xl ${isEven ? 'rounded-tl-none' : 'rounded-tr-none'} mb-3 relative shadow-lg border border-blue-500/30`}>
            <p className="text-gray-300">{member.bio}</p>
            
            <div className={`absolute ${isEven ? '-left-2 top-0' : '-right-2 top-0'} w-4 h-4 overflow-hidden`}>
              <div className={`absolute transform rotate-45 bg-gray-900/80 ${isEven ? 'border-l border-t' : 'border-r border-t'} border-blue-500/30 w-4 h-4 ${isEven ? '-translate-x-1/2' : 'translate-x-1/2'} -translate-y-1/2`}></div>
            </div>
          </div>
          
          <div className={`bg-gray-900/60 backdrop-blur-sm p-3 rounded-2xl mb-3 ${isEven ? 'ml-4' : 'mr-4'} shadow-md border border-blue-500/20`}>
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="text-xs px-2 py-1 bg-blue-900/50 text-blue-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {member.catchphrase && (
            <div className={`bg-gray-900/40 backdrop-blur-sm p-3 rounded-2xl ${isEven ? 'ml-8' : 'mr-8'} shadow-sm border border-blue-500/10`}>
              <p className="text-gray-400 italic text-sm">"{member.catchphrase}"</p>
            </div>
          )}
          
          {member.superpower && hoveredMember === member.id && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} bg-gray-800/90 backdrop-blur-md p-3 rounded-lg shadow-xl border border-blue-500/30 max-w-[200px] z-10`}
            >
              <div className="text-xs text-blue-400 mb-1">Superpower</div>
              <div className="text-sm text-white">{member.superpower}</div>
            </motion.div>
          )}
        </div>
      </div>
      
      {index < 3 && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full h-12 w-px bg-gradient-to-b from-blue-500/30 to-transparent"></div>
      )}
    </motion.div>
  )
}