import React from 'react'

const Tredingc = () => {
  return (


    <div className=" w-8/12		 relative bottom-80 shadow-lg	 z-30 bg-gray-200 rounded-lg p-8	">


      <article className=" w-full ">

      <h2 className="pl-12 text-4xl w-full text-center	">Treding Shoes</h2>

      <div className="  flex justify-around  w-full  py-5 ">



{/* primero */}
      <div className="w-2/5	">

      <div className=" flex  justify-around	h-60 w-full	bg-gray-300  p-3">

      <div className="  flex 	w-1/2   card rounded-lg   ">



      <div id="rousel" className=" bg-image hover-overlay ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">

      <div id="carouselExampleFade" className=" h-100 carousel slide carousel-fade" data-bs-ride="carousel">


      <div className=" h-100  carousel-inner ">

        <div className=" h-100 carousel-item active ">
  
        <img src="https://images.pexels.com/photos/13691720/pexels-photo-13691720.jpeg?auto=compress&cs=tinysrgb&w=800 "
        data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp" alt="Winter Landscape"
        className="h-100  object-cover w-full" />    </div>


      <div className=" h-100 carousel-item  ">

      <img src="https://images.pexels.com/photos/1102776/pexels-photo-1102776.jpeg?auto=compress&cs=tinysrgb&w=800"
      data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp" alt="Winter Landscape"
      className="h-100  object-cover w-full" />    </div>


      <div className="h-100 carousel-item">

      <img src="https://images.pexels.com/photos/2225727/pexels-photo-2225727.jpeg?auto=compress&cs=tinysrgb&w=1600"
      data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/2.webp" alt="Winter Landscape"
      className="h-100 w-full object-cover " />    </div>




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




      <div className=" flex flex-col w-2/5 justify-around	">

      <div className="text-3xl">jordan vit</div>

      <p>Lorem ipsum dolor,
      sit amet consectetur adipisicing elit.Minima aut  quod, mo
      sa quae!</p>


      <p className="text-blue-400">$45.22</p>

      </div>



      </div>
      </div>






{/* segundo */}

      <div className="w-2/5	">

      <div className=" flex  justify-around	h-60 w-full	bg-gray-300  p-3">

      <div className="  flex 	w-1/2 overflow-hidden  card rounded-lg    ">

     
      <div id="carouselExampleControls" className="carousel slide relative h-full w-full" data-bs-ride="carousel">
  <div className="carousel-inner relative w-full h-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full h-full">
      <img
        src="https://images.pexels.com/photos/13691727/pexels-photo-13691727.jpeg?auto=compress&cs=tinysrgb&w=800"
        className="flex  object-cover w-full h-full"
        alt="Wild Landscape"
      />
    </div>
    <div className="carousel-item relative float-left w-full h-full">
      <img
        src="https://images.pexels.com/photos/225160/pexels-photo-225160.jpeg?auto=compress&cs=tinysrgb&w=1600 "
        className="flex object-cover w-full h-full"
        alt="Camera"
      /> 
    </div>
    <div className="carousel-item relative float-left w-full h-full">
      <img
        src="https://images.pexels.com/photos/6685972/pexels-photo-6685972.jpeg?auto=compress&cs=tinysrgb&w=800"
        className="flex object-cover w-full h-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
      </div>


 <div className=" flex flex-col w-2/5 justify-around	">

 <div className="text-3xl">jordan vit</div>

 <p>Lorem ipsum dolor,
    sit amet consectetur adipisicing elit. Minima aut  quod, mo
  sa quae!</p>


  <p className="text-blue-400">$45.22</p>

 </div>
      </div>
      
      </div>


          </div >







      </article >

    </div >




  )
}

export default Tredingc


