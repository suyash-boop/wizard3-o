'use client'
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"
import { authClient } from "@/lib/auth-client"
import UserAvatar from "./user-avatar"

export default function NavbarLoginButton() {
  const { data: session } = authClient.useSession()

  if (session) {
    return (
      <div className="mr-0">
        <UserAvatar />
      </div>
    )
  }

  return (
    <div className="mr-4">
      <LoginButton mode="modal">
        <Button 
          variant="outline"
          size="default"
          className="bg-black/50 border-white/10 text-white hover:text-gray-200 hover:bg-zinc-800/80 hover:border-white/30 backdrop-blur-sm transition-all duration-300 whitespace-nowrap"
        >
          Login
        </Button>
      </LoginButton>
    </div>
  )
}