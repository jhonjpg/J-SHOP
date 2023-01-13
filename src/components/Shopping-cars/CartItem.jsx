import React from 'react'

const CartItem = ({data, DELFromCart}) => {

    let { image, marca, edicion, price, quantity } = data;


    const ClearCart = () => {


    }

    return (


        <>


<div className="flex p-2 bg-gray-400 cursor-pointer  w-full hover:bg-gray-300 hover:scale-105 ">


<div className="flex w-full">

    <div id="cart-image" className="">

        <div className="  h-full	overflow-hidden" data-mdb-ripple="true">

            <img className="object-cover w-full h-full" src={image} />

        </div>

    </div>


    <div className=" flex flex-col justify-between w-3/4 p-2 ">
        <h2 className="w-full text-center text-2xl">{marca}-{edicion}</h2>
        <div className="flex mt-3 justify-around w-full">
            <button  className="p-1 bg-blue-600 text-white rounded-lg text-center">comprar</button>
            <button onClick={() => DELFromCart()} className="p-1 bg-blue-600 text-white rounded-lg text-center">eliminar</button>
        </div>
    </div>


    <div className=" flex flex-col p-2 w-1/4  ">

        <p className="w-full text-center">X{quantity}</p>
        <h3 className="flex  items-end w-full text-center ">Total: {price*quantity}</h3>

    </div>

</div>




</div>




           

        </>


    )
}

export default CartItem




