'use client'
import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { FaDiscord, FaGoogle, FaGithub } from "react-icons/fa6"

interface SocialButtonsProps {
  isLoading: boolean
}

export function SocialButtons({ isLoading }: SocialButtonsProps) {
  const handleSocialLogin = async (provider: "google" | "discord" | "github") => {
    try {
      await authClient.signIn.social({
        provider,
        callbackURL: "/",
      });
    } catch (error) {
      console.error(`${provider} login failed:`, error);
    }
  };

  return (
    <div className="space-y-3">
      <Button
        type="button"
        className="w-full bg-white hover:bg-white/95 text-black font-medium border-0 rounded-md py-5 h-auto flex items-center justify-center gap-2 transition-all duration-300"
        onClick={() => handleSocialLogin("google")}
        disabled={isLoading}
      >
        <FaGoogle />
        <span className="ml-1">Continue with Google</span>
      </Button>
      
      <Button
        type="button"
        className="w-full bg-[#5865F2] hover:bg-[#4752c4] text-white font-medium border-0 rounded-md py-5 h-auto flex items-center justify-center gap-2 transition-all duration-300"
        onClick={() => handleSocialLogin("discord")}
        disabled={isLoading}
      >
        <FaDiscord />
        <span className="ml-1">Continue with Discord</span>
      </Button>
      
      <Button
        type="button"
        className="w-full bg-[#24292e] hover:bg-[#1a1e22] text-white font-medium border-0 rounded-md py-5 h-auto flex items-center justify-center gap-2 transition-all duration-300"
        onClick={() => handleSocialLogin("github")}
        disabled={isLoading}
      >
        <FaGithub />
        <span className="ml-1">Continue with GitHub</span>
      </Button>
    </div>
  )
}