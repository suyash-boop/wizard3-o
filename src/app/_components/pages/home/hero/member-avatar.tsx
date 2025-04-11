'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import { TeamMember } from '@/config/team-data'

type TeamMemberAvatarProps = {
  member: TeamMember
}

export default function TeamMemberAvatar({ member }: TeamMemberAvatarProps) {
  return (
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
              {member.skills && member.skills.slice(0, 2).map(skill => (
                <span key={skill} className="text-xs text-gray-400 bg-gray-900/80 px-2 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
        </div>
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
  )
}