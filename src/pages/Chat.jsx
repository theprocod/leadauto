import ChatSimulation from '../components/chat/ChatSimulation'
import { motion } from 'framer-motion'

/**
 * Chat page — High-end glassmorphic simulation.
 */
export default function Chat() {
  return (
    <div className="h-full flex flex-col space-y-10">
      {/* Editorial Page Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="h-px w-8 bg-primary/40" />
          <span className="text-[10px] font-extrabold text-primary-dark uppercase tracking-[0.2em]">Live Simulation</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-text tracking-tighter leading-none">
          Automation <span className="text-primary-dark">Engine</span>
        </h1>
      </motion.div>

      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
        <ChatSimulation />
      </div>
    </div>
  )
}
