import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import HowItWorks from './components/HowItWorks'
import TestimonialsCarousel from './components/TestmonialsCarousel'

function App() {

  return (
    <>
      <Header />
      <Hero/>
      <HowItWorks />
      <About />
      <Highlights />
      <Contact />
    </>
  )
}

export default App
