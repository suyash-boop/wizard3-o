import { CheckCircle } from "lucide-react"
import { motion } from "motion/react"

interface FormSuccessProps {
  message?: string
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-3 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-sm text-emerald-400 backdrop-blur-sm"
    >
      <CheckCircle className="h-4 w-4" />
      {message}
    </motion.div>
  )
}