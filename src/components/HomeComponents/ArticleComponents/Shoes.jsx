import React, { useReducer, useState, useEffect } from 'react'
import { TYPES } from '../../Shopping-cars/ShoppingAction'
import Items from '../../Shopping-cars/Items'
import { shoppingReducer, shoppingInitial } from '../../Shopping-cars/ShoppingReducer'
import CartItem from '../../Shopping-cars/CartItem'


const Shoes = ({hide}) => {

  console.log(hide)


  const cartClass = `cartHide ${hide ? "cartShow" : ""}`

  
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitial)

  const { products, cart } = state;

  const addToCart = (id) => {


    dispatch({ type: TYPES.ADD_TO_CART, payload: id })

  }


  const DELFromCart = () => {




  }






  return (
    <>
      <div className=" flex flex-wrap	 w-70 justify-center	 gap-6	bg-gray-200 p-2 shadow-2xl" data-mdb-zoom-effect="true">

        {products.map((product) => <Items key={product.id} data={product} addToCart={addToCart}
        />)
        }


      </div>


      <div  className={cartClass} >

        <h1 className=" text-center text-white w-full p-3 ">Tu Carrito</h1>

        <div  className=" flex flex-col p-1  w-full bg-gray-700 gap-3  " data-mdb-zoom-effect="true">


          {

            cart.map((item, index) => <CartItem key={index} data={item} DELFromCart={DELFromCart} />)

          }

          <button onClick={() => ClearCart} className=" flex justify-center m-auto bg-red-500 text-white w-1/2 rounded-lg p-3 ">Eliminar Todo</button>


        </div>




      </div>



    </>


  )
}

export default Shoes




