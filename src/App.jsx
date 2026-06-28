import { Routes, Route } from 'react-router-dom'
import CanvasBackground from './components/CanvasBackground'
import Header from './components/Header'
import Footer from './components/Footer'
import FAB from './components/FAB'
import Home from './pages/Home'
import Fleet from './pages/Fleet'
import Partner from './pages/Partner'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <>
      <CanvasBackground />
      <Header />
      
      <main className="relative pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
      <FAB />
    </>
  )
}

export default App
