import { motion } from 'framer-motion'
import { kpiData } from '../data/mockKpis'
import KpiCard from '../components/dashboard/KpiCard'
import EnquiriesChart from '../components/dashboard/EnquiriesChart'
import { InsightBanner, RoiWidget, RecentLeads } from '../components/dashboard/InsightWidgets'
import { Sparkles, Activity } from 'lucide-react'

/**
 * Dashboard page — Optimized for 1920x1080.
 * Fixed text alignments and horizontal spacing.
 */
export default function Dashboard() {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="space-y-16 pb-16 max-w-[1720px] mx-auto">
      {/* Header — Optimized for Large Resolution */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col xl:flex-row xl:items-center justify-between gap-12"
      >
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-mint/30 rounded-full" />
            <span className="text-[12px] font-black text-mint-deep uppercase tracking-[0.3em] opacity-70">Clinical Performance Hub</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-navy tracking-tighter leading-[0.85] mb-8">
            {greeting}, <span className="text-mint-deep">Dr. Mehta</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint/10 text-mint shadow-inner">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="text-base font-bold text-slate-muted">
              Your clinic is performing <span className="text-mint-deep underline underline-offset-8 decoration-mint/40 font-black">12% better</span> than last week
            </p>
          </div>
        </div>
        
        {/* Live Status Pill — Fixed Alignment */}
        <div className="flex items-center gap-6 glass p-4 rounded-[32px] border-white/50 shadow-2xl mb-2 hover:scale-[1.02] transition-transform">
           <div className="px-8 py-5 rounded-2xl bg-white/60 shadow-inner">
             <p className="text-[11px] font-black text-slate-muted uppercase tracking-widest opacity-50 mb-1.5">Live Enquiries</p>
             <p className="text-3xl font-black text-navy tabular-nums leading-none">12 Active</p>
           </div>
           <div className="h-16 w-16 rounded-2xl bg-mint flex items-center justify-center text-white shadow-xl shadow-mint/30">
             <Activity className="h-9 w-9 animate-pulse" />
           </div>
        </div>
      </motion.div>

      {/* KPI Grid — Increased Gap for 1920px */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
        {kpiData.map((kpi, i) => (
          <KpiCard key={kpi.id} data={kpi} index={i} />
        ))}
      </div>

      {/* Main Analytics Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
        <div className="lg:col-span-2">
          <EnquiriesChart />
        </div>
        <div className="h-full">
          <RecentLeads />
        </div>
      </div>

      {/* Secondary Insights Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        <InsightBanner />
        <RoiWidget />
      </div>
    </div>
  )
}
