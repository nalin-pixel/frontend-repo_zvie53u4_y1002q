import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxStrip() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section ref={ref} className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="relative h-40">
          <motion.div style={{ y: y1 }} className="absolute inset-x-0 top-0">
            <div className="flex gap-6 whitespace-nowrap will-change-transform">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm backdrop-blur">
                  Box Host · Battle · CTR · Retention · Viewers · Gifts · Conversion
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="absolute inset-x-0 bottom-0">
            <div className="flex gap-6 whitespace-nowrap will-change-transform">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm backdrop-blur">
                  Momentum · Rounds · Top Gifters · Heatmap · RPM · Winrate
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
