import React from 'react'
import Footers from '../components/HomeComponents/Footers'
import Navbar from '../components/HomeComponents/Navbar'

const Abous = () => {
    return (

        <>


            <Navbar />

            <div className="flex flex-col w-full p-4  h-5/6	 ">

<div className="flex w-full h-full">

                <div className="flex flex-col justify-center	items-center w-1/2  ">

                    <div className="w-10/12	 bg-gradient-to-r from-gray-200 to-slate p-3">

                        <h2 className="text-6xl pb-3	">About Us</h2>


                        <hr className="w-11/12	 p-1   rounded-full bg-gray-800" />
                        <p className="text-2xl mt-4 text-justify	 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi minus maiores facere iure autem sequi tempora inventore commodi? Ullam sint
                            dicta cumque ab officiis incidunt corrupti officia at ipsam quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta facere perferendis obcaecati laudantium necessitatibus similique, vel id sit at expedita?
                            Distinctio rerum atque quod. Consectetur, fugit? Dolores, impedit temporibus.</p>
                    </div>

                </div>
                <div className="w-1/2 h-full">

                    <img src="https://i.pinimg.com/originals/33/9b/54/339b54e6f5a96dab3251d5e596c46b99.gif"
                        className="object-cover	 w-full h-full" alt="" />
                </div>
                </div>

<div className="flex h-48 justify-center	items-center w-full ">

                <Footers />

                </div>

            </div>






        </>




    )
}

export default Abous