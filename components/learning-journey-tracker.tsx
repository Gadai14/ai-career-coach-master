"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Code, TrendingUp, Trophy, CheckCircle2, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

interface Step {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
  position: { x: number; y: number }
  completed: boolean
  current: boolean
  videos: {
    id: string
    title: string
    watched: boolean
  }[]
}

interface LearningJourneyTrackerProps {
  roadmapTitle: string
  totalSteps: number
  estimatedMonths: number
  initialStep?: number
}

export function LearningJourneyTracker({
  roadmapTitle,
  totalSteps,
  estimatedMonths,
  initialStep = 1,
}: LearningJourneyTrackerProps) {
  const [currentStep, setCurrentStep] = useState(initialStep)
  const [completedVideos, setCompletedVideos] = useState<Record<number, string[]>>({})
  const [progress, setProgress] = useState(0)
  const [totalVideos, setTotalVideos] = useState(0)
  const [watchedVideos, setWatchedVideos] = useState(0)

  // Define the roadmap steps with curved path positions
  const getSteps = (): Step[] => {
    const stepTitles = {
      1: "Fundamentals",
      2: "Core Concepts",
      3: "Intermediate",
      4: "Advanced",
      5: "Expert",
      6: "Master",
      7: "Specialist",
    }

    const stepDescriptions = {
      1: "Learn the basics and foundations",
      2: "Master essential programming concepts",
      3: "Build more complex applications",
      4: "Advanced techniques and patterns",
      5: "Expert-level skills and optimization",
      6: "Master all aspects of the technology",
      7: "Specialized knowledge and techniques",
    }

    const stepColors = {
      1: "bg-emerald-500",
      2: "bg-blue-500",
      3: "bg-cyan-500",
      4: "bg-violet-500",
      5: "bg-purple-500",
      6: "bg-amber-500",
      7: "bg-rose-500",
    }

    const stepIcons = {
      1: <BookOpen className="h-6 w-6" />,
      2: <Code className="h-6 w-6" />,
      3: <TrendingUp className="h-6 w-6" />,
      4: <TrendingUp className="h-6 w-6" />,
      5: <Trophy className="h-6 w-6" />,
      6: <Trophy className="h-6 w-6" />,
      7: <Trophy className="h-6 w-6" />,
    }

    // Generate positions for the curved path based on total steps
    const generatePositions = () => {
      const positions = []

      // For 7 steps (DSA roadmap)
      if (totalSteps === 7) {
        return [
          { x: 10, y: 80 }, // Fundamentals
          { x: 25, y: 40 }, // Core Concepts
          { x: 40, y: 60 }, // Intermediate
          { x: 60, y: 40 }, // Advanced
          { x: 75, y: 60 }, // Expert
          { x: 85, y: 40 }, // Master
          { x: 95, y: 60 }, // Specialist
        ]
      }

      // For 5 steps (most roadmaps)
      if (totalSteps === 5) {
        return [
          { x: 10, y: 80 }, // Fundamentals
          { x: 30, y: 40 }, // Core Concepts
          { x: 50, y: 70 }, // Intermediate
          { x: 70, y: 40 }, // Advanced
          { x: 90, y: 60 }, // Expert
        ]
      }

      // For 4 steps (Java roadmap)
      if (totalSteps === 4) {
        return [
          { x: 15, y: 70 }, // Fundamentals
          { x: 40, y: 40 }, // Core Concepts
          { x: 65, y: 70 }, // Intermediate
          { x: 85, y: 40 }, // Advanced
        ]
      }

      // Default fallback
      for (let i = 0; i < totalSteps; i++) {
        positions.push({
          x: 10 + (80 / (totalSteps - 1)) * i,
          y: i % 2 === 0 ? 70 : 40,
        })
      }

      return positions
    }

    const positions = generatePositions()

    // Generate mock videos for each step
    const generateVideosForStep = (stepId: number) => {
      const videoCount = stepId === 1 ? 5 : stepId === 2 ? 7 : stepId === 3 ? 6 : stepId === 4 ? 8 : 5
      return Array.from({ length: videoCount }).map((_, idx) => ({
        id: `video-${stepId}-${idx + 1}`,
        title: `Video ${idx + 1} for ${stepTitles[stepId as keyof typeof stepTitles] || `Step ${stepId}`}`,
        watched: (completedVideos[stepId] || []).includes(`video-${stepId}-${idx + 1}`),
      }))
    }

    return Array.from({ length: totalSteps }).map((_, idx) => {
      const stepId = idx + 1
      return {
        id: stepId,
        title: stepTitles[stepId as keyof typeof stepTitles] || `Step ${stepId}`,
        description: stepDescriptions[stepId as keyof typeof stepDescriptions] || `Description for Step ${stepId}`,
        icon: stepIcons[stepId as keyof typeof stepIcons] || <BookOpen className="h-6 w-6" />,
        color: stepColors[stepId as keyof typeof stepColors] || "bg-gray-500",
        position: positions[idx],
        completed: stepId < currentStep,
        current: stepId === currentStep,
        videos: generateVideosForStep(stepId),
      }
    })
  }

  const steps = getSteps()

  // Calculate total videos and watched videos
  useEffect(() => {
    let total = 0
    let watched = 0

    steps.forEach((step) => {
      total += step.videos.length
      if (step.completed) {
        watched += step.videos.length
      } else if (step.current) {
        watched += (completedVideos[step.id] || []).length
      }
    })

    setTotalVideos(total)
    setWatchedVideos(watched)
    setProgress(Math.round((watched / total) * 100))
  }, [completedVideos, currentStep, steps])

  // Mark a video as watched
  const markVideoAsWatched = (stepId: number, videoId: string) => {
    setCompletedVideos((prev) => {
      const stepVideos = prev[stepId] || []
      if (stepVideos.includes(videoId)) return prev

      const newStepVideos = [...stepVideos, videoId]
      const newCompletedVideos = { ...prev, [stepId]: newStepVideos }

      // Check if all videos in the current step are watched
      const currentStepVideos = steps.find((s) => s.id === stepId)?.videos || []
      if (newStepVideos.length === currentStepVideos.length && stepId === currentStep) {
        // Auto advance to next step if all videos are watched
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
      }

      return newCompletedVideos
    })
  }

  // Generate SVG path for the curved road
  const generatePath = () => {
    const pathData = steps
      .map((step, index) => {
        const x = (step.position.x / 100) * 400
        const y = (step.position.y / 100) * 200

        if (index === 0) {
          return `M ${x} ${y}`
        } else {
          const prevStep = steps[index - 1]
          const prevX = (prevStep.position.x / 100) * 400
          const prevY = (prevStep.position.y / 100) * 200

          // Create smooth curves between points
          const controlX1 = prevX + (x - prevX) * 0.5
          const controlY1 = prevY
          const controlX2 = prevX + (x - prevX) * 0.5
          const controlY2 = y

          return `C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${x} ${y}`
        }
      })
      .join(" ")

    return pathData
  }

  // Calculate the current month based on progress
  const currentMonth = Math.ceil((watchedVideos / totalVideos) * estimatedMonths)

  return (
    <Card className="border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{roadmapTitle} Learning Journey</h3>
          <Badge className="bg-blue-600 text-white">{estimatedMonths} Month Journey</Badge>
        </div>

        {/* Animated Roadmap SVG */}
        <div className="relative w-full h-[300px] mb-6 bg-gray-800/50 rounded-lg overflow-hidden">
          {/* Labels for sections */}
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="outline" className="text-white border-gray-600 bg-gray-800/80 backdrop-blur-sm">
              {steps[0]?.title || "Fundamentals"}
            </Badge>
          </div>

          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <Badge variant="outline" className="text-white border-gray-600 bg-gray-800/80 backdrop-blur-sm">
              {steps[Math.floor(steps.length / 2) - 1]?.title || "Core Concepts"}
            </Badge>
          </div>

          <div className="absolute top-4 right-4 z-10">
            <Badge variant="outline" className="text-white border-gray-600 bg-gray-800/80 backdrop-blur-sm">
              {steps[steps.length - 1]?.title || "Advanced"}
            </Badge>
          </div>

          <svg width="100%" height="100%" viewBox="0 0 400 200" className="absolute inset-0">
            {/* Background grid */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Animated road path */}
            <path
              d={generatePath()}
              stroke="#4B5563"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Animated progress line */}
            <path
              d={generatePath()}
              stroke="url(#progressGradient)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="10 5"
              className="animate-pulse"
            />

            {/* Gradient definition for progress line */}
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>

            {/* Step nodes */}
            {steps.map((step) => {
              const x = (step.position.x / 100) * 400
              const y = (step.position.y / 100) * 200

              return (
                <g key={step.id}>
                  {/* Node circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r="20"
                    fill={step.completed ? "#10B981" : step.current ? "#3B82F6" : "#6B7280"}
                    stroke="#1F2937"
                    strokeWidth="3"
                    className={`transition-all duration-500 ${step.current ? "animate-pulse" : ""}`}
                  />

                  {/* Step number */}
                  <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                    {step.completed ? "✓" : step.id}
                  </text>

                  {/* Animated ring for current step */}
                  {step.current && (
                    <circle
                      cx={x}
                      cy={y}
                      r="25"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      opacity="0.6"
                      className="animate-ping"
                    />
                  )}
                </g>
              )
            })}
          </svg>
        </div>

        {/* Current Step Details */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-full ${steps[currentStep - 1]?.color || "bg-blue-500"}`}>
              {steps[currentStep - 1]?.icon}
            </div>
            <div>
              <h4 className="text-white font-semibold">
                Step {currentStep}: {steps[currentStep - 1]?.title}
              </h4>
              <p className="text-gray-300 text-sm">{steps[currentStep - 1]?.description}</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              Progress: {watchedVideos}/{totalVideos} videos
            </div>
            <div className="text-sm text-gray-400">
              Month {currentMonth}/{estimatedMonths}
            </div>
          </div>
        </div>

        {/* Video Checklist for Current Step */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600 mb-4">
          <h4 className="text-white font-semibold mb-3">Videos to Complete:</h4>
          <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2">
            {steps[currentStep - 1]?.videos.map((video) => {
              const isWatched = (completedVideos[currentStep] || []).includes(video.id)
              return (
                <div
                  key={video.id}
                  className={cn(
                    "flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors",
                    isWatched
                      ? "bg-green-900/20 border border-green-800"
                      : "bg-gray-700/50 hover:bg-gray-700 border border-gray-700",
                  )}
                  onClick={() => markVideoAsWatched(currentStep, video.id)}
                >
                  {isWatched ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                  <span className={cn("text-sm", isWatched ? "text-green-300" : "text-gray-300")}>{video.title}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Overall Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Journey Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-gray-800 rounded-lg">
            <div className="text-xl font-bold text-blue-400">{currentStep}</div>
            <div className="text-xs text-gray-400">Current Step</div>
          </div>
          <div className="text-center p-3 bg-gray-800 rounded-lg">
            <div className="text-xl font-bold text-green-400">{progress}%</div>
            <div className="text-xs text-gray-400">Complete</div>
          </div>
          <div className="text-center p-3 bg-gray-800 rounded-lg">
            <div className="text-xl font-bold text-purple-400">{totalSteps - currentStep}</div>
            <div className="text-xs text-gray-400">Steps Left</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
