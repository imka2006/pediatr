import { useState } from 'react'

import Header from './components/Header'

import './App.scss'
import Hero from './components/Hero'
import Services from './components/Services'
import Principles from './components/Principles'
import Doc from './components/Doc'
import Reviews from './components/Reviews'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Hero />
     <Services />
     <Principles />
     <Doc />
     <Reviews />
    </>
  )
}

export default App
