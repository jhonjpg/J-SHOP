import React, { useEffect, useRef, useState } from 'react'
import { useObserver } from '../HomeComponents/ArticleComponents/useObserver'



const Items = ({ data, addToCart }) => {




  let { id, image, marca, edicion, price } = data;
  

  const imageRef = useRef()

  const [imagenUrL, setimagenUrL] = useState(image)

  const [isVisible, setisVisible] = useState(false)


  const imageClass = `image ${isVisible ? "show" : ""}`

  const entry = useObserver(imageRef, { rootMargin: "100px" })
  const animation = useObserver(imageRef, { rootMargin: "0" })


  useEffect(() => {
    if (!entry) return;

    if (entry.isIntersecting) {

      setimagenUrL(entry.target.dataset.src)

    }

  }, [entry, { rootMargin: "0" }])


  useEffect(() => {
    if (animation?.isIntersecting) {

      setisVisible(true)
    }


  }, [animation]);









  return (

    <div className=" flex flex-col justify-between w-70	bg-gray-200 p-2 shadow-2xl overflow-hidden" data-mdb-zoom-effect="true">


      <div className="photo-article  ">

        <a className=" flex rounded-3xl w-60 h-72 overflow-hidden" data-mdb-ripple="true">

          <img
            ref={imageRef}
            src={imagenUrL}
            data-src={imagenUrL}
            className={imageClass}
            alt="imagen"
            />

        </a>

      </div>


      <div className="w-full ">

        <div className="w-full col-md-8 col-lg-6 col-xl-4 ">
          <div className="  w-100	bg-gray-200 p-3 ">

            <div className=" flex  w-full p-2 ">

              <div className="flex w-full justify-between">

                <div className="flex flex-col justify-between w-1/2 	">
                  <p><a href="#!" className="text-dark">{marca}</a></p>
                  <p className="small text-muted">{edicion}</p>
                </div>


                <div className="flex flex-col w-2/6	justify-between text-end	 items-end gap-y-3" >
                  <p><a href="#!" className="text-dark">${price}</a></p>
                </div>

              </div>

            </div>
            <hr className="my-0  p-1 rounded-full" />


            <div className="card-body  pb-0">
              <div className="flex justify-around">
                <button type="button" onClick={() => addToCart(id)} className="btn btn-primary bg-primary w-24	 flex justify-center gap-x-3	items-center"><svg
                  aria-hidden="false"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="shopping-cart"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                  ></path>
                </svg>Cart</button>

                <button type="button" className="btn btn-primary bg-primary">Buy now</button>
              </div>
            </div>


          </div>
        </div>
      </div>



    </div>

  )
}



export default Items