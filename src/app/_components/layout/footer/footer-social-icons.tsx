'use client'
import { FaDiscord, FaXTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function FooterSocialIcons() {
  return (
    <>
      <a href="https://discord.gg/bxnAezT4fK" className="text-white/60 hover:text-white transition-colors">
        <FaDiscord className="w-5 h-5" />
      </a>
      <a href="https://x.com/gdsc_rcoem" className="text-white/60 hover:text-white transition-colors">
        <FaXTwitter className="w-5 h-5" />
      </a>
      <a href="https://github.com/suyash-boop/wizard3-o" className="text-white/60 hover:text-white transition-colors">
        <FaGithub className="w-5 h-5" />
      </a>
      <a href="https://www.instagram.com/gdg_rbu/" className="text-white/60 hover:text-white transition-colors border-l border-white/20 pl-6 ml-2">
        <FaInstagram className="w-5 h-5" />
      </a>
      <a href="https://www.linkedin.com/company/gdg-rbu/posts/?feedView=all" className="text-white/60 hover:text-white transition-colors">
        <FaLinkedin className="w-5 h-5" />
      </a>
      
    </>
  );
}