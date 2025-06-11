"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, PlayCircle, Calendar } from "lucide-react"

/**
 * @param {{ roadmapTitle: string, totalSteps: number, estimatedMonths: number }} props
 */
export function RoadmapProgressTracker({ roadmapTitle, totalSteps, estimatedMonths }) {
  const [completedSteps, setCompletedSteps] = useState(0)
  const [currentWeek, setCurrentWeek] = useState(1)
  const [timeSpent, setTimeSpent] = useState(0) // in hours

  // Simulate progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedSteps((prev) => {
        if (prev < totalSteps) {
          return prev + 0.1
        }
        return prev
      })
      setCurrentWeek((prev) => {
        if (prev < estimatedMonths * 4) {
          return prev + 0.2
        }
        return prev
      })
      setTimeSpent((prev) => prev + 0.5)
    }, 100)

    return () => clearInterval(interval)
  }, [totalSteps, estimatedMonths])

  const progressPercentage = (completedSteps / totalSteps) * 100
  const weekProgress = (currentWeek / (estimatedMonths * 4)) * 100

  return (
    <Card className="border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl text-white flex items-center gap-2">
          <PlayCircle className="h-6 w-6 text-blue-500" />
          {roadmapTitle} Progress Tracker
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Overall Progress</span>
            <Badge className="bg-blue-600 text-white">{Math.round(progressPercentage)}% Complete</Badge>
          </div>
          <Progress value={progressPercentage} className="h-3" />
          <div className="flex justify-between text-sm text-gray-400">
            <span>
              {Math.round(completedSteps)}/{totalSteps} Steps
            </span>
            <span>{Math.round(timeSpent)} hours spent</span>
          </div>
        </div>

        {/* Timeline Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-300 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Timeline Progress
            </span>
            <Badge className="bg-green-600 text-white">
              Week {Math.round(currentWeek)}/{estimatedMonths * 4}
            </Badge>
          </div>
          <Progress value={weekProgress} className="h-3" />
          <div className="flex justify-between text-sm text-gray-400">
            <span>
              Month {Math.ceil(currentWeek / 4)}/{estimatedMonths}
            </span>
            <span>{Math.round(weekProgress)}% Timeline</span>
          </div>
        </div>

        {/* Animated Steps Visualization */}
        <div className="space-y-3">
          <h4 className="text-white font-medium">Learning Path Visualization</h4>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`h-8 rounded-md flex items-center justify-center text-xs font-medium transition-all duration-500 ${
                  i < completedSteps
                    ? "bg-green-500 text-white animate-pulse"
                    : i === Math.floor(completedSteps)
                      ? "bg-blue-500 text-white animate-bounce"
                      : "bg-gray-700 text-gray-400"
                }`}
              >
                {i < completedSteps ? <CheckCircle className="h-4 w-4" /> : <span>{i + 1}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Study Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-gray-800 rounded-lg">
            <div className="text-2xl font-bold text-blue-400">{Math.round(timeSpent)}</div>
            <div className="text-xs text-gray-400">Hours Studied</div>
          </div>
          <div className="text-center p-3 bg-gray-800 rounded-lg">
            <div className="text-2xl font-bold text-green-400">{Math.round(completedSteps)}</div>
            <div className="text-xs text-gray-400">Steps Done</div>
          </div>
          <div className="text-center p-3 bg-gray-800 rounded-lg">
            <div className="text-2xl font-bold text-purple-400">{Math.round(currentWeek)}</div>
            <div className="text-xs text-gray-400">Weeks In</div>
          </div>
        </div>

        {/* Estimated Completion */}
        <div className="p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg border border-blue-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-blue-400" />
            <span className="text-white font-medium">Estimated Completion</span>
          </div>
          <div className="text-sm text-gray-300">
            At current pace:{" "}
            <span className="text-blue-400 font-medium">
              {Math.round((estimatedMonths * 4 - currentWeek) * 7)} days remaining
            </span>
          </div>
          <div className="text-xs text-gray-400 mt-1">Target: {estimatedMonths} months total journey</div>
        </div>
      </CardContent>
    </Card>
  )
}
