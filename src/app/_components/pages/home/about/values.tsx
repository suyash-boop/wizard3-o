'use client'
import { motion } from 'motion/react'

export default function ValuesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 p-6 bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl"
    >
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <span className="text-blue-400 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
        </span>
        Our Values
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-800/50 rounded-lg border border-blue-500/20">
          <h4 className="text-white font-medium mb-2">Innovation</h4>
          <p className="text-gray-400 text-sm">We push boundaries and explore new technologies to create cutting-edge solutions.</p>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg border border-blue-500/20">
          <h4 className="text-white font-medium mb-2">Collaboration</h4>
          <p className="text-gray-400 text-sm">We believe great ideas come from diverse perspectives working together.</p>
        </div>
        <div className="p-4 bg-gray-800/50 rounded-lg border border-blue-500/20">
          <h4 className="text-white font-medium mb-2">Excellence</h4>
          <p className="text-gray-400 text-sm">We're committed to quality code, elegant design, and exceptional user experiences.</p>
        </div>
      </div>
    </motion.div>
  )
}