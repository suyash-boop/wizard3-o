'use client'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

export default function BlogsPage() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-repeat opacity-10" />
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
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge 
              variant="outline" 
              className="mb-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 shadow-lg shadow-blue-900/10 font-mono text-xs tracking-wider"
            >
              <span className="text-blue-400">OUR</span>
              <span className="text-white font-semibold ml-1">BLOGS</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-md blur-md -z-10" />
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Tech Insights & Stories
              <span className="block text-gray-400 text-2xl mt-2 font-normal">Exploring the Digital Frontier</span>
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Dive into our collection of tech articles, coding adventures, and development insights. From practical tutorials to industry trends, we share our experiences and knowledge to help you navigate the ever-evolving world of technology.
            </p>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* First blog post remains unchanged */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                Tutorial
              </Badge>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                Next.js
              </Badge>
              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                GitHub API
              </Badge>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              🚀 GitHub API + Next.js: Live Project Data on Your Portfolio
            </h3>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 leading-relaxed mb-4">
                When we started building our team portfolio, we didn't just want a beautiful website—we wanted something that lives. That's when we decided to connect it directly to our GitHub profiles. By using the GitHub API and Next.js API routes, we built a dynamic section that fetches and displays our latest public repositories, stars, forks, and descriptions in real time.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                We wrote a custom API route in /pages/api/ that securely handles our GitHub access token and fetches repo data. On the frontend, we used useEffect and fetch (or SWR for better caching) to display that data. This integration ensures our site always reflects our latest work, whether it's a personal side project or a team collaboration. It's a real-time resume that updates itself—and we think that's pretty cool.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Posted on April 15, 2025</span>
                <span className="text-sm text-gray-500">5 min read</span>
              </div>
              <button className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-md hover:bg-blue-500/20 transition-colors">
                Read More
              </button>
            </div>
          </motion.article>

          {/* Second blog post */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                Tutorial
              </Badge>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                React
              </Badge>
              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                Animation
              </Badge>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              🌀 Framer Motion Magic: Adding Life to Your React UI
            </h3>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 leading-relaxed mb-4">
                Let's face it—static sites feel... static. We wanted our portfolio to feel like an experience, not just a scroll-through. That's where Framer Motion came in. With this animation library for React, we created fluid transitions between pages, hover effects that respond naturally, and entrance animations that make our content feel alive.
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-4">
                We started with simple fade-ins and slide-ups for components as they enter the viewport. Then we leveled up with AnimatePresence to add animations to dynamic routes, making the site feel more like an app. It's not just about eye candy—it's about guiding attention, improving user engagement, and giving that creative developer vibe we're going for.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Pro tip: we used variants to manage reusable animation patterns and synced them with Tailwind utility classes for a consistent look and feel.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Posted on April 16, 2025</span>
                <span className="text-sm text-gray-500">4 min read</span>
              </div>
              <button className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-md hover:bg-blue-500/20 transition-colors">
                Read More
              </button>
            </div>
          </motion.article>

          {/* Third blog post */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                Tutorial
              </Badge>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                Tailwind
              </Badge>
              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                UI/UX
              </Badge>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              🎨 Dark Mode, Light Speed: Theming with Tailwind & Shadcn/UI
            </h3>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 leading-relaxed mb-4">
                Dark mode isn't just trendy—it's a must-have for modern dev portfolios. But implementing it cleanly, with smooth transitions and consistent styling, can be tricky. We used Tailwind CSS along with Shadcn/UI, a modern React component library that works beautifully with Tailwind, to create a fully themeable UI.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                Our dark mode toggle uses Tailwind's dark: variant and respects system preferences. Theming our buttons, inputs, cards, and sections was seamless thanks to Shadcn's customizable components. With a single theme configuration, we were able to build both light and dark versions of our UI that felt designed, not just styled. The end result? A portfolio that feels smooth, polished, and accessible in every lighting condition.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Posted on April 17, 2025</span>
                <span className="text-sm text-gray-500">3 min read</span>
              </div>
              <button className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-md hover:bg-blue-500/20 transition-colors">
                Read More
              </button>
            </div>
          </motion.article>

          {/* Fourth blog post */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                Tutorial
              </Badge>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                AI/ML
              </Badge>
              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                OpenAI
              </Badge>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              🤖 Building a ChatBot with Next.js API Routes
            </h3>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 leading-relaxed mb-4">
                To make our site more interactive (and a little futuristic), we built a custom ChatBot. It's powered by OpenAI's GPT model and served through Next.js API Routes, allowing it to process real-time user queries—right on the site.
              </p>
              
              <p className="text-gray-400 leading-relaxed mb-4">
                The ChatBot can answer questions about our team, projects, stack, and even give fun facts about our development journey. Under the hood, we built a chat component with basic conversation flow, hooked it up to our backend route, and added typing animations for extra UX charm.
              </p>

              <p className="text-gray-400 leading-relaxed">
                What started as a fun side feature turned into a super useful tool for engaging visitors and helping them navigate the portfolio in a unique way. And of course, we used Tailwind and Framer Motion to keep it visually slick and responsive.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Posted on April 18, 2025</span>
                <span className="text-sm text-gray-500">4 min read</span>
              </div>
              <button className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-md hover:bg-blue-500/20 transition-colors">
                Read More
              </button>
            </div>
          </motion.article>
        {/* Fifth blog post */}
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8"
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                        Tutorial
                      </Badge>
                      <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                        Performance
                      </Badge>
                      <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                        Next.js
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      ⚡ Optimizing Performance in Next.js: What We Learned
                    </h3>
                    
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-400 leading-relaxed mb-4">
                        Performance is everything. A beautiful portfolio that lags or loads slowly is a missed opportunity. We spent time fine-tuning our site using the full power of Next.js performance features.
                      </p>
                      
                      <p className="text-gray-400 leading-relaxed mb-4">
                        We used next/image for optimized, responsive images. We split heavy components and dynamically imported them only when needed. We cached API calls and used ISR (Incremental Static Regeneration) to keep data fresh without killing performance. Lazy loading was applied to animations, and we even preloaded key routes to speed up navigation.
                      </p>
                  
                      <p className="text-gray-400 leading-relaxed">
                        Using Lighthouse and Web Vitals, we tracked our progress and pushed our site into the green zone on all metrics. The result? A sleek, responsive portfolio that loads fast, feels light, and keeps users engaged from the first click.
                      </p>
                    </div>
                  
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">Posted on April 19, 2025</span>
                        <span className="text-sm text-gray-500">4 min read</span>
                      </div>
                      <button className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-md hover:bg-blue-500/20 transition-colors">
                        Read More
                      </button>
                    </div>
                  </motion.article>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>
    </section>
  )
}