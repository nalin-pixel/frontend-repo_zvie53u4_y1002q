import { motion } from 'framer-motion'
import { Gauge, Gift, Users, Activity } from 'lucide-react'

const items = [
  {
    icon: Gauge,
    title: 'Session Performance',
    desc: 'Track CTR, average watch time, retention, and conversion in real-time.'
  },
  {
    icon: Users,
    title: 'Audience Heatmaps',
    desc: 'See spikes in viewers, chat engagement, and join/leave patterns.'
  },
  {
    icon: Gift,
    title: 'Gifting Trends',
    desc: 'Identify top gifters, streaks, and gifting windows to maximize revenue.'
  },
  {
    icon: Activity,
    title: 'Battle Insights',
    desc: 'Compare hosts, monitor rounds, and analyze momentum shifts.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-950 text-white">
      <div aria-hidden className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <it.icon className="h-6 w-6 mb-4 text-fuchsia-300" />
              <h3 className="text-lg font-semibold">{it.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
