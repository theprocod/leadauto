import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AppLayout from './components/layout/AppLayout'
import Dashboard from './pages/Dashboard'
import Leads from './pages/Leads'
import Chat from './pages/Chat'
import Automations from './pages/Automations'
import Templates from './pages/Templates'

/**
 * App — root component with layout and client-side routing.
 */
export default function App() {
  return (
    <AppLayout>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/automations" element={<Automations />} />
          <Route path="/templates" element={<Templates />} />
        </Routes>
      </AnimatePresence>
    </AppLayout>
  )
}
