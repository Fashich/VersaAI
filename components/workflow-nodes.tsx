"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GitBranch,
  Play,
  Pause,
  CheckCircle,
  AlertCircle,
  Clock,
  Database,
  Shield,
  Zap,
  MessageSquare,
  FileText,
  BarChart3,
  RefreshCw,
} from "lucide-react"

interface WorkflowNode {
  id: number
  name: string
  category: string
  status: "active" | "idle" | "error" | "success"
  description: string
  icon: any
}

export function WorkflowNodes() {
  const [nodes] = useState<WorkflowNode[]>([
    {
      id: 1,
      name: "Webhook Trigger",
      category: "Triggers",
      status: "active",
      description: "Listens for incoming requests",
      icon: Zap,
    },
    {
      id: 2,
      name: "JWT Authentication",
      category: "Security",
      status: "success",
      description: "Validates user tokens",
      icon: Shield,
    },
    {
      id: 3,
      name: "Data Masking",
      category: "Security",
      status: "success",
      description: "Protects sensitive information",
      icon: Shield,
    },
    {
      id: 4,
      name: "Rate Limiting",
      category: "Security",
      status: "active",
      description: "Controls request frequency",
      icon: Clock,
    },
    {
      id: 5,
      name: "Fetch Market Data",
      category: "Data",
      status: "success",
      description: "Retrieves market information",
      icon: Database,
    },
    {
      id: 6,
      name: "Fetch Competitor Data",
      category: "Data",
      status: "success",
      description: "Gathers competitor insights",
      icon: Database,
    },
    {
      id: 7,
      name: "Split PRD Sections",
      category: "Processing",
      status: "active",
      description: "Breaks down PRD components",
      icon: FileText,
    },
    {
      id: 8,
      name: "Generate Problem Statement",
      category: "AI",
      status: "success",
      description: "Creates problem definitions",
      icon: FileText,
    },
    {
      id: 9,
      name: "Generate Goals",
      category: "AI",
      status: "success",
      description: "Defines project objectives",
      icon: FileText,
    },
    {
      id: 10,
      name: "Generate Success Metrics",
      category: "AI",
      status: "active",
      description: "Creates measurement criteria",
      icon: BarChart3,
    },
    {
      id: 11,
      name: "Generate User Stories",
      category: "AI",
      status: "success",
      description: "Creates user narratives",
      icon: FileText,
    },
    {
      id: 12,
      name: "Generate Dependencies",
      category: "AI",
      status: "success",
      description: "Identifies requirements",
      icon: GitBranch,
    },
    {
      id: 13,
      name: "Combine PRD Data",
      category: "Processing",
      status: "active",
      description: "Merges PRD components",
      icon: FileText,
    },
    {
      id: 14,
      name: "Validate PRD Structure",
      category: "Validation",
      status: "success",
      description: "Checks document format",
      icon: CheckCircle,
    },
    {
      id: 15,
      name: "Calculate RICE Scores",
      category: "Analysis",
      status: "active",
      description: "Computes prioritization scores",
      icon: BarChart3,
    },
    {
      id: 16,
      name: "Classify MoSCoW",
      category: "Analysis",
      status: "success",
      description: "Categorizes requirements",
      icon: BarChart3,
    },
    {
      id: 17,
      name: "Combine Prioritization",
      category: "Processing",
      status: "active",
      description: "Merges priority data",
      icon: BarChart3,
    },
    {
      id: 18,
      name: "Create Google Doc",
      category: "Export",
      status: "success",
      description: "Generates Google document",
      icon: FileText,
    },
    {
      id: 19,
      name: "Export to Jira CSV",
      category: "Export",
      status: "success",
      description: "Creates Jira import file",
      icon: FileText,
    },
    {
      id: 20,
      name: "Save to Notion",
      category: "Export",
      status: "active",
      description: "Stores in Notion database",
      icon: Database,
    },
    {
      id: 21,
      name: "Notify Slack",
      category: "Communication",
      status: "success",
      description: "Sends team notifications",
      icon: MessageSquare,
    },
    {
      id: 22,
      name: "Save to DB",
      category: "Storage",
      status: "active",
      description: "Persists to database",
      icon: Database,
    },
    {
      id: 23,
      name: "Version Control",
      category: "Management",
      status: "success",
      description: "Tracks document versions",
      icon: GitBranch,
    },
    {
      id: 24,
      name: "Webhook - Feedback",
      category: "Triggers",
      status: "idle",
      description: "Receives feedback data",
      icon: Zap,
    },
    {
      id: 25,
      name: "Refine PRD Based on Feedback",
      category: "AI",
      status: "idle",
      description: "Improves based on input",
      icon: RefreshCw,
    },
    {
      id: 26,
      name: "Weekly Report Scheduler",
      category: "Automation",
      status: "active",
      description: "Schedules regular reports",
      icon: Clock,
    },
    {
      id: 27,
      name: "Generate Weekly Report",
      category: "Reporting",
      status: "success",
      description: "Creates status reports",
      icon: BarChart3,
    },
    {
      id: 28,
      name: "Send Weekly Report",
      category: "Communication",
      status: "success",
      description: "Distributes reports",
      icon: MessageSquare,
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary/20 text-primary border-primary/30"
      case "success":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "error":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "idle":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Play className="h-3 w-3" />
      case "success":
        return <CheckCircle className="h-3 w-3" />
      case "error":
        return <AlertCircle className="h-3 w-3" />
      case "idle":
        return <Pause className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  const categories = [...new Set(nodes.map((node) => node.category))]

  return (
    <div className="space-y-6">
      <Card className="bg-card/50 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            n8n Workflow Nodes
          </CardTitle>
          <CardDescription>Monitor and manage your AI workflow automation nodes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{nodes.filter((n) => n.status === "active").length}</div>
              <div className="text-sm text-muted-foreground">Active</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">
                {nodes.filter((n) => n.status === "success").length}
              </div>
              <div className="text-sm text-muted-foreground">Success</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{nodes.filter((n) => n.status === "error").length}</div>
              <div className="text-sm text-muted-foreground">Error</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400">{nodes.filter((n) => n.status === "idle").length}</div>
              <div className="text-sm text-muted-foreground">Idle</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {categories.map((category) => (
        <Card key={category} className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">{category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nodes
                .filter((node) => node.category === category)
                .map((node) => {
                  const IconComponent = node.icon
                  return (
                    <Card key={node.id} className="bg-background/50 border-border/50">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <IconComponent className="h-4 w-4 text-primary" />
                            <h4 className="font-medium text-sm">{node.name}</h4>
                          </div>
                          <Badge className={getStatusColor(node.status)}>
                            {getStatusIcon(node.status)}
                            <span className="ml-1 capitalize">{node.status}</span>
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{node.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
