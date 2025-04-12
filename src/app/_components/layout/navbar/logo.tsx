'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative pt-4 pl-3">
          <h1 className="text-xl font-black text-white tracking-widest uppercase relative overflow-visible">
            <span className="relative">
              <span className="absolute -top-3 -left-3 w-8 h-8">
                <Image 
                  src="/icons/icon.svg" 
                  alt="Wizard hat" 
                  width={32} 
                  height={32} 
                  className="object-contain"
                />
              </span>
              W
            </span>
            EBWIZ
          </h1>
        </div>
      </Link>
    </div>
  )
}