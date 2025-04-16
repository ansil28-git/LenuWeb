import './App.css'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Courses from './components/courses/Courses'
import Contact from './components/contact/Contact'
import Footer from './components/Footer'
import 'aos/dist/aos.css';


function App() {
 
  return (
   <div>
     <Navbar />
     <Hero />
     <Courses />
     <Contact />
     <Footer />

   </div>
  )
}

export default App
