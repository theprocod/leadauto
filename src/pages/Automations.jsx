import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Zap, Sparkles } from 'lucide-react'
import { mockAutomations } from '../data/mockAutomations'
import AutomationCard from '../components/automations/AutomationCard'

/**
 * Automations page — Fixed time input visibility and text alignment.
 */
export default function Automations() {
  const [workStart, setWorkStart] = useState('10:00')
  const [workEnd, setWorkEnd] = useState('20:00')

  return (
    <div className="h-full flex flex-col space-y-12 pb-12">
      {/* Page Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-10 bg-primary/30 rounded-full" />
          <span className="text-[11px] font-black text-primary-dark uppercase tracking-[0.25em] opacity-70">Automation Ecosystem</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text tracking-tighter leading-[0.9]">
          Smart <span className="text-primary-dark">Workflows</span>
        </h1>
      </motion.div>

      {/* Global Operational Config */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-[48px] glass p-10 md:p-12 border-white/50 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/10 to-transparent pointer-events-none blur-3xl opacity-30" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-[28px] glass-mint shadow-2xl border-primary/20 text-primary-dark shrink-0">
              <Clock className="h-10 w-10" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-black text-text tracking-tight leading-none">Operational Hours</h3>
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              </div>
              <p className="text-sm font-bold text-text-secondary opacity-60 max-w-sm">
                Define the time window when automated AI responses are dispatched to your patients.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 glass-dark p-4 rounded-[32px] border-white/10 shadow-inner">
            <div className="flex items-center gap-5 px-8 py-5 rounded-2xl bg-white/60 border border-white/40 shadow-sm transition-all hover:bg-white/80">
              <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] opacity-50 shrink-0">Clinic Open</label>
              <input 
                type="time" 
                value={workStart} 
                onChange={(e) => setWorkStart(e.target.value)} 
                className="bg-transparent border-none focus:ring-0 text-xl font-black text-text tabular-nums outline-none min-w-[100px]" 
              />
            </div>
            <Zap className="h-6 w-6 text-primary/30 rotate-12 shrink-0" />
            <div className="flex items-center gap-5 px-8 py-5 rounded-2xl bg-white/60 border border-white/40 shadow-sm transition-all hover:bg-white/80">
              <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] opacity-50 shrink-0">Clinic Close</label>
              <input 
                type="time" 
                value={workEnd} 
                onChange={(e) => setWorkEnd(e.target.value)} 
                className="bg-transparent border-none focus:ring-0 text-xl font-black text-text tabular-nums outline-none min-w-[100px]" 
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Workflow Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {mockAutomations.map((automation, i) => (
          <AutomationCard key={automation.id} automation={automation} index={i} />
        ))}
      </div>
    </div>
  )
}
