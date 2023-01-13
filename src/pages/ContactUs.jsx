import React from 'react'
import Navbar from '../components/HomeComponents/Navbar'
import Footers from '../components/HomeComponents/Footers'

const ContactUs = () => {
  return (

<>


<div className="w-full  bg-gray-300 flex flex-column h-full justify-between  items-center ">   

<Navbar/>


<div className="flex  flex-col justify-center ">

  <div className="flex flex-column w-full h-75 justify-center items-center  mt-60 mb-20  ">

              <strong className="fs-1">ATENCION AL CLIENTE</strong>

              <p className="w-50 mt-2 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, eveniet reiciendis maxime asperiores exercitationem optio placeat consequuntur quia sapiente fuga quam commodi nulla quas doloribus dolore iste similique numquam rem!</p>

              </div>

<hr className=" w-75 m-auto" />



<div id="contacto" className="flex w-full h-full justify-center items-center mt-10 mb-20 ">  


<div className="flex  p-3   h-1/2 overflow-hidden  mt-20	 justify-center">
  <img
  src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/3-rifkq7g0kj79ubfl0zua.jpg"
  className=" shadow-2xl object-cover  w-75 h-full  "
  alt="..."
/>

</div>


<div className="flex  border-black self-end		flex-col p-1 h-30 w-full">

<h2 className="text-6xl text-center mb-10 p-3	">Contact Us</h2>

<div className="flex  shadow-2xl justify-start border-l border-t border-black  	p-4 w-full">


  <div className="flex flex-col  items-center w-1/2 gap-5">

  <input type="text" className="w-11/12 bg-transparent border-black	border-b  text-black no-underline	 outline-0				p-2	" placeholder="Full Name" />


  <input type="text" className="w-11/12	bg-transparent border-black	border-b color-blue	 outline-0		 p-2" placeholder="Email" />


  <input type="text"  className="w-11/12	bg-transparent	border-black	border-b outline-0	 color-black		p-2" placeholder="Mensaje" />



  <button className="w-40 text-center bg-black text-white rounded-full">Contact Us</button>

</div>


<div className="flex flex-col  justify-around items-center w-72 gap-2 ">


<div className="">
<h4 className="text-center text-2xl">Contact us </h4>
<p className="text-center text-lg mb-6">jake@gmail.com</p>
</div>



<div className="w-full">
<h4 className="w-full text-2xl text-center"> Based in  </h4>
<p className=" w-full text-lg text-center mb-6 ">San Francisco California</p>
</div>



<div className="flex ">

          
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-gray-100 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-black">
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-gray-100 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-black">
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-gray-100 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-black">
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </button>


</div>


</div>

</div>

</div>
  
</div>

<hr className=" w-75 m-auto " />


<div className="flex flex-column w-full h-75 justify-center items-center  mt-20 mb-20 ">

<strong>DEVOLUCIONES</strong>

<p className="w-50 mt-2 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, eveniet reiciendis maxime asperiores exercitationem optio placeat consequuntur quia sapiente fuga quam commodi nulla quas doloribus dolore iste similique numquam rem!</p>

</div>

<hr className=" w-75 m-auto mb-20" />



        {/* rows */}

        <div className="w-full bg-transparent mt-10 ">

<div className="row w-100 d-flex justify-content-center  bg-transparent">

    <strong className="col-auto fs-2 d-flex justify-content-center align-items-center align-items-center mb-10">FAQ</strong>

  

</div>



<div className="row  d-flex justify-content-center align-items-center bg-transparent  ">

    <div className="col-6 d-flex justify-content-center align-items-center ">¿Provees envíos internacionales?</div>

    <div className="col-6 d-flex justify-content-center align-items-center ">¿Cómo puedo rastrear mi pedido?

</div>

</div>


<div className="row  d-flex justify-content-center align-items-center  bg-transparent  ">

    <div className="col-6  text-center p-5 ">Párrafo. Haz clic aquí para agregar tu propio texto y editar. 
    Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti.</div>

    <div className="col-6  text-center p-5 ">Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o doble clic aquí 
    para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti.

</div>

</div>

<div className="row  d-flex justify-content-center align-items-center bg-transparent  ">

    <div className="col-6 d-flex justify-content-center align-items-center ">¿Cómo puedo devolver un producto?
</div>

    <div className="col-6 d-flex justify-content-center align-items-center ">¿Cómo puedo contactar a los distribuidores?

</div>

</div>


<div className="row  d-flex justify-content-center align-items-center  bg-transparent  ">

    <div className="col-6  text-center p-5 ">​

Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti.</div>

    <div className="col-6  text-center p-5 ">Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti.

</div>

</div>



<div className="row  d-flex justify-content-center align-items-center bg-transparent  ">

    <div className="col-6 d-flex justify-content-center align-items-center ">¿Cuál es tu política de retorno?</div>

    <div className="col-6 d-flex justify-content-center align-items-center ">¿Cuáles son las opciones de envío?



</div>

</div>


<div className="row  d-flex justify-content-center align-items-center  bg-transparent  ">

    <div className="col-6  text-center p-5 ">Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en Editar Texto o 
    doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti.</div>

    <div className="col-6  text-center p-5 ">Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. 
    Haz clic en Editar Texto o doble clic aquí para agregar tu contenido y cambiar la fuente. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti.

</div>

</div>



</div>



</div>





</div>

<Footers/>







</>
    )
}

export default ContactUs

