'use client'

import { Modal } from "@/components/ui/modal"
import { LoginForm } from "./login-form"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative w-[480px] max-w-full">
        <LoginForm />
      </div>
    </Modal>
  )
}