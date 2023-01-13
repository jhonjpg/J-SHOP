import React from 'react'

const Carousel = () => {
  return (
    < div id="carousel" className=" flex w-80 p-6  relative	left-130 	h-72 	">



<div id="carouselExampleFade" className="w-100 carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img   src="https://cdn.vox-cdn.com/thumbor/TQO8KuF-Bm7TXEryXLAv6D3ET5A=/0x0:2040x1360/1400x788/filters:focal(947x1064:948x1065)/cdn.vox-cdn.com/uploads/chorus_asset/file/13681416/fshivakumar_181109_3078_0001.jpg"
 className="d-block w-100" alt="..."/>
    </div>
    <div className="w-100 carousel-item">
      <img  src="https://images.template.net/wp-content/uploads/2015/09/15144546/Fantastic-Free-Nike-Logo-For-You.jpg"
 className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img  src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/bfcd6cf525a947e7af1eaf350080fa93_9366/forum-low-shoes.jpg"
 className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  





    </div>
  )
}

export default Carousel