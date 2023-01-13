import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../components/HomeComponents/Navbar'
import { useObserver } from '../components/HomeComponents/ArticleComponents/useObserver'


const Best4 = ({handleClick}) => {



  const best5Content = useRef()

  const [marcas, setmarcas] = useState("");


  const [Visible, setVisible] = useState(false)


  const contenido = `content-of ${Visible ? "content-on" : ""}`


  const entry = useObserver(best5Content, { rootMargin: "100px" })
  const animation = useObserver(best5Content, { rootMargin: "0" })


  useEffect(() => {
    if (!entry) return;

    if (entry.isIntersecting) {

      setmarcas(entry.target.dataset.src)

    }

  }, [entry, { rootMargin: "0" }])


  useEffect(() => {
    if (animation?.isIntersecting) {

      setVisible(true)
    }


  }, [animation]);


  return (
<>
<div className="w-full   flex flex-column w-full justify-start align-items-center">   

<Navbar handleClick={handleClick}/>

<div ref={best5Content}className={contenido}>

<div className="best5-section ">

<ul className="">

    {/* 1 */}
    <li className="one">

    <div className="white">

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