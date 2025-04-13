import Image from 'next/image'

export default function FooterLinks() {
  return (
    <div className="col-span-2 flex flex-col items-center text-center justify-center h-full">
      <div className="relative w-[200px] h-[100px] mb-6">
        <Image 
          src="/gdginfo.png" 
          alt="GDG Info"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="text-white/60 text-sm space-y-1">
        <p>Shri Ramdeobaba College of Engineering and Management,</p>
        <p>Ramdeo Tekdi, Gittikhadan-Katol Road,Nagpur - 440013</p>
        <a 
          href="mailto:dsc.rknec@gmail.com" 
          className="text-blue-400 hover:text-blue-300 transition-colors block mt-2"
        >
          dsc.rknec@gmail.com
        </a>
      </div>
    </div>
  );
}