import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pencil, Activity, Sparkles, Check, ChevronRight } from 'lucide-react'
import * as Icons from 'lucide-react'

/**
 * AutomationCard — Fixed placeholder and text alignments.
 */
export default function AutomationCard({ automation, index }) {
  const [enabled, setEnabled] = useState(automation.enabled)
  const [showEditor, setShowEditor] = useState(false)
  const [template, setTemplate] = useState(automation.template)

  const Icon = Icons[automation.icon] || Icons.Zap

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`relative overflow-hidden rounded-[40px] glass p-10 border-white/50 hover-lift transition-all duration-500 flex flex-col min-h-[320px] ${
        enabled ? '' : 'opacity-60 grayscale-[0.5]'
      }`}
    >
      <div className="flex items-start justify-between mb-10">
        <div className="flex items-center gap-6">
           <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[24px] shadow-2xl relative"
            style={{ backgroundColor: `${automation.color}15`, color: automation.color }}
          >
            <div className="absolute inset-0 blur-2xl opacity-20 rounded-full" style={{ backgroundColor: automation.color }} />
            <Icon className="h-8 w-8 relative z-10" />
          </div>
          <div>
            <h3 className="text-xl font-black text-text tracking-tight mb-1">{automation.title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black text-primary-dark uppercase tracking-widest px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/10">Active Workflow</span>
            </div>
          </div>
        </div>

        {/* Custom Glass Toggle — Fixed Size */}
        <button 
          onClick={() => setEnabled(!enabled)}
          className={`relative h-9 w-16 rounded-full transition-all duration-500 glass-dark border-white/20 p-1 shrink-0 ${enabled ? 'bg-primary/20' : 'bg-text/5'}`}
        >
          <div className={`h-7 w-7 rounded-full shadow-lg transition-all duration-500 flex items-center justify-center ${enabled ? 'translate-x-7 bg-primary' : 'translate-x-0 bg-text/40'}`}>
            {enabled && <Check className="h-4 w-4 text-white" />}
          </div>
        </button>
      </div>

      <p className="text-[15px] font-bold text-text-secondary leading-relaxed mb-auto opacity-70 pr-4">
        {automation.description}
      </p>

      {/* Footer Stat + Edit Button — Fixed Alignment */}
      <div className="flex items-center justify-between pt-10 border-t border-white/20 mt-10">
         <div className="flex items-center gap-4">
            <div className="h-11 w-11 rounded-[14px] glass-dark flex items-center justify-center text-primary-dark shadow-inner">
              <Activity className="h-5 w-5" />
            </div>
            <div>
               <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] opacity-40 mb-1 leading-none">Weekly Events</p>
               <p className="text-sm font-black text-text">{automation.triggeredThisWeek} Triggers</p>
            </div>
         </div>
         <button
            onClick={() => setShowEditor(!showEditor)}
            className="glass-dark px-7 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-text-secondary hover:text-primary hover:border-primary/40 transition-all border-white/10 shadow-sm flex items-center gap-2"
          >
            Config Workflow
            <ChevronRight className={`h-3.5 w-3.5 transition-transform duration-300 ${showEditor ? 'rotate-90' : ''}`} />
          </button>
      </div>

      {/* Refined Glass Editor — Fixed Input Padding */}
      <AnimatePresence>
        {showEditor && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-8"
          >
            <div className="glass-mint rounded-[32px] p-8 border-primary/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6 px-1">
                <label className="text-[11px] font-black text-primary-dark uppercase tracking-widest">Response Template</label>
                <div className="flex items-center gap-2 opacity-60">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-[10px] font-bold text-primary-dark uppercase tracking-tighter">AI Enhanced</span>
                </div>
              </div>
              <textarea
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                rows={4}
                placeholder="Enter the automated response here..."
                className="w-full rounded-[24px] border-white/60 bg-white/60 px-6 py-6 text-sm font-bold text-text leading-relaxed placeholder:text-text-secondary/30 focus:border-primary focus:outline-none focus:ring-8 focus:ring-primary/5 transition-all shadow-inner mb-6"
              />
              <div className="flex justify-end gap-4 px-1">
                 <button onClick={() => setShowEditor(false)} className="px-6 py-3 rounded-xl text-xs font-black text-text-secondary uppercase tracking-widest opacity-60 hover:opacity-100 transition-all">Discard</button>
                 <button onClick={() => setShowEditor(false)} className="bg-primary text-white px-10 py-4 rounded-xl text-xs font-black uppercase tracking-[0.1em] shadow-xl shadow-primary/30 active:scale-95 transition-all">Update Workflow</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
