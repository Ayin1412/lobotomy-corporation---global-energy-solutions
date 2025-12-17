import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { sendMessageToAngela } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AngelaChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings, Manager. I am Angela. How may I assist with the facility today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: m.text
    }));

    try {
      const responseText = await sendMessageToAngela(history, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection with main server interrupted.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-lc-black border border-lc-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] rounded-lg overflow-hidden flex flex-col font-sans transition-all duration-300">
          {/* Header */}
          <div className="bg-lc-gold text-lc-black p-3 flex justify-between items-center">
            <div className="flex items-center gap-2 font-serif font-bold">
              <Bot size={20} />
              <span>ANGELA v2.5</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-lc-red transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-80 overflow-y-auto bg-neutral-900 bg-opacity-95">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-md text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-neutral-700 text-white rounded-br-none' 
                    : 'bg-neutral-800 text-lc-gold border-l-2 border-lc-gold rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-3">
                <div className="bg-neutral-800 p-3 rounded-md border-l-2 border-lc-gold flex items-center gap-2">
                  <span className="w-2 h-2 bg-lc-gold rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-lc-gold rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-lc-gold rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-lc-black border-t border-neutral-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query system..."
              className="flex-1 bg-neutral-800 border border-neutral-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-lc-gold"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-lc-gold hover:bg-yellow-600 text-black p-2 rounded transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-center w-14 h-14 bg-lc-black border-2 border-lc-gold text-lc-gold rounded-full shadow-lg hover:bg-lc-gold hover:text-black transition-all duration-300 transform hover:scale-105"
      >
        <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};