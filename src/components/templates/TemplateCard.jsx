import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, BarChart3, Tag, Copy } from 'lucide-react'
import toast from 'react-hot-toast'

/**
 * TemplateCard — Glassmorphic smart template editor.
 */
export default function TemplateCard({ template, index }) {
  const [body, setBody] = useState(template.body)
  const [isSaved, setIsSaved] = useState(true)

  const handleSave = () => {
    setIsSaved(true)
    toast.success(`Template updated`, {
      style: { background: 'rgba(46, 139, 123, 0.9)', color: '#fff', borderRadius: '12px', backdropFilter: 'blur(8px)' }
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="rounded-[40px] glass p-8 border-white/50 hover-lift transition-all duration-500"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
           <div className="h-12 w-12 rounded-2xl glass-dark flex items-center justify-center text-primary">
              <Tag className="h-6 w-6" />
           </div>
           <div>
             <h3 className="text-xl font-black text-text tracking-tight">{template.title}</h3>
             <span className="text-[10px] font-extrabold text-primary-dark uppercase tracking-widest opacity-60">{template.category}</span>
           </div>
        </div>
        <div className="flex items-center gap-2 glass-dark px-4 py-2 rounded-xl">
           <BarChart3 className="h-3.5 w-3.5 text-text-secondary" />
           <span className="text-[11px] font-black text-text-secondary">Used {template.usedCount}x</span>
        </div>
      </div>

      <div className="relative group">
         <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-2.5 glass rounded-xl border-white/40 text-text-secondary hover:text-primary transition-all shadow-sm">
               <Copy className="h-4 w-4" />
            </button>
         </div>
         <textarea
            value={body}
            onChange={(e) => { setBody(e.target.value); setIsSaved(false); }}
            rows={5}
            className="w-full rounded-[28px] border-white/60 bg-white/40 px-6 py-6 text-[15px] font-medium text-text leading-relaxed focus:border-primary focus:outline-none focus:ring-8 focus:ring-primary/5 resize-none transition-all shadow-inner"
          />
      </div>

      {template.variables.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2.5">
          {template.variables.map((v) => (
            <span
              key={v}
              className="inline-flex items-center rounded-[14px] glass-mint border-primary/10 px-4 py-1.5 text-[10px] font-black text-primary-dark uppercase tracking-widest shadow-sm cursor-pointer hover:scale-105 transition-transform"
            >
              {`{{${v}}}`}
            </span>
          ))}
        </div>
      )}

      <div className="flex justify-end mt-10 pt-8 border-t border-white/20">
        <button
          onClick={handleSave}
          disabled={isSaved}
          className={`
            flex items-center gap-3 rounded-2xl px-10 py-4 text-xs font-black uppercase tracking-[0.1em] transition-all duration-300
            ${isSaved
              ? 'bg-white/20 text-text/30 border border-white/20 cursor-default'
              : 'bg-primary text-white shadow-xl shadow-primary/30 hover:scale-105 active:scale-95'
            }
          `}
        >
          <Save className="h-4 w-4" />
          {isSaved ? 'Sync Complete' : 'Deploy Changes'}
        </button>
      </div>
    </motion.div>
  )
}
