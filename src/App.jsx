import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import CardSection from './components/CardSection/CardSection'
// import NavBar from './components/Nav/NavBar'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>

          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
      
      {/* 
      <Cart/> */}
    </>
  )
}

export default App
