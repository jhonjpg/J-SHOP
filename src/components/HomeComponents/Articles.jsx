import React,{useRef, useState, useEffect} from 'react'
import Shoes from '../HomeComponents/ArticleComponents/Shoes'
import { useObserver } from '../HomeComponents/ArticleComponents/useObserver'


const Articles = ({hide}) => {

  


  const logos = useRef()

  const [marcas, setmarcas] = useState("");


  const [Visible, setVisible] = useState(false)


  const logoClass = `nikadid ${Visible ? "nikiAdidas" : ""}`
  const logoAClass = `adidasnik ${Visible ? "Adidasniki" : ""}`


  const entry = useObserver(logos, { rootMargin: "100px" })
  const animation = useObserver(logos, { rootMargin: "0" })


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





  // const api = fetch('https://jsonplaceholder.typicode.com/photos')
  // .then(response => response.json())
  // .then(data => console.log("ok"))

  return (

    <>

    <strong className="fs-1 mt-40"><span id="bigspan">T</span>ienda</strong>

    
  
    <div  className="flex justify-between items-center   rounded-lg w-2/3 p-4">
      
      <div ref={logos}  className={logoClass}>

        <img src="https://thumbs.gfycat.com/ShorttermAlarmingHarvestmouse-small.gif"
              alt="" className="object-cover w-full h-full rounded-full"/>

      </div>


      
      <div ref={logos}  className={logoAClass} >

      <img src="https://i.gifer.com/origin/94/949afe75f02ac769c1d8f247aa929367.gif" alt="" className="object-cover	w-full h-full rounded-full" />
      
      </div>

    </div> 



<div className="flex  flex-wrap	 flex-col justify-center  items-center w-11/12	gap-4 p-4 bg-gray-100">
  
    <Shoes hide={hide}/>
 


</div> 



</>
    )
}

export default Articles


















