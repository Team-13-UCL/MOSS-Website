import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Home, YourVisit, SchoolService, Contact, 
  NotFound, Activities, Activity, Vild, Dorf, About
  } from './pages'

function App() {

  return (
    <>
    <NavBar />

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/dit-besoeg' element={<YourVisit />}/>
      <Route path='/skoletjenesten' element={<SchoolService />}/>
      {/* <Route path='/butik' element={<Shop />}/> */}
      <Route path='/om-museet' element={<About />}/>
      <Route path="/kontakt" element={<Contact />}/>
      
      <Route path='/dorf-moellegaard' element={<Dorf />}/> 
      <Route path='/vildmosemuseet' element={<Vild />}/>

      <Route path="/:museumSlug/aktiviteter" element={<Activities />} />
      <Route path="/:museumSlug/aktiviteter/:id" element={<Activity />} />

      {/* Routes for testing WordPress REST API */}
      {/* <Route path='/aktiviteter/:id' element={<ActivityPage />} />
      <Route path='/butik/produkter/:id' element={<ProductPage />} /> */}

      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
      
    </>
  )
}

export default App