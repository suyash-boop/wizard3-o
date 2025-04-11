'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function LoginButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/login"
    }, 1000)
  }

  return (
    <Button 
      onClick={handleLogin}
      disabled={isLoading}
      variant="outline"
      size="default"
    >
      {isLoading ? "Connecting..." : "Login"}
    </Button>
  )
}