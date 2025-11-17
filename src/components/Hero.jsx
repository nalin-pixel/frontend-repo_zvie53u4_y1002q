import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* purple gradient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)]" />
        <div className="absolute -bottom-20 right-1/3 h-96 w-[36rem] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.2),transparent_60%)]" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(139,92,246,0.3)]"
        >
          TikTok Analytics for Box & Battle Hosts
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          className="mt-4 md:mt-6 text-lg md:text-xl text-white/80"
        >
          Real-time session insights, audience heatmaps, gifting trends, and performance breakdowns — in a sleek, gamer-ready dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="/analytics"
            className="px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] transition-shadow"
          >
            Open Demo Dashboard
          </a>
          <a
            href="#features"
            className="px-5 py-3 rounded-xl font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/15 backdrop-blur border border-white/10"
          >
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  )
}
