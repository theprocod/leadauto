import { motion } from 'framer-motion'
import { mockTemplates } from '../data/mockTemplates'
import TemplateCard from '../components/templates/TemplateCard'
import { Sparkles } from 'lucide-react'

/**
 * Templates page — Fixed text alignments and section spacing.
 */
export default function Templates() {
  return (
    <div className="h-full flex flex-col space-y-12 pb-12">
      {/* Page Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[2px] w-10 bg-primary/30 rounded-full" />
          <span className="text-[11px] font-black text-primary-dark uppercase tracking-[0.25em] opacity-70">Messaging Standards</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text tracking-tighter leading-[0.9]">
          Smart <span className="text-primary-dark">Templates</span>
        </h1>
        <div className="flex items-center gap-4 mt-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="text-base font-bold text-text-secondary max-w-xl leading-relaxed opacity-70">
            Define your clinic's digital voice with precision-engineered messaging. 
            Automate with a human touch using dynamic patient variables.
          </p>
        </div>
      </motion.div>

      {/* Templates Grid — Improved Spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {mockTemplates.map((template, i) => (
          <TemplateCard key={template.id} template={template} index={i} />
        ))}
      </div>
    </div>
  )
}
