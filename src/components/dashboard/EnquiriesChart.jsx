import { motion } from 'framer-motion'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { chartData } from '../../data/mockKpis'
import { Activity } from 'lucide-react'

/**
 * Custom glassmorphic tooltip
 */
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload) return null
  return (
    <div className="glass rounded-2xl px-5 py-4 border-white/50 shadow-2xl">
      <p className="text-[11px] font-bold text-text-secondary uppercase tracking-widest mb-3 border-b border-white/20 pb-2">{label} Analytics</p>
      {payload.map((item) => (
        <div key={item.name} className="flex items-center justify-between gap-6 mb-1.5 last:mb-0">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs font-semibold text-text-secondary">{item.name}</span>
          </div>
          <span className="text-sm font-bold text-text">{item.value}</span>
        </div>
      ))}
    </div>
  )
}

/**
 * EnquiriesChart — Premium glassmorphic area chart.
 */
export default function EnquiriesChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="rounded-[40px] glass p-8 border-white/50"
    >
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary-dark">
            <Activity className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-text tracking-tight">Patient Acquisition</h3>
            <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mt-1 opacity-60">Demand Analysis • Last 7 Days</p>
          </div>
        </div>
        
        <div className="flex gap-4 glass-dark p-2 rounded-2xl border-white/10">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/40">
            <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="text-[11px] font-bold text-text uppercase tracking-tight">Enquiries</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl">
            <div className="h-2.5 w-2.5 rounded-full bg-coral" />
            <span className="text-[11px] font-bold text-text-secondary uppercase tracking-tight">Bookings</span>
          </div>
        </div>
      </div>

      <div className="h-[320px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="chartMint" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7FD1B9" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#7FD1B9" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="chartCoral" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF8B6B" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#FF8B6B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="6 6" stroke="rgba(15, 42, 63, 0.03)" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 11, fill: '#6B7B8C', fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
              dy={15}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#6B7B8C', fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(127, 209, 185, 0.2)', strokeWidth: 20 }} />
            <Area
              type="monotone"
              dataKey="enquiries"
              name="Enquiries"
              stroke="#7FD1B9"
              strokeWidth={4}
              fill="url(#chartMint)"
              animationDuration={2000}
            />
            <Area
              type="monotone"
              dataKey="bookings"
              name="Bookings"
              stroke="#FF8B6B"
              strokeWidth={4}
              fill="url(#chartCoral)"
              animationDuration={2000}
              animationDelay={500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
