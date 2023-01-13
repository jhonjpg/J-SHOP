


import React from 'react'

const Register = () => {
  return (
    
    
    <div id="register" className="flex bg-gradient-to-r from-gray-100 to-gray-300	 h-screen		justify-center items-center">




    <div className="flex w-2/5 shadow-lg		">
      <div id="iphone" className="">




        
    <div id="nike" className="">
        <img src="https://i.makeagif.com/media/1-28-2014/zGO5Jy.gif" alt="" srcset="" />
        </div>

      </div>


      </div>
      
      


      <div id="sign" className=" flex   w-1/3 shadow-lg	 overflow-hidden justify-center z-50  items-center p-5 bg-white">
        <div className=" w-full	 flex flex-col w-80	 h-5/6	">





          <div className=" w-full	 flex flex-col w-80	 h-5/6	">

            <h1 className="text-4xl	p-3 text-center  text-blue-900	bg-white p rounded-t-lg ">Create an Account</h1>

            <div className="flex flex-col gap-y-3 w-full   h-full bg-white px-4 ">

              <form action="" method="POST" className="flex gap-y-4 flex-col">

                <div className="flex w-full p-2">
                  <input type="text" name="name" className="form-control
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
                    aria-describedby="emailHelp123" placeholder="First name" />
                </div>




                <div className="flex w-full p-2">
                  <input type="text"  name="email" className="form-control
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
                    aria-describedby="emailHelp123" placeholder="Email" />
                </div>

                <div className="flex w-full p-2">
                  <input type="text" name="password" className="form-control
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


                    aria-describedby="emailHelp123" placeholder="Password" />
                </div>

         
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

