import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function RootLayout() {

  return (
    <div>

        <NavBar/>
        <div className='' id="home" style={{minHeight:"90vh"}}>
          <Home/>
        </div>
        <div className='' id="about" style={{minHeight:"90vh"}}>
          <About/>
        </div>
        <div className='' id="skills" style={{minHeight:"90vh"}}>
          <Skills/>
        </div>
        <div className='' id="skills" style={{minHeight:"90vh"}}>
          <Projects/>
        </div>
        <div className='' id="skills" style={{minHeight:"90vh"}}>
          <Contact/>
        </div>
        <Outlet/>
        
    </div>
  )
}

export default RootLayout