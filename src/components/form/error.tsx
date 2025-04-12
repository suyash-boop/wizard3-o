import { AlertCircle } from "lucide-react"
import { motion } from "motion/react"

interface FormErrorProps {
  message?: string
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-3 rounded-md bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-sm text-red-400 backdrop-blur-sm"
    >
      <AlertCircle className="h-4 w-4" />
      {message}
    </motion.div>
  )
}