import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Register from './pages/Register'
// import Login from './pages/Login'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'

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
    </div>
  )
}

export default App  