import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

/**
 * @typedef {Object} RoadmapStepProps
 * @property {number} number
 * @property {string} title
 * @property {string} description
 * @property {"Beginner" | "Intermediate" | "Advanced"} difficulty
 * @property {string} estimatedTime
 * @property {React.ReactNode} [children]
 */

export function RoadmapStep({ number, title, description, difficulty, estimatedTime, children }) {
  const difficultyColor = {
    Beginner: "bg-green-500 hover:bg-green-600",
    Intermediate: "bg-yellow-500 hover:bg-yellow-600",
    Advanced: "bg-red-500 hover:bg-red-600",
  }[difficulty]

  return (
    <Card className="relative border-l-4 border-l-white bg-gray-900 border-gray-700 shadow-lg">
      <div className="absolute -left-8 -top-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-black bg-white text-xl font-bold text-black shadow-lg">
        {number}
      </div>
      <CardHeader className="pt-12 pb-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-2xl text-white">{title}</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className="border-gray-500 text-gray-300 bg-gray-800">
              {estimatedTime}
            </Badge>
            <Badge className={`${difficultyColor} text-white border-0`}>{difficulty}</Badge>
          </div>
        </div>
        <CardDescription className="text-gray-300 text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 text-gray-300">{children}</CardContent>
    </Card>
  )
}
