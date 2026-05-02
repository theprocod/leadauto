import { useState } from 'react'
import { Menu, Search, Bell, ChevronDown, Calendar } from 'lucide-react'

/**
 * Topbar — Final 1080p perfection.
 */
export default function Topbar({ onMenuClick }) {
  const [searchFocused, setSearchFocused] = useState(false)
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' })

  return (
    <header className="flex h-[100px] shrink-0 items-center justify-between px-10 lg:px-14 z-30">
      {/* Left side */}
      <div className="flex items-center gap-8">
        <button
          onClick={onMenuClick}
          className="lg:hidden glass-dark p-3 rounded-2xl text-slate-muted hover:text-navy transition-all"
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="hidden sm:flex items-center gap-4 glass p-2.5 rounded-2xl border-white/40 shadow-md">
          <div className="h-12 w-12 rounded-xl bg-mint-deep/10 flex items-center justify-center text-mint-deep">
            <Calendar className="h-6 w-6" />
          </div>
          <div className="pr-4 flex flex-col justify-center">
            <p className="text-[10px] font-black text-slate-muted uppercase tracking-[0.2em] leading-none mb-1.5 opacity-50">Clinic Date</p>
            <p className="text-sm font-black text-navy leading-none">{today}</p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6 lg:gap-10">
        {/* Search Input — Fixed Icon Centering and Padding */}
        <div className={`
          relative hidden md:flex items-center transition-all duration-500 ease-[0.23, 1, 0.32, 1]
          ${searchFocused ? 'w-[500px]' : 'w-[350px]'}
        `}>
          <div className="absolute left-8 flex items-center justify-center pointer-events-none z-20">
            <Search className={`h-5 w-5 transition-colors ${searchFocused ? 'text-mint' : 'text-slate-muted'}`} />
          </div>
          <input
            type="text"
            placeholder="Search patients, prescriptions, staff..."
            className="w-full glass rounded-[20px] py-4.5 pl-24 pr-8 text-sm font-bold text-navy placeholder:text-slate-muted/40 placeholder:font-black focus:outline-none focus:ring-8 focus:ring-mint/5 focus:border-mint/40 transition-all border-white/40 shadow-inner"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="relative glass p-4 rounded-2xl border-white/40 text-slate-muted hover:text-mint transition-all shadow-md">
            <Bell className="h-6 w-6" />
            <span className="absolute top-3.5 right-3.5 h-3 w-3 rounded-full bg-coral border-2 border-white shadow-sm animate-pulse" />
          </button>

          <button className="flex items-center gap-4 glass-dark p-2 pr-6 rounded-2xl border-white/10 hover:border-white/30 transition-all group shadow-md">
            <div className="relative shrink-0">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-mint to-mint-deep flex items-center justify-center text-sm font-black text-white shadow-xl shadow-mint/20 transition-transform group-hover:scale-105">
                DM
              </div>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-mint border-2 border-white shadow-md" />
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-sm font-black text-navy leading-tight">Dr. Amit Mehta</p>
              <p className="text-[11px] font-black text-slate-muted uppercase tracking-widest mt-1 opacity-60">Senior Admin</p>
            </div>
            <ChevronDown className="hidden lg:block h-5 w-5 text-slate-muted group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  )
}
