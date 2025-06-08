"use client"

import { useState } from "react"
import { RoadmapCard } from "./_components/roadmap-card"
import { CodingTerminalModal } from "./_components/coding-terminal-modal"
import { Terminal } from "lucide-react"
import { Button } from "../../../components/ui/button"

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-white">
     
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white relative">
          <div className="container py-16 md:py-20">
            <div className="flex items-start justify-between">
              {/* Left side - Main content */}
              <div className="flex-1 max-w-[980px]">
                <div className="flex flex-col items-start gap-4 text-left">
                  <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                    Tech Career Roadmaps
                  </h1>
                  <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                    Choose your path and follow our step-by-step guides with curated YouTube resources to master your
                    desired tech skill.
                  </p>
                </div>
              </div>

              {/* Right side - Terminal Button */}
              <div className="flex flex-col items-end gap-4">
                <Button
                  onClick={() => setIsTerminalOpen(true)}
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Terminal className="h-5 w-5" />
                  Open Terminal
                </Button>
                <p className="text-sm text-muted-foreground text-right max-w-[200px]">
                  Practice coding while learning with our integrated terminal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmaps Section */}
        <section className="container pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <RoadmapCard
              title="Data Structures & Algorithms"
              description="Master the fundamentals of computer science with DSA"
              icon="Binary"
              href="/roadmaps/dsa"
            />
            <RoadmapCard
              title="Core Java"
              description="Learn Java programming from basics to advanced concepts"
              icon="Coffee"
              href="/roadmaps/java"
            />
            <RoadmapCard
              title="C++"
              description="Become proficient in C++ programming language"
              icon="Code2"
              href="/roadmaps/cpp"
            />
            <RoadmapCard
              title="C#"
              description="Master C# and .NET framework development"
              icon="Hash"
              href="/roadmaps/csharp"
            />
            <RoadmapCard
              title="Full Stack Web Development"
              description="Learn to build complete web applications from front to back"
              icon="Globe"
              href="/roadmaps/fullstack"
            />
            <RoadmapCard
              title="Frontend Development"
              description="Master HTML, CSS, JavaScript and modern frameworks"
              icon="Layout"
              href="/roadmaps/frontend"
            />
          </div>
        </section>
      </main>

      {/* Terminal Modal */}
      <CodingTerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  )
}
