'use client'
import { motion } from 'motion/react'
import Image from 'next/image'

type PeekingStickmanProps = {
  hasPeeked: boolean
}

export default function PeekingStickman({ hasPeeked }: PeekingStickmanProps) {
  return (
    <motion.div 
      className="absolute left-0 top-2/3 transform -translate-y-1/2 z-20 hidden md:block"
      initial={{ x: -400 }}
      animate={{ x: hasPeeked ? -10 : -400 }}
      transition={{ 
        type: "tween",
        ease: "easeOut",
        duration: 0.8
      }}
    >
      <Image 
        src="/peek.png" 
        alt="Peeking stickman" 
        width={350}
        height={700}
        className="object-contain"
      />
    </motion.div>
  )
}