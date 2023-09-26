import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home"
import Projects from './pages/Projects'
import About from './pages/About'
import Experience from './pages/Experience'

function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/Experience" element={<Experience />}></Route>
          </Routes>
        </main>
        <footer>
          
        </footer>

      </BrowserRouter>
    </div>
  )
}

export default App
