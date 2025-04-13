'use client'

import { LoginForm } from "@/components/auth/login-form"
import { motion } from "framer-motion"

export default function LoginPage() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-repeat opacity-5" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-3xl animate-pulse" 
        style={{ animationDuration: '8s' }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/5 to-purple-500/5 blur-3xl animate-pulse"
        style={{ animationDuration: '12s', animationDelay: '2s' }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md px-4 relative z-10"
      >
        <LoginForm />
      </motion.div>
    </div>
  )
}