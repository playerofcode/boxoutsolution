import React from 'react'
import {Routes,Route} from "react-router-dom";
import Contact from './Contact';
import Solution from './Solution';
import Home from './Home';
import Navbar from './Navbar'
import Appointment from './Appointment';
import Footer from './Footer';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="appointment" element={<Appointment />} />
      <Route path="contact" element={<Contact />} />
      <Route path="solution" element={<Solution />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App