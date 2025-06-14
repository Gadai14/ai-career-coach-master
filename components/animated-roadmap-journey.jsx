"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { BookOpen, Code, Trophy, Target } from "lucide-react"

/**
 * @typedef {Object} RoadmapStep
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {React.ReactNode} icon
 * @property {string} color
 * @property {{ x: number, y: number }} position
 * @property {boolean} completed
 * @property {boolean} current
 */

/**
 * @typedef {Object} AnimatedRoadmapJourneyProps
 * @property {string} roadmapTitle
 * @property {number} totalSteps
 * @property {number} estimatedMonths
 */

export function AnimatedRoadmapJourney({ roadmapTitle, totalSteps, estimatedMonths }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [animationProgress, setAnimationProgress] = useState(0)

  // Define the roadmap steps with curved path positions
  const steps = [
    {
      id: 1,
      title: "Fundamentals",
      description: "Learn the basics and core concepts",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-blue-500",
      position: { x: 10, y: 80 },
      completed: currentStep > 1,
      current: currentStep === 1,
    },
    {
      id: 2,
      title: "Core Concepts",
      description: "Master essential programming concepts",
      icon: <Code className="h-6 w-6" />,
      color: "bg-green-500",
      position: { x: 25, y: 20 },
      completed: currentStep > 2,
      current: currentStep === 2,
    },
    {
      id: 3,
      title: "Intermediate",
      description: "Build complex applications",
      icon: <Target className="h-6 w-6" />,
      color: "bg-orange-500",
      position: { x: 50, y: 60 },
      completed: currentStep > 3,
      current: currentStep === 3,
    },
    {
      id: 4,
      title: "Advanced",
      description: "Master advanced techniques",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-purple-500",
      position: { x: 75, y: 30 },
      completed: currentStep > 4,
      current: currentStep === 4,
    },
    {
      id: 5,
      title: "Expert",
      description: "Become a professional developer",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-pink-500",
      position: { x: 90, y: 70 },
      completed: currentStep > 5,
      current: currentStep === 5,
    },
  ]

  // Animate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= totalSteps) {
          return 1 // Reset to beginning
        }
        return prev + 1
      })
      setAnimationProgress((prev) => (prev + 20) % 100)
    }, 2000)

    return () => clearInterval(interval)
  }, [totalSteps])

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

  return (
    <Card className="border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{roadmapTitle} Learning Journey</h3>
          <Badge className="bg-blue-600 text-white">{estimatedMonths} Month Journey</Badge>
        </div>

        {/* Animated Roadmap SVG */}
        <div className="relative w-full h-64 mb-6 bg-gray-800 rounded-lg overflow-hidden">
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
              strokeDashoffset={animationProgress}
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
            {steps.map((step, index) => {
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

          {/* Floating step labels */}
          {steps.map((step) => {
            const x = (step.position.x / 100) * 100
            const y = (step.position.y / 100) * 100

            return (
              <div
                key={`label-${step.id}`}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  step.current ? "scale-110 z-10" : "scale-100"
                }`}
                style={{
                  left: `${x}%`,
                  top: `${y - 15}%`,
                }}
              >
                <div
                  className={`bg-gray-900 border border-gray-600 rounded-lg p-2 shadow-lg ${
                    step.current ? "border-blue-500 shadow-blue-500/20" : ""
                  }`}
                >
                  <div className="text-xs text-white font-medium text-center">{step.title}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Current Step Details */}
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
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
              Progress: {currentStep}/{totalSteps} steps
            </div>
            <div className="text-sm text-gray-400">
              Month {Math.ceil((currentStep / totalSteps) * estimatedMonths)}/{estimatedMonths}
            </div>
          </div>
        </div>

        {/* Journey Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center p-3 bg-gray-800 rounded-lg">
            <div className="text-xl font-bold text-blue-400">{currentStep}</div>
            <div className="text-xs text-gray-400">Current Step</div>
          </div>
          <div className="text-center p-3 bg-gray-800 rounded-lg">
            <div className="text-xl font-bold text-green-400">{Math.round((currentStep / totalSteps) * 100)}%</div>
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
