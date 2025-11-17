import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnalyticsDemo from '../components/AnalyticsDemo'

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <div className="pt-16">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_60%)]" />
          <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white">Dashboard</h1>
            <p className="text-white/70 mt-2">Demo metrics for Box and Battle sessions.</p>
          </div>
        </div>

        <AnalyticsDemo />
      </div>
      <Footer />
    </div>
  )
}
