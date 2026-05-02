import { motion } from 'framer-motion'
import {
  MessageSquare,
  CalendarCheck,
  TrendingUp,
  UserX,
  Send,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'

const iconMap = {
  MessageSquare,
  CalendarCheck,
  TrendingUp,
  UserX,
  Send,
}

/**
 * KpiCard — Absolute Final Perfection for 1920x1080.
 * Increased height and padding to eliminate all clipping.
 */
export default function KpiCard({ data, index }) {
  const Icon = iconMap[data.icon]
  const isPositive = data.trend > 0
  const trendIsGood = data.id === 'missed' ? !isPositive : isPositive

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`group relative overflow-hidden rounded-[40px] p-10 hover-lift glass border-white/50 flex flex-col min-h-[250px] ${data.isSpecialBg ? 'bg-coral/10' : ''
        }`}
    >
      {/* Decorative Blur Circle */}
      <div
        className="absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
        style={{ backgroundColor: data.color }}
      />

      {/* Top Row: Icon + Trend */}
      <div className="flex items-center justify-between relative z-10">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{ backgroundColor: `${data.color}15`, color: data.color }}
        >
          <Icon className="h-8 w-8" />
        </div>

        <div
          className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-[12px] font-black shadow-sm ${trendIsGood
            ? 'bg-mint/20 text-mint-deep ring-1 ring-mint/20'
            : 'bg-coral/20 text-coral-dark ring-1 ring-coral/20'
            }`}
        >
          {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
          {Math.abs(data.trend)}%
        </div>
      </div>

      {/* Bottom Data Section — Centered with mt-auto and pb-2 to prevent clip */}
      <div className="mt-auto pt-8 pb-2 relative z-10">
        <p className="text-6xl font-black text-navy tracking-tighter leading-none mb-4">
          {data.value}{data.suffix || ''}
        </p>
        <p className="text-[12px] font-black text-slate-muted uppercase tracking-[0.25em] opacity-60">
          {data.label}
        </p>
      </div>

      {/* Subtle Progress Track — At the absolute bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, data.value)}%` }}
          transition={{ delay: index * 0.1 + 0.5, duration: 1.5 }}
          className="h-full opacity-30"
          style={{ backgroundColor: data.color }}
        />
      </div>
    </motion.div>
  )
}
