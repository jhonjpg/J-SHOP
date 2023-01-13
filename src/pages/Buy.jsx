import React from 'react'
import Navbar from '../components/HomeComponents/Navbar'


const Buy = () => {
  return (



    <div className="w-full  h-screen flex flex-column justify-start items-center bg-gray-200 ">   
    <Navbar />

        <section  id="compras" className="flex  mt-40 flex-row w-full justify-center items-center">

                        
        <article className="flex justify-center items-center w-50 h-full border-gray-600 border-solid border-r-2">






<div className="w-full h-75  overflow-hidden p-3 ">

<div id="rousel" className=" overflow-hidden  h-full bg-image hover-overlay ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">

<div id="carouselExampleFade" className=" overflow-hidden  h-100 carousel slide carousel-fade" data-bs-ride="carousel">


<div className="overflow-hidden	 h-100  carousel-inner ">

<div className=" w-full overflow-hidden  h-100 carousel-item active ">

<img src="https://flyclipart.com/thumb2/nike-running-shoes-png-image-transparent-png-arts-178133.png"
data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp" alt="Winter Landscape"
className="h-100  object-contain w-full" />    </div>


<div className="w-full h-100 overflow-hidden carousel-item">

<img src="data:image/png;base64,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"
data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp" alt="Winter Landscape"
className="h-100 w-full object-contain " />    </div>

{/* 
<div className=" w-full h-100 overflow-hidden carousel-item active ">

<img src="https://media.self.com/photos/62741f1913915af32c973528/1:1/w_1000,h_1000,c_limit/Nike%20Free%20TR8.jpg"
data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp" alt="Winter Landscape"
className="h-100  object-contain w-full" />    </div> */}


<button className="carousel-control-prev" type ="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type ="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Next</span>
</button>

</div>
</div>
</div>


</div>




        </article >



        <article className=" flex flex-column justify-center items-center w-50  h-full">


        <div className="
        h-25 flex flex-column justify-start items-center w-50  bg-white">

            <strong className="fs-1">$45</strong>

            <buttom className="bg-primary w-50 fs-3 p-2 text-light text-center mt-10">PAY</buttom>
        </div>


        <div className="w-100 flex flex-column items-center mt-10">

            <strong>INFORMACION DEL PRODUCTO</strong>

            <p className="w-75 mt-2">Detalles del producto. Agrega aquí más detalles sobre tu producto como tamaño, material e instrucciones de cuidado y de limpieza. También puedes incluir especificaciones del producto, información sobre el envío, ingredientes y otros aspectos.</p>
        </div>

        </article>



       </section>

       </div>    
       
       
       
       
       )
}

export default Buy