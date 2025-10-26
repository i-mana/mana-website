import { useState } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import chatbotAvatar from "@/assets/chatbot-avatar.png";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Namaste! 🙏 I'm here to help you learn more about MANA. How can I assist you today?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: "Thank you for your message! I'm here to help you with information about MANA's vision, mission, and values. Feel free to ask me anything!",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Overlay Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Content Container */}
          <div className="relative z-10 flex items-center gap-8 max-w-6xl w-full">
            {/* Large Avatar */}
            <div className="hidden lg:block w-96 h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-sm animate-scale-in">
              <img 
                src={chatbotAvatar} 
                alt="MANA Assistant" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Chat Window with Glassmorphism */}
            <Card className="w-full lg:w-[500px] h-[600px] shadow-2xl border-2 border-white/20 flex flex-col overflow-hidden animate-scale-in bg-white/10 backdrop-blur-xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-secondary via-accent to-primary p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden lg:hidden">
                    <img src={chatbotAvatar} alt="MANA Assistant" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-white">
                    <h3 className="font-bold">MANA Assistant</h3>
                    <p className="text-xs opacity-90">Always here to help</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/80 backdrop-blur-sm">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-white/90 backdrop-blur-sm border border-primary/20"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/20 bg-white/90 backdrop-blur-sm">
                <div className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 bg-white"
                  />
                  <Button onClick={handleSend} size="icon" className="bg-gradient-to-r from-secondary to-accent">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-20 h-20 rounded-full shadow-2xl hover:scale-110 transition-smooth z-40 border-4 border-white overflow-hidden group"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary)))',
        }}
      >
        {!isOpen ? (
          <img 
            src={chatbotAvatar} 
            alt="Chat with us" 
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-accent">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
        )}
      </button>
    </>
  );
};

export default Chatbot;
