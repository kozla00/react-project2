import React from "react";
import {Routes, Route} from 'react-router-dom'

import Home from './routes/Home'
import Customer from './routes/Customer'
import About from './routes/About'
import Contact from './routes/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
