import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Principles from './components/Principles'
import Doc from './components/Doc'
import Reviews from './components/Reviews'
import Modal from './components/Modal'

import './App.scss'

function App() {
  const [modal, setModal] = useState(false)

  return (
    <>
     <Header />
     <Hero setModal={setModal} />
     <Services />
     <Principles />
     <Doc />
     <Reviews />
     {
      modal ? (<Modal setModal={setModal} />) : (<></>)
     }
     
    </>
  )
}

export default App
