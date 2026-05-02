import { motion } from 'framer-motion'
import { statusConfig } from '../../data/mockLeads'
import { CheckCircle2 } from 'lucide-react'

/**
 * LeadCard — Glassmorphic inbox item.
 */
export default function LeadCard({ lead, isSelected, onClick }) {
  const status = statusConfig[lead.status]

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={onClick}
      className={`
        relative mx-3 my-2 rounded-2xl p-5 cursor-pointer transition-all duration-300 overflow-hidden group
        ${isSelected
          ? 'glass-mint shadow-xl border-primary/20 scale-[1.02] z-10'
          : 'hover:bg-white/40 border border-transparent'
        }
      `}
    >
      <div className="flex items-start gap-4 relative z-10">
        <div className="relative">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-lg shadow-text/5"
            style={{ backgroundColor: lead.avatarColor }}
          >
            {lead.avatar}
          </div>
          {lead.status === 'booked' && (
             <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-white shadow-sm flex items-center justify-center">
               <CheckCircle2 className="h-3.5 w-3.5 text-primary-dark" />
             </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h4 className={`text-[14px] truncate ${lead.unread > 0 ? 'font-black text-text' : 'font-bold text-text/80'}`}>
              {lead.name}
            </h4>
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-tighter opacity-60">
              {lead.time}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span
              className="inline-flex items-center rounded-lg px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider"
              style={{ backgroundColor: `${status.color}15`, color: status.color, border: `1px solid ${status.color}20` }}
            >
              {status.label}
            </span>
            <span className="text-[10px] font-bold text-text-secondary opacity-40 uppercase tracking-widest">{lead.department}</span>
          </div>

          <p className={`text-[13px] line-clamp-1 ${lead.unread > 0 ? 'text-text font-bold' : 'text-text-secondary'}`}>
            {lead.lastMessage}
          </p>
        </div>

        {lead.unread > 0 && (
          <div className="flex h-5 min-w-5 items-center justify-center rounded-full bg-coral px-1.5 text-[10px] font-black text-white shadow-lg shadow-coral/20 animate-bounce">
            {lead.unread}
          </div>
        )}
      </div>
      
      {isSelected && (
        <motion.div 
          layoutId="active-pill" 
          className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-r-full"
        />
      )}
    </motion.div>
  )
}
