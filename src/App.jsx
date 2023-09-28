import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home"
import Projects from './pages/Projects'


function App() {


  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </main>
        <footer>
          
        </footer>

      </BrowserRouter>
    </div>
  )
}

export default App
