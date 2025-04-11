'use client'
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <>
      {/* Discord Icon */}
      <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
        <FaDiscord className="w-5 h-5" />
      </a>
      
      {/* Twitter/X Icon */}
      <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
        <FaXTwitter className="w-5 h-5" />
      </a>
    </>
  );
}