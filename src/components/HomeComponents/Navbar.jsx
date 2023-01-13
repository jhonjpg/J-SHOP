
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navbar = ({handleClick}) => {

  const [hide, setHide] = useState(false)



  const [menu, setmenu] = useState(true);



  const change = () => {


    if (window.scrollY >= 80) {


      setmenu(false)


    } else {

      setmenu(true)

    }


  }


  window.addEventListener("scroll", change)


  return (


    <>

      <nav className={menu ? "navbar" : "navbar active"}  >



        <div id="logo" className="flex 	 overflow-hidden rounded-lg  w-16 rounded-lg z-30	w-16	 ">

          <img
            src="../public/img/shoes.png"
            className="block w-full"
            alt="Motorbike Smoke"
          />


        </div>


        <ul className=" w-1/2  ">

        <Link className="text-white" to="/">  <li>Home</li>  </Link>
        <Link className="text-white" to="/tienda"><li>Tienda</li></Link>
         <Link className="text-white" to="/best5"> <li>best 5</li>  </Link>

          <Link className="text-white" to="/abous"> <li>Soporte</li></Link>
          <Link className="text-white"to="/contact"><li>Contacts</li></Link>

        </ul>


        <div id="carrito" onClick={handleClick}  className=" flex cursor-pointer w-20 justify-center h-20 ">

          <a
            className="text-white text-black opacity-60  flex items-center"
            aria-expanded="false"
          >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
              className="w-10 text-black" role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512">
              <path className={menu ? "path" : "path-active"} fill="currentColor"
                d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
              </path>
            </svg>
            <span
              className="text-black bg-red-700 absolute rounded-full text-xs   px-1.5 relative right-5 bottom-3">1</span>


          </a>

        </div>



      </nav>






    </>

  )
}

export default Navbar




















