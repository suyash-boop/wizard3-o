'use client'
import { FaDiscord, FaXTwitter, FaGithub } from "react-icons/fa6";

export default function FooterSocialIcons() {
  return (
    <>
      <a href="#" className="text-white/60 hover:text-white transition-colors">
        <FaDiscord className="w-5 h-5" />
      </a>
      <a href="#" className="text-white/60 hover:text-white transition-colors">
        <FaXTwitter className="w-5 h-5" />
      </a>
      <a href="#" className="text-white/60 hover:text-white transition-colors">
        <FaGithub className="w-5 h-5" />
      </a>
      <a href="#" className="text-xs text-white/60 hover:text-white transition-colors border-l border-white/20 pl-6 ml-2">
        Terms
      </a>
      <a href="#" className="text-xs text-white/60 hover:text-white transition-colors">
        Privacy
      </a>
    </>
  );
}