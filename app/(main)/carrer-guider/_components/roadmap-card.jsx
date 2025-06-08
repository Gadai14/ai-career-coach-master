import Link from "next/link"
import { Binary, Code2, Coffee, Globe, Hash, Layout, LucideIcon } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Button } from "../../../../components/ui/button"

/**
 * @typedef {Object} RoadmapCardProps
 * @property {string} title
 * @property {string} description
 * @property {string} icon
 * @property {string} href
 */

/** @param {RoadmapCardProps} props */
export function RoadmapCard({ title, description, icon, href }) {
  const icons = {
    Binary,
    Coffee,
    Code2,
    Hash,
    Globe,
    Layout,
  }

  const IconComponent = icons[icon]

  return (
    <Card className="flex flex-col overflow-hidden border transition-colors hover:shadow-sm">
      <CardHeader className="pb-4">
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-white border">
          {IconComponent && <IconComponent className="h-5 w-5" />}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-2">
        <p className="text-sm text-muted-foreground">
          Follow our step-by-step guide with curated resources to master this skill.
        </p>
      </CardContent>
      <CardFooter>
        <Link href={href} className="w-full">
          <Button variant="outline" className="w-full">
            View Roadmap
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
