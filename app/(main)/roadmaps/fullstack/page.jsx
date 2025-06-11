import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RoadmapStep } from "../../carrer-guider/_components/roadmap-step"
import { VideoRecommendation } from "../../../../components/video-recommendation"
import { Separator } from "@/components/ui/separator"
import { AnimatedRoadmapJourney } from "../../../../components/animated-roadmap-journey"

export default function FullStackRoadmap() {
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
          <h1 className="text-4xl font-bold mb-2 text-white">Full Stack Web Development Roadmap</h1>
          <p className="text-gray-300 max-w-3xl">
            A comprehensive guide to becoming a full stack web developer, covering frontend, backend, databases, and
            deployment. Follow these steps in order and use the recommended resources to build your skills.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Left side - Roadmap content */}
          <div className="flex-1 max-w-4xl">
            <div className="space-y-16">
              <RoadmapStep
                number={1}
                title="HTML, CSS & JavaScript Fundamentals"
                description="Start with the core building blocks of the web. Learn HTML for structure, CSS for styling, and JavaScript for interactivity."
                difficulty="Beginner"
                estimatedTime="4-6 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>HTML5 semantic elements</li>
                    <li>CSS layouts, Flexbox and Grid</li>
                    <li>CSS responsive design</li>
                    <li>JavaScript basics and DOM manipulation</li>
                    <li>ES6+ features</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="HTML & CSS Full Course - Beginner to Pro"
                      channel="SuperSimpleDev"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=G3e-cpL7ofc"
                      duration="6:30:32"
                    />
                    <VideoRecommendation
                      title="JavaScript Programming - Full Course"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=jS4aFq5-91M"
                      duration="8:01:24"
                    />
                    <VideoRecommendation
                      title="CSS Flexbox Crash Course"
                      channel="Traversy Media"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=3YW65K6LcIA"
                      duration="20:30"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={2}
                title="Frontend Frameworks"
                description="Learn a modern JavaScript framework to build interactive user interfaces more efficiently."
                difficulty="Intermediate"
                estimatedTime="6-8 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Choose One Framework:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>React - Most popular and in-demand</li>
                    <li>Vue - Easy to learn and integrate</li>
                    <li>Angular - Full-featured framework</li>
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
                      title="Next.js 14 Full Course 2023 | Build and Deploy a Full Stack App Using the New App Router"
                      channel="JavaScript Mastery"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=wm5gMKuwSYk"
                      duration="5:28:57"
                    />
                    <VideoRecommendation
                      title="Vue.js Course for Beginners [2021 Tutorial]"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=FXpIoQ_rT_c"
                      duration="3:49:39"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={3}
                title="Backend Development"
                description="Learn server-side programming to handle data processing, authentication, and business logic."
                difficulty="Intermediate"
                estimatedTime="8-10 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Choose One Backend Technology:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Node.js & Express - JavaScript on the server</li>
                    <li>Python & Django/Flask - Powerful and readable</li>
                    <li>Java & Spring Boot - Enterprise-grade</li>
                    <li>C# & ASP.NET - Microsoft ecosystem</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Node.js and Express.js - Full Course"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=Oe421EPjeBE"
                      duration="8:16:47"
                    />
                    <VideoRecommendation
                      title="Python Django Tutorial for Beginners"
                      channel="Programming with Mosh"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=rHux0gMZ3Eg"
                      duration="1:31:28"
                    />
                    <VideoRecommendation
                      title="Spring Boot Tutorial for Beginners"
                      channel="Amigoscode"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=9SGDpanrc8U"
                      duration="2:05:32"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={4}
                title="Databases"
                description="Learn how to store, retrieve and manage data efficiently."
                difficulty="Intermediate"
                estimatedTime="4-6 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Database Types to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>SQL: PostgreSQL, MySQL, or SQL Server</li>
                    <li>NoSQL: MongoDB or Firebase</li>
                    <li>Database design principles</li>
                    <li>ORM (Object-Relational Mapping)</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="SQL Tutorial - Full Database Course for Beginners"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=HXV3zeQKqGY"
                      duration="4:20:37"
                    />
                    <VideoRecommendation
                      title="MongoDB Crash Course"
                      channel="Traversy Media"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=-56x56UppqQ"
                      duration="1:12:35"
                    />
                    <VideoRecommendation
                      title="Database Design Course - Learn how to design and plan a database for beginners"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=ztHopE5Wnpc"
                      duration="8:16:31"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={5}
                title="API Development"
                description="Learn how to create and consume APIs to connect your frontend and backend."
                difficulty="Intermediate"
                estimatedTime="3-4 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>RESTful API principles</li>
                    <li>GraphQL</li>
                    <li>Authentication & Authorization</li>
                    <li>API testing</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Build a REST API with Node.js, Express, & MongoDB"
                      channel="Web Dev Simplified"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=fgTGADljAeg"
                      duration="35:34"
                    />
                    <VideoRecommendation
                      title="GraphQL Crash Course With Full Stack MERN Project"
                      channel="Traversy Media"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=BcLNfwF04Kw"
                      duration="1:48:59"
                    />
                    <VideoRecommendation
                      title="JWT Authentication Tutorial - Node.js"
                      channel="Web Dev Simplified"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=mbsmsi7l3r4"
                      duration="19:45"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={6}
                title="Deployment & DevOps"
                description="Learn how to deploy your applications and implement CI/CD pipelines."
                difficulty="Advanced"
                estimatedTime="4-6 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Git & GitHub workflows</li>
                    <li>Docker & containerization</li>
                    <li>Cloud platforms (AWS, Azure, GCP)</li>
                    <li>CI/CD pipelines</li>
                    <li>Monitoring and logging</li>
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
                      title="Docker Tutorial for Beginners"
                      channel="TechWorld with Nana"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=3c-iBn73dDE"
                      duration="1:39:06"
                    />
                    <VideoRecommendation
                      title="AWS Basics for Beginners - Full Course"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=ulprqHHWlng"
                      duration="5:27:50"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={7}
                title="Advanced Topics & Specialization"
                description="Deepen your knowledge in specific areas based on your interests and career goals."
                difficulty="Advanced"
                estimatedTime="Ongoing"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Specialization Options:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Progressive Web Apps (PWAs)</li>
                    <li>Mobile development (React Native, Flutter)</li>
                    <li>Web security</li>
                    <li>Performance optimization</li>
                    <li>Microservices architecture</li>
                    <li>Serverless computing</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Progressive Web Apps (PWA) Tutorial for Beginners"
                      channel="The Net Ninja"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7"
                      duration="Playlist"
                    />
                    <VideoRecommendation
                      title="React Native Crash Course for Beginners - Build a Complete App"
                      channel="Academind"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=qSRrxpdMpVc"
                      duration="2:32:40"
                    />
                    <VideoRecommendation
                      title="Microservices with Node JS and React"
                      channel="Stephen Grider"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=XVMG-SRGXQI"
                      duration="1:01:53"
                    />
                  </div>
                </div>
              </RoadmapStep>
            </div>
          </div>

          {/* Right side - Beautiful Animated Journey Roadmap */}
          <div className="w-96 sticky top-20 h-fit">
            <AnimatedRoadmapJourney roadmapTitle="Full Stack" totalSteps={7} estimatedMonths={8} />
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Separator className="my-8 bg-gray-700" />
          <h2 className="text-2xl font-bold mb-4 text-white">Projects to Build</h2>
          <p className="text-gray-300 mb-6">
            Building projects is the best way to solidify your knowledge. Here are some project ideas to work on as you
            progress through the roadmap:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
              <h3 className="font-bold text-white">Beginner Projects</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>Personal portfolio website</li>
                <li>To-do list application</li>
                <li>Weather app using a public API</li>
                <li>Simple blog with static content</li>
              </ul>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
              <h3 className="font-bold text-white">Intermediate Projects</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>E-commerce store with cart functionality</li>
                <li>Social media dashboard</li>
                <li>Recipe sharing platform</li>
                <li>Job board with filtering</li>
              </ul>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
              <h3 className="font-bold text-white">Advanced Projects</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>Full-featured social network</li>
                <li>Real-time chat application</li>
                <li>Project management tool</li>
                <li>Online learning platform</li>
              </ul>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
              <h3 className="font-bold text-white">Capstone Project</h3>
              <p className="mt-2 text-sm text-gray-300">
                Build a complete application that showcases all your skills. Include authentication, database, file
                uploads, responsive design, and deploy it to a cloud platform. Document your process and add it to your
                portfolio.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
