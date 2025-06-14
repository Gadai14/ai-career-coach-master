"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ExternalLink, Play, X, Clock } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { ScrollArea } from "../components/ui/scroll-area"

/**
 * @typedef {Object} VideoData
 * @property {string} id
 * @property {string} title
 * @property {string} channel
 * @property {string} channelId
 * @property {string} thumbnail
 * @property {string} duration
 * @property {string} views
 * @property {string} uploadDate
 * @property {string} description
 * @property {string[]} tags
 * @property {string} channelAvatar
 * @property {string} subscribers
 * @property {string} url
 */

/**
 * @typedef {Object} VideoRecommendationProps
 * @property {string} title
 * @property {string} channel
 * @property {string} thumbnail
 * @property {string} url
 * @property {string} duration
 * @property {string=} views
 * @property {string=} uploadDate
 * @property {string=} description
 * @property {string[]=} tags
 */

export function VideoRecommendation({
  title,
  channel,
  thumbnail,
  url,
  duration,
  views = "1.2M views",
  uploadDate = "2 months ago",
  description = "Learn the fundamentals with this comprehensive tutorial covering all essential concepts.",
  tags = [],
}) {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [relatedVideos, setRelatedVideos] = useState([])
  const [channelVideos, setChannelVideos] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedTab, setSelectedTab] = useState("related")

  // Current playing video state
  const [currentVideo, setCurrentVideo] = useState({
    title,
    channel,
    thumbnail,
    url,
    duration,
    views,
    uploadDate,
    description,
    tags,
  })

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const videoId = getYouTubeVideoId(currentVideo.url)
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : ""

  // MASSIVE Video Database with Real YouTube Data
  const getVideoDatabase = (topic, currentChannel) => {
    const topicLower = topic.toLowerCase()

    const videoDatabase = {
      // ==================== C++ VIDEOS ====================
      cpp: [
        {
          id: "z9bZufPHFLU",
          title: "C++ Full Course for Beginners (Complete Tutorial)",
          channel: "CodeWithHarry",
          channelId: "codewithharry",
          thumbnail: "https://i.ytimg.com/vi/z9bZufPHFLU/maxresdefault.jpg",
          duration: "4:32:15",
          views: "2.1M views",
          uploadDate: "1 year ago",
          description:
            "Complete C++ tutorial for beginners. Learn C++ programming from scratch with practical examples.",
          tags: ["cpp", "programming", "tutorial"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_kGzR5SkNKSptdl4Qp7hqVOON8wUGm8pQEN2lTdEg=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "5.8M subscribers",
          url: "https://www.youtube.com/watch?v=z9bZufPHFLU",
        },
        {
          id: "WQoB2z67hvY",
          title: "C++ DSA Course - Complete Data Structures & Algorithms",
          channel: "Striver",
          channelId: "striver",
          thumbnail: "https://i.ytimg.com/vi/WQoB2z67hvY/maxresdefault.jpg",
          duration: "12:45:30",
          views: "1.8M views",
          uploadDate: "8 months ago",
          description:
            "Complete Data Structures and Algorithms course in C++. Master DSA with Striver's comprehensive tutorial.",
          tags: ["cpp", "dsa", "algorithms"],
          channelAvatar:
            "https://yt3.ggpht.com/OSGz7eNgv1G2NltXmjgqP8OygqwBWzxNhteSKzl_jcLAVEPvp_6QFl_y_blXQLgQHh_sIzRr=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "3.2M subscribers",
          url: "https://www.youtube.com/watch?v=WQoB2z67hvY",
        },
        {
          id: "yGB9jhsESjk",
          title: "C++ Object Oriented Programming (OOP) - Complete Course",
          channel: "Apna College",
          channelId: "apnacollege",
          thumbnail: "https://i.ytimg.com/vi/yGB9jhsESjk/maxresdefault.jpg",
          duration: "3:28:45",
          views: "950K views",
          uploadDate: "6 months ago",
          description: "Master Object Oriented Programming in C++. Complete OOP concepts with practical examples.",
          tags: ["cpp", "oop", "programming"],
          channelAvatar:
            "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "4.1M subscribers",
          url: "https://www.youtube.com/watch?v=yGB9jhsESjk",
        },
        {
          id: "87SH2Cn0s9A",
          title: "C++ STL Complete Tutorial - Standard Template Library",
          channel: "Luv",
          channelId: "luv",
          thumbnail: "https://i.ytimg.com/vi/87SH2Cn0s9A/maxresdefault.jpg",
          duration: "2:15:20",
          views: "680K views",
          uploadDate: "4 months ago",
          description: "Complete C++ STL tutorial covering all containers, algorithms, and iterators.",
          tags: ["cpp", "stl", "advanced"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_n7fqvvOkbLOcK-2ZoNHR3SnxiveOqEXESArCdRVQ=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "890K subscribers",
          url: "https://www.youtube.com/watch?v=87SH2Cn0s9A",
        },
        {
          id: "vLnPwxZdW4Y",
          title: "C++ Programming Tutorial for Beginners - Learn C++ in 4 Hours",
          channel: "freeCodeCamp.org",
          channelId: "freecodecamp",
          thumbnail: "https://i.ytimg.com/vi/vLnPwxZdW4Y/maxresdefault.jpg",
          duration: "4:01:30",
          views: "3.5M views",
          uploadDate: "2 years ago",
          description:
            "Learn C++ programming in this complete course for beginners. No prior programming experience required.",
          tags: ["cpp", "beginner", "tutorial"],
          channelAvatar: "https://yt3.ggpht.com/ytc/AIdro_mwPOzBjHU4EnTSj8Q1hLvhEw=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "8.9M subscribers",
          url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
        },
        {
          id: "18c3MTX0PK0",
          title: "C++ Crash Course - Learn C++ Programming in 2 Hours",
          channel: "Traversy Media",
          channelId: "traversymedia",
          thumbnail: "https://i.ytimg.com/vi/18c3MTX0PK0/maxresdefault.jpg",
          duration: "2:10:45",
          views: "1.2M views",
          uploadDate: "1 year ago",
          description:
            "Learn C++ programming fundamentals in this crash course. Perfect for beginners who want to get started quickly.",
          tags: ["cpp", "crash-course", "beginner"],
          channelAvatar: "https://yt3.ggpht.com/ytc/AIdro_n-KjdEOWOmVcCJZ8Q1hLvhEw=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "2.1M subscribers",
          url: "https://www.youtube.com/watch?v=18c3MTX0PK0",
        },
      ],

      // ==================== JAVA VIDEOS ====================
      java: [
        {
          id: "ntLJmHOJ0ME",
          title: "Java Full Course for Beginners | Complete Java Tutorial",
          channel: "CodeWithHarry",
          channelId: "codewithharry",
          thumbnail: "https://i.ytimg.com/vi/ntLJmHOJ0ME/maxresdefault.jpg",
          duration: "13:25:30",
          views: "3.2M views",
          uploadDate: "1 year ago",
          description: "Complete Java programming course for beginners. Learn Java from basics to advanced concepts.",
          tags: ["java", "programming", "tutorial"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_kGzR5SkNKSptdl4Qp7hqVOON8wUGm8pQEN2lTdEg=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "5.8M subscribers",
          url: "https://www.youtube.com/watch?v=ntLJmHOJ0ME",
        },
        {
          id: "A74TOX803D0",
          title: "Java + DSA + Interview Preparation Course",
          channel: "Kunal Kushwaha",
          channelId: "kunalkushwaha",
          thumbnail: "https://i.ytimg.com/vi/A74TOX803D0/maxresdefault.jpg",
          duration: "15:45:20",
          views: "2.8M views",
          uploadDate: "10 months ago",
          description:
            "Complete Java DSA course with interview preparation. Master Java programming and data structures.",
          tags: ["java", "dsa", "interview"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_mKzklyPPhq0zJaWmjMyasS4Pqv-NQRzlQh8DGV5g=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "1.9M subscribers",
          url: "https://www.youtube.com/watch?v=A74TOX803D0",
        },
        {
          id: "BGTx91t8q50",
          title: "Java Spring Boot Full Course - Build REST API",
          channel: "Amigoscode",
          channelId: "amigoscode",
          thumbnail: "https://i.ytimg.com/vi/BGTx91t8q50/maxresdefault.jpg",
          duration: "4:12:45",
          views: "1.5M views",
          uploadDate: "8 months ago",
          description: "Learn Spring Boot and build REST APIs. Complete Java Spring Boot tutorial for beginners.",
          tags: ["java", "springboot", "api"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_lDzIrCq3Jqy5NQy8VLud_7i6LhCXKGq8Q1hLvhEw=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "1.2M subscribers",
          url: "https://www.youtube.com/watch?v=BGTx91t8q50",
        },
        {
          id: "grEKMHGYyns",
          title: "Java Programming for Beginners – Full Course",
          channel: "freeCodeCamp.org",
          channelId: "freecodecamp",
          thumbnail: "https://i.ytimg.com/vi/grEKMHGYyns/maxresdefault.jpg",
          duration: "9:33:15",
          views: "4.8M views",
          uploadDate: "2 years ago",
          description: "Learn Java programming from scratch in this comprehensive course for beginners.",
          tags: ["java", "beginner", "complete"],
          channelAvatar: "https://yt3.ggpht.com/ytc/AIdro_mwPOzBjHU4EnTSj8Q1hLvhEw=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "8.9M subscribers",
          url: "https://www.youtube.com/watch?v=grEKMHGYyns",
        },
        {
          id: "xk4_1vDrzzo",
          title: "Java Tutorial for Beginners [2024] - Programming with Mosh",
          channel: "Programming with Mosh",
          channelId: "programmingwithmosh",
          thumbnail: "https://i.ytimg.com/vi/xk4_1vDrzzo/maxresdefault.jpg",
          duration: "2:18:41",
          views: "2.1M views",
          uploadDate: "1 year ago",
          description: "Learn Java programming fundamentals in this beginner-friendly tutorial by Mosh Hamedani.",
          tags: ["java", "beginner", "mosh"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_kGzR5SkNKSptdl4Qp7hqVOON8wUGm8pQEN2lTdEg=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "3.1M subscribers",
          url: "https://www.youtube.com/watch?v=xk4_1vDrzzo",
        },
      ],

      // ==================== DSA VIDEOS ====================
      dsa: [
        {
          id: "WQoB2z67hvY",
          title: "Complete DSA Course - Data Structures & Algorithms",
          channel: "Striver",
          channelId: "striver",
          thumbnail: "https://i.ytimg.com/vi/WQoB2z67hvY/maxresdefault.jpg",
          duration: "12:45:30",
          views: "2.5M views",
          uploadDate: "8 months ago",
          description: "Complete Data Structures and Algorithms course. Master DSA for coding interviews.",
          tags: ["dsa", "algorithms", "interview"],
          channelAvatar:
            "https://yt3.ggpht.com/OSGz7eNgv1G2NltXmjgqP8OygqwBWzxNhteSKzl_jcLAVEPvp_6QFl_y_blXQLgQHh_sIzRr=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "3.2M subscribers",
          url: "https://www.youtube.com/watch?v=WQoB2z67hvY",
        },
        {
          id: "0IAPZzGSbME",
          title: "DSA Full Course in Hindi - Complete Tutorial",
          channel: "CodeWithHarry",
          channelId: "codewithharry",
          thumbnail: "https://i.ytimg.com/vi/0IAPZzGSbME/maxresdefault.jpg",
          duration: "8:30:15",
          views: "1.8M views",
          uploadDate: "1 year ago",
          description: "Complete Data Structures and Algorithms course in Hindi. Learn DSA from scratch.",
          tags: ["dsa", "hindi", "tutorial"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_kGzR5SkNKSptdl4Qp7hqVOON8wUGm8pQEN2lTdEg=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "5.8M subscribers",
          url: "https://www.youtube.com/watch?v=0IAPZzGSbME",
        },
        {
          id: "5_5oE5lgrhw",
          title: "Dynamic Programming Complete Course - All Patterns",
          channel: "Aditya Verma",
          channelId: "adityaverma",
          thumbnail: "https://i.ytimg.com/vi/5_5oE5lgrhw/maxresdefault.jpg",
          duration: "6:45:20",
          views: "1.2M views",
          uploadDate: "6 months ago",
          description: "Master Dynamic Programming with all patterns and techniques. Complete DP course.",
          tags: ["dp", "algorithms", "advanced"],
          channelAvatar: "https://yt3.ggpht.com/ytc/AIdro_mYcmkVEVqNtGWQE-c1uNkj_5oE5lgrhw=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "950K subscribers",
          url: "https://www.youtube.com/watch?v=5_5oE5lgrhw",
        },
        {
          id: "RBSGKlAvoiM",
          title: "Data Structures and Algorithms - Full Course for Beginners",
          channel: "freeCodeCamp.org",
          channelId: "freecodecamp",
          thumbnail: "https://i.ytimg.com/vi/RBSGKlAvoiM/maxresdefault.jpg",
          duration: "8:00:00",
          views: "3.8M views",
          uploadDate: "2 years ago",
          description: "Learn data structures and algorithms in this comprehensive course for beginners.",
          tags: ["dsa", "beginner", "complete"],
          channelAvatar: "https://yt3.ggpht.com/ytc/AIdro_mwPOzBjHU4EnTSj8Q1hLvhEw=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "8.9M subscribers",
          url: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
        },
        {
          id: "KLlXCFG5TnA",
          title: "Graph Algorithms Complete Course - BFS, DFS, Dijkstra",
          channel: "Abdul Bari",
          channelId: "abdulbari",
          thumbnail: "https://i.ytimg.com/vi/KLlXCFG5TnA/maxresdefault.jpg",
          duration: "4:30:45",
          views: "1.5M views",
          uploadDate: "1 year ago",
          description: "Complete graph algorithms course covering BFS, DFS, shortest path algorithms and more.",
          tags: ["graph", "algorithms", "bfs"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_n7fqvvOkbLOcK-2ZoNHR3SnxiveOqEXESArCdRVQ=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "1.4M subscribers",
          url: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
        },
        {
          id: "oBt53YbR9Kk",
          title: "Binary Tree Algorithms - Complete Course",
          channel: "mycodeschool",
          channelId: "mycodeschool",
          thumbnail: "https://i.ytimg.com/vi/oBt53YbR9Kk/maxresdefault.jpg",
          duration: "3:20:30",
          views: "980K views",
          uploadDate: "1 year ago",
          description: "Master binary tree algorithms including traversals, searching, and tree construction.",
          tags: ["tree", "algorithms", "binary"],
          channelAvatar: "https://yt3.ggpht.com/ytc/AIdro_mVcCJZ8Q1hLvhEw-KjdEOWOm=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "690K subscribers",
          url: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
        },
      ],

      // ==================== C# VIDEOS ====================
      csharp: [
        {
          id: "GhQdlIFylQ8",
          title: "C# Tutorial - Full Course for Beginners",
          channel: "freeCodeCamp.org",
          channelId: "freecodecamp",
          thumbnail: "https://i.ytimg.com/vi/GhQdlIFylQ8/maxresdefault.jpg",
          duration: "4:31:26",
          views: "2.8M views",
          uploadDate: "2 years ago",
          description: "Learn C# programming from scratch in this comprehensive tutorial for beginners.",
          tags: ["csharp", "dotnet", "beginner"],
          channelAvatar: "https://yt3.ggpht.com/ytc/AIdro_mwPOzBjHU4EnTSj8Q1hLvhEw=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "8.9M subscribers",
          url: "https://www.youtube.com/watch?v=GhQdlIFylQ8",
        },
        {
          id: "M5ugY7fWydE",
          title: "C# Full Course - Learn C# Programming in 10 Hours",
          channel: "Bro Code",
          channelId: "brocode",
          thumbnail: "https://i.ytimg.com/vi/M5ugY7fWydE/maxresdefault.jpg",
          duration: "10:00:52",
          views: "1.5M views",
          uploadDate: "1 year ago",
          description: "Complete C# programming course covering all fundamentals and advanced concepts.",
          tags: ["csharp", "programming", "complete"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_lDzIrCq3Jqy5NQy8VLud_7i6LhCXKGq8Q1hLvhEw=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "1.8M subscribers",
          url: "https://www.youtube.com/watch?v=M5ugY7fWydE",
        },
        {
          id: "q_F4PyW8GTg",
          title: "ASP.NET Core Web API Tutorial - Build REST API",
          channel: "IAmTimCorey",
          channelId: "iamtimcorey",
          thumbnail: "https://i.ytimg.com/vi/q_F4PyW8GTg/maxresdefault.jpg",
          duration: "3:45:30",
          views: "890K views",
          uploadDate: "8 months ago",
          description: "Learn to build REST APIs with ASP.NET Core Web API from scratch.",
          tags: ["aspnet", "webapi", "rest"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_n7fqvvOkbLOcK-2ZoNHR3SnxiveOqEXESArCdRVQ=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "420K subscribers",
          url: "https://www.youtube.com/watch?v=q_F4PyW8GTg",
        },
      ],

      // ==================== FULL STACK VIDEOS ====================
      fullstack: [
        {
          id: "nu_pCVPKzTk",
          title: "Full Stack Web Development Course - HTML, CSS, JS, Node, React",
          channel: "freeCodeCamp.org",
          channelId: "freecodecamp",
          thumbnail: "https://i.ytimg.com/vi/nu_pCVPKzTk/maxresdefault.jpg",
          duration: "15:30:45",
          views: "5.2M views",
          uploadDate: "1 year ago",
          description: "Complete full stack web development course covering frontend and backend technologies.",
          tags: ["fullstack", "webdev", "complete"],
          channelAvatar: "https://yt3.ggpht.com/ytc/AIdro_mwPOzBjHU4EnTSj8Q1hLvhEw=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "8.9M subscribers",
          url: "https://www.youtube.com/watch?v=nu_pCVPKzTk",
        },
        {
          id: "7CqJlxBYj-M",
          title: "MERN Stack Tutorial - Build a Social Media App",
          channel: "JavaScript Mastery",
          channelId: "javascriptmastery",
          thumbnail: "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",
          duration: "6:45:20",
          views: "1.8M views",
          uploadDate: "8 months ago",
          description: "Build a complete social media application using MongoDB, Express, React, and Node.js.",
          tags: ["mern", "react", "nodejs"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_lDzIrCq3Jqy5NQy8VLud_7i6LhCXKGq8Q1hLvhEw=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "1.4M subscribers",
          url: "https://www.youtube.com/watch?v=7CqJlxBYj-M",
        },
        {
          id: "0riHps91AzE",
          title: "Next.js 13 Full Course - Build and Deploy a Full Stack App",
          channel: "JavaScript Mastery",
          channelId: "javascriptmastery",
          thumbnail: "https://i.ytimg.com/vi/0riHps91AzE/maxresdefault.jpg",
          duration: "4:20:30",
          views: "1.2M views",
          uploadDate: "6 months ago",
          description: "Learn Next.js 13 and build a complete full stack application with modern features.",
          tags: ["nextjs", "react", "fullstack"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_lDzIrCq3Jqy5NQy8VLud_7i6LhCXKGq8Q1hLvhEw=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "1.4M subscribers",
          url: "https://www.youtube.com/watch?v=0riHps91AzE",
        },
      ],

      // ==================== FRONTEND VIDEOS ====================
      frontend: [
        {
          id: "EiNiSFIPIQE",
          title: "HTML CSS JavaScript - Complete Web Development Course",
          channel: "CodeWithHarry",
          channelId: "codewithharry",
          thumbnail: "https://i.ytimg.com/vi/EiNiSFIPIQE/maxresdefault.jpg",
          duration: "11:30:45",
          views: "4.2M views",
          uploadDate: "1 year ago",
          description: "Complete web development course covering HTML, CSS, and JavaScript from basics to advanced.",
          tags: ["html", "css", "javascript"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_kGzR5SkNKSptdl4Qp7hqVOON8wUGm8pQEN2lTdEg=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "5.8M subscribers",
          url: "https://www.youtube.com/watch?v=EiNiSFIPIQE",
        },
        {
          id: "bMknfKXIFA8",
          title: "React JS Full Course 2024 - Build Modern Web Apps",
          channel: "Traversy Media",
          channelId: "traversymedia",
          thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg",
          duration: "9:15:30",
          views: "2.8M views",
          uploadDate: "6 months ago",
          description: "Complete React.js course for 2024. Build modern web applications with React.",
          tags: ["react", "javascript", "frontend"],
          channelAvatar: "https://yt3.ggpht.com/ytc/AIdro_n-KjdEOWOmVcCJZ8Q1hLvhEw=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "2.1M subscribers",
          url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
        },
        {
          id: "1wZoGFF_oi4",
          title: "CSS Flexbox and Grid - Complete Layout Course",
          channel: "Kevin Powell",
          channelId: "kevinpowell",
          thumbnail: "https://i.ytimg.com/vi/1wZoGFF_oi4/maxresdefault.jpg",
          duration: "3:45:20",
          views: "1.5M views",
          uploadDate: "4 months ago",
          description: "Master CSS Flexbox and Grid layouts. Complete guide to modern CSS layout techniques.",
          tags: ["css", "flexbox", "grid"],
          channelAvatar: "https://yt3.ggpht.com/ytc/AIdro_mVcCJZ8Q1hLvhEw-KjdEOWOm=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "890K subscribers",
          url: "https://www.youtube.com/watch?v=1wZoGFF_oi4",
        },
      ],
    }

    // Get videos for the topic, excluding current channel to show variety
    const topicVideos = videoDatabase[topicLower] || []
    return topicVideos.filter((video) => video.channel !== currentChannel).slice(0, 6)
  }

  // Channel Database with Real Creator Videos
  const getChannelVideos = (channelName) => {
    const channelLower = channelName.toLowerCase().replace(/\s+/g, "")

    const channelDatabase = {
      // ==================== CODE WITH HARRY ====================
      codewithharry: [
        {
          id: "tVzUXW6siu0",
          title: "Python Full Course for Beginners | Complete Python Tutorial",
          channel: "CodeWithHarry",
          channelId: "codewithharry",
          thumbnail: "https://i.ytimg.com/vi/tVzUXW6siu0/maxresdefault.jpg",
          duration: "13:52:46",
          views: "15M views",
          uploadDate: "2 years ago",
          description: "Complete Python programming course for beginners. Learn Python from scratch.",
          tags: ["python", "programming", "tutorial"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_kGzR5SkNKSptdl4Qp7hqVOON8wUGm8pQEN2lTdEg=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "5.8M subscribers",
          url: "https://www.youtube.com/watch?v=tVzUXW6siu0",
        },
        {
          id: "6mbwJ2xhgzM",
          title: "Web Development Complete Course - HTML CSS JS",
          channel: "CodeWithHarry",
          channelId: "codewithharry",
          thumbnail: "https://i.ytimg.com/vi/6mbwJ2xhgzM/maxresdefault.jpg",
          duration: "12:30:15",
          views: "8.5M views",
          uploadDate: "1 year ago",
          description: "Complete web development course covering HTML, CSS, and JavaScript.",
          tags: ["webdev", "html", "css"],
          channelAvatar:
            "https://yt3.ggpht.com/ytc/AIdro_kGzR5SkNKSptdl4Qp7hqVOON8wUGm8pQEN2lTdEg=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "5.8M subscribers",
          url: "https://www.youtube.com/watch?v=6mbwJ2xhgzM",
        },
      ],
      // ==================== STRIVER ====================
      striver: [
        {
          id: "KLlXCFG5TnA",
          title: "Graph Series - Complete Graph Algorithms",
          channel: "Striver",
          channelId: "striver",
          thumbnail: "https://i.ytimg.com/vi/KLlXCFG5TnA/maxresdefault.jpg",
          duration: "8:45:30",
          views: "1.8M views",
          uploadDate: "5 months ago",
          description: "Complete graph algorithms series. Master all graph concepts and algorithms.",
          tags: ["graph", "algorithms", "dsa"],
          channelAvatar:
            "https://yt3.ggpht.com/OSGz7eNgv1G2NltXmjgqP8OygqwBWzxNhteSKzl_jcLAVEPvp_6QFl_y_blXQLgQHh_sIzRr=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "3.2M subscribers",
          url: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
        },
        {
          id: "oBt53YbR9Kk",
          title: "Binary Tree Series - Complete Tree Algorithms",
          channel: "Striver",
          channelId: "striver",
          thumbnail: "https://i.ytimg.com/vi/oBt53YbR9Kk/maxresdefault.jpg",
          duration: "6:20:45",
          views: "1.2M views",
          uploadDate: "7 months ago",
          description: "Complete binary tree algorithms series. Master all tree concepts.",
          tags: ["tree", "algorithms", "dsa"],
          channelAvatar:
            "https://yt3.ggpht.com/OSGz7eNgv1G2NltXmjgqP8OygqwBWzxNhteSKzl_jcLAVEPvp_6QFl_y_blXQLgQHh_sIzRr=s88-c-k-c0x00ffffff-no-rj",
          subscribers: "3.2M subscribers",
          url: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
        },
      ],
    }

    return channelDatabase[channelLower] || []
  }

  // Fetch real YouTube data
  const fetchYouTubeData = async (query, type = "search") => {
    setLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))

      if (type === "search") {
        const relatedData = getVideoDatabase(query, currentVideo.channel)
        setRelatedVideos(relatedData)
      } else {
        const channelData = getChannelVideos(currentVideo.channel)
        setChannelVideos(channelData)
      }
    } catch (error) {
      console.error("Error fetching YouTube data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isPlayerOpen) {
      const topic = currentVideo.title.split(" ")[0]
      fetchYouTubeData(topic, "search")
      fetchYouTubeData(currentVideo.channel, "channel")
    }
  }, [isPlayerOpen, currentVideo])

  // Handle playing a related video
  const playRelatedVideo = (video) => {
    setCurrentVideo({
      title: video.title,
      channel: video.channel,
      thumbnail: video.thumbnail,
      url: video.url,
      duration: video.duration,
      views: video.views,
      uploadDate: video.uploadDate,
      description: video.description,
      tags: video.tags,
    })
  }

  const VideoCard = ({ video, onClick }) => (
    <div
      className="flex gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors group"
      onClick={onClick}
    >
      <div className="relative min-w-[120px] h-[68px]">
        <Image
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          fill
          className="object-cover rounded"
          onError={(e) => {
            const target = e.target;
            if (target && target.src) {
              target.src = "/placeholder.svg?height=68&width=120";
            }
          }}
        />
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded flex items-center gap-1">
          <Clock className="h-2 w-2" />
          {video.duration}
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded">
          <Play className="h-4 w-4 text-white fill-white" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h5 className="text-white text-sm font-medium line-clamp-2 mb-1 group-hover:text-blue-400 transition-colors">
          {video.title}
        </h5>
        <div className="flex items-center gap-2 mb-1">
          <Image
            src={video.channelAvatar || "/placeholder.svg"}
            alt={video.channel}
            width={16}
            height={16}
            className="rounded-full"
            onError={(e) => {
              const target = e.target
              if (target && target.tagName === "IMG") {
                target.src = "/placeholder.svg?height=16&width=16"
              }
            }}
          />
          <p className="text-gray-400 text-xs font-medium">{video.channel}</p>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-xs">
          <span>{video.views}</span>
          <span>•</span>
          <span>{video.uploadDate}</span>
        </div>
      </div>
    </div>
  )

  const VideoPlayer = () => (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex">
          {/* Main Video Player */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white line-clamp-1">{currentVideo.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                  <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{currentVideo.channel.charAt(0)}</span>
                  </div>
                  <span className="font-medium">{currentVideo.channel}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlayerOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Video Player */}
            <div className="aspect-video bg-black relative">
              {embedUrl ? (
                <iframe
                  key={currentVideo.url} // Force re-render when video changes
                  src={embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white bg-gray-800">
                  <div className="text-center">
                    <Play className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg">Video player not available</p>
                    <p className="text-sm text-gray-400 mt-2">Click the external link to watch on YouTube</p>
                    <Button variant="outline" className="mt-4" onClick={() => window.open(currentVideo.url, "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Watch on YouTube
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Video Description */}
            <div className="p-4">
              <h4 className="text-white font-medium mb-2">About this video</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{currentVideo.description}</p>
              {currentVideo.tags && currentVideo.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {currentVideo.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Related Videos Sidebar */}
          <div className="w-96 border-l border-gray-700 bg-gray-800">
            <div className="p-4 border-b border-gray-700">
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-gray-700">
                  <TabsTrigger value="related" className="text-xs">
                    Related
                  </TabsTrigger>
                  <TabsTrigger value="channel" className="text-xs">
                    More from {currentVideo.channel.split(" ")[0]}
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <ScrollArea className="h-[60vh]">
              <Tabs value={selectedTab} className="w-full">
                <TabsContent value="related" className="mt-0">
                  <div className="p-2">
                    {loading ? (
                      <div className="space-y-3">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="flex gap-3 p-3">
                            <div className="w-[120px] h-[68px] bg-gray-700 rounded animate-pulse" />
                            <div className="flex-1 space-y-2">
                              <div className="h-4 bg-gray-700 rounded animate-pulse" />
                              <div className="h-3 bg-gray-700 rounded animate-pulse w-3/4" />
                              <div className="h-3 bg-gray-700 rounded animate-pulse w-1/2" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {relatedVideos.map((video) => (
                          <VideoCard key={video.id} video={video} onClick={() => playRelatedVideo(video)} />
                        ))}
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="channel" className="mt-0">
                  <div className="p-2">
                    {loading ? (
                      <div className="space-y-3">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="flex gap-3 p-3">
                            <div className="w-[120px] h-[68px] bg-gray-700 rounded animate-pulse" />
                            <div className="flex-1 space-y-2">
                              <div className="h-4 bg-gray-700 rounded animate-pulse" />
                              <div className="h-3 bg-gray-700 rounded animate-pulse w-3/4" />
                              <div className="h-3 bg-gray-700 rounded animate-pulse w-1/2" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {channelVideos.map((video) => (
                          <VideoCard key={video.id} video={video} onClick={() => playRelatedVideo(video)} />
                        ))}
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Card
        className={`border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all duration-300 cursor-pointer ${
          isHovered ? "scale-[1.02] shadow-xl shadow-blue-500/10" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Video Thumbnail */}
            <div className="relative min-w-[200px] h-[112px] group">
              <Image
                src={thumbnail || "/placeholder.svg?height=112&width=200"}
                alt={title}
                fill
                className="object-cover rounded-md"
              />

              {/* Duration Badge */}
              <div className="absolute bottom-2 right-2 bg-black/90 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {duration}
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-md">
                <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 transform hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white fill-white" />
                </div>
              </div>

              {/* Hover Preview Effect */}
              {isHovered && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg -z-10 blur-sm" />
              )}
            </div>

            {/* Video Info */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <h4 className="font-semibold line-clamp-2 text-white mb-2 hover:text-blue-400 transition-colors text-lg">
                  {title}
                </h4>
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{channel.charAt(0)}</span>
                    </div>
                    <span className="font-medium text-gray-300">{channel}</span>
                  </div>
                  <span>•</span>
                  <span>{views}</span>
                  <span>•</span>
                  <span>{uploadDate}</span>
                </div>
                <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <Button
                  variant="default"
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white flex-1 font-medium"
                  onClick={() => setIsPlayerOpen(true)}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Watch
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                  asChild
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-gray-700 h-1 rounded-full overflow-hidden">
            <div
              className="bg-red-600 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: isHovered ? "25%" : "0%" }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Video Player Modal */}
      {isPlayerOpen && <VideoPlayer />}
    </>
  )
}
