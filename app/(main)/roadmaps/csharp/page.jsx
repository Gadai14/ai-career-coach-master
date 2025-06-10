import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RoadmapStep } from "@/components/roadmap-step";
import { VideoRecommendation } from "@/components/video-recommendation";
import { AnimatedRoadmapJourney } from "@/components/animated-roadmap-journey";

export default function CSharpRoadmap() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <SiteHeader />
      <main className="flex-1 container py-10">
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="mb-4 text-white hover:bg-gray-800">
            <Link href="/" className="flex items-center">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Roadmaps
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-2 text-white">C# Programming Roadmap</h1>
          <p className="text-gray-300 max-w-3xl">
            A comprehensive guide to mastering C# and .NET development from basics to advanced concepts. Follow these
            steps in order and use the recommended resources to build your C# skills.
          </p>
        </div>
        <div className="flex gap-8">
          {/* Left side - Roadmap content */}
          <div className="flex-1 max-w-4xl">
            <div className="space-y-16">
              <RoadmapStep
                number={1}
                title="C# Fundamentals"
                description="Learn the core concepts and syntax of C# programming language."
                difficulty="Beginner"
                estimatedTime="4-6 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>.NET Framework and .NET Core</li>
                    <li>Variables, data types, and operators</li>
                    <li>Control structures (if-else, loops, switch)</li>
                    <li>Methods and method overloading</li>
                    <li>Arrays and collections</li>
                    <li>String manipulation</li>
                  </ul>
                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="C# Tutorial for Beginners"
                      channel="Programming with Mosh"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=gfkTfcpWqAY"
                      duration="1:24:31"
                    />
                    <VideoRecommendation
                      title="C# Full Course for Beginners" 
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=GhQdlIFylQ8"
                      duration="4:31:26"
                    />
                    <VideoRecommendation
                      title="C# Programming All-in-One Tutorial Series" 
                      channel="Caleb Curry"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=qOruiBrXlAw"
                      duration="24:00:00"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={2}
                title="Object-Oriented Programming in C#" 
                description="Master OOP concepts specific to C# and .NET."
                difficulty="Intermediate"
                estimatedTime="4-6 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Classes and Objects</li>
                    <li>Constructors and Properties</li>
                    <li>Inheritance and Polymorphism</li>
                    <li>Interfaces and Abstract Classes</li>
                    <li>Encapsulation and Access Modifiers</li>
                    <li>Static members and methods</li>
                  </ul>
                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Object Oriented Programming in C#"
                      channel="Programming with Mosh"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=pTB0EiLXX2c"
                      duration="1:30:52"
                    />
                    <VideoRecommendation
                      title="C# OOP Concepts" 
                      channel="Kudvenkat"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=0xQz3YjJN0o"
                      duration="Playlist"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={3}
                title="Advanced C# Features" 
                description="Learn advanced C# language features and concepts."
                difficulty="Intermediate"
                estimatedTime="4-5 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Generics and Collections</li>
                    <li>LINQ (Language Integrated Query)</li>
                    <li>Delegates and Events</li>
                    <li>Lambda expressions</li>
                    <li>Exception handling</li>
                    <li>File I/O operations</li>
                  </ul>
                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="C# Advanced Topics"
                      channel="Programming with Mosh"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=2HjvHQIMlqs"
                      duration="1:07:38"
                    />
                    <VideoRecommendation
                      title="LINQ in C# Tutorial" 
                      channel="IAmTimCorey"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=5l2qA3Pc83M"
                      duration="1:01:54"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={4}
                title="ASP.NET Core Web Development"
                description="Learn to build web applications using ASP.NET Core."
                difficulty="Intermediate to Advanced"
                estimatedTime="6-8 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>ASP.NET Core MVC</li>
                    <li>Web API development</li>
                    <li>Entity Framework Core</li>
                    <li>Authentication and Authorization</li>
                    <li>Dependency Injection</li>
                    <li>Middleware and Filters</li>
                  </ul>
                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="ASP.NET Core Tutorial for Beginners"
                      channel="Programming with Mosh"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=BfEjDD8mWYg"
                      duration="1:49:12"
                    />
                    <VideoRecommendation
                      title="ASP.NET Core Web API Tutorial"
                      channel="IAmTimCorey"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=aIkpVzqLuhA"
                      duration="3:32:44"
                    />
                    <VideoRecommendation
                      title="Entity Framework Core Tutorial"
                      channel="Kudvenkat"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=qkJ9keBmQWo"
                      duration="Playlist"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={5}
                title="Desktop and Mobile Development"
                description="Explore desktop and mobile app development with C#." 
                difficulty="Advanced"
                estimatedTime="6-8 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>WPF (Windows Presentation Foundation)</li>
                    <li>WinUI and MAUI</li>
                    <li>Xamarin for mobile development</li>
                    <li>Blazor for web applications</li>
                    <li>Desktop application patterns (MVVM)</li>
                  </ul>
                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="WPF Tutorial for Beginners"
                      channel="AngelSix"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=Vjldip84CXQ"
                      duration="Playlist"
                    />
                    <VideoRecommendation
                      title=".NET MAUI Tutorial"
                      channel="James Montemagno"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=DuNLR_NJv8U"
                      duration="1:45:30"
                    />
                    <VideoRecommendation
                      title="Blazor Tutorial for Beginners"
                      channel="IAmTimCorey"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=4G_BzLxa9NIE"
                      duration="2:12:45"
                    />
                  </div>
                </div>
              </RoadmapStep>
            </div>
          </div>

          {/* Right side - Beautiful Animated Journey Roadmap */}
          <div className="w-96 sticky top-20 h-fit">
            <AnimatedRoadmapJourney roadmapTitle="C#" totalSteps={5} estimatedMonths={6} /> 
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}