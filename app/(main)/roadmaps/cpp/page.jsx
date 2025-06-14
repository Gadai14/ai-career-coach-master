import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { RoadmapStep } from "../../carrer-guider/_components/roadmap-step";
import { VideoRecommendation } from "../../../../components/video-recommendation";
import { AnimatedRoadmapJourney } from "../../../../components/animated-roadmap-journey";

export default function CppRoadmap() {
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
          <h1 className="text-4xl font-bold mb-2 text-white">C++ Programming Roadmap</h1>
          <p className="text-gray-300 max-w-3xl">
            A comprehensive guide to mastering C++ programming from basics to advanced concepts. Follow these steps in
            order and use the recommended resources to build your C++ skills.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Left side - Roadmap content */}
          <div className="flex-1 max-w-4xl">
            <div className="space-y-16">
              <RoadmapStep
                number={1}
                title="C++ Fundamentals"
                description="Learn the core concepts and syntax of C++ programming language."
                difficulty="Beginner"
                estimatedTime="4-6 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Basic syntax and structure</li>
                    <li>Variables, data types, and operators</li>
                    <li>Input/Output operations</li>
                    <li>Control structures (if-else, loops)</li>
                    <li>Functions and function overloading</li>
                    <li>Arrays and strings</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="C++ Tutorial for Beginners - Full Course"
                      channel="freeCodeCamp.org"
                      thumbnail="https://i.ytimg.com/vi/vLnPwxZdW4Y/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=vLnPwxZdW4Y"
                      duration="4:01:17"
                    />
                    <VideoRecommendation
                      title="C++ Programming Course - Beginner to Advanced"
                      channel="Caleb Curry"
                      thumbnail="https://i.ytimg.com/vi/_bYFu9mBnr4/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=_bYFu9mBnr4"
                      duration="31:13:36"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={2}
                title="Object-Oriented Programming"
                description="Master OOP concepts that are fundamental to C++ programming."
                difficulty="Intermediate"
                estimatedTime="4-6 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Classes and Objects</li>
                    <li>Constructors and Destructors</li>
                    <li>Inheritance and Polymorphism</li>
                    <li>Encapsulation and Abstraction</li>
                    <li>Virtual functions and pure virtual functions</li>
                    <li>Operator overloading</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Object Oriented Programming in C++"
                      channel="Apna College"
                      thumbnail="https://i.ytimg.com/vi/wN0x9eZLix4/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=wN0x9eZLix4"
                      duration="2:03:32"
                    />
                    <VideoRecommendation
                      title="C++ OOP Complete Course"
                      channel="The Cherno"
                      thumbnail="https://i.ytimg.com/vi/18c3MTX0PK0/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=18c3MTX0PK0"
                      duration="45:30"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={3}
                title="Memory Management"
                description="Learn how to manage memory efficiently in C++."
                difficulty="Intermediate"
                estimatedTime="3-4 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Pointers and References</li>
                    <li>Dynamic memory allocation (new/delete)</li>
                    <li>Smart pointers (unique_ptr, shared_ptr)</li>
                    <li>Memory leaks and debugging</li>
                    <li>Stack vs Heap memory</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Pointers in C++"
                      channel="The Cherno"
                      thumbnail="https://i.ytimg.com/vi/DTxHyVn0ODg/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=DTxHyVn0ODg"
                      duration="13:11"
                    />
                    <VideoRecommendation
                      title="Smart Pointers in C++"
                      channel="The Cherno"
                      thumbnail="https://i.ytimg.com/vi/UOB7-B2MfwA/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=UOB7-B2MfwA"
                      duration="22:17"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={4}
                title="STL (Standard Template Library)"
                description="Master the powerful STL containers and algorithms."
                difficulty="Intermediate"
                estimatedTime="4-5 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Containers (vector, list, map, set, etc.)</li>
                    <li>Iterators</li>
                    <li>Algorithms (sort, find, transform, etc.)</li>
                    <li>Function objects and lambdas</li>
                    <li>Templates basics</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="C++ STL Tutorial"
                      channel="Apna College"
                      thumbnail="https://i.ytimg.com/vi/RRVYpIET_RU/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=RRVYpIET_RU"
                      duration="1:37:52"
                    />
                    <VideoRecommendation
                      title="STL in C++ | Standard Template Library"
                      channel="CodeHelp - by Babbar"
                      thumbnail="https://i.ytimg.com/vi/zBhVZzi5RdU/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=zBhVZzi5RdU"
                      duration="2:32:13"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={5}
                title="Advanced C++ Features"
                description="Explore advanced C++ concepts and modern C++ features."
                difficulty="Advanced"
                estimatedTime="6-8 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Templates and Template Specialization</li>
                    <li>Exception Handling</li>
                    <li>Multithreading and Concurrency</li>
                    <li>Modern C++ (C++11/14/17/20 features)</li>
                    <li>Move semantics and perfect forwarding</li>
                    <li>Design patterns in C++</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Modern C++ Tutorial"
                      channel="The Cherno"
                      thumbnail="https://i.ytimg.com/vi/18c3MTX0PK0/maxresdefault.jpg"
                      url="https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb"
                      duration="Playlist"
                    />
                    <VideoRecommendation
                      title="C++ Multithreading"
                      channel="CppCon"
                      thumbnail="https://i.ytimg.com/vi/F6Ipn7gCOsY/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=F6Ipn7gCOsY"
                      duration="1:02:30"
                    />
                  </div>
                </div>
              </RoadmapStep>
            </div>
          </div>

          {/* Right side - Beautiful Animated Journey Roadmap */}
          <div className="w-96 sticky top-20 h-fit">
            <AnimatedRoadmapJourney roadmapTitle="C++" totalSteps={5} estimatedMonths={6} />
          </div>
        </div>
      </main>
    </div>
  );
}
