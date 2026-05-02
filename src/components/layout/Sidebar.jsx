import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Inbox,
  MessageCircle,
  Workflow,
  FileText,
  Settings,
  X,
  Sparkles,
} from 'lucide-react'

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/leads', label: 'Leads Inbox', icon: Inbox, badge: 4 },
  { path: '/chat', label: 'Chat Engine', icon: MessageCircle },
  { path: '/automations', label: 'Workflows', icon: Workflow },
  { path: '/templates', label: 'Templates', icon: FileText },
  { path: '/settings', label: 'Settings', icon: Settings },
]

/**
 * Sidebar — Optimized for 1920x1080.
 * Fixed alignment of brand section and nav pills.
 */
export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation()

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-40 w-80 transform 
        transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
        lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        glass m-6 rounded-[40px] border-white/50 shadow-2xl
      `}
    >
      {/* Brand Section — Fixed Vertical Alignment */}
      <div className="px-10 py-16">
        <div className="flex items-center gap-5">
          <div className="relative shrink-0 group">
            <div className="absolute inset-0 bg-mint/30 blur-2xl rounded-full group-hover:bg-mint/50 transition-all duration-500" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-[20px] bg-mint text-white shadow-xl shadow-mint/20 transition-transform group-hover:scale-110">
              <Sparkles className="h-8 w-8" />
            </div>
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl font-black text-navy tracking-tighter leading-none">ClinicConnect</h1>
            <p className="text-[10px] font-black text-mint-deep tracking-[0.4em] uppercase mt-2 opacity-60">Smart Health</p>
          </div>
        </div>
      </div>

      {/* Navigation — Fixed Spacing and Pill Height */}
      <nav className="px-5 space-y-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`
                group relative flex items-center gap-5 rounded-[22px] px-7 py-4.5 text-[14px] font-black uppercase tracking-[0.15em]
                transition-all duration-300
                ${isActive
                  ? 'bg-mint text-white shadow-xl shadow-mint/20 scale-[1.02]'
                  : 'text-slate-muted hover:bg-white/40 hover:text-navy'
                }
              `}
            >
              <item.icon className={`h-5.5 w-5.5 shrink-0 transition-colors ${isActive ? 'text-white' : 'group-hover:text-mint'}`} />
              <span className="truncate">{item.label}</span>
              {item.badge && (
                <span className={`ml-auto flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-[10px] font-black ${isActive ? 'bg-white text-mint' : 'bg-coral text-white shadow-lg'}`}>
                  {item.badge}
                </span>
              )}
            </NavLink>
          )
        })}
      </nav>

      {/* User Profile Card — Fixed padding and text alignment */}
      <div className="absolute bottom-8 left-5 right-5">
        <div className="glass-dark p-6 rounded-[32px] border-white/20 shadow-inner">
          <div className="flex items-center gap-5">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-mint to-mint-deep p-[1px] shrink-0 shadow-lg shadow-mint/10">
              <div className="h-full w-full rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-sm font-black text-white">
                SD
              </div>
            </div>
            <div className="min-w-0">
              <p className="text-[14px] font-black text-navy truncate tracking-tight">Dr. Smile Dental</p>
              <div className="flex items-center gap-2 mt-1.5">
                <div className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                <p className="text-[10px] font-black text-slate-muted uppercase tracking-widest opacity-60 truncate">Bangalore Hub</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Close Button */}
      <button onClick={onClose} className="absolute top-10 right-10 p-3 glass rounded-2xl text-slate-muted hover:text-navy lg:hidden transition-all shadow-sm">
        <X className="h-6 w-6" />
      </button>
    </aside>
  )
}
