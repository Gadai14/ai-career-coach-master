import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RoadmapStep } from "../../carrer-guider/_components/roadmap-step"
import { VideoRecommendation } from "../../../../components/video-recommendation"
import { Separator } from "@/components/ui/separator"
import { AnimatedRoadmapJourney } from "@/components/animated-roadmap-journey"

export default function FrontendRoadmap() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex-1 container py-10">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4 text-white hover:bg-gray-800">
            <Link href="/" className="flex items-center">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Roadmaps
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-2 text-white">Frontend Development Roadmap</h1>
          <p className="text-gray-300 max-w-3xl">
            A comprehensive guide to becoming a frontend developer, covering HTML, CSS, JavaScript, frameworks, and
            modern development tools. Follow these steps in order and use the recommended resources to build your
            skills.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Left side - Roadmap content */}
          <div className="flex-1 max-w-4xl">
            <div className="space-y-16">
              <RoadmapStep
                number={1}
                title="HTML Fundamentals"
                description="Learn the foundation of web development with HTML - the markup language that structures web content."
                difficulty="Beginner"
                estimatedTime="2-3 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>HTML document structure and syntax</li>
                    <li>Semantic HTML5 elements</li>
                    <li>Forms and input elements</li>
                    <li>Tables and lists</li>
                    <li>Links and navigation</li>
                    <li>Images and media elements</li>
                    <li>Accessibility basics</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="HTML Full Course - Build a Website Tutorial"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=pQN-pnXPaVg"
                      duration="2:04:25"
                    />
                    <VideoRecommendation
                      title="HTML Tutorial for Beginners: HTML Crash Course"
                      channel="Programming with Mosh"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=qz0aGYrrlhU"
                      duration="1:08:33"
                    />
                    <VideoRecommendation
                      title="Learn HTML5 and CSS3 From Scratch - Full Course"
                      channel="Traversy Media"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=mU6anWqZJcc"
                      duration="11:18:27"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={2}
                title="CSS Fundamentals & Styling"
                description="Master CSS to style and layout your web pages beautifully and responsively."
                difficulty="Beginner"
                estimatedTime="4-6 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>CSS syntax and selectors</li>
                    <li>Box model and positioning</li>
                    <li>Flexbox and CSS Grid</li>
                    <li>Responsive design and media queries</li>
                    <li>CSS animations and transitions</li>
                    <li>CSS preprocessors (Sass/SCSS)</li>
                    <li>CSS frameworks (Bootstrap, Tailwind)</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="CSS Tutorial - Zero to Hero (Complete Course)"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=1Rs2ND1ryYc"
                      duration="6:18:27"
                    />
                    <VideoRecommendation
                      title="Flexbox CSS In 20 Minutes"
                      channel="Traversy Media"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=JJSoEo8JSnc"
                      duration="20:28"
                    />
                    <VideoRecommendation
                      title="CSS Grid Layout Crash Course"
                      channel="Traversy Media"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=jV8B24rSN5o"
                      duration="28:52"
                    />
                    <VideoRecommendation
                      title="Tailwind CSS Crash Course"
                      channel="Traversy Media"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=UBOj6rqRUME"
                      duration="1:25:17"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={3}
                title="JavaScript Fundamentals"
                description="Learn JavaScript to add interactivity and dynamic behavior to your web pages."
                difficulty="Beginner to Intermediate"
                estimatedTime="6-8 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Variables, data types, and operators</li>
                    <li>Functions and scope</li>
                    <li>DOM manipulation</li>
                    <li>Event handling</li>
                    <li>Asynchronous JavaScript (Promises, async/await)</li>
                    <li>ES6+ features (arrow functions, destructuring, modules)</li>
                    <li>Error handling and debugging</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="JavaScript Programming - Full Course"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=jS4aFq5-91M"
                      duration="8:01:24"
                    />
                    <VideoRecommendation
                      title="JavaScript DOM Manipulation – Full Course for Beginners"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=5fb2aPlgoys"
                      duration="6:08:27"
                    />
                    <VideoRecommendation
                      title="Async JavaScript Crash Course - Callbacks, Promises, Async Await"
                      channel="Traversy Media"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=PoRJizFvM7s"
                      duration="1:16:44"
                    />
                    <VideoRecommendation
                      title="Modern JavaScript ES6 / ES2015 - [Full Course]"
                      channel="Academind"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=2qDywOS7VAc"
                      duration="2:38:32"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={4}
                title="Version Control & Development Tools"
                description="Learn essential development tools and workflows used in professional frontend development."
                difficulty="Beginner"
                estimatedTime="2-3 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Git and GitHub basics</li>
                    <li>Command line fundamentals</li>
                    <li>Code editors and extensions (VS Code)</li>
                    <li>Browser developer tools</li>
                    <li>Package managers (npm, yarn)</li>
                    <li>Build tools and bundlers (Webpack, Vite)</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Git and GitHub for Beginners - Crash Course"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=RGOj5yH7evk"
                      duration="1:08:29"
                    />
                    <VideoRecommendation
                      title="VS Code Tutorial for Beginners"
                      channel="Programming with Mosh"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=VqCgcpAypFQ"
                      duration="33:46"
                    />
                    <VideoRecommendation
                      title="NPM Crash Course"
                      channel="Traversy Media"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=jHDhaSSKmB0"
                      duration="17:49"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={5}
                title="Frontend Frameworks & Libraries"
                description="Learn modern JavaScript frameworks to build complex, interactive web applications."
                difficulty="Intermediate"
                estimatedTime="8-12 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Choose One Framework to Start:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>React - Most popular, great ecosystem</li>
                    <li>Vue.js - Beginner-friendly, progressive</li>
                    <li>Angular - Full-featured, enterprise-ready</li>
                    <li>Svelte - Modern, compile-time optimized</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Key Concepts to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Component-based architecture</li>
                    <li>State management</li>
                    <li>Routing and navigation</li>
                    <li>API integration</li>
                    <li>Testing frameworks</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="React Course - Beginner's Tutorial for React JavaScript Library [2023]"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=bMknfKXIFA8"
                      duration="11:55:27"
                    />
                    <VideoRecommendation
                      title="Vue.js Course for Beginners [2021 Tutorial]"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=FXpIoQ_rT_c"
                      duration="3:49:39"
                    />
                    <VideoRecommendation
                      title="Angular Tutorial for Beginners: Learn Angular & TypeScript"
                      channel="Programming with Mosh"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=k5E2AVpwsko"
                      duration="2:02:36"
                    />
                    <VideoRecommendation
                      title="Svelte Tutorial for Beginners"
                      channel="The Net Ninja"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO"
                      duration="Playlist"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={6}
                title="Advanced Frontend Concepts"
                description="Master advanced concepts and tools used in modern frontend development."
                difficulty="Advanced"
                estimatedTime="6-8 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>TypeScript for type safety</li>
                    <li>State management (Redux, Zustand, Pinia)</li>
                    <li>Testing (Jest, Cypress, Testing Library)</li>
                    <li>Performance optimization</li>
                    <li>Progressive Web Apps (PWAs)</li>
                    <li>Server-Side Rendering (Next.js, Nuxt.js)</li>
                    <li>Micro-frontends architecture</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="TypeScript Course for Beginners - Learn TypeScript from Scratch!"
                      channel="Academind"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=BwuLxPH8IDs"
                      duration="2:36:39"
                    />
                    <VideoRecommendation
                      title="Redux Toolkit Tutorial – JavaScript State Management Library"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=bbkBuqC1rU4"
                      duration="1:33:27"
                    />
                    <VideoRecommendation
                      title="Next.js 14 Full Course 2023 | Build and Deploy a Full Stack App"
                      channel="JavaScript Mastery"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=wm5gMKuwSYk"
                      duration="5:28:57"
                    />
                    <VideoRecommendation
                      title="React Testing Library Crash Course"
                      channel="Traversy Media"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=OVNjsIto9xM"
                      duration="1:07:47"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={7}
                title="Deployment & Production"
                description="Learn how to deploy and maintain frontend applications in production environments."
                difficulty="Intermediate to Advanced"
                estimatedTime="3-4 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Static site hosting (Netlify, Vercel, GitHub Pages)</li>
                    <li>Content Delivery Networks (CDNs)</li>
                    <li>CI/CD pipelines for frontend</li>
                    <li>Environment variables and configuration</li>
                    <li>Performance monitoring and analytics</li>
                    <li>SEO optimization</li>
                    <li>Security best practices</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Deploy React App to Netlify, Vercel, GitHub Pages"
                      channel="Traversy Media"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=dn9cSRrDzko"
                      duration="32:15"
                    />
                    <VideoRecommendation
                      title="Frontend Web Performance Optimization"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=AQqFZ5t8uNc"
                      duration="1:23:45"
                    />
                    <VideoRecommendation
                      title="SEO for Developers in 100 Seconds"
                      channel="Fireship"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=-B58GgsehKQ"
                      duration="2:15"
                    />
                  </div>
                </div>
              </RoadmapStep>
            </div>
          </div>

          {/* Right side - Beautiful Animated Journey Roadmap */}
          <div className="w-96 sticky top-20 h-fit">
            <AnimatedRoadmapJourney roadmapTitle="Frontend" totalSteps={7} estimatedMonths={7} />
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Separator className="my-8 bg-gray-700" />
          <h2 className="text-2xl font-bold mb-4 text-white">Frontend Projects to Build</h2>
          <p className="text-gray-300 mb-6">
            Building projects is essential for mastering frontend development. Here are some project ideas to work on as
            you progress:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
              <h3 className="font-bold text-white">Beginner Projects</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>Personal portfolio website</li>
                <li>Landing page with responsive design</li>
                <li>Calculator app</li>
                <li>To-do list application</li>
                <li>Weather app using API</li>
              </ul>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
              <h3 className="font-bold text-white">Intermediate Projects</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>E-commerce product catalog</li>
                <li>Movie search and rating app</li>
                <li>Blog with CMS integration</li>
                <li>Recipe finder application</li>
                <li>Social media dashboard</li>
              </ul>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
              <h3 className="font-bold text-white">Advanced Projects</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>Real-time chat application</li>
                <li>Project management tool</li>
                <li>Online learning platform</li>
                <li>Progressive Web App (PWA)</li>
                <li>Multi-tenant SaaS application</li>
              </ul>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
              <h3 className="font-bold text-white">Portfolio Showcase</h3>
              <p className="mt-2 text-sm text-gray-300">
                Create a comprehensive portfolio showcasing your best work. Include live demos, source code links,
                technology stacks used, and detailed project descriptions. Deploy it using modern hosting platforms.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
