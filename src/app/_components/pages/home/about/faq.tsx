'use client'
import { motion } from 'motion/react'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is Evil Geniuses?",
      answer: "Our dev squad alias—four coders, one brain, inspired by E-Sports Team, driven by clean code and clever chaos."
    },
    {
      question: "Who can join Evil Geniuses?",
      answer: "Only the bold, the curious, and the code-obsessed—if you build, break, and dream in logic, you’re one of us."
    },
    {
      question: "What happens in Evil Geniuses?",
      answer: "We brainstorm, build, debug, and deploy—one brilliant line of code at a time"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 p-6 bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl"
    >
      <h3 className="text-xl font-bold text-white mb-6 flex items-center">
        <span className="text-blue-400 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        </span>
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-blue-500/20 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-4 text-left bg-gray-800/50 hover:bg-gray-800/70 transition-colors flex justify-between items-center"
            >
              <span className="text-white font-medium">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-blue-400 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-800/30 text-gray-400 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}