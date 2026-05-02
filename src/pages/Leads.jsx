import { useState, useMemo } from 'react'
import { Search, Filter, Layers } from 'lucide-react'
import { mockLeads } from '../data/mockLeads'
import LeadCard from '../components/leads/LeadCard'
import LeadDetail from '../components/leads/LeadDetail'
import { motion } from 'framer-motion'

const filterTabs = [
  { key: 'all', label: 'All Patients', count: null },
  { key: 'new', label: 'New Enquiries', count: 3 },
  { key: 'follow-up', label: 'Follow-ups', count: 2 },
  { key: 'booked', label: 'Confirmed', count: 2 },
]

/**
 * Leads page — Fixed placeholder alignment and tab spacing.
 */
export default function Leads() {
  const [selectedLead, setSelectedLead] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showDetail, setShowDetail] = useState(false)

  const filteredLeads = useMemo(() => {
    let leads = mockLeads
    if (activeFilter !== 'all') {
      leads = leads.filter((l) => l.status === activeFilter)
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      leads = leads.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.phone.includes(q) ||
          l.lastMessage.toLowerCase().includes(q)
      )
    }
    return leads
  }, [activeFilter, searchQuery])

  const handleSelectLead = (lead) => {
    setSelectedLead(lead)
    setShowDetail(true)
  }

  return (
    <div className="h-full flex flex-col space-y-12">
      {/* Page Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-10 bg-primary/30 rounded-full" />
          <span className="text-[11px] font-black text-primary-dark uppercase tracking-[0.25em] opacity-70">Patient Database</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text tracking-tighter leading-[0.9]">
          Patient <span className="text-primary-dark">Inbox</span>
        </h1>
      </motion.div>

      {/* Main Inbox Container */}
      <div className="flex-1 flex overflow-hidden glass rounded-[48px] border-white/50 shadow-2xl relative min-h-[750px]">
        {/* Left Pane: List */}
        <div className={`w-full md:w-[420px] border-r border-white/10 flex flex-col shrink-0 ${showDetail ? 'hidden md:flex' : 'flex'}`}>
          {/* Search Header — Fixed Padding to avoid Icon overlap */}
          <div className="p-8 glass-dark border-b border-white/10 shrink-0">
            <div className="relative group">
              <Search className="absolute left-7 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary group-focus-within:text-primary transition-colors z-20" />
              <input
                type="text"
                placeholder="Search patient records..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass rounded-[24px] border-white/40 bg-white/40 py-5 pl-24 pr-7 text-sm font-bold text-text placeholder:text-text-secondary/30 focus:outline-none focus:ring-8 focus:ring-primary/5 transition-all shadow-inner"
              />
            </div>
          </div>

          {/* Filter Tabs — Fixed Centering and Spacing */}
          <div className="px-6 py-8 border-b border-white/10 flex items-center gap-3 overflow-x-auto no-scrollbar shrink-0">
             {filterTabs.map((tab) => (activeFilter === tab.key ? (
               <button
                 key={tab.key}
                 onClick={() => setActiveFilter(tab.key)}
                 className="px-6 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 shrink-0 flex items-center gap-2.5 bg-primary text-white shadow-xl shadow-primary/25"
               >
                 {tab.label}
                 {tab.count && <span className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-black bg-white/20 text-white">{tab.count}</span>}
               </button>
             ) : (
               <button
                 key={tab.key}
                 onClick={() => setActiveFilter(tab.key)}
                 className="px-6 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 shrink-0 flex items-center gap-2.5 glass border-white/20 text-text-secondary hover:bg-white/60"
               >
                 {tab.label}
                 {tab.count && <span className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-black bg-surface text-text-secondary">{tab.count}</span>}
               </button>
             )))}
          </div>

          {/* Patient Scroll Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar py-6 px-4 space-y-2">
            {filteredLeads.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-12 text-center opacity-30">
                <Layers className="h-16 w-16 mb-6" />
                <p className="text-sm font-black uppercase tracking-[0.2em]">No Results Found</p>
              </div>
            ) : (
              filteredLeads.map((lead) => (
                <LeadCard
                  key={lead.id}
                  lead={lead}
                  isSelected={selectedLead?.id === lead.id}
                  onClick={() => handleSelectLead(lead)}
                />
              ))
            )}
          </div>
        </div>

        {/* Right Pane: Detail View */}
        <div className={`flex-1 flex flex-col bg-white/20 backdrop-blur-sm ${!showDetail ? 'hidden md:flex' : 'flex'}`}>
          {showDetail && (
            <div className="md:hidden p-8 glass-dark border-b border-white/10">
               <button
                onClick={() => setShowDetail(false)}
                className="text-xs font-black text-primary-dark uppercase tracking-widest flex items-center gap-3"
              >
                ← Back to Database
              </button>
            </div>
          )}
          <LeadDetail lead={selectedLead} />
        </div>
      </div>
    </div>
  )
}
