"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { FileText, Sparkles, Download, Copy, RefreshCw, Target, Users, BarChart3, GitBranch } from "lucide-react"

export function PRDGenerator() {
  const [featureDescription, setFeatureDescription] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedPRD, setGeneratedPRD] = useState<any>(null)

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedPRD({
        title: "In-App Notification System",
        problem:
          "Users are not aware of important updates and new features, leading to decreased engagement and feature adoption.",
        goals: [
          "Increase user engagement by 25%",
          "Improve feature adoption rate by 40%",
          "Reduce support tickets related to missed updates by 60%",
        ],
        successMetrics: ["Notification open rate > 70%", "Click-through rate > 15%", "User retention increase by 20%"],
        userStories: [
          "As a user, I want to receive notifications about new features so I can stay updated",
          "As a user, I want to customize notification preferences so I only get relevant updates",
          "As a user, I want to see notification history so I can review past messages",
        ],
        dependencies: [
          "Push notification service integration",
          "User preference management system",
          "Analytics tracking implementation",
        ],
      })
      setIsGenerating(false)
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-card/50 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI-Powered PRD Generator
          </CardTitle>
          <CardDescription>
            Describe your feature idea and let AI generate a comprehensive Product Requirements Document
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Feature Description</label>
            <Textarea
              placeholder="Describe the feature you want to build (e.g., 'In-app notification system to improve user engagement')"
              value={featureDescription}
              onChange={(e) => setFeatureDescription(e.target.value)}
              className="min-h-[100px] bg-input border-border"
            />
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleGenerate}
              disabled={!featureDescription.trim() || isGenerating}
              className="bg-primary hover:bg-primary/90 neon-glow"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Generating PRD...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate PRD
                </>
              )}
            </Button>

            {generatedPRD && (
              <>
                <Button variant="outline">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      {generatedPRD && (
        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Generated PRD: {generatedPRD.title}
            </CardTitle>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-primary/20 text-primary">
                AI Generated
              </Badge>
              <Badge variant="outline">Ready for Review</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                Problem Statement
              </h3>
              <p className="text-muted-foreground">{generatedPRD.problem}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                Goals
              </h3>
              <ul className="space-y-2">
                {generatedPRD.goals.map((goal: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                Success Metrics
              </h3>
              <ul className="space-y-2">
                {generatedPRD.successMetrics.map((metric: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                User Stories
              </h3>
              <ul className="space-y-2">
                {generatedPRD.userStories.map((story: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{story}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-primary" />
                Dependencies
              </h3>
              <ul className="space-y-2">
                {generatedPRD.dependencies.map((dependency: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{dependency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
