import React, { useState, useEffect } from 'react'
import Navbar from '../components/HomeComponents/Navbar'


const Best4 = ({handleClick}) => {


  const [comprar, setcomprar] = useState(false)

  const [white, setwhite] = useState(false)


  

  const comprarClass = `one ${comprar ? "buy" : ""}`
  const whiteClass = `white ${white ? "white-buy" : ""}`


  const buying = () => {



setcomprar(!comprar)

setwhite(!white)


if(setcomprar){


}



    console.log("funciona")


  }



  return (
<>
<div className="w-full   flex flex-column w-full justify-start align-items-center">   

<Navbar handleClick={handleClick}/>

<div className="content-on">

<div className="best5-section ">

<ul className="">

    {/* 1 */}
    <li onClick={buying} className={comprarClass}>

    <div className={whiteClass}>

<img src="./img/white.png" alt="" />
        
    </div>


<div className="texto ">
    <h3>Adidas ft</h3>
    <p>Nmd XR1</p>
    </div>

    </li>


{/* 2 */}
    <li className="two">
    <div className="blue">

    <img src="./img/blue.png" alt="" />

    </div>

    <div className="texto text-light ">
    <h3>Adidas ft</h3>
    <p>Nmd XR1</p>
    </div>

    </li>

    {/* 3 */}

    <li className="three">
        
    <div className="marmol">

    <img src="./img/marmol.png" alt="" />

    </div>

<div className="texto">
    <h3>Adidas ft</h3>
    <p>Nmd XR1</p>
    </div>

    </li>

    {/* 4 */}


    <li className="four">
        
    <div className="red">

    <img src="./img/red.png" alt="" />

    </div>


<div className="texto">
    <h3>Adidas ft</h3>
    <p>Nmd XR1</p>
    </div>


    </li>

        {/* 5 */}

        <li className="five">
        
        <div className="black">
    
        <img src="./img/black.png" alt="" />
    
        </div>


<div className="texto text-light ">
    <h3>Adidas ft</h3>
    <p>Nmd XR1</p>
    </div>

    
        </li>
    


    </ul>


    </div>



    
    </div>
</div>
    </>
  )
}

export default Best4