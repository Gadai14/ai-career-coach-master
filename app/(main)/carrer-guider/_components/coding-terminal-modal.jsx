"use client"

import { useState, useEffect } from "react"
import { X, Play, Copy, Download, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "../../../../components/ui/button.jsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select.jsx"
import { Textarea } from "../../../../components/ui/textarea.jsx"
import { Badge } from "../../../../components/ui/badge.jsx"

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

console.log(greet(name));

// Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);`,

  java: `// Java Example
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Variables
        String name = "Developer";
        int age = 25;
        
        // Method call
        greet(name);
        
        // Array operations
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println("Array length: " + numbers.length);
    }
    
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
}`,

  cpp: `// C++ Example
#include <iostream>
#include <string>
#include <vector>

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
    
    // Vector operations
    vector<int> numbers = {1, 2, 3, 4, 5};
    cout << "Vector size: " << numbers.size() << endl;
    
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
    
    // Array operations
    int numbers[] = {1, 2, 3, 4, 5};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    printf("Array size: %d\\n", size);
    
    return 0;
}`,

  csharp: `// C# Example
using System;
using System.Linq;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
        
        // Variables
        string name = "Developer";
        int age = 25;
        
        // Method call
        Greet(name);
        
        // Array operations
        int[] numbers = {1, 2, 3, 4, 5};
        var doubled = numbers.Select(n => n * 2).ToArray();
        Console.WriteLine($"Doubled: [{string.Join(", ", doubled)}]");
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

# List operations
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]
print(f"Original: {numbers}")
print(f"Doubled: {doubled}")

# Dictionary example
person = {"name": name, "age": age}
print(f"Person: {person}")`,
}

const languageInfo = {
  javascript: { name: "JavaScript", extension: ".js", color: "bg-yellow-500" },
  java: { name: "Java", extension: ".java", color: "bg-red-500" },
  cpp: { name: "C++", extension: ".cpp", color: "bg-blue-500" },
  c: { name: "C", extension: ".c", color: "bg-gray-500" },
  csharp: { name: "C#", extension: ".cs", color: "bg-purple-500" },
  python: { name: "Python", extension: ".py", color: "bg-green-500" },
}

/**
 * @param {{ isOpen: boolean, onClose: () => void }} props
 */
export function CodingTerminalModal({ isOpen, onClose }) {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")
  const [code, setCode] = useState(languageTemplates.javascript)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language)
    setCode(languageTemplates[language])
    setOutput("")
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput("$ Running code...\n")

    // Simulate code execution with typing effect
    setTimeout(() => {
      const mockOutputs = {
        javascript: `$ node script.js
Hello, World!
Hello, Developer!
Doubled: [2, 4, 6, 8, 10]

Process finished with exit code 0`,
        java: `$ javac HelloWorld.java && java HelloWorld
Hello, World!
Hello, Developer!
Array length: 5

Process finished with exit code 0`,
        cpp: `$ g++ -o program main.cpp && ./program
Hello, World!
Hello, Developer!
Vector size: 5

Process finished with exit code 0`,
        c: `$ gcc -o program main.c && ./program
Hello, World!
Hello, Developer!
Array size: 5

Process finished with exit code 0`,
        csharp: `$ dotnet run
Hello, World!
Hello, Developer!
Doubled: [2, 4, 6, 8, 10]

Process finished with exit code 0`,
        python: `$ python script.py
Hello, World!
Hello, Developer!
Original: [1, 2, 3, 4, 5]
Doubled: [2, 4, 6, 8, 10]
Person: {'name': 'Developer', 'age': 25}

Process finished with exit code 0`,
      }

      setOutput(mockOutputs[selectedLanguage])
      setIsRunning(false)
    }, 2000)
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Terminal Window */}
      <div
        className={`relative bg-gray-900 rounded-lg shadow-2xl border border-gray-700 transition-all duration-300 ${
          isMinimized ? "w-96 h-12" : "w-[90vw] h-[85vh] max-w-6xl"
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-t-lg border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-300 font-mono text-sm">
              terminal@roadmap:~/{languageInfo[selectedLanguage].name.toLowerCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-gray-400 hover:text-white hover:bg-gray-700"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Terminal Content */}
        {!isMinimized && (
          <div className="flex h-[calc(100%-60px)]">
            {/* Left Panel - Code Editor */}
            <div className="flex-1 flex flex-col bg-gray-900">
              {/* Editor Header */}
              <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="w-40 bg-gray-700 border-gray-600 text-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      {Object.entries(languageInfo).map(([key, info]) => (
                        <SelectItem key={key} value={key} className="text-gray-200 focus:bg-gray-700">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${info.color}`}></div>
                            {info.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                    {languageInfo[selectedLanguage].extension}
                  </Badge>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyCode}
                    className="text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={downloadCode}
                    className="text-gray-400 hover:text-white hover:bg-gray-700"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Code Editor */}
              <div className="flex-1 p-4">
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full bg-gray-900 border-gray-700 text-gray-100 font-mono text-sm resize-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Write your code here..."
                />
              </div>

              {/* Run Button */}
              <div className="p-4 border-t border-gray-700">
                <Button
                  onClick={runCode}
                  disabled={isRunning}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-mono"
                >
                  <Play className="h-4 w-4 mr-2" />
                  {isRunning ? "Running..." : "Execute Code"}
                </Button>
              </div>
            </div>

            {/* Right Panel - Output Terminal */}
            <div className="w-96 bg-black border-l border-gray-700 flex flex-col">
              {/* Output Header */}
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                <span className="text-gray-300 font-mono text-sm">Output Terminal</span>
              </div>

              {/* Output Content */}
              <div className="flex-1 p-4 overflow-auto">
                <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                  {output ||
                    "$ Ready to execute code...\n\nSelect a language, write your code, and click 'Execute Code' to see the output here."}
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="bg-gray-800 px-4 py-2 border-t border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-400 text-xs font-mono">Ready</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
