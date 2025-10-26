import { useState } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import chatbotAvatar from "@/assets/mana-mascot.png";

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
      {/* Chat Window - responsive positioning */}
      {isOpen && (
        <Card className="fixed bottom-4 left-4 md:left-6 md:bottom-6 lg:right-[315px] lg:left-auto w-[calc(100vw-2rem)] md:w-[400px] lg:w-[500px] h-[70vh] md:h-[450px] lg:h-[500px] max-h-[600px] shadow-2xl border-2 border-white/20 z-50 flex flex-col overflow-hidden animate-scale-in bg-white/95 backdrop-blur-xl p-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-background/90 via-primary/30 to-background/90 backdrop-blur-sm p-4 flex items-center justify-between border-b border-primary/20">
            <div className="flex items-center gap-3">
              <div className="text-foreground">
                <h3 className="font-bold">MANA Chat</h3>
                <p className="text-xs opacity-70">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-foreground/70 hover:text-foreground hover:bg-primary/10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/90 backdrop-blur-sm">
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
              <Button 
                onClick={handleSend} 
                size="icon" 
                disabled={!inputValue.trim()}
                className={`backdrop-blur-sm border transition-all duration-300 ${
                  inputValue.trim() 
                    ? 'bg-primary/60 hover:bg-primary/80 border-primary/60 hover:border-primary/80' 
                    : 'bg-primary/20 border-primary/30 opacity-60 cursor-not-allowed'
                }`}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Chat Button / Avatar - responsive sizing */}
      {!isOpen ? (
        <>
          {/* Always visible info card - hidden on mobile when space is tight */}
          <Card 
            onClick={() => setIsOpen(true)}
            className="fixed right-4 bottom-28 md:right-6 md:bottom-36 w-auto max-w-[140px] md:max-w-[160px] px-2 py-1.5 bg-gradient-to-r from-background/95 via-primary/20 to-background/95 backdrop-blur-xl border border-primary/30 shadow-xl z-50 animate-fade-in cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <p className="text-xs font-bold text-foreground text-center">
              MANA Chat
            </p>
            <p className="text-[10px] text-foreground/70 text-center">
              Click To Expand And Ask
            </p>
          </Card>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed right-4 bottom-4 md:right-6 md:bottom-6 w-20 h-20 md:w-28 md:h-28 hover:scale-105 transition-all duration-300 z-50"
            style={{ 
              background: 'none',
              backgroundColor: 'transparent',
              border: 'none',
              padding: 0,
              outline: 'none'
            }}
          >
            <img 
              src={chatbotAvatar} 
              alt="Chat with us" 
              className="w-full h-full object-contain drop-shadow-lg"
              style={{ 
                background: 'none',
                backgroundColor: 'transparent',
                imageRendering: 'auto'
              }}
            />
          </button>
        </>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden md:block fixed right-6 bottom-6 md:w-32 md:h-40 lg:w-[300px] lg:h-[400px] hover:scale-105 transition-all duration-300 z-50"
          style={{ 
            background: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0,
            outline: 'none'
          }}
        >
          <img 
            src={chatbotAvatar} 
            alt="Chat with us" 
            className="w-full h-full object-contain object-bottom drop-shadow-2xl transition-all duration-300"
            style={{ 
              background: 'none',
              backgroundColor: 'transparent',
              imageRendering: 'auto'
            }}
          />
        </button>
      )}
    </>
  );
};

export default Chatbot;
