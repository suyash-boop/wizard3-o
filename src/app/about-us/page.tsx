'use client'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { teamMembers } from '@/config/team-data'
import Image from 'next/image'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import teamSocials from '@/config/socials'

export default function AboutUsPage() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-repeat opacity-10 pointer-events-none" />
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-purple-900/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-cyan-900/20 pointer-events-none" />
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl animate-pulse pointer-events-none"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl animate-pulse pointer-events-none"
          style={{ animationDuration: '12s', animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
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
              <span className="text-blue-400">ABOUT</span>
              <span className="text-white font-semibold ml-1">US</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-md blur-md -z-10 pointer-events-none" />
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Who We Are
              <span className="block text-gray-400 text-2xl mt-2 font-normal">Our Story & Mission</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We're a team of four passionate programmers—developers by choice, creators by heart. From dynamic websites and web apps to sleek mobile applications, we turn ideas into fully functional digital experiences. We call ourselves Evil Geniuses—a name we proudly coined and crafted, inspired by the synergy and strategy of our favorite escape: Valorant. Just like in the game, we thrive on teamwork, fast thinking, and clutch solutions. What unites us isn't just our love for code, but our obsession with learning, building, and pushing the limits of what we can create together. Whether it's a late-night bug fix or an early morning deployment, we're all in—because this is what we love to do.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4 font-bold">
              We don't just write code—we build with purpose, passion, and a bit of madness.
            </p>
          </motion.div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Member Image */}
              <motion.div 
                className="relative w-32 h-32 mx-auto mb-4"
                whileHover={{ scale: 1.05 }}
              >
                {/* Circular glow */}
                <div className="absolute inset-0 rounded-full pointer-events-none">
                  <div className="absolute inset-[-8px] bg-blue-500/20 rounded-full blur-xl" />
                </div>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={member.image || '/placeholder.jpg'}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </motion.div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="mt-4 flex justify-center gap-4 text-gray-400 relative z-50">
                  {member.name === "Suyash" && (
                    <>
                      <a 
                        href="https://github.com/suyash-purwar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors cursor-pointer z-50"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://linkedin.com/in/suyash-purwar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors cursor-pointer z-50"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://instagram.com/suyashpurwar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors cursor-pointer z-50"
                      >
                        <FaInstagram className="w-5 h-5" />
                      </a>
                    </>
                  )}
                  {member.name === "Devansh" && (
                    <>
                      <a 
                        href="https://github.com/devansh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://linkedin.com/in/devansh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://instagram.com/devansh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                      >
                        <FaInstagram className="w-5 h-5" />
                      </a>
                    </>
                  )}
                  {/* Add similar blocks for Aditya and Dhruv */}
                </div>

                {/* Superpower and Catchphrase */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: 'auto', opacity: 1 }}
                  className="mt-4 overflow-hidden"
                >
                  {member.superpower && (
                    <p className="text-purple-400 text-sm">⚡ {member.superpower}</p>
                  )}
                  {member.catchphrase && (
                    <p className="text-gray-500 text-xs mt-2 italic">"{member.catchphrase}"</p>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
