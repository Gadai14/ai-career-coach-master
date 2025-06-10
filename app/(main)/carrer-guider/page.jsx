"use client"
import { useState } from "react"
import { CodingTerminalModal } from "./_components/coding-terminal-modal" 
import { Terminal, Binary, Coffee, Code2, Hash, Globe, Layout, ArrowRight, Sparkles } from "lucide-react"

// RoadmapCard Component
const RoadmapCard = ({ title, description, icon: IconComponent, href, delay = 0 }) => {
  return (
    <div 
      className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-900/20 cursor-pointer animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon */}
      <div className="relative z-10 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          <IconComponent className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 space-y-3">
        <h3 className="text-lg font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
        
        {/* Action text */}
        <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-blue-400 transition-all duration-300 pt-2">
          <span>Follow our step-by-step guide with curated resources to master this skill.</span>
        </div>
        
        {/* View Roadmap Button */}
        <div className="pt-4">
          <div className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
            View Roadmap
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />
    </div>
  )
}


export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)

  const roadmaps = [
    {
      title: "Data Structures & Algorithms",
      description: "Master the fundamentals of computer science with DSA",
      icon: Binary,
      href: "/roadmaps/dsa"
    },
    {
      title: "Core Java",
      description: "Learn Java programming from basics to advanced concepts",
      icon: Coffee,
      href: "/roadmaps/java"
    },
    {
      title: "C++",
      description: "Become proficient in C++ programming language",
      icon: Code2,
      href: "/roadmaps/cpp"
    },
    {
      title: "C#",
      description: "Master C# and .NET framework development",
      icon: Hash,
      href: "/roadmaps/csharp"
    },
    {
      title: "Full Stack Web Development",
      description: "Learn to build complete web applications from front to back",
      icon: Globe,
      href: "/roadmaps/fullstack"
    },
    {
      title: "Frontend Development",
      description: "Master HTML, CSS, JavaScript and modern frameworks",
      icon: Layout,
      href: "/roadmaps/frontend"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative">
          <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
              {/* Left side - Main content */}
              <div className="flex-1 max-w-4xl">
                <div className="flex flex-col items-start gap-6 text-left">
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-2">
                    <Sparkles className="h-4 w-4" />
                    <span>Master Your Tech Skills</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                      Tech Career
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Roadmaps
                    </span>
                  </h1>
                  
                  <p className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
                    Choose your path and follow our step-by-step guides with curated 
                    YouTube resources to master your desired tech skill.
                  </p>
                </div>
              </div>

              {/* Right side - Terminal Button */}
              <div className="flex flex-col items-start lg:items-end gap-4 w-full lg:w-auto">
                <button
                  onClick={() => setIsTerminalOpen(true)}
                  className="group bg-gradient-to-r from-gray-800 to-gray-700 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-4 rounded-xl font-medium flex items-center gap-3 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 border border-gray-600/50 hover:border-transparent w-full lg:w-auto justify-center lg:justify-start"
                >
                  <Terminal className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Open Terminal</span>
                </button>
                
                <p className="text-sm text-gray-400 text-center lg:text-right max-w-[250px] leading-relaxed">
                  Practice coding while learning with our integrated terminal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmaps Section */}
        <section className="container mx-auto px-4 pb-16 md:pb-20">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
            {roadmaps.map((roadmap, index) => (
              <RoadmapCard
                key={roadmap.title}
                title={roadmap.title}
                description={roadmap.description}
                icon={roadmap.icon}
                href={roadmap.href}
                delay={index * 100}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Terminal Modal */}
      <CodingTerminalModal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}