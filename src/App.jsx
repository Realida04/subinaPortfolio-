
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './component/NavBar/NavBar.jsx'
import HeroSection from './component/HeroSection/heroSection.jsx'
import About from './component/About/about.jsx'
import Skills from './component/skills/skills.jsx'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <HeroSection/>
    {/* <About/> */}
    <Skills/>
    </BrowserRouter>
      
    </>
  )
}

export default App
