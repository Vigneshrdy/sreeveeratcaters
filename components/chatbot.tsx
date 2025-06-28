"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User, Phone } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const menuData = {
  welcomeDrinks: [
    "Soft Drink",
    "Fruit Punch",
    "Fresh Juices (Seasonal)",
    "Badam Milk (Hot/Cold)",
    "Lassi (Sweet, Salt, Sweet)",
  ],
  soups: {
    veg: [
      "Cream of Tomato Soup",
      "Veg. Sweet Corn Soup",
      "Veg. Clear Soup",
      "Cream of Mushroom Soup",
      "Veg. Corn & Tomato Soup",
      "Veg. Hot & Sour Soup",
      "Manchow Soup",
    ],
    nonVeg: [
      "Egg. Corn Soup",
      "Chicken Corn Soup",
      "Chicken Clear Soup",
      "Chicken Hot & Sour Soup",
      "Chicken Manchow Soup",
      "Mutton Bone Soup",
    ],
  },
  snacks: {
    veg: [
      "Veg 65",
      "Veg. Manchuria",
      "Gobi Manchuria",
      "Aloo Manchuria",
      "Aloo 65",
      "Aloo Chilly",
      "Paneer 65",
      "Paneer Manchuria",
      "Mushroom Manchuria",
      "Babycorn Chilly",
      "Mirchi Bajji",
      "Onion Pakoda",
    ],
    chicken: [
      "Chicken Manchuria",
      "Chicken Fry",
      "Chilly Chicken",
      "Chicken Pakoda",
      "Ginger Chicken",
      "Chicken Lollipop",
      "Chicken 65",
      "Chicken Nuggets",
    ],
    mutton: ["Mutton 65", "Mutton Fry", "Chilly Mutton", "Pepper Mutton", "Ginger Mutton"],
    fish: ["Fish Fry", "Fish Fingers", "Apollo Fish", "Fish 65", "Chilly Fish"],
    prawns: ["Chilly Prawns", "Prawns Manchuria", "Pepper Prawns", "Fried Prawns"],
  },
  tandoori: [
    "Tandoori Chicken",
    "Chicken Tikka",
    "Paneer Tikka",
    "Chicken Seekh Kebab",
    "Kalmi Kebab",
    "Chicken Malai Kebab",
  ],
  curries: {
    veg: ["Dal Fry", "Dal Makhni", "Veg. Masala", "Alu Gobi", "Palak", "Channa Masala"],
    paneer: ["Palak Paneer", "Paneer Butter Masala", "Kadai Paneer", "Paneer Tikka Masala"],
    chicken: ["Chicken Curry", "Butter Chicken", "Chicken Masala", "Kadai Chicken", "Country Chicken Curry"],
    mutton: ["Mutton Curry", "Mutton Masala", "Kadai Mutton", "Rogon Gosh"],
  },
  rice: {
    friedRice: ["Veg. Fried Rice", "Chicken Fried Rice", "Egg Fried Rice", "Schezwan Fried Rice"],
    biryani: ["Veg. Biryani", "Chicken Biryani", "Mutton Biryani", "Fish Biryani", "Prawns Biryani"],
    pulav: ["Veg. Pulav", "Green Peas Pulav", "Mushroom Pulav"],
  },
  bread: ["Roti", "Naan", "Butter Naan", "Alu Paratta", "Paneer Paratta", "Rumali Roti"],
  sweets: ["Gulab Jamoon", "Jilebi", "Double-ka-Meetha", "Gajar-ka-Halwa", "Rasmalai", "Kheer"],
  iceCreams: ["Vanilla", "Chocolate", "Strawberry", "Mango", "Butter Scotch"],
}

const getSmartResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase()

  // Greeting responses
  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return "Hello! Welcome to Sree Veerat Caters! 🍽️ I'm here to help you with our menu and services. What would you like to know about our delicious offerings?"
  }

  // Menu category queries
  if (message.includes("menu") || message.includes("what do you have")) {
    return "We have an extensive menu including:\n\n🥤 Welcome Drinks\n🍲 Soups (Veg & Non-Veg)\n🍽️ Snacks & Starters\n🔥 Tandoori Items\n🍛 Curries (Veg, Paneer, Chicken, Mutton)\n🍚 Rice Items (Biryani, Fried Rice, Pulav)\n🍞 Bread Basket\n🍰 Sweets & Ice Creams\n\nWhat category interests you?"
  }

  // Biryani queries
  if (message.includes("biryani")) {
    return "Our Biryani selection includes:\n\n🍚 Veg. Biryani\n🥚 Egg Biryani\n🐔 Chicken Biryani\n🐑 Mutton Biryani\n🐟 Fish Biryani\n🦐 Prawns Biryani\n⭐ Special Chicken Biryani\n⭐ Special Mutton Biryani\n\nAll served with raita and pickle! Which one would you like to order?"
  }

  // Chicken queries
  if (message.includes("chicken")) {
    return "Our Chicken specialties include:\n\n🍗 Starters: Chicken 65, Chilly Chicken, Chicken Manchuria, Tandoori Chicken\n🍛 Curries: Butter Chicken, Chicken Masala, Kadai Chicken\n🍚 Rice: Chicken Biryani, Chicken Fried Rice\n\nWould you like details about any specific chicken dish?"
  }

  // Vegetarian queries
  if (message.includes("veg") || message.includes("vegetarian")) {
    return "We have amazing vegetarian options:\n\n🥗 Veg Starters: Veg 65, Paneer 65, Gobi Manchuria\n🍛 Curries: Dal Makhni, Palak Paneer, Paneer Butter Masala\n🍚 Rice: Veg Biryani, Veg Fried Rice, Veg Pulav\n🍞 Breads: All varieties of rotis, naans, and parathas\n\nWhat type of vegetarian dish are you looking for?"
  }

  // Paneer queries
  if (message.includes("paneer")) {
    return "Our Paneer specialties:\n\n🧀 Palak Paneer\n🧀 Paneer Butter Masala\n🧀 Kadai Paneer\n🧀 Paneer Tikka Masala\n🧀 Paneer 65\n🧀 Paneer Manchuria\n🧀 Paneer Tikka (Tandoori)\n\nAll made with fresh, soft paneer! Which one catches your fancy?"
  }

  // Sweets queries
  if (message.includes("sweet") || message.includes("dessert")) {
    return "Our Sweet treats include:\n\n🍯 Traditional: Gulab Jamoon, Jilebi, Rasmalai\n🍮 Kheer varieties: Semiya Kheer, Pineapple Kheer\n🥕 Halwa: Gajar-ka-Halwa, Moong-dal-Halwa\n🍨 Ice Creams: Vanilla, Chocolate, Mango, Butter Scotch\n\nPerfect ending to your meal! What's your sweet preference?"
  }

  // Tandoori queries
  if (message.includes("tandoori") || message.includes("kebab")) {
    return "Our Tandoori specialties:\n\n🔥 Tandoori Chicken\n🔥 Chicken Tikka\n🔥 Paneer Tikka\n🔥 Chicken Seekh Kebab\n🔥 Kalmi Kebab\n🔥 Chicken Malai Kebab\n\nAll cooked in traditional tandoor for that authentic smoky flavor! Which one would you like?"
  }

  // Soup queries
  if (message.includes("soup")) {
    return "Our Soup selection:\n\n🥄 Veg: Tomato Soup, Sweet Corn Soup, Mushroom Soup, Hot & Sour\n🥄 Non-Veg: Chicken Corn Soup, Chicken Manchow, Mutton Bone Soup\n\nPerfect way to start your meal! Which soup would you prefer?"
  }

  // Pricing queries
  if (message.includes("price") || message.includes("cost") || message.includes("rate")) {
    return "For pricing information and current rates, please contact us directly:\n\n📞 Call: +91 99491 98142\n📞 Call: +91 99081 83163\n📞 Call: +91 70322 59167\n💬 WhatsApp: +91 99491 98142\n\nOur team will provide you with detailed pricing for your requirements!"
  }

  // Order queries
  if (message.includes("order") || message.includes("book")) {
    return "To place an order:\n\n📞 Call us: +91 99491 98142\n💬 WhatsApp: +91 99491 98142\n📧 Email: info@sreeveerat.com\n\nOur team will take your order and arrange delivery/pickup. We're here to serve you!"
  }

  // Location/delivery queries
  if (message.includes("location") || message.includes("delivery") || message.includes("address")) {
    return "We're located in Hyderabad, Telangana and provide:\n\n🚚 Home Delivery\n🏢 Corporate Catering\n🎉 Event Catering\n🌍 National & International Events\n\nCall +91 99491 98142 to check delivery availability in your area!"
  }

  // Spicy food queries
  if (message.includes("spicy") || message.includes("hot")) {
    return "For spice lovers, try:\n\n🌶️ Chilly Chicken\n🌶️ Pepper Mutton\n🌶️ Hot & Sour Soup\n🌶️ Schezwan Fried Rice\n🌶️ Kadai Chicken\n\nWe can adjust spice levels according to your preference!"
  }

  // Default response
  return "I'd be happy to help you with our menu! You can ask me about:\n\n• Specific dishes (biryani, chicken, paneer, etc.)\n• Menu categories (starters, curries, sweets)\n• Vegetarian/Non-vegetarian options\n• Pricing and ordering\n• Delivery information\n\nOr call us directly at +91 99491 98142 for immediate assistance! 😊"
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to Sree Veerat Caters! 🍽️ I'm your menu assistant. Ask me about our delicious South Indian dishes, biryanis, curries, and more!",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getSmartResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const quickActions = [
    "Show me the menu",
    "Biryani options",
    "Vegetarian dishes",
    "Chicken specialties",
    "How to order?",
    "Pricing info",
  ]

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 relative"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <Card className="bg-slate-900/95 border-slate-700 backdrop-blur-sm shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <div className="flex items-center space-x-3">
            <div>
              <div className="flex items-center space-x-3">
                <h3 className="font-semibold text-white">Menu Assistant</h3>
                <Button
                  onClick={() => window.open("https://wa.me/919949198142", "_blank")}
                  variant="outline"
                  size="sm"
                  className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-2 py-1"
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  WhatsApp
                </Button>
              </div>
              <p className="text-xs text-slate-400">Sree Veerat Caters</p>
            </div>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-800 text-slate-200 border border-slate-700"
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.sender === "bot" && <Bot className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />}
                  {message.sender === "user" && <User className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />}
                  <div className="flex-1">
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-800 border border-slate-700 p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4 text-cyan-400" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex flex-wrap gap-2 mb-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                onClick={() => setInputMessage(action)}
                variant="outline"
                size="sm"
                className="text-xs border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-400"
              >
                {action}
              </Button>
            ))}
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about our menu..."
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-500"
            />
            <Button onClick={handleSendMessage} className="bg-cyan-600 hover:bg-cyan-700 text-white" size="sm">
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Contact Buttons */}
          <div className="flex space-x-2 mt-3">
            <Button
              onClick={() => window.open("tel:+919949198142")}
              variant="outline"
              size="sm"
              className="flex-1 border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
            >
              <Phone className="h-4 w-4 mr-1" />
              Call
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
