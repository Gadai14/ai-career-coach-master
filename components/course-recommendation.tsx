"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ExternalLink, Star, DollarSign, BookOpen } from "lucide-react"
import Image from "next/image"

interface Course {
  id: string
  title: string
  instructor: string
  platform: "udemy" | "coursera" | "edx" | "youtube" | "other"
  image: string
  rating: number
  reviews: number
  price: number | "Free"
  discount?: number
  url: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels"
  duration: string
  tags: string[]
}

interface CourseRecommendationProps {
  topic: string
  currentStep: number
}

export function CourseRecommendation({ topic, currentStep }: CourseRecommendationProps) {
  const [selectedTab, setSelectedTab] = useState("recommended")

  // Get courses based on topic and current step
  const getCourses = (topic: string, step: number): Course[] => {
    // Map step number to difficulty level
    const getLevel = (step: number): "Beginner" | "Intermediate" | "Advanced" | "All Levels" => {
      if (step <= 1) return "Beginner"
      if (step <= 3) return "Intermediate"
      return "Advanced"
    }

    const level = getLevel(step)

    // Course database by topic
    const courseDatabase: Record<string, Course[]> = {
      cpp: [
        {
          id: "cpp-1",
          title: "Beginning C++ Programming - From Beginner to Beyond",
          instructor: "Tim Buchalka, Dr. Frank Mitropoulos",
          platform: "udemy",
          image: "https://img-c.udemycdn.com/course/240x135/1758098_9fb7_3.jpg",
          rating: 4.6,
          reviews: 65432,
          price: 84.99,
          discount: 15.99,
          url: "https://www.udemy.com/course/beginning-c-plus-plus-programming/",
          description: "Learn C++ programming from scratch. Perfect for beginners with no prior experience.",
          level: "Beginner",
          duration: "46 hours",
          tags: ["C++", "Programming", "Beginner"],
        },
        {
          id: "cpp-2",
          title: "C++: The Complete Reference",
          instructor: "Abdul Bari",
          platform: "udemy",
          image: "https://img-c.udemycdn.com/course/240x135/2640372_6b7e_5.jpg",
          rating: 4.7,
          reviews: 32145,
          price: 94.99,
          discount: 13.99,
          url: "https://www.udemy.com/course/cpp-complete-reference/",
          description: "Master C++ programming with comprehensive coverage of all concepts.",
          level: "All Levels",
          duration: "38 hours",
          tags: ["C++", "Programming", "Complete"],
        },
        {
          id: "cpp-3",
          title: "Learn C++ Programming - Beginner to Advanced",
          instructor: "CodeWithHarry",
          platform: "youtube",
          image: "https://i.ytimg.com/vi/z9bZufPHFLU/maxresdefault.jpg",
          rating: 4.8,
          reviews: 15000,
          price: "Free",
          url: "https://www.youtube.com/watch?v=z9bZufPHFLU",
          description: "Complete C++ tutorial series covering all concepts from basics to advanced.",
          level: "Beginner",
          duration: "15 hours",
          tags: ["C++", "Programming", "Free"],
        },
        {
          id: "cpp-4",
          title: "C++ Programming Course - Beginner to Advanced",
          instructor: "freeCodeCamp",
          platform: "youtube",
          image: "https://i.ytimg.com/vi/vLnPwxZdW4Y/maxresdefault.jpg",
          rating: 4.9,
          reviews: 25000,
          price: "Free",
          url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
          description: "Learn C++ programming from scratch with this comprehensive tutorial.",
          level: "All Levels",
          duration: "31 hours",
          tags: ["C++", "Programming", "Free"],
        },
        {
          id: "cpp-5",
          title: "C++ Advanced Concepts: OOP and STL",
          instructor: "Striver",
          platform: "youtube",
          image: "https://i.ytimg.com/vi/WQoB2z67hvY/maxresdefault.jpg",
          rating: 4.7,
          reviews: 8500,
          price: "Free",
          url: "https://www.youtube.com/watch?v=WQoB2z67hvY",
          description: "Advanced C++ concepts including Object-Oriented Programming and Standard Template Library.",
          level: "Intermediate",
          duration: "12 hours",
          tags: ["C++", "OOP", "STL"],
        },
      ],
      java: [
        {
          id: "java-1",
          title: "Java Programming Masterclass for Software Developers",
          instructor: "Tim Buchalka",
          platform: "udemy",
          image: "https://img-c.udemycdn.com/course/240x135/533682_c10c_4.jpg",
          rating: 4.6,
          reviews: 158742,
          price: 94.99,
          discount: 14.99,
          url: "https://www.udemy.com/course/java-the-complete-java-developer-course/",
          description: "Learn Java programming from scratch. Perfect for beginners with no prior experience.",
          level: "All Levels",
          duration: "80 hours",
          tags: ["Java", "Programming", "Complete"],
        },
        {
          id: "java-2",
          title: "Java Full Course for Beginners",
          instructor: "CodeWithHarry",
          platform: "youtube",
          image: "https://i.ytimg.com/vi/ntLJmHOJ0ME/maxresdefault.jpg",
          rating: 4.8,
          reviews: 25000,
          price: "Free",
          url: "https://www.youtube.com/watch?v=ntLJmHOJ0ME",
          description: "Complete Java tutorial series covering all concepts from basics to advanced.",
          level: "Beginner",
          duration: "13 hours",
          tags: ["Java", "Programming", "Free"],
        },
        {
          id: "java-3",
          title: "Java + DSA + Interview Preparation Course",
          instructor: "Kunal Kushwaha",
          platform: "youtube",
          image: "https://i.ytimg.com/vi/A74TOX803D0/maxresdefault.jpg",
          rating: 4.9,
          reviews: 18000,
          price: "Free",
          url: "https://www.youtube.com/watch?v=A74TOX803D0",
          description:
            "Complete Java DSA course with interview preparation. Master Java programming and data structures.",
          level: "Intermediate",
          duration: "15 hours",
          tags: ["Java", "DSA", "Interview"],
        },
      ],
      dsa: [
        {
          id: "dsa-1",
          title: "Data Structures and Algorithms: Deep Dive Using Java",
          instructor: "Tim Buchalka, Goran Lochert",
          platform: "udemy",
          image: "https://img-c.udemycdn.com/course/240x135/1419186_5b21_2.jpg",
          rating: 4.5,
          reviews: 12458,
          price: 84.99,
          discount: 13.99,
          url: "https://www.udemy.com/course/data-structures-and-algorithms-deep-dive-using-java/",
          description: "Learn data structures and algorithms with Java implementation.",
          level: "Intermediate",
          duration: "16 hours",
          tags: ["DSA", "Java", "Algorithms"],
        },
        {
          id: "dsa-2",
          title: "Master the Coding Interview: Data Structures + Algorithms",
          instructor: "Andrei Neagoie",
          platform: "udemy",
          image: "https://img-c.udemycdn.com/course/240x135/1917546_682b_2.jpg",
          rating: 4.7,
          reviews: 32145,
          price: 94.99,
          discount: 15.99,
          url: "https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/",
          description: "Ace coding interviews by mastering data structures and algorithms.",
          level: "All Levels",
          duration: "20 hours",
          tags: ["DSA", "Interview", "Algorithms"],
        },
        {
          id: "dsa-3",
          title: "Complete DSA Course - Data Structures & Algorithms",
          instructor: "Striver",
          platform: "youtube",
          image: "https://i.ytimg.com/vi/WQoB2z67hvY/maxresdefault.jpg",
          rating: 4.9,
          reviews: 20000,
          price: "Free",
          url: "https://www.youtube.com/watch?v=WQoB2z67hvY",
          description: "Complete Data Structures and Algorithms course. Master DSA for coding interviews.",
          level: "All Levels",
          duration: "12 hours",
          tags: ["DSA", "Algorithms", "Free"],
        },
        {
          id: "dsa-4",
          title: "Data Structures and Algorithms - Full Course for Beginners",
          instructor: "freeCodeCamp",
          platform: "youtube",
          image: "https://i.ytimg.com/vi/RBSGKlAvoiM/maxresdefault.jpg",
          rating: 4.8,
          reviews: 15000,
          price: "Free",
          url: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
          description: "Learn data structures and algorithms in this comprehensive course for beginners.",
          level: "Beginner",
          duration: "8 hours",
          tags: ["DSA", "Beginner", "Free"],
        },
      ],
      csharp: [
        {
          id: "csharp-1",
          title: "Complete C# Masterclass",
          instructor: "Denis Panjuta",
          platform: "udemy",
          image: "https://img-c.udemycdn.com/course/240x135/1992458_a9f9_5.jpg",
          rating: 4.6,
          reviews: 45678,
          price: 84.99,
          discount: 14.99,
          url: "https://www.udemy.com/course/complete-csharp-masterclass/",
          description: "Learn C# programming from scratch. Perfect for beginners with no prior experience.",
          level: "All Levels",
          duration: "31 hours",
          tags: ["C#", "Programming", "Complete"],
        },
        {
          id: "csharp-2",
          title: "C# Tutorial - Full Course for Beginners",
          instructor: "freeCodeCamp",
          platform: "youtube",
          image: "https://i.ytimg.com/vi/GhQdlIFylQ8/maxresdefault.jpg",
          rating: 4.8,
          reviews: 25000,
          price: "Free",
          url: "https://www.youtube.com/watch?v=GhQdlIFylQ8",
          description: "Learn C# programming from scratch in this comprehensive tutorial for beginners.",
          level: "Beginner",
          duration: "4 hours",
          tags: ["C#", "Programming", "Free"],
        },
      ],
      fullstack: [
        {
          id: "fullstack-1",
          title: "The Complete 2024 Web Development Bootcamp",
          instructor: "Dr. Angela Yu",
          platform: "udemy",
          image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",
          rating: 4.7,
          reviews: 245678,
          price: 94.99,
          discount: 16.99,
          url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
          description:
            "Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!",
          level: "All Levels",
          duration: "65 hours",
          tags: ["Web Development", "Full Stack", "Complete"],
        },
        {
          id: "fullstack-2",
          title: "MERN Stack Tutorial - Build a Social Media App",
          instructor: "JavaScript Mastery",
          platform: "youtube",
          image: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
          rating: 4.9,
          reviews: 18000,
          price: "Free",
          url: "https://www.youtube.com/watch?v=7CqJlxBYj-M",
          description: "Build a complete social media application using MongoDB, Express, React, and Node.js.",
          level: "Intermediate",
          duration: "6 hours",
          tags: ["MERN", "Full Stack", "Free"],
        },
      ],
      frontend: [
        {
          id: "frontend-1",
          title: "The Complete JavaScript Course 2024: From Zero to Expert!",
          instructor: "Jonas Schmedtmann",
          platform: "udemy",
          image: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
          rating: 4.8,
          reviews: 158742,
          price: 94.99,
          discount: 15.99,
          url: "https://www.udemy.com/course/the-complete-javascript-course/",
          description:
            "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory.",
          level: "All Levels",
          duration: "69 hours",
          tags: ["JavaScript", "Frontend", "Complete"],
        },
        {
          id: "frontend-2",
          title: "React - The Complete Guide 2024 (incl. React Router & Redux)",
          instructor: "Academind by Maximilian Schwarzmüller",
          platform: "udemy",
          image: "https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
          rating: 4.7,
          reviews: 187456,
          price: 94.99,
          discount: 14.99,
          url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
          description:
            "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js and more!",
          level: "All Levels",
          duration: "65 hours",
          tags: ["React", "Frontend", "Complete"],
        },
        {
          id: "frontend-3",
          title: "HTML CSS JavaScript - Complete Web Development Course",
          instructor: "CodeWithHarry",
          platform: "youtube",
          image: "https://i.ytimg.com/vi/EiNiSFIPIQE/maxresdefault.jpg",
          rating: 4.8,
          reviews: 25000,
          price: "Free",
          url: "https://www.youtube.com/watch?v=EiNiSFIPIQE",
          description: "Complete web development course covering HTML, CSS, and JavaScript from basics to advanced.",
          level: "Beginner",
          duration: "11 hours",
          tags: ["HTML", "CSS", "JavaScript", "Free"],
        },
      ],
    }

    // Get courses for the topic
    const allCourses = courseDatabase[topic.toLowerCase()] || []

    // Filter by level if needed
    return allCourses.filter((course) => {
      if (course.level === "All Levels") return true
      if (course.level === level) return true
      return false
    })
  }

  const courses = getCourses(topic, currentStep)
  const freeCourses = courses.filter((course) => course.price === "Free")
  const paidCourses = courses.filter((course) => course.price !== "Free")

  const renderCourseCard = (course: Course) => (
    <Card key={course.id} className="border-gray-700 bg-gray-800/50 hover:bg-gray-800 transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Course Image */}
          <div className="relative w-[100px] h-[60px] flex-shrink-0">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              fill
              className="object-cover rounded-md"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=60&width=100"
              }}
            />
          </div>

          {/* Course Info */}
          <div className="flex-1">
            <h4 className="font-medium text-white text-sm line-clamp-2 mb-1">{course.title}</h4>
            <p className="text-gray-400 text-xs mb-1">{course.instructor}</p>

            <div className="flex items-center gap-1 mb-2">
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-400 text-xs font-medium ml-1">{course.rating}</span>
              </div>
              <span className="text-gray-500 text-xs">({course.reviews.toLocaleString()})</span>
              <span className="text-gray-500 text-xs mx-1">•</span>
              <span className="text-gray-400 text-xs">{course.duration}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {course.price === "Free" ? (
                  <Badge variant="outline" className="text-green-400 border-green-800 bg-green-900/20">
                    <BookOpen className="h-3 w-3 mr-1" />
                    Free
                  </Badge>
                ) : (
                  <div className="flex items-center">
                    <Badge variant="outline" className="text-blue-400 border-blue-800 bg-blue-900/20">
                      <DollarSign className="h-3 w-3 mr-1" />
                      {course.discount ? (
                        <>
                          <span className="line-through text-gray-400 mr-1">${course.price}</span>${course.discount}
                        </>
                      ) : (
                        `$${course.price}`
                      )}
                    </Badge>
                  </div>
                )}

                <Badge className={`ml-1 ${getPlatformColor(course.platform)}`}>
                  {getPlatformName(course.platform)}
                </Badge>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 p-1 h-auto"
                asChild
              >
                <a href={course.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case "udemy":
        return "Udemy"
      case "coursera":
        return "Coursera"
      case "edx":
        return "edX"
      case "youtube":
        return "YouTube"
      default:
        return platform
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "udemy":
        return "bg-purple-900/30 text-purple-300 border-purple-800"
      case "coursera":
        return "bg-blue-900/30 text-blue-300 border-blue-800"
      case "edx":
        return "bg-red-900/30 text-red-300 border-red-800"
      case "youtube":
        return "bg-red-900/30 text-red-300 border-red-800"
      default:
        return "bg-gray-900/30 text-gray-300 border-gray-800"
    }
  }

  return (
    <Card className="border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-white">Recommended Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800">
            <TabsTrigger value="recommended" className="text-xs">
              Recommended
            </TabsTrigger>
            <TabsTrigger value="free" className="text-xs">
              Free
            </TabsTrigger>
            <TabsTrigger value="paid" className="text-xs">
              Paid
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[400px] mt-2 pr-2">
            <TabsContent value="recommended" className="mt-0 space-y-3">
              {courses.length > 0 ? (
                courses.map(renderCourseCard)
              ) : (
                <div className="text-center py-8 text-gray-400">No courses found for this topic.</div>
              )}
            </TabsContent>

            <TabsContent value="free" className="mt-0 space-y-3">
              {freeCourses.length > 0 ? (
                freeCourses.map(renderCourseCard)
              ) : (
                <div className="text-center py-8 text-gray-400">No free courses found for this topic.</div>
              )}
            </TabsContent>

            <TabsContent value="paid" className="mt-0 space-y-3">
              {paidCourses.length > 0 ? (
                paidCourses.map(renderCourseCard)
              ) : (
                <div className="text-center py-8 text-gray-400">No paid courses found for this topic.</div>
              )}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </CardContent>
    </Card>
  )
}
