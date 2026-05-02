import { motion } from 'framer-motion'
import { Phone, Video, MoreVertical, CheckCheck, MapPin, Clock, Tag, Heart } from 'lucide-react'
import { statusConfig } from '../../data/mockLeads'
import { leadChatHistory } from '../../data/mockMessages'

/**
 * LeadDetail — Fixed text alignments and container spacing.
 */
export default function LeadDetail({ lead }) {
  if (!lead) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center text-center p-12 bg-white/30 backdrop-blur-sm">
        <div className="relative mb-10">
           <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
           <div className="relative w-32 h-32 rounded-[40px] glass flex items-center justify-center border-white/60 shadow-2xl">
             <Heart className="h-14 w-14 text-primary/30 animate-pulse" />
           </div>
        </div>
        <h3 className="text-3xl font-black text-text tracking-tighter mb-4">Patient Profile</h3>
        <p className="text-[15px] font-bold text-text-secondary max-w-xs leading-relaxed opacity-50">
          Select a patient record from the inbox to view their medical journey and automated interactions.
        </p>
      </div>
    )
  }

  const status = statusConfig[lead.status]
  const chatHistory = leadChatHistory[lead.id] || []

  return (
    <motion.div
      key={lead.id}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-1 flex-col overflow-hidden bg-white/40 h-full"
    >
      {/* Detail Header — Improved Padding and Alignments */}
      <div className="px-10 py-10 glass-dark border-b border-white/10 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="relative shrink-0">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-[28px] text-2xl font-black text-white shadow-2xl transition-transform hover:scale-105 duration-500"
                style={{ backgroundColor: lead.avatarColor }}
              >
                {lead.avatar}
              </div>
              <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-success border-4 border-white shadow-lg" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-text tracking-tighter leading-[0.9] mb-3">{lead.name}</h3>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-[15px] font-bold text-text-secondary opacity-60 tabular-nums">{lead.phone}</span>
                <span
                  className="inline-flex items-center rounded-xl px-3 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-sm"
                  style={{ backgroundColor: status.bg, color: status.color, border: `1px solid ${status.color}25` }}
                >
                  {status.label}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="glass p-2 rounded-[24px] border-white/60 shadow-lg flex items-center gap-1.5">
                <button className="h-12 w-12 flex items-center justify-center rounded-2xl text-text-secondary hover:text-primary hover:bg-white/60 transition-all shadow-sm">
                  <Phone className="h-5.5 w-5.5" />
                </button>
                <button className="h-12 w-12 flex items-center justify-center rounded-2xl text-text-secondary hover:text-primary hover:bg-white/60 transition-all shadow-sm">
                  <Video className="h-5.5 w-5.5" />
                </button>
             </div>
             <button className="glass h-14 w-14 flex items-center justify-center rounded-[24px] text-text-secondary hover:text-text border-white/60 shadow-lg transition-all">
               <MoreVertical className="h-6 w-6" />
             </button>
          </div>
        </div>

        {/* Quick Stats Grid — Fixed Alignment */}
        <div className="grid grid-cols-3 gap-8 mt-12">
           <div className="glass p-5 rounded-3xl border-white/40 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-[14px] bg-primary/10 flex items-center justify-center text-primary-dark shadow-inner">
                  <Tag className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] opacity-40 leading-none mb-1.5">Department</p>
                  <p className="text-sm font-black text-text">{lead.department}</p>
                </div>
              </div>
           </div>
           <div className="glass p-5 rounded-3xl border-white/40 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-[14px] bg-primary/10 flex items-center justify-center text-primary-dark shadow-inner">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] opacity-40 leading-none mb-1.5">Last Active</p>
                  <p className="text-sm font-black text-text">{lead.time}</p>
                </div>
              </div>
           </div>
           <div className="glass p-5 rounded-3xl border-white/40 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-[14px] bg-primary/10 flex items-center justify-center text-primary-dark shadow-inner">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-text-secondary uppercase tracking-[0.2em] opacity-40 leading-none mb-1.5">Location</p>
                  <p className="text-sm font-black text-text truncate">Central Bangalore</p>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* Chat Area — Fixed Alignment and Spacing */}
      <div className="flex-1 overflow-y-auto p-10 space-y-7 custom-scrollbar relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2E8B7B 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        {chatHistory.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full opacity-30 text-center">
            <div className="h-px w-20 bg-text/20 mb-6" />
            <p className="text-[11px] font-black uppercase tracking-[0.3em]">Patient Journey Started</p>
          </div>
        ) : (
          chatHistory.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'} relative z-10`}>
              <div className={`
                px-6 py-4.5 max-w-[75%] rounded-[28px] shadow-2xl shadow-text/5
                ${msg.type === 'outgoing' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'glass rounded-tl-none border-white/60 text-text'
                }
              `}>
                <p className="text-[15px] font-bold leading-relaxed">{msg.text}</p>
                <div className={`flex items-center justify-end gap-2 mt-2.5 opacity-60`}>
                  <span className="text-[10px] font-black uppercase tracking-tighter tabular-nums">{msg.time}</span>
                  {msg.type === 'outgoing' && (
                    <CheckCheck className={`h-4 w-4 ${msg.read ? 'text-white' : 'text-white/40'}`} />
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  )
}
