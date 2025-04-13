"use client";
import { authClient } from "@/lib/auth-client";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, LogOut } from "lucide-react";

interface UserAvatarProps {
  showName?: boolean;
  showMenu?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-10 h-10",
};

export default function UserAvatar({
  showName = true,
  showMenu = true,
  size = "md",
}: UserAvatarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { data: session } = authClient.useSession();

  const menuItems = [
    {
      label: "Sign out",
      icon: <LogOut className="w-4 h-4" />,
      onClick: () => authClient.signOut(),
      variant: "danger",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!session) return null;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => showMenu && setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 hover:bg-white/10 transition-all duration-300",
          "px-3 py-1.5 rounded-md border border-white/10 bg-white/5"
        )}
      >
        <img
          src={
            session.user.image ||
            "https://cdn.discordapp.com/embed/avatars/0.png"
          }
          alt="User avatar"
          className={cn("rounded-full", sizeClasses[size])}
        />
        {showName && (
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-white">
              {session.user.name}
            </span>
            <ChevronDown
              className={cn(
                "w-4 h-4 text-white/60 transition-transform duration-200",
                isOpen && "transform rotate-180"
              )}
            />
          </div>
        )}
      </button>

      {showMenu && isOpen && (
        <div className="absolute right-0 mt-2 w-56 py-1.5 bg-zinc-900/80 backdrop-blur-lg rounded-md shadow-xl border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          {menuItems.map((item, index) => {
            const Component = "button";
            return (
              <Component
                key={index}
                onClick={item.onClick}
                className={cn(
                  "relative flex items-center gap-3 w-full px-3 py-2",
                  "text-sm transition-colors duration-200",
                  "hover:bg-white/5",
                  "text-red-400 hover:text-red-300"
                )}
              >
                <span className="text-red-400/70">{item.icon}</span>
                <span>{item.label}</span>
              </Component>
            );
          })}
        </div>
      )}
    </div>
  );
}
