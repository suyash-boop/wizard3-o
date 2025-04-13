'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex items-center p-2">
      <Link href="/" className="flex items-center">
        <Image 
          src="/icons/EGlogo.png" 
          alt="Evil Geniuses Logo" 
          width={180} 
          height={180} 
          className="object-contain"
        />
      </Link>
    </div>
  )
}