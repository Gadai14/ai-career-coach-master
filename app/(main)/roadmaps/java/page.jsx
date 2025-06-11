import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

import { RoadmapStep } from "../../carrer-guider/_components/roadmap-step"
import { VideoRecommendation } from "../../../../components/video-recommendation"
import { AnimatedRoadmapJourney } from "@/components/animated-roadmap-journey"

export default function JavaRoadmap() {
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
          <h1 className="text-4xl font-bold mb-2 text-white">Core Java Roadmap</h1>
          <p className="text-gray-300 max-w-3xl">
            A comprehensive guide to mastering Java programming from basics to advanced concepts. Follow these steps in
            order and use the recommended resources to build your Java skills.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Left side - Roadmap content */}
          <div className="flex-1 max-w-4xl">
            <div className="space-y-16">
              <RoadmapStep
                number={1}
                title="Java Fundamentals"
                description="Learn the core concepts and syntax of Java programming language."
                difficulty="Beginner"
                estimatedTime="4-6 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>JDK, JRE, and JVM</li>
                    <li>Variables, Data Types, and Operators</li>
                    <li>Control Flow (if-else, switch, loops)</li>
                    <li>Arrays and Strings</li>
                    <li>Methods and Method Overloading</li>
                    <li>Basic Input/Output</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Java Tutorial for Beginners"
                      channel="Programming with Mosh"
                      thumbnail="https://i.ytimg.com/vi/eIrMbAQSU34/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=eIrMbAQSU34"
                      duration="2:30:29"
                      views="3.2M views"
                      uploadDate="2 years ago"
                      description="Complete Java programming course for beginners. Learn Java from basics to advanced concepts with hands-on examples."
                      relatedVideos={[
                        {
                          title: "Java OOP Concepts",
                          channel: "Programming with Mosh",
                          thumbnail: "https://i.ytimg.com/vi/6T_HgnjoYwM/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=6T_HgnjoYwM",
                          duration: "1:30:58",
                          views: "1.8M views",
                        },
                        {
                          title: "Java Collections Framework",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/rzA7UJ-hQn4/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=rzA7UJ-hQn4",
                          duration: "1:01:45",
                          views: "750K views",
                        },
                      ]}
                    />
                    <VideoRecommendation
                      title="Java Programming for Beginners – Full Course"
                      channel="freeCodeCamp.org"
                      thumbnail="https://i.ytimg.com/vi/A74TOX803D0/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=A74TOX803D0"
                      duration="5:53:33"
                      views="2.5M views"
                      uploadDate="3 years ago"
                      description="Learn Java in this full course for beginners. This complete course is perfect for anyone who wants to learn Java programming."
                      relatedVideos={[
                        {
                          title: "Java Design Patterns",
                          channel: "freeCodeCamp.org",
                          thumbnail: "https://i.ytimg.com/vi/v9ejT3_jK7Q/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=v9ejT3_jK7Q",
                          duration: "3:04:04",
                          views: "450K views",
                        },
                        {
                          title: "Learn Java 8 - Full Tutorial",
                          channel: "freeCodeCamp.org",
                          thumbnail: "https://i.ytimg.com/vi/GoXwewQxBlc/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=GoXwewQxBlc",
                          duration: "1:44:52",
                          views: "600K views",
                        },
                      ]}
                    />
                    <VideoRecommendation
                      title="Java Full Course for Beginners"
                      channel="Telusko"
                      thumbnail="https://i.ytimg.com/vi/BGTx91t8q50/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=BGTx91t8q50"
                      duration="12:17:58"
                      views="1.2M views"
                      uploadDate="4 years ago"
                      description="Java tutorial for beginners full course. Learn Java programming from scratch in this complete course."
                      relatedVideos={[
                        {
                          title: "Java Tutorial for Beginners",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/k5W9Wn4Dn0U/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=k5W9Wn4Dn0U",
                          duration: "1:30:00",
                          views: "300K views",
                        },
                        {
                          title: "Java Interview Questions",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/JqzjYQTJlwI/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=JqzjYQTJlwI",
                          duration: "30:00",
                          views: "200K views",
                        },
                      ]}
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={2}
                title="Object-Oriented Programming"
                description="Master the OOP concepts that form the foundation of Java programming."
                difficulty="Beginner to Intermediate"
                estimatedTime="4-6 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Classes and Objects</li>
                    <li>Constructors and this keyword</li>
                    <li>Inheritance and super keyword</li>
                    <li>Polymorphism (Method Overriding)</li>
                    <li>Abstraction (Abstract classes and methods)</li>
                    <li>Encapsulation (Access modifiers)</li>
                    <li>Interfaces</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Object Oriented Programming in Java Course"
                      channel="freeCodeCamp.org"
                      thumbnail="https://i.ytimg.com/vi/6T_HgnjoYwM/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=6T_HgnjoYwM"
                      duration="1:30:58"
                      views="1.8M views"
                      uploadDate="3 years ago"
                      description="Learn object oriented programming in Java in this full course. This complete course is perfect for anyone who wants to learn OOP in Java."
                      relatedVideos={[
                        {
                          title: "Java Tutorial for Beginners",
                          channel: "Programming with Mosh",
                          thumbnail: "https://i.ytimg.com/vi/eIrMbAQSU34/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=eIrMbAQSU34",
                          duration: "2:30:29",
                          views: "3.2M views",
                        },
                        {
                          title: "Java Design Patterns",
                          channel: "freeCodeCamp.org",
                          thumbnail: "https://i.ytimg.com/vi/v9ejT3_jK7Q/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=v9ejT3_jK7Q",
                          duration: "3:04:04",
                          views: "450K views",
                        },
                      ]}
                    />
                    <VideoRecommendation
                      title="Java OOPs Concepts"
                      channel="Telusko"
                      thumbnail="https://i.ytimg.com/vi/7GwptabrYyk/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=7GwptabrYyk"
                      duration="1:27:28"
                      views="600K views"
                      uploadDate="5 years ago"
                      description="Java OOPs concepts tutorial. Learn about classes, objects, inheritance, polymorphism, abstraction, and encapsulation in Java."
                      relatedVideos={[
                        {
                          title: "Java Tutorial for Beginners",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/k5W9Wn4Dn0U/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=k5W9Wn4Dn0U",
                          duration: "1:30:00",
                          views: "300K views",
                        },
                        {
                          title: "Java Interview Questions",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/JqzjYQTJlwI/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=JqzjYQTJlwI",
                          duration: "30:00",
                          views: "200K views",
                        },
                      ]}
                    />
                    <VideoRecommendation
                      title="Java Interface Tutorial - Abstract Methods and Classes"
                      channel="Caleb Curry"
                      thumbnail="https://i.ytimg.com/vi/GhslBwrRsnw/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=GhslBwrRsnw"
                      duration="14:35"
                      views="200K views"
                      uploadDate="6 years ago"
                      description="Java interface tutorial. Learn about abstract methods and classes in Java."
                      relatedVideos={[
                        {
                          title: "Java Tutorial for Beginners",
                          channel: "Caleb Curry",
                          thumbnail: "https://i.ytimg.com/vi/N5KjZA-H6ng/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=N5KjZA-H6ng",
                          duration: "1:00:00",
                          views: "100K views",
                        },
                        {
                          title: "Java Design Patterns",
                          channel: "Caleb Curry",
                          thumbnail: "https://i.ytimg.com/vi/tK6rbtVsZio/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=tK6rbtVsZio",
                          duration: "30:00",
                          views: "50K views",
                        },
                      ]}
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={3}
                title="Exception Handling and File I/O"
                description="Learn how to handle errors and work with files in Java."
                difficulty="Intermediate"
                estimatedTime="2-3 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Exception Hierarchy</li>
                    <li>try-catch-finally blocks</li>
                    <li>throw and throws keywords</li>
                    <li>Custom Exceptions</li>
                    <li>File Handling (FileInputStream, FileOutputStream)</li>
                    <li>BufferedReader and BufferedWriter</li>
                    <li>Java NIO</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Exception Handling in Java"
                      channel="Telusko"
                      thumbnail="https://i.ytimg.com/vi/W-N2ltgU-X4/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=W-N2ltgU-X4"
                      duration="17:51"
                      views="300K views"
                      uploadDate="5 years ago"
                      description="Exception handling in Java tutorial. Learn about try-catch-finally blocks, throw and throws keywords, and custom exceptions in Java."
                      relatedVideos={[
                        {
                          title: "Java Tutorial for Beginners",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/k5W9Wn4Dn0U/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=k5W9Wn4Dn0U",
                          duration: "1:30:00",
                          views: "300K views",
                        },
                        {
                          title: "Java Interview Questions",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/JqzjYQTJlwI/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=JqzjYQTJlwI",
                          duration: "30:00",
                          views: "200K views",
                        },
                      ]}
                    />
                    <VideoRecommendation
                      title="Java File Handling Tutorial"
                      channel="Telusko"
                      thumbnail="https://i.ytimg.com/vi/SslMi6ptwH8/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=SslMi6ptwH8"
                      duration="19:45"
                      views="200K views"
                      uploadDate="5 years ago"
                      description="Java file handling tutorial. Learn about FileInputStream, FileOutputStream, BufferedReader, and BufferedWriter in Java."
                      relatedVideos={[
                        {
                          title: "Java Tutorial for Beginners",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/k5W9Wn4Dn0U/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=k5W9Wn4Dn0U",
                          duration: "1:30:00",
                          views: "300K views",
                        },
                        {
                          title: "Java Interview Questions",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/JqzjYQTJlwI/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=JqzjYQTJlwI",
                          duration: "30:00",
                          views: "200K views",
                        },
                      ]}
                    />
                    <VideoRecommendation
                      title="Java NIO Tutorial"
                      channel="Programming with Mosh"
                      thumbnail="https://i.ytimg.com/vi/F2nF1E4qVEQ/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=F2nF1E4qVEQ"
                      duration="12:18"
                      views="100K views"
                      uploadDate="3 years ago"
                      description="Java NIO tutorial. Learn about Java NIO in this tutorial."
                      relatedVideos={[
                        {
                          title: "Java Tutorial for Beginners",
                          channel: "Programming with Mosh",
                          thumbnail: "https://i.ytimg.com/vi/eIrMbAQSU34/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=eIrMbAQSU34",
                          duration: "2:30:29",
                          views: "3.2M views",
                        },
                        {
                          title: "Java OOP Concepts",
                          channel: "Programming with Mosh",
                          thumbnail: "https://i.ytimg.com/vi/6T_HgnjoYwM/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=6T_HgnjoYwM",
                          duration: "1:30:58",
                          views: "1.8M views",
                        },
                      ]}
                    />
                  </div>
                </div>
              </RoadmapStep>

              <RoadmapStep
                number={4}
                title="Collections Framework"
                description="Master Java's built-in data structures for storing and manipulating groups of objects."
                difficulty="Intermediate"
                estimatedTime="3-4 weeks"
              >
                <div className="space-y-4 mt-4">
                  <h4 className="font-medium text-white">Key Topics to Learn:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>List (ArrayList, LinkedList)</li>
                    <li>Set (HashSet, LinkedHashSet, TreeSet)</li>
                    <li>Queue and Deque</li>
                    <li>Map (HashMap, LinkedHashMap, TreeMap)</li>
                    <li>Iterators and Enhanced for loop</li>
                    <li>Comparable and Comparator interfaces</li>
                    <li>Collections utility class</li>
                  </ul>

                  <h4 className="font-medium mt-6 text-white">Recommended Videos:</h4>
                  <div className="space-y-4">
                    <VideoRecommendation
                      title="Java Collections Framework Tutorial"
                      channel="Telusko"
                      thumbnail="https://i.ytimg.com/vi/rzA7UJ-hQn4/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=rzA7UJ-hQn4"
                      duration="1:01:45"
                      views="750K views"
                      uploadDate="5 years ago"
                      description="Java Collections Framework tutorial. Learn about List, Set, Queue, and Map in Java."
                      relatedVideos={[
                        {
                          title: "Java Tutorial for Beginners",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/k5W9Wn4Dn0U/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=k5W9Wn4Dn0U",
                          duration: "1:30:00",
                          views: "300K views",
                        },
                        {
                          title: "Java Interview Questions",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/JqzjYQTJlwI/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=JqzjYQTJlwI",
                          duration: "30:00",
                          views: "200K views",
                        },
                      ]}
                    />
                    <VideoRecommendation
                      title="Java Collections - Full Course"
                      channel="Amigoscode"
                      thumbnail="https://i.ytimg.com/vi/GdAon80-0KA/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=GdAon80-0KA"
                      duration="1:28:30"
                      views="200K views"
                      uploadDate="2 years ago"
                      description="Java Collections full course. Learn about List, Set, Queue, and Map in Java."
                      relatedVideos={[
                        {
                          title: "Java Tutorial for Beginners",
                          channel: "Amigoscode",
                          thumbnail: "https://i.ytimg.com/vi/eIrMbAQSU34/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=eIrMbAQSU34",
                          duration: "2:30:29",
                          views: "3.2M views",
                        },
                        {
                          title: "Java OOP Concepts",
                          channel: "Amigoscode",
                          thumbnail: "https://i.ytimg.com/vi/6T_HgnjoYwM/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=6T_HgnjoYwM",
                          duration: "1:30:58",
                          views: "1.8M views",
                        },
                      ]}
                    />
                    <VideoRecommendation
                      title="Java Map Tutorial"
                      channel="Telusko"
                      thumbnail="https://i.ytimg.com/vi/H62Jfv1DJlU/maxresdefault.jpg"
                      url="https://www.youtube.com/watch?v=H62Jfv1DJlU"
                      duration="14:56"
                      views="200K views"
                      uploadDate="5 years ago"
                      description="Java Map tutorial. Learn about HashMap, LinkedHashMap, and TreeMap in Java."
                      relatedVideos={[
                        {
                          title: "Java Tutorial for Beginners",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/k5W9Wn4Dn0U/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=k5W9Wn4Dn0U",
                          duration: "1:30:00",
                          views: "300K views",
                        },
                        {
                          title: "Java Interview Questions",
                          channel: "Telusko",
                          thumbnail: "https://i.ytimg.com/vi/JqzjYQTJlwI/maxresdefault.jpg",
                          url: "https://www.youtube.com/watch?v=JqzjYQTJlwI",
                          duration: "30:00",
                          views: "200K views",
                        },
                      ]}
                    />
                  </div>
                </div>
              </RoadmapStep>
            </div>
          </div>

          {/* Right side - Beautiful Animated Journey Roadmap */}
          <div className="w-96 sticky top-20 h-fit">
            <AnimatedRoadmapJourney roadmapTitle="Java" totalSteps={4} estimatedMonths={6} />
          </div>
        </div>
      </main>
    </div>
  )
}
