import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './assets/components/Header'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'
import Post from './assets/pages/Post'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <main className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}