import { useState, useMemo } from 'react'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend, Filler)

function Stat({ label, value, delta }) {
  const positive = (delta || 0) >= 0
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-white/5">
      <div className="text-white/60 text-xs">{label}</div>
      <div className="text-white text-2xl font-semibold mt-1">{value}</div>
      {delta !== undefined && (
        <div className={`text-xs mt-1 ${positive ? 'text-emerald-400' : 'text-rose-400'}`}>{positive ? '+' : ''}{delta}%</div>
      )}
    </div>
  )
}

export default function AnalyticsDemo() {
  const [mode, setMode] = useState('box') // 'box' | 'battle'

  const labels = Array.from({ length: 12 }, (_, i) => `${i + 1}m`)

  const dataLine = useMemo(() => ({
    labels,
    datasets: [
      {
        label: 'Viewers',
        data: labels.map((_, i) => (mode === 'box' ? 120 + Math.sin(i / 2) * 40 + i * 5 : 200 + Math.cos(i / 2) * 60 + i * 3)),
        borderColor: '#a855f7',
        backgroundColor: 'rgba(168,85,247,0.15)',
        tension: 0.35,
        fill: true,
      },
      {
        label: 'Chat msgs',
        data: labels.map((_, i) => (mode === 'box' ? 60 + Math.sin(i / 1.7) * 25 + i * 2 : 80 + Math.cos(i / 1.7) * 35 + i * 1.3)),
        borderColor: '#22d3ee',
        backgroundColor: 'rgba(34,211,238,0.15)',
        tension: 0.35,
        fill: true,
      },
    ],
  }), [labels, mode])

  const dataBar = useMemo(() => ({
    labels: ['R1', 'R2', 'R3', 'R4', 'R5'],
    datasets: [
      {
        label: 'Host A',
        data: [300, 420, 380, 520, 610],
        backgroundColor: 'rgba(168,85,247,0.6)'
      },
      {
        label: 'Host B',
        data: [280, 460, 390, 480, 650],
        backgroundColor: 'rgba(34,197,94,0.6)'
      }
    ]
  }), [])

  const dataDoughnut = useMemo(() => ({
    labels: ['Rookie', 'Supporter', 'Top Gifter'],
    datasets: [
      {
        data: [62, 28, 10],
        backgroundColor: ['#64748b', '#22d3ee', '#a855f7'],
        borderWidth: 0
      }
    ]
  }), [])

  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Live Analytics Demo</h2>
          <div className="bg-white/10 rounded-lg p-1 flex gap-1">
            {['box','battle'].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-3 py-1 rounded-md text-sm capitalize ${mode === m ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white' : 'text-white/70 hover:text-white'}`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 mb-6">
          <Stat label="Avg Watch Time" value={mode==='box' ? '2m 34s' : '3m 12s'} delta={8} />
          <Stat label="Retention" value={mode==='box' ? '46%' : '52%'} delta={-2} />
          <Stat label="CTR" value={mode==='box' ? '3.8%' : '4.5%'} delta={12} />
          <Stat label="Gift RPM" value={mode==='box' ? '$12.4' : '$18.2'} delta={23} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl border border-white/10 bg-white/5">
            <div className="text-sm text-white/70 mb-2">Viewers & Chat Over Time</div>
            <Line data={dataLine} options={{ responsive: true, plugins: { legend: { labels: { color: 'white' } } }, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.06)' } } } }} />
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-white/5">
            <div className="text-sm text-white/70 mb-2">Battle Rounds Momentum</div>
            <Bar data={dataBar} options={{ responsive: true, plugins: { legend: { labels: { color: 'white' } } }, scales: { x: { ticks: { color: '#94a3b8' } }, y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.06)' } } } }} />
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-white/5">
            <div className="text-sm text-white/70 mb-2">Gifter Segments</div>
            <Doughnut data={dataDoughnut} options={{ plugins: { legend: { labels: { color: 'white' } } } }} />
          </div>
        </div>
      </div>
    </section>
  )
}
