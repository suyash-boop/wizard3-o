'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SocialButtons } from "./social-buttons"

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // Remove the old handleSocialLogin since it's now handled in SocialButtons component
  
  return (
    <div className="w-full flex justify-center items-center min-h-[80vh]">
      <Card className="w-full max-w-md shadow-xl border border-white/5 bg-[#0A0A0F] backdrop-blur-xl relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#0F0F1A] to-[#0A0A0F] opacity-80" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          <CardHeader className="space-y-2 pt-8">
            <CardTitle className="text-3xl font-bold text-center text-white">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-center text-white/60 text-base">
              Login to your account
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6 pt-4 pb-8">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <SocialButtons isLoading={isLoading} />
              </motion.div>
            </AnimatePresence>
          </CardContent>
          
          <div className="flex flex-col items-center gap-6 pb-8 pt-2 relative z-10">
            <Button
              variant="link"
              className="font-normal text-white/70 hover:text-white group transition-all duration-300"
              size="sm"
              asChild
            >
            </Button>
          </div>
        </motion.div>
      </Card>
    </div>
  )
}