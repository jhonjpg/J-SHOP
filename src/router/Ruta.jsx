import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Abous from '../pages/Abous';
import Best5 from '../pages/Best5';
import Buy from '../pages/Buy';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Tienda from '../pages/Tienda';


const Ruta = () => {
  return (
    <div>


      <BrowserRouter>

        <Routes>

          <Route index element={<Home/>}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          
           <Route path="/Home" element={<Home />}></Route>
           <Route path="/tienda" element={<Tienda />}></Route>
           <Route path="/best5" element={<Best5 />}></Route>
           <Route path="/abous" element={<Abous />}></Route>
           <Route path="/contact" element={<ContactUs />}></Route>

           <Route path="/buy" element={<Buy/>}></Route>












        </Routes>







      </BrowserRouter>
    </div>
  )
}

export default Ruta