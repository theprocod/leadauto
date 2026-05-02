import { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

/**
 * AppLayout — Glassmorphic layout.
 * Mesh background applied to the main container.
 */
export default function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden mesh-bg">
      {/* Glass Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Glass Topbar */}
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto p-6 md:p-10 lg:p-12">
          <div className="max-w-7xl mx-auto h-full">
            {children}
          </div>
        </main>

        <footer className="glass border-t border-white/20 px-6 py-4 text-center text-xs text-text-secondary">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span>Powered by <span className="font-bold text-primary-dark">ClinicConnect</span> • Innovating Digital Healthcare in Bangalore</span>
          </div>
        </footer>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/5 backdrop-blur-md lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
