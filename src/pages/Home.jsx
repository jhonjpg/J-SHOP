import React, { useState, useRef, useEffect } from 'react'
import { HmCarouse } from "../components/HomeComponents/HmCarouse"
import Footers from '../components/HomeComponents/Footers'
import Navbar from '../components/HomeComponents/Navbar'
import Tredingc from '../components/HomeComponents/Tredingc'
import { useObserver } from '../components/HomeComponents/ArticleComponents/useObserver'


const Home = ({handleClick}) => {


  const homeContent = useRef()

  const oferta = useRef()


  const [marcas, setmarcas] = useState("");


  const [Visible, setVisible] = useState(false)


  const contenido = `content-of ${Visible ? "content-on" : ""}`


  const entry = useObserver(homeContent, { rootMargin: "100px" })
  const animation = useObserver(homeContent, { rootMargin: "0" })


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


    <div className="w-full   flex flex-column w-full justify-start items-center ">   
    <Navbar handleClick={handleClick}/>

        <section  ref={homeContent}  className={contenido}>



       <HmCarouse/>

      
       <Tredingc/>

       <div className="w-full flex flex-column justify-center items-center relative bottom-40">

      <strong className="fs-1 mb-3 ">Todo el Ano</strong>

      <hr className="w-25 bg-gray mb-3" />

      <p className="fs-3 mb-2">Los que nunca Falta</p>


      <div className=" w-full  flex flex-row justify-center items-center">

<ul id="contenido-ofertas" className="w-75  flex flex-row justify-around items-center p-2 ">

    {/* 1 */}

    <li id="contenido-ofertas" className="w-25 bg-primary flex flex-column justify-center items-center">

    <div className="w-full">

<img src="https://images.pexels.com/photos/3611797/pexels-photo-3611797.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="w-full  "  />
        
    </div>


    </li>


{/* 2 */}

<li className="w-25  flex flex-column justify-center items-center">

<div className="w-full h-full">

<img src="https://img.freepik.com/fotos-premium/par-zapatillas-deportivas-azules-sobre-fondo-blanco-aislado_77190-7490.jpg?w=2000" alt=""  />
    
</div>


<div className="  fs-5 ">
<strong className="   fs-1"><span>O</span>ferta</strong>
</div>

</li>

    {/* 3 */}

    <li className="w-25 bg-primary flex flex-column justify-center items-center">

    <div className="w-full">
    <img src="https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className="w-full  "  />

        
    </div>


    </li>
    </ul>


    </div>



      </div>


        <Footers/> 
       </section>

       </div>
    )
}

export default Home