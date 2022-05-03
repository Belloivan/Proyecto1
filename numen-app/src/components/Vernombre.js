import React from 'react'
import imagenios from "../assets/img/imagen-ios.png"

const Heroes = () => {
    return (
      < div className = "" > 
      < div className = "flex flex-col items-stretch justify-center px-5 py-0 bg-center bg-no-repeat bg-cover " style={{backgroundImage: `url(${imagenios})`}} >
          < div className = "flex items-center justify-center lg:p-20" > 
              < div >
                  < h1 className = " dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12  w-full xl:text-6xl sm:text-5xl text -4xl font-semibold text-gray-800 mayúsculas " > iOS15 </ h1 > 
                  < p className = "my-3 mt-5 oscuro:texto-gris-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 texto-base principal-normal texto-gris-600"  >
                <ul> 
                    <li>Te conecta con el mundo.</li>
                    <li>Y con tu mundo</li>
                </ul>
                  </ p > 
                  < button className = "w-full px-8 py-4 mt-8 bg-red-500 " > 
                      Mas Informacion
                  </button>
              </ div >
          </ div >
      </ div >
  </ div >
  ) ;
  }
    
  export default Heroes;
  