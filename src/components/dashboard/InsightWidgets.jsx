import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, ArrowRight, Star, Activity } from 'lucide-react'

/**
 * InsightBanner — Optimized for 1920x1080.
 */
export function InsightBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="relative overflow-hidden rounded-[40px] glass-coral p-12 border-coral/20 min-h-[200px] flex items-center shadow-2xl"
    >
      <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-coral/10 blur-3xl" />

      <div className="relative flex items-center gap-10">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[28px] bg-white/70 shadow-xl shadow-coral/10 text-coral">
          <Lightbulb className="h-10 w-10" />
        </div>
        <div>
          <div className="flex items-center gap-4 mb-3">
            <h3 className="text-xl font-black text-navy tracking-tight">Clinical Insight</h3>
            <span className="px-3 py-1 rounded-lg bg-coral/20 text-[10px] font-black uppercase tracking-[0.2em] text-coral-dark">Advanced</span>
          </div>
          <p className="text-[16px] text-navy/80 leading-relaxed font-bold">
            Clinics lose <strong className="text-coral-dark font-black">30–50%</strong> of patients due to lack of follow-up.
            ClinicConnect recovered <strong className="text-coral-dark font-black">22 leads</strong> for you this week.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * RoiWidget — Optimized for 1920x1080.
 */
export function RoiWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
      className="relative overflow-hidden rounded-[40px] glass-mint p-12 border-mint/20 min-h-[200px] flex items-center shadow-2xl"
    >
      <div className="flex items-center gap-10 w-full">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[28px] bg-white/70 shadow-xl shadow-mint/10 text-mint-deep">
          <TrendingUp className="h-10 w-10" />
        </div>
        <div className="flex-1">
          <p className="text-[11px] font-black text-slate-muted uppercase tracking-[0.3em] mb-3 opacity-50">Revenue Retained • Month</p>
          <p className="text-5xl font-black text-navy tracking-tighter leading-none">
            <span className="text-mint-deep">+</span>₹2,25,000
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="h-2 w-2 rounded-full bg-mint animate-pulse" />
            <p className="text-[12px] font-black text-mint-deep uppercase tracking-widest opacity-80">Conversion Rate Boosted by 12%</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * RecentLeads — Fixed alignment issues for 1920x1080.
 */
export function RecentLeads() {
  const leads = [
    { name: 'Rahul Sharma', service: 'Root Canal', status: 'new', avatar: 'RS', color: '#FF8B6B' },
    { name: 'Priya Iyer', service: 'Skin Consultation', status: 'follow-up', avatar: 'PI', color: '#F5C563' },
    { name: 'Arjun Mehta', service: 'General Check-up', status: 'booked', avatar: 'AM', color: '#7FD1B9' },
    { name: 'Neha Gupta', service: 'RCT Query', status: 'new', avatar: 'NG', color: '#FF8B6B' },
  ]

  const statusStyles = {
    new: { label: 'New', bg: 'rgba(255, 139, 107, 0.15)', color: '#FF8B6B' },
    'follow-up': { label: 'Follow-up', bg: 'rgba(245, 197, 99, 0.15)', color: '#D4940A' },
    booked: { label: 'Booked', bg: 'rgba(127, 209, 185, 0.15)', color: '#2E8B7B' },
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="rounded-[40px] glass p-10 border-white/50 h-full flex flex-col shadow-2xl"
    >
      <div className="flex items-center justify-between mb-10 px-2">
        <h3 className="text-2xl font-black text-navy tracking-tight">Recent Activity</h3>
        <button className="text-[11px] font-black text-mint-deep uppercase tracking-widest hover:underline flex items-center gap-2 opacity-80 transition-all hover:opacity-100">
          View All <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-8 px-2 flex-1">
        {leads.map((lead, i) => {
          const st = statusStyles[lead.status]
          return (
            <motion.div 
              key={lead.name} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (i * 0.1) }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="relative shrink-0">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-base font-black text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                  style={{ backgroundColor: lead.color }}
                >
                  {lead.avatar}
                </div>
                {lead.status === 'booked' && (
                  <div className="absolute -top-1.5 -right-1.5 h-6 w-6 rounded-full bg-white border-2 border-mint/20 flex items-center justify-center shadow-md">
                    <Star className="h-3.5 w-3.5 fill-mint text-mint" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[16px] font-black text-navy truncate tracking-tight group-hover:text-mint transition-colors">
                  {lead.name}
                </p>
                <p className="text-[12px] font-bold text-slate-muted uppercase tracking-[0.1em] opacity-50 mt-1 truncate">{lead.service}</p>
              </div>
              <span
                className="inline-flex items-center rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest shrink-0 shadow-sm"
                style={{ backgroundColor: st.bg, color: st.color, border: `1px solid ${st.color}25` }}
              >
                {st.label}
              </span>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-12 pt-10 px-2 border-t border-white/20">
         <div className="glass-mint rounded-[32px] p-6 border-mint/20 flex items-center justify-between shadow-inner">
           <div>
             <p className="text-[11px] font-black text-slate-muted uppercase tracking-widest mb-2 opacity-50">Efficiency Index</p>
             <p className="text-3xl font-black text-mint-deep tracking-tighter">98.4%</p>
           </div>
           <div className="h-14 w-14 rounded-full border-[5px] border-white/40 border-t-mint-deep animate-spin" style={{ animationDuration: '4s' }} />
         </div>
      </div>
    </motion.div>
  )
}
