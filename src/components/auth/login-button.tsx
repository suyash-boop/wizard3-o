'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LoginModal } from "./login-modal"

interface LoginBttonProps {
   children: React.ReactNode,
   mode?: "modal" | "redirect",
   asChild?: boolean,
}

export function LoginButton({ children, mode = "modal", asChild = false }: LoginBttonProps) {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)

    const onClick = () => {
        if (mode === "modal") {
            setShowModal(true)
        } else {
            router.push("/auth/login")
        }
    }

    return (
        <>
            <span onClick={onClick} className="cursor-pointer">
                {children}
            </span>
            
            <LoginModal 
                isOpen={showModal} 
                onClose={() => setShowModal(false)} 
            />
        </>
    )
}