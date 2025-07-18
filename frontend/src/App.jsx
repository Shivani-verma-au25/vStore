import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Register from './pages/Register'
// import Login from './pages/Login'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} /> */}
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App  