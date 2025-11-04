import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Food from './pages/Food'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/food' element={<Food/> } />
        <Route path='/contact' element={<Contact/> } />
        <Route path='/signup' element={<Signup/> } />
        <Route path='/signin' element={<Signin/> } />
      </Routes>
    </div>
  )
}

export default App