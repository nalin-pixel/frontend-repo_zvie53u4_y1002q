import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ParallaxStrip from './components/ParallaxStrip'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ParallaxStrip />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
