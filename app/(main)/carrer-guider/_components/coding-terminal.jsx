"use client"

import { useState } from "react"
import { Play, Copy, Download, Settings } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select"
import { Textarea } from "../../../../components/ui/textarea"
import { Badge } from "../../../../components/ui/badge"

const languageTemplates = {
  javascript: `// JavaScript Example
console.log("Hello, World!");

// Variables
let name = "Developer";
let age = 25;

// Function
function greet(name) {
    return \`Hello, \${name}!\`;
}

console.log(greet(name));`,

  java: `// Java Example
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Variables
        String name = "Developer";
        int age = 25;
        
        // Method call
        greet(name);
    }
    
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
}`,

  cpp: `// C++ Example
#include <iostream>
#include <string>

using namespace std;

void greet(string name) {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    cout << "Hello, World!" << endl;
    
    // Variables
    string name = "Developer";
    int age = 25;
    
    // Function call
    greet(name);
    
    return 0;
}`,

  c: `// C Example
#include <stdio.h>
#include <string.h>

void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}

int main() {
    printf("Hello, World!\\n");
    
    // Variables
    char name[] = "Developer";
    int age = 25;
    
    // Function call
    greet(name);
    
    return 0;
}`,

  csharp: `// C# Example
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
        
        // Variables
        string name = "Developer";
        int age = 25;
        
        // Method call
        Greet(name);
    }
    
    static void Greet(string name) {
        Console.WriteLine($"Hello, {name}!");
    }
}`,

  python: `# Python Example
print("Hello, World!")

# Variables
name = "Developer"
age = 25

# Function
def greet(name):
    return f"Hello, {name}!"

print(greet(name))

# List example
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(f"Number: {num}")`,
}

const languageInfo = {
  javascript: { name: "JavaScript", extension: ".js", color: "bg-yellow-500" },
  java: { name: "Java", extension: ".java", color: "bg-red-500" },
  cpp: { name: "C++", extension: ".cpp", color: "bg-blue-500" },
  c: { name: "C", extension: ".c", color: "bg-gray-500" },
  csharp: { name: "C#", extension: ".cs", color: "bg-purple-500" },
  python: { name: "Python", extension: ".py", color: "bg-green-500" },
}

// type LanguageKey = keyof typeof languageTemplates

export function CodingTerminal() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")
  const [code, setCode] = useState(languageTemplates.javascript)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language)
    setCode(languageTemplates[language])
    setOutput("")
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput("Running code...")

    // Simulate code execution
    setTimeout(() => {
      const mockOutputs = {
        javascript: "Hello, World!\nHello, Developer!",
        java: "Hello, World!\nHello, Developer!",
        cpp: "Hello, World!\nHello, Developer!",
        c: "Hello, World!\nHello, Developer!",
        csharp: "Hello, World!\nHello, Developer!",
        python: "Hello, World!\nHello, Developer!\nNumber: 1\nNumber: 2\nNumber: 3\nNumber: 4\nNumber: 5",
      }

      setOutput(mockOutputs[selectedLanguage])
      setIsRunning(false)
    }, 1000)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
  }

  const downloadCode = () => {
    const element = document.createElement("a")
    const file = new Blob([code], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `code${languageInfo[selectedLanguage].extension}`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <Card className="w-full border-2">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="ml-2">Code Terminal</span>
          </CardTitle>
          <Settings className="h-4 w-4 text-gray-500" />
        </div>

        <div className="flex items-center gap-2">
          <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(languageInfo).map(([key, info]) => (
                <SelectItem key={key} value={key}>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${info.color}`}></div>
                    {info.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Badge variant="outline" className="text-xs">
            {languageInfo[selectedLanguage].extension}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Code Editor */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Code Editor</label>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" onClick={copyCode}>
                <Copy className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm" onClick={downloadCode}>
                <Download className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono text-sm min-h-[200px] resize-none"
            placeholder="Write your code here..."
          />
        </div>

        {/* Run Button */}
        <Button onClick={runCode} disabled={isRunning} className="w-full">
          <Play className="h-4 w-4 mr-2" />
          {isRunning ? "Running..." : "Run Code"}
        </Button>

        {/* Output */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Output</label>
          <div className="bg-black text-green-400 p-3 rounded-md font-mono text-sm min-h-[100px] whitespace-pre-wrap">
            {output || "Output will appear here..."}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-gray-50 p-3 rounded-md">
          <h4 className="text-sm font-medium mb-2">Quick Tips:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Try modifying the code and run it</li>
            <li>• Use this to practice concepts from the roadmap</li>
            <li>• Copy code to your local IDE for larger projects</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}