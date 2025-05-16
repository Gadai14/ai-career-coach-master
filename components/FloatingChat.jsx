import React, { useState, useEffect, useRef } from "react";
import { Send, X, Minimize2, Maximize2, MessageSquare, Bot, Loader2 } from "lucide-react";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [iconRotation, setIconRotation] = useState(0);
  const [showOpenAnimation, setShowOpenAnimation] = useState(false);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  // Handle sending a message
  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!message.trim()) return;

    const newMessage = message.trim();
    setMessage("");
    
    // Add user message to conversation
    setConversation((prev) => [
      ...prev,
      { sender: "user", text: newMessage, timestamp: new Date() },
    ]);

    // Show typing indicator
    setIsTyping(true);

    try {
      // Call Gemini API
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAvc4MbqAxu8PmcphDueOSRfJyILfykDVs`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: newMessage }] }],
          }),
        }
      );
      
      const data = await res.json();
      const aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 
        "I'm not sure how to respond to that yet.";

      // Add AI response with typing effect
      setTimeout(() => {
        setIsTyping(false);
        setConversation((prev) => [
          ...prev,
          { sender: "ai", text: aiReply, timestamp: new Date() },
        ]);
      }, 800); // Slight delay for more realistic effect
    } catch (error) {
      console.error("Error fetching response:", error);
      setIsTyping(false);
      setConversation((prev) => [
        ...prev,
        { 
          sender: "ai", 
          text: "Sorry, I couldn't process your request. Please try again later.", 
          timestamp: new Date() 
        },
      ]);
    }
  };

  // Format timestamp
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Toggle chat open/closed with animation
  const toggleChat = () => {
    if (!isOpen) {
      setShowOpenAnimation(true);
      setTimeout(() => {
        setIsOpen(true);
        setShowOpenAnimation(false);
      }, 600);
      
      // Rotate icon during animation
      const rotationInterval = setInterval(() => {
        setIconRotation(prevRotation => (prevRotation + 15) % 360);
      }, 30);
      
      setTimeout(() => {
        clearInterval(rotationInterval);
        setIconRotation(0);
      }, 600);
      
      // Add welcome message if opening for first time and no messages
      if (conversation.length === 0) {
        setTimeout(() => {
          setConversation([
            {
              sender: "ai",
              text: "Hi there! How can I help you today?",
              timestamp: new Date(),
            },
          ]);
        }, 800);
      }
    } else {
      setIsOpen(false);
    }
  };

  // Toggle expanded/minimized with smooth animation
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle key press for sending message with Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat button with enhanced animation */}
      {(!isOpen || showOpenAnimation) && (
        <button
          onClick={toggleChat}
          style={{ 
            transform: showOpenAnimation ? `scale(1.2) rotate(${iconRotation}deg)` : 'scale(1) rotate(0deg)',
            opacity: showOpenAnimation ? 0.3 : 1 
          }}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative">
            <Bot size={28} className="absolute top-0 left-0 transition-all animate-pulse" 
                style={{ opacity: showOpenAnimation ? 0 : 1 }} />
            <MessageSquare size={28} className="transition-all"
                style={{ opacity: showOpenAnimation ? 0 : 1 }} />
          </div>
        </button>
      )}

      {/* Chat window with enhanced styling */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          className={`bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden transition-all duration-500 border border-gray-200 ${
            isExpanded ? "w-96 h-[600px]" : "w-80 h-[450px]"
          }`}
          style={{ 
            animation: "slideIn 0.5s ease-out forwards",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        >
          {/* Chat header with gradient */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 border-2 border-white/30 animate-pulse">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold">AI Assistant</h3>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-1"></div>
                  <p className="text-xs font-light">Online</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleExpand}
                className="p-1 hover:bg-white/20 rounded transition-all duration-200"
              >
                {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-white/20 rounded transition-all duration-200"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Chat messages with improved styling */}
          <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="space-y-4">
              {conversation.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                  style={{ 
                    animation: "fadeIn 0.3s ease-out forwards",
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 shadow-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none"
                        : "bg-white border border-gray-100 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <p className="whitespace-pre-wrap break-words">{msg.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.sender === "user" ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}

              {/* Enhanced typing indicator */}
              {isTyping && (
                <div className="flex justify-start" style={{ animation: "fadeIn 0.3s ease-out forwards" }}>
                  <div className="bg-white border border-gray-100 rounded-lg p-3 rounded-bl-none max-w-[80%] shadow-sm">
                    <div className="flex space-x-1 items-center h-6">
                      <div className="h-2 w-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      <div className="h-2 w-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Chat input with improved design */}
          <div className="p-4 border-t bg-white">
            <div className="flex items-center space-x-2 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 py-3 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50 shadow-sm transition-all duration-300"
                autoFocus
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className={`p-3 rounded-full transition-all duration-300 ${
                  message.trim()
                    ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md hover:shadow-lg"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {isTyping ? 
                  <Loader2 size={18} className="animate-spin" /> :
                  <Send size={18} className={message.trim() ? "animate-pulse" : ""} />
                }
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(124, 58, 237, 0); }
          100% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0); }
        }
      `}</style>
    </div>
  );
};

export default FloatingChat;