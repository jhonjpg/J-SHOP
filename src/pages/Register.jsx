


// import React,{useEffect,useState} from 'react'
// import axios  from 'axios'

  


// const Register = () => {


//   const [body, setBody] = useState({ name: "", email:"", password: "" })



//   const [nameErr, setNameErr] = useState({err: "" })
//   const [emailErr, setEmailErr] = useState({err: "" })
//   const [passwordErr, setPasswordErr] = useState({err: "" })



//   const inputChange = ({ target }) => {

//     const { name, value } = target;

//     setBody({
//       ...body,
//       [name]: value
//     })

//   }


  
  
  
//     const postRegister = async (e) => {
  
//       e.preventDefault();
  

//       console.log("tomamos el try");


//        axios.post("http://localhost:4100/api/register", body)
//       .then(({data}) => {
        
//         console.log(data)
//       }).catch(({response}) => {


//         if(response.data.errors.name.msg){

//         setNameErr({
             
//             err: [response.data.errors.name.msg],

//            })

//           }else{

//               setNameErr({err: "hola"})
  


//           }

//           if(response.data.errors.email.msg){

//            setEmailErr({
             
//             err: [response.data.errors.email.msg],

//            })
//           }else{

//             setEmailErr({err: "hola"})

//           }

//           if(response.data.errors.password.msg){


//            setPasswordErr({
             
//             err: [response.data.errors.password.msg],

//            })

//           }else{


//             setPasswordErr({err: "hola"})
//           }


//         console.log(nameErr.err[0].name.msg,   emailErr.err[0].email.msg,  passwordErr.err[0].password.msg)

//       }) 


  
  
//     } 





//   return (
    
    
//     <div id="register" className="flex bg-gradient-to-r from-gray-100 to-gray-300	 h-screen		justify-center items-center">





//       <div id="sign" className=" flex   w-1/3 shadow-lg	 overflow-hidden justify-center z-50  items-center p-5 bg-white">
//         <div className=" w-full	 flex flex-col w-80	 h-5/6	">





//           <div className=" w-full	 flex flex-col w-80	 h-5/6	">

//             <h1 className="text-4xl	p-3 text-center  text-blue-900	bg-white p rounded-t-lg ">Create an Account</h1>

//             <div className="flex flex-col gap-y-3 w-full   h-full bg-white px-4 ">



//               <form  onSubmit={postRegister}  className="flex gap-y-4 flex-col">

//                 <div className="flex w-full p-2">

//                   <input type="text" value={body.name} onChange={inputChange} className="form-control
//            block
//            w-full
//            px-3
//            py-1.5
//            text-base
//            font-normal
//            text-gray-700
//            bg-white bg-clip-padding
//            border border-solid border-gray-300
//            rounded
//           transition
//            ease-in-out
//            m-0
//           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
//                     aria-describedby="emailHelp123" placeholder="First name" name="name" />
//                 </div>





// {nameErr.err?
//                 <span className=" text-red-500 w-full text-center">{nameErr.err[0]}</span>
// :

// <span className=" hidden	">{nameErr.err}</span>


// }

//                 <div className="flex w-full p-2">
//                   <input type="email"  value={body.email} onChange={inputChange}  className="form-control
//            block
//            w-full
//            px-3
//            py-1.5
//            text-base
//            font-normal
//            text-gray-700
//            bg-white bg-clip-padding
//            border border-solid border-gray-300
//            rounded
//            transition
//            ease-in-out
//            m-0
//            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
//                     aria-describedby="emailHelp123" placeholder="Email" name="email" />
//                 </div>





 


// {emailErr.err?
//                 <span className=" text-red-500 w-full text-center">{emailErr.err[0]}</span>
// :

// <span className=" hidden	">{emailErr.err}</span>


// } 


//                 <div className="flex w-full p-2">
//                 <input type="password" value={body.password} onChange={inputChange}  className="form-control
//            block
//            w-full
//            px-3
//            py-1.5
//            text-base
//            font-normal
//            text-gray-700
//            bg-white bg-clip-padding
//            border border-solid border-gray-300
//            rounded
//            transition
//            ease-in-out
//            m-0
//            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
//                     aria-describedby="emailHelp123" autoComplete="true" placeholder="Password" name="password"/>
//                 </div>

// {passwordErr.err?
//                 <span className=" text-red-500 w-full text-center">{passwordErr.err[0]}</span>
// :


// <span className=" hidden	">{passwordErr.err}</span>


// } 
 




               

//          {/* 

//                   <div className="flex w-full p-2">
//                   <input type="text" name="repeat-password" className="form-control
//            block
//            w-full
//            px-3
//            py-1.5
//            text-base
//            font-normal
//            text-gray-700
//            bg-white bg-clip-padding
//            border border-solid border-gray-300
//            rounded
//            transition
//            ease-in-out
//            m-0
//            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
//                     aria-describedby="emailHelp123" placeholder="Repeat Password" />
//                 </div>
//           */}
             
  

//                 <button type="submit" className="
//        m-auto
//        w-1/2
//        px-6
//        py-2.5
//        text-black
//        font-medium
//        text-xs
//        leading-tight
//        uppercase
//        rounded
//        shadow-md
//        hover:bg-blue-900	hover:text-white hover:shadow-lg
//        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
//        active:bg-blue-800 active:shadow-lg
//        transition
//        duration-150
//        ease-in-out">Sign up</button> 

//               </form>




//             </div>


//           </div>
//         </div>


//       </div>


//     </div>

//   )
// }

// export default Register





















































// aqui otro





import React,{useEffect,useState} from 'react'
import axios  from 'axios'






  


const Register = () => {


  const [body, setBody] = useState({ name: "", email:"", password: "" })

  const [errors, setErrors] = useState({Err: [] })

  const [correcto, setcorrecto] = useState(false)

  const inputChange = ({ target }) => {

    const { name, value } = target;

    setBody({
      ...body,
      [name]: value
    })

  }


  
  
    const postRegister = async (e) => {
  
      e.preventDefault();
  

      console.log("tomamos el try");





        await axios.post("http://localhost:4100/api/register", body)
        .then(({data}) => {
        

console.log(" llegando al then");

console.log(data);


window.location.href = '/login'
      }).catch(({response}) => {

        console.log("llegando al catch")

          setErrors({
             
            Err: [response.data.errors.name, response.data.errors.email, response.data.errors.password],

           })

        console.log(errors.Err[0])

      }) 






  
    } 





  return (
    
    
    <div id="register" className="flex bg-gradient-to-r from-gray-100 to-gray-300	 h-screen		justify-center items-center">





      <div id="sign" className=" flex   w-1/3 shadow-lg	 overflow-hidden justify-center z-50  items-center p-5 bg-white">
        <div className=" w-full	 flex flex-col w-80	 h-5/6	">





          <div className=" w-full	 flex flex-col w-80	 h-5/6	">

            <h1 className="text-4xl	p-3 text-center  text-blue-900	bg-white p rounded-t-lg ">Create an Account</h1>

            <div className="flex flex-col gap-y-3 w-full   h-full bg-white px-4 ">



              <form  onSubmit={postRegister}  className="flex gap-y-4 flex-col">

                <div className="flex w-full p-2">

                  <input type="text" value={body.name} onChange={inputChange} className="form-control
           block
           w-full
           px-3
           py-1.5
           text-base
           font-normal
           text-gray-700
           bg-white bg-clip-padding
           border border-solid border-gray-300
           rounded
          transition
           ease-in-out
           m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                    aria-describedby="emailHelp123" placeholder="First name" name="name" />
                </div>





{errors.Err[0] ?
                <span className=" text-red-500 w-full text-center">el nombre es obligaoo manito</span>
:

<span className=" hidden	"></span>


}

                <div className="flex w-full p-2">
                  <input type="email"  value={body.email} onChange={inputChange}  className="form-control
           block
           w-full
           px-3
           py-1.5
           text-base
           font-normal
           text-gray-700
           bg-white bg-clip-padding
           border border-solid border-gray-300
           rounded
           transition
           ease-in-out
           m-0
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                    aria-describedby="emailHelp123" placeholder="Email" name="email" />
                </div>





 


{errors.Err[1] ?
                <span className=" text-red-500 w-full text-center">el email es malditasea obligado</span>
:

<span className=" hidden	"></span>


} 


                <div className="flex w-full p-2">
                <input type="password" value={body.password} onChange={inputChange}  className="form-control
           block
           w-full
           px-3
           py-1.5
           text-base
           font-normal
           text-gray-700
           bg-white bg-clip-padding
           border border-solid border-gray-300
           rounded
           transition
           ease-in-out
           m-0
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                    aria-describedby="emailHelp123" autoComplete="true" placeholder="Password" name="password"/>
                </div>


{errors.Err[2] ?
                <span className=" text-red-500 w-full text-center">el password pongalo bien</span>
:

<span className=" hidden	"></span>


}
 




               

         {/* 

                  <div className="flex w-full p-2">
                  <input type="text" name="repeat-password" className="form-control
           block
           w-full
           px-3
           py-1.5
           text-base
           font-normal
           text-gray-700
           bg-white bg-clip-padding
           border border-solid border-gray-300
           rounded
           transition
           ease-in-out
           m-0
           focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                    aria-describedby="emailHelp123" placeholder="Repeat Password" />
                </div>
          */}
             
  

                <button type="submit" className="
       m-auto
       w-1/2
       px-6
       py-2.5
       text-black
       font-medium
       text-xs
       leading-tight
       uppercase
       rounded
       shadow-md
       hover:bg-blue-900	hover:text-white hover:shadow-lg
       focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
       active:bg-blue-800 active:shadow-lg
       transition
       duration-150
       ease-in-out">Sign up</button> 

              </form>




            </div>


          </div>
        </div>


      </div>


    </div>

  )
}

export default Register

