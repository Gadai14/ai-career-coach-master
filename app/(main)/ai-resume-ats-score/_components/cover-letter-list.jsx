"use client"


import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Button } from "../../../../components/ui/button"
import { Upload, FileText, Award, BarChart3, CheckCircle, ArrowRight } from "lucide-react"

export default function Component() {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([])

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    const files = Array.from(e.dataTransfer.files)
    setUploadedFiles((prev) => [...prev, ...files])
  }

  const handleFileSelect = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      setUploadedFiles((prev) => [...prev, ...files])
    }
  }

  const scoringSteps = [
    {
      icon: <Upload className="w-8 h-8 text-blue-400" />,
      title: "Upload Document",
      description: "Upload your PDF or Word document to begin the analysis process",
      step: "Step 1",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "AI Analysis",
      description: "Our advanced AI analyzes content quality, structure, and relevance",
      step: "Step 2",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Score Generation",
      description: "Receive detailed scoring based on multiple quality metrics",
      step: "Step 3",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-400" />,
      title: "Results & Insights",
      description: "Get actionable insights and recommendations for improvement",
      step: "Step 4",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Document Scorer
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Upload your documents and get AI-powered quality scores with detailed insights
          </p>
        </div>

        {/* Upload Section */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-gray-800/60">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white flex items-center justify-center gap-2">
              <FileText className="w-6 h-6 text-blue-400" />
              Upload Your Documents
            </CardTitle>
            <CardDescription className="text-gray-400">Supports PDF and Word documents up to 10MB</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`border-2 border-dashed rounded-lg p-8 md:p-12 text-center transition-all duration-300 ${
                isDragOver
                  ? "border-blue-400 bg-blue-400/10 scale-105"
                  : "border-gray-600 hover:border-gray-500 hover:bg-gray-800/30"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload
                className={`w-16 h-16 mx-auto mb-4 transition-all duration-300 ${
                  isDragOver ? "text-blue-400 scale-110" : "text-gray-400"
                }`}
              />
              <h3 className="text-xl font-semibold text-white mb-2">Drag & drop your files here</h3>
              <p className="text-gray-400 mb-6">or click to browse</p>
              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Choose Files
                </Button>
              </label>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="mt-6 space-y-2 animate-slide-up">
                <h4 className="text-white font-medium">Uploaded Files:</h4>
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 flex-1">{file.name}</span>
                    <span className="text-gray-500 text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                ))}
                <Button className="w-full mt-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white transition-all duration-300 hover:scale-105">
                  Analyze Documents
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* How It Works Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-white">How Our Scoring Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scoringSteps.map((step, index) => (
              <Card
                key={index}
                className="bg-gray-800/40 border-gray-700 backdrop-blur-sm hover:bg-gray-800/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full inline-block">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-blue-300 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Advanced Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Get detailed metrics on readability, structure, and content quality with AI-powered analysis.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-green-300 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Instant Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Receive comprehensive scoring and feedback within seconds of uploading your document.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border-purple-700/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-purple-300 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Actionable Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Get specific recommendations to improve your document quality and effectiveness.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  )
}
