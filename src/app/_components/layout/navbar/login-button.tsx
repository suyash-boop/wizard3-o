'use client'
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"

export default function NavbarLoginButton() {
  return (
    <LoginButton mode="modal">
      <Button 
        variant="outline"
        size="default"
        className="bg-black/50 border-white/10 text-white hover:text-gray-200 hover:bg-zinc-800/80 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
      >
        Login
      </Button>
    </LoginButton>
  )
}