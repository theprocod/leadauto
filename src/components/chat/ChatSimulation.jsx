import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  RotateCcw,
  Send,
  Paperclip,
  Smile,
  CheckCheck,
  Phone,
  Video,
  MoreVertical,
  Bot,
  Mic,
  ShieldCheck,
} from 'lucide-react'
import toast from 'react-hot-toast'
import { demoSequence, autoReplies } from '../../data/mockMessages'

/**
 * ChatSimulation — Fixed placeholder alignment and input bar spacing.
 */
export default function ChatSimulation() {
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isReplaying, setIsReplaying] = useState(false)
  const [replayComplete, setReplayComplete] = useState(false)
  const messagesEndRef = useRef(null)
  const timeoutsRef = useRef([])
  const inputRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout)
    }
  }, [])

  const startReplay = () => {
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
    setMessages([])
    setIsTyping(false)
    setReplayComplete(false)
    setIsReplaying(true)

    demoSequence.forEach((msg, index) => {
      if (msg.typingDuration) {
        const typingTimeout = setTimeout(() => {
          setIsTyping(true)
        }, msg.delay - msg.typingDuration)
        timeoutsRef.current.push(typingTimeout)
      }

      const msgTimeout = setTimeout(() => {
        setIsTyping(false)
        setMessages((prev) => [...prev, msg])
        if (msg.type === 'outgoing') {
          toast.success(`Bot responded`, {
            style: { background: 'rgba(46, 139, 123, 0.9)', color: '#fff', borderRadius: '12px', backdropFilter: 'blur(8px)' }
          })
        }
        if (index === demoSequence.length - 1) {
          setIsReplaying(false)
          setReplayComplete(true)
        }
      }, msg.delay)
      timeoutsRef.current.push(msgTimeout)
    })
  }

  const handleSend = () => {
    const text = inputText.trim()
    if (!text) return
    const now = new Date()
    const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
    const userMsg = { id: `user-${Date.now()}`, type: 'incoming', text, time: timeStr }
    setMessages((prev) => [...prev, userMsg])
    setInputText('')
    setTimeout(() => setIsTyping(true), 800)
    setTimeout(() => {
      setIsTyping(false)
      const botMsg = { id: `bot-${Date.now()}`, type: 'outgoing', text: autoReplies.default, time: timeStr }
      setMessages((prev) => [...prev, botMsg])
    }, 2300)
  }

  return (
    <div className="flex flex-col h-[750px] rounded-[48px] overflow-hidden glass border-white/50 shadow-2xl relative">
      {/* Header — Fixed Vertical Alignment */}
      <div className="flex items-center justify-between px-10 py-8 glass-dark border-b border-white/10 relative z-20 shrink-0">
        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-gradient-to-br from-primary to-primary-dark text-lg font-black text-white shadow-lg">
              RS
            </div>
            <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-success border-4 border-white shadow-sm" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-black text-text tracking-tight leading-none">Rahul Sharma</h3>
              <ShieldCheck className="h-4.5 w-4.5 text-primary" />
            </div>
            <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] opacity-60 leading-none">
              {isTyping ? 'bot is typing...' : 'Patient Enquiry • Dental'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={startReplay}
            disabled={isReplaying}
            className={`
              flex items-center gap-2 rounded-2xl px-6 py-4 text-[11px] font-black uppercase tracking-widest transition-all duration-300 shadow-lg
              ${isReplaying 
                ? 'bg-white/20 text-text/30 border border-white/10' 
                : 'bg-primary text-white shadow-primary/25 hover:scale-105 active:scale-95'
              }
            `}
          >
            {replayComplete ? <RotateCcw className="h-4 w-4" /> : <Play className={`h-4 w-4 ${isReplaying ? '' : 'fill-current'}`} />}
            {isReplaying ? 'Running...' : 'Replay Demo'}
          </button>
          
          <div className="flex items-center gap-2 glass p-2 rounded-2xl border-white/40 shadow-sm">
            <button className="h-11 w-11 flex items-center justify-center rounded-xl text-text-secondary hover:text-primary hover:bg-white/60 transition-all">
              <Phone className="h-5 w-5" />
            </button>
            <button className="h-11 w-11 flex items-center justify-center rounded-xl text-text-secondary hover:text-primary hover:bg-white/60 transition-all">
              <Video className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages Area — Fixed Padding and Bubble Alignments */}
      <div className="flex-1 overflow-y-auto p-10 space-y-7 relative z-10 custom-scrollbar bg-surface/30">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F2A3F 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        {messages.length === 0 && !isReplaying && (
          <div className="flex flex-col items-center justify-center h-full text-center p-10">
            <div className="relative mb-10">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative w-28 h-28 rounded-[36px] glass-mint flex items-center justify-center border-primary/20 shadow-2xl">
                <Bot className="h-14 w-14 text-primary-dark" />
              </div>
            </div>
            <h3 className="text-3xl font-black text-text tracking-tighter mb-4 leading-none">Simulation Hub</h3>
            <p className="text-[15px] font-bold text-text-secondary max-w-xs mb-12 leading-relaxed opacity-60">
              Explore how ClinicConnect handles complex patient queries through automated workflows.
            </p>
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {['consultation', 'appointment', 'emergency', 'fees'].map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => setInputText(keyword)}
                  className="glass rounded-2xl px-6 py-5 text-[11px] font-black text-primary-dark uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm border-white/60"
                >
                  "{keyword}"
                </button>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`
                relative px-6 py-4.5 max-w-[75%] rounded-[28px] shadow-2xl shadow-text/5
                ${msg.type === 'outgoing' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'glass rounded-tl-none border-white/60 text-text'
                }
              `}>
                <p className="text-[15px] font-bold leading-relaxed">{msg.text}</p>
                <div className="flex items-center justify-end gap-2 mt-2.5 opacity-60">
                  <span className="text-[10px] font-black uppercase tracking-tighter tabular-nums">{msg.time}</span>
                  {msg.type === 'outgoing' && <CheckCheck className="h-4 w-4" />}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-end">
            <div className="bg-primary/10 rounded-[20px] rounded-tr-none px-6 py-4 border border-primary/20 shadow-sm">
               <div className="flex gap-1.5">
                 <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }} />
                 <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
                 <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.4s' }} />
               </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar — Fixed Padding and Center Alignment */}
      <div className="p-10 relative z-20 shrink-0">
        <div className="glass rounded-[32px] p-2.5 flex items-center gap-2 border-white/60 shadow-2xl">
          <button className="rounded-2xl p-4 text-text-secondary hover:text-primary transition-all">
            <Smile className="h-6 w-6" />
          </button>
          <div className="flex-1 px-4"> {/* Added px-4 for breathing room */}
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your clinical query..."
              className="w-full bg-transparent border-none focus:ring-0 text-[15px] font-bold text-text placeholder:text-text-secondary/30 py-4.5"
            />
          </div>
          <div className="flex items-center gap-3 px-3">
            <button className="rounded-2xl p-4 text-text-secondary hover:text-primary transition-all">
              <Paperclip className="h-6 w-6" />
            </button>
            {inputText.trim() ? (
              <button
                onClick={handleSend}
                className="h-14 w-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
              >
                <Send className="h-6 w-6" />
              </button>
            ) : (
              <button className="h-14 w-14 rounded-2xl bg-coral text-white flex items-center justify-center shadow-xl shadow-coral/30 hover:scale-105 active:scale-95 transition-all">
                <Mic className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
