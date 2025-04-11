'use client'

type BackgroundProps = {
  mousePosition: { x: number; y: number }
}

export default function Background({ mousePosition }: BackgroundProps) {
  return (
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)`,
          backgroundSize: '100% 100%',
        }}
      />
      
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-purple-900/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-cyan-900/20" />
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl animate-pulse" 
        style={{ animationDuration: '8s' }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl animate-pulse"
        style={{ animationDuration: '12s', animationDelay: '2s' }}
      />
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
    </div>
  )
}