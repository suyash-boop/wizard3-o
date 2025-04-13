'use client'
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <>
      {/* Discord Icon */}
      <a href="https://discord.gg/bxnAezT4fK" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
        <FaDiscord className="w-5 h-5" />
      </a>
      
      {/* Twitter/X Icon */}
      <a 
        href="https://x.com/gdsc_rcoem" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
      >
        <FaXTwitter className="w-5 h-5" />
      </a>
    </>
  );
}