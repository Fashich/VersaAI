"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Target, Plus, BarChart3, TrendingUp, ArrowUpDown } from "lucide-react"

interface Feature {
  id: number
  name: string
  reach: number
  impact: number
  confidence: number
  effort: number
  riceScore: number
  priority: "High" | "Medium" | "Low"
}

export function FeaturePrioritization() {
  const [features, setFeatures] = useState<Feature[]>([
    {
      id: 1,
      name: "In-App Notifications",
      reach: 8,
      impact: 9,
      confidence: 8,
      effort: 5,
      riceScore: 115.2,
      priority: "High",
    },
    {
      id: 2,
      name: "Dark Mode Theme",
      reach: 7,
      impact: 6,
      confidence: 9,
      effort: 3,
      riceScore: 126.0,
      priority: "High",
    },
    {
      id: 3,
      name: "Advanced Search",
      reach: 6,
      impact: 7,
      confidence: 7,
      effort: 8,
      riceScore: 36.75,
      priority: "Medium",
    },
    {
      id: 4,
      name: "Social Media Integration",
      reach: 5,
      impact: 5,
      confidence: 6,
      effort: 7,
      riceScore: 21.43,
      priority: "Low",
    },
  ])

  const [newFeature, setNewFeature] = useState("")

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Low":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const sortedFeatures = [...features].sort((a, b) => b.riceScore - a.riceScore)

  return (
    <div className="space-y-6">
      <Card className="bg-card/50 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Feature Prioritization (RICE Framework)
          </CardTitle>
          <CardDescription>Prioritize features using Reach, Impact, Confidence, and Effort scoring</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Add new feature to prioritize..."
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              className="bg-input border-border"
            />
            <Button className="bg-primary hover:bg-primary/90 neon-glow">
              <Plus className="h-4 w-4 mr-2" />
              Add Feature
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Prioritization Results
          </CardTitle>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <span>RICE Score = (Reach × Impact × Confidence) / Effort</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="text-foreground">
                  <Button variant="ghost" size="sm" className="h-auto p-0 font-semibold">
                    Feature
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-center text-foreground">Reach</TableHead>
                <TableHead className="text-center text-foreground">Impact</TableHead>
                <TableHead className="text-center text-foreground">Confidence</TableHead>
                <TableHead className="text-center text-foreground">Effort</TableHead>
                <TableHead className="text-center text-foreground">
                  <Button variant="ghost" size="sm" className="h-auto p-0 font-semibold">
                    RICE Score
                    <TrendingUp className="ml-2 h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-center text-foreground">Priority</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedFeatures.map((feature) => (
                <TableRow key={feature.id} className="border-border">
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">{feature.reach}</TableCell>
                  <TableCell className="text-center">{feature.impact}</TableCell>
                  <TableCell className="text-center">{feature.confidence}</TableCell>
                  <TableCell className="text-center">{feature.effort}</TableCell>
                  <TableCell className="text-center font-bold text-primary">{feature.riceScore.toFixed(1)}</TableCell>
                  <TableCell className="text-center">
                    <Badge className={getPriorityColor(feature.priority)}>{feature.priority}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-card/50 border-green-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-green-400">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">
              {features.filter((f) => f.priority === "High").length}
            </div>
            <p className="text-xs text-muted-foreground">Features to focus on</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-yellow-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-yellow-400">Medium Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-400">
              {features.filter((f) => f.priority === "Medium").length}
            </div>
            <p className="text-xs text-muted-foreground">Features for next sprint</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-red-500/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-red-400">Low Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">{features.filter((f) => f.priority === "Low").length}</div>
            <p className="text-xs text-muted-foreground">Features for backlog</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
