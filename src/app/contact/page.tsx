'use client'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' })
      alert('Message sent successfully!')
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-repeat opacity-10" />
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
              <span className="text-blue-400">GET IN</span>
              <span className="text-white font-semibold ml-1">TOUCH</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-md blur-md -z-10" />
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Let's Connect
              <span className="block text-gray-400 text-2xl mt-2 font-normal">We'd love to hear from you</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Whether you have a question, want to collaborate, or just want to say hi, we're here to help. Drop us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Name</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-black/50 border-blue-500/30 text-white placeholder:text-gray-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Email</label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-black/50 border-blue-500/30 text-white placeholder:text-gray-500"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Subject</label>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className="bg-black/50 border-blue-500/30 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="bg-black/50 border-blue-500/30 text-white placeholder:text-gray-500 min-h-[150px]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-blue-500/10 text-blue-400 rounded-md hover:bg-blue-500/20 transition-colors border border-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-gray-900/30 rounded-xl backdrop-blur-sm border border-blue-500/20">
              <div className="text-blue-400 mb-3">📍</div>
              <h3 className="text-white font-medium mb-1">Location</h3>
              <p className="text-gray-400 text-sm">Nagpur Ramdeobaba University Boys Hostel</p>
            </div>
            <div className="p-6 bg-gray-900/30 rounded-xl backdrop-blur-sm border border-blue-500/20">
              <div className="text-blue-400 mb-3">📧</div>
              <h3 className="text-white font-medium mb-1">Email</h3>
              <p className="text-gray-400 text-sm">hello@example.com</p>
            </div>
            <div className="p-6 bg-gray-900/30 rounded-xl backdrop-blur-sm border border-blue-500/20">
              <div className="text-blue-400 mb-3">📱</div>
              <h3 className="text-white font-medium mb-1">Phone</h3>
              <p className="text-gray-400 text-sm">+91 9623184523</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </section>
  )
}