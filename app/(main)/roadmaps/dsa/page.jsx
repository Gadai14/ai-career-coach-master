import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "../../../../components/ui/button"

import { RoadmapStep } from "../../carrer-guider/_components/roadmap-step"
import { VideoRecommendation } from "../../../../components/video-recommendation"
import { Separator } from "../../../../components/ui/separator"
import { CodingTerminal } from ".././../carrer-guider/_components/coding-terminal"

export default function DSARoadmap() {
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
          <h1 className="text-4xl font-bold mb-2 text-white">Data Structures & Algorithms Roadmap</h1>
          <p className="text-gray-300 max-w-3xl">
            Master the fundamentals of computer science with this comprehensive guide to Data Structures and Algorithms.
            Follow these steps in order and use the recommended resources to build your problem-solving skills.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Left side - Roadmap content */}
          <div className="flex-1 max-w-4xl">
            <div className="space-y-16">
              <RoadmapStep
                number={1}
                title="Programming Language Basics"
                description="Choose a programming language and master its fundamentals before diving into DSA concepts."
                difficulty="Beginner"
                estimatedTime="2-4 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Choose One Language:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Python - Easy to learn and read</li>
                    <li>Java - Widely used in interviews</li>
                    <li>C++ - Efficient and powerful</li>
                    <li>JavaScript - Web-friendly</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Python for Beginners - Learn Python in 1 Hour"
                      channel="Programming with Mosh"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=kqtD5dpn9C8"
                      duration="1:00:15"
                    />
                    <VideoRecommendation
                      title="Java Tutorial for Beginners"
                      channel="Programming with Mosh"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=eIrMbAQSU34"
                      duration="2:30:29"
                    />
                    <VideoRecommendation
                      title="C++ Tutorial for Beginners - Full Course"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=vLnPwxZdW4Y"
                      duration="4:01:17"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={2}
                title="Basic Data Structures"
                description="Learn the fundamental data structures that form the building blocks of algorithms."
                difficulty="Beginner"
                estimatedTime="4-6 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Arrays and Strings</li>
                    <li>Linked Lists (Singly and Doubly)</li>
                    <li>Stacks and Queues</li>
                    <li>Hash Tables</li>
                    <li>Sets and Maps</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Data Structures Easy to Advanced Course"
                      channel="William Fiset"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=RBSGKlAvoiM"
                      duration="8:03:40"
                    />
                    <VideoRecommendation
                      title="Linked Lists for Technical Interviews"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=Hj_rA0dhr2I"
                      duration="1:51:33"
                    />
                    <VideoRecommendation
                      title="Hash Tables and Hash Functions"
                      channel="CS Dojo"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=KyUTuwz_b7Q"
                      duration="13:45"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={3}
                title="Basic Algorithms"
                description="Learn fundamental algorithms and problem-solving techniques."
                difficulty="Beginner to Intermediate"
                estimatedTime="4-6 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Searching Algorithms (Linear, Binary)</li>
                    <li>Sorting Algorithms (Bubble, Selection, Insertion, Merge, Quick)</li>
                    <li>Recursion</li>
                    <li>Basic Problem Solving Patterns</li>
                    <li>Time and Space Complexity Analysis (Big O)</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Algorithms and Data Structures Tutorial - Full Course for Beginners"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=8hly31xKli0"
                      duration="5:22:09"
                    />
                    <VideoRecommendation
                      title="Sorting Algorithms Explained Visually"
                      channel="Reducible"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=RfXt_qHDEPw"
                      duration="23:50"
                    />
                    <VideoRecommendation
                      title="Big O Notation - Full Course"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=Mo4vesaut8g"
                      duration="1:49:20"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={4}
                title="Advanced Data Structures"
                description="Expand your knowledge with more complex data structures."
                difficulty="Intermediate"
                estimatedTime="6-8 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Trees (Binary, Binary Search, AVL, Red-Black)</li>
                    <li>Heaps and Priority Queues</li>
                    <li>Graphs (Representation, Traversal)</li>
                    <li>Tries</li>
                    <li>Disjoint Set / Union Find</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Binary Tree Algorithms for Technical Interviews"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=fAAZixBzIAI"
                      duration="1:45:29"
                    />
                    <VideoRecommendation
                      title="Graph Algorithms for Technical Interviews"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=tWVWeAqZ0WU"
                      duration="1:13:54"
                    />
                    <VideoRecommendation
                      title="Heap Data Structure - Explained and Visualized"
                      channel="Reducible"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=F_r0sJ1RqWk"
                      duration="14:05"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={5}
                title="Advanced Algorithms"
                description="Master complex algorithmic techniques for solving challenging problems."
                difficulty="Advanced"
                estimatedTime="8-10 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Graph Algorithms (DFS, BFS, Dijkstra's, Bellman-Ford)</li>
                    <li>Dynamic Programming</li>
                    <li>Greedy Algorithms</li>
                    <li>Backtracking</li>
                    <li>String Algorithms (KMP, Rabin-Karp)</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Dynamic Programming - Learn to Solve Algorithmic Problems"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=oBt53YbR9Kk"
                      duration="5:12:38"
                    />
                    <VideoRecommendation
                      title="Dijkstra's Algorithm - Computerphile"
                      channel="Computerphile"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=GazC3A4OQTE"
                      duration="10:43"
                    />
                    <VideoRecommendation
                      title="Greedy Algorithms Tutorial – Solve Coding Challenges"
                      channel="freeCodeCamp.org"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=bC7o8P_Ste4"
                      duration="1:52:53"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={6}
                title="Problem Solving Practice"
                description="Apply your knowledge by solving problems on competitive programming platforms."
                difficulty="All Levels"
                estimatedTime="Ongoing"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Recommended Platforms:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>LeetCode - Most popular for interview preparation</li>
                    <li>HackerRank - Good for beginners</li>
                    <li>CodeForces - For competitive programming</li>
                    <li>GeeksforGeeks - Great explanations and articles</li>
                    <li>AlgoExpert - Curated problems with video explanations</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="How to Use LeetCode Effectively"
                      channel="NeetCode"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=IB_R6CnPNBM"
                      duration="10:28"
                    />
                    <VideoRecommendation
                      title="How to Solve LeetCode Problems (NeetCode Roadmap)"
                      channel="NeetCode"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=SVvr3ZjtjI8"
                      duration="11:35"
                    />
                    <VideoRecommendation
                      title="How I Got Good at Coding Interviews"
                      channel="Clément Mihailescu"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=SVvr3ZjtjI8"
                      duration="10:13"
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={7}
                title="System Design & Advanced Topics"
                description="Learn how to design scalable systems and explore specialized algorithms."
                difficulty="Advanced"
                estimatedTime="8-12 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>System Design Fundamentals</li>
                    <li>Distributed Systems</li>
                    <li>Advanced Data Structures (Segment Trees, Fenwick Trees)</li>
                    <li>Network Flow Algorithms</li>
                    <li>Computational Geometry</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="System Design Interview – Step By Step Guide"
                      channel="ByteByteGo"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=i7twT3x5yv8"
                      duration="32:40"
                    />
                    <VideoRecommendation
                      title="Advanced Algorithms (COMPSCI 224)"
                      channel="Harvard University"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=0JUN9aDxVmI"
                      duration="2:09:32"
                    />
                    <VideoRecommendation
                      title="Advanced Data Structures"
                      channel="MIT OpenCourseWare"
                      thumbnail="/placeholder.svg?height=100&width=180"
                      url="https://www.youtube.com/watch?v=T0yzrZL1py0"
                      duration="1:22:06"
                    />
                  </div>
                </div>
              </RoadmapStep>
            </div>
          </div>

          {/* Right side - Coding Terminal */}
          <div className="w-96 sticky top-20 h-fit">
            <CodingTerminal />
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Separator className="my-8 bg-gray-700" />
          <h2 className="text-2xl font-bold mb-4 text-white">Practice Strategy</h2>
          <p className="text-gray-300 mb-6">
            Consistent practice is key to mastering DSA. Here's a recommended approach to problem-solving:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
              <h3 className="font-bold text-white">Beginner (1-2 months)</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>Solve 1-2 easy problems daily</li>
                <li>Focus on array, string, and basic data structure problems</li>
                <li>Study solution approaches if stuck for &gt;30 minutes</li>
                <li>Review and understand solutions thoroughly</li>
              </ul>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
              <h3 className="font-bold text-white">Intermediate (2-4 months)</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>Solve 2-3 problems daily (mix of easy and medium)</li>
                <li>Focus on trees, graphs, and dynamic programming</li>
                <li>Time your problem-solving sessions</li>
                <li>Revisit problems you struggled with</li>
              </ul>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
              <h3 className="font-bold text-white">Advanced (4+ months)</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>Solve 3-4 problems daily (including hard problems)</li>
                <li>Participate in coding contests</li>
                <li>Focus on optimizing solutions</li>
                <li>Practice system design questions</li>
              </ul>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
              <h3 className="font-bold text-white">Interview Preparation</h3>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                <li>Mock interviews with peers</li>
                <li>Explain your thought process out loud</li>
                <li>Review common interview questions</li>
                <li>Practice writing clean, bug-free code</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
