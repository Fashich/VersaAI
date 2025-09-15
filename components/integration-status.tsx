"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Database,
  CheckCircle,
  AlertCircle,
  Settings,
  Key,
  MessageSquare,
  FileText,
  BarChart3,
  Brain,
} from "lucide-react"

interface Integration {
  id: number
  name: string
  type: "credential" | "service"
  status: "connected" | "error" | "disconnected"
  description: string
  icon: any
  lastSync?: string
}

export function IntegrationStatus() {
  const [integrations] = useState<Integration[]>([
    {
      id: 1,
      name: "OpenAI",
      type: "credential",
      status: "connected",
      description: "AI model for PRD generation",
      icon: Brain,
      lastSync: "2 minutes ago",
    },
    {
      id: 2,
      name: "Google Docs",
      type: "credential",
      status: "connected",
      description: "Document creation and storage",
      icon: FileText,
      lastSync: "5 minutes ago",
    },
    {
      id: 3,
      name: "Notion API",
      type: "credential",
      status: "connected",
      description: "Knowledge base integration",
      icon: Database,
      lastSync: "10 minutes ago",
    },
    {
      id: 4,
      name: "Jira API",
      type: "credential",
      status: "connected",
      description: "Project management integration",
      icon: Settings,
      lastSync: "15 minutes ago",
    },
    {
      id: 5,
      name: "Slack Webhook",
      type: "credential",
      status: "connected",
      description: "Team communication",
      icon: MessageSquare,
      lastSync: "1 minute ago",
    },
    {
      id: 6,
      name: "PostgreSQL",
      type: "credential",
      status: "connected",
      description: "Database storage",
      icon: Database,
      lastSync: "30 seconds ago",
    },
    {
      id: 7,
      name: "Market Data API",
      type: "credential",
      status: "error",
      description: "Market intelligence data",
      icon: BarChart3,
      lastSync: "1 hour ago",
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "error":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "disconnected":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="h-3 w-3" />
      case "error":
        return <AlertCircle className="h-3 w-3" />
      case "disconnected":
        return <AlertCircle className="h-3 w-3" />
      default:
        return <AlertCircle className="h-3 w-3" />
    }
  }

  const connectedCount = integrations.filter((i) => i.status === "connected").length
  const errorCount = integrations.filter((i) => i.status === "error").length

  return (
    <div className="space-y-6">
      <Card className="bg-card/50 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Integration Status
          </CardTitle>
          <CardDescription>Monitor your n8n credentials and service integrations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{connectedCount}</div>
              <div className="text-sm text-muted-foreground">Connected</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{errorCount}</div>
              <div className="text-sm text-muted-foreground">Errors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{integrations.length}</div>
              <div className="text-sm text-muted-foreground">Total</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5 text-primary" />
              Credentials
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {integrations
              .filter((integration) => integration.type === "credential")
              .map((integration) => {
                const IconComponent = integration.icon
                return (
                  <div
                    key={integration.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">{integration.name}</h4>
                        <p className="text-sm text-muted-foreground">{integration.description}</p>
                        {integration.lastSync && (
                          <p className="text-xs text-muted-foreground">Last sync: {integration.lastSync}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(integration.status)}>
                        {getStatusIcon(integration.status)}
                        <span className="ml-1 capitalize">{integration.status}</span>
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Settings className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                )
              })}
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">API Response Time</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Fast (120ms)
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Database Connection</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Healthy
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Workflow Execution</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Running
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">AI Model Status</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Online
                </Badge>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Market Data Feed</span>
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  Error
                </Badge>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 neon-glow">
              <Settings className="h-4 w-4 mr-2" />
              Configure Integrations
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
