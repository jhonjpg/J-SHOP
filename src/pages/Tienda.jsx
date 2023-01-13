import React, { useState, useRef, useEffect } from 'react'
import Articles from '../components/HomeComponents/Articles';
import Footers from '../components/HomeComponents/Footers';
import Navbar from '../components/HomeComponents/Navbar';
import { useObserver } from '../components/HomeComponents/ArticleComponents/useObserver'


const Tienda = () => {

    const tiendaContent = useRef()

    const [marcas, setmarcas] = useState("");
  
  
    const [Visible, setVisible] = useState(false)
  
  
    const contenido = `content-of ${Visible ? "content-on" : ""}`
  
  
    const entry = useObserver(tiendaContent, { rootMargin: "100px" })
    const animation = useObserver(tiendaContent, { rootMargin: "0" })
  
  
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
  
  
  

    const [hide, setHide] = useState(false)

  

    
    function handleClick() {

     
      setHide(!hide);

      console.log(`ahora mismo es   ${hide}`)

     }

  return (

    <>

    <div className="w-full   flex flex-column w-full justify-start align-items-center bg-neutral-200	">   
    <Navbar handleClick={handleClick}/>

<div ref={tiendaContent} className={contenido}>

<Articles hide={hide}/> 

</div>

</div>

<Footers/>

    </>






    )
}

export default Tienda