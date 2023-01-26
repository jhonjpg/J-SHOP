import React,{Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Abous from '../pages/Abous';
const Best5 = lazy(() => import('../pages/Best5'));
import Buy from '../pages/Buy';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotfoundPage from '../pages/NotfoundPage';
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
           <Route path="/best5" element={ <Suspense fallback={<span className="Best5Reload">cargando fmdkfndkvnrkvkrnevcrejvrnjnvjrjrnrnvjvr</span>}><Best5 /> </Suspense> }></Route>
           <Route path="/abous" element={<Abous />}></Route>
           <Route path="/contact" element={<ContactUs />}></Route>

           <Route path="/buy" element={<Buy/>}></Route>

           <Route path="*" element={<NotfoundPage/>}></Route>













        </Routes>







      </BrowserRouter>
    </div>
  )
}

export default Ruta