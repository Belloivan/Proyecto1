import React from 'react'
import imagenios from "../assets/img/imagen-ios.png"

const Heroes = () => {
    return (
      < div className = " oscuro:bg-gray-900" > 
      < div className = "flex flex-col items-stretch justify-center px-6 py-8 lg:flex-row lg:px-0 lg:py-20 2xl:mx-auto 2xl:container"  style={{backgroundImage: `url(${imagenios})`}} > 
          < div className = "flex items-center justify-center p-8 mt-5 mr-20 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14" > 
              < div >
                  < h1 className = " dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12  w-full xl:text-6xl sm:text-5xl text -4xl font-semibold text-gray-800 mayúsculas " > iOS15 </ h1 > 
                  < p className = "my-3 mt-5 oscuro:texto-gris-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 texto-base principal-normal texto-gris-600"  > Te conecta con el mundo.
                  Y con tu mundo</ p > 
                  < button className = "w-full px-8 py-4 mt-8 dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto texto-base justificar -entre foco:anillo-2 foco:anillo-desplazamiento-2 foco:anillo-gris-700 foco:contorno-ninguno hover:bg-gris-700 fuente-medio inicial-ninguno texto-blanco bg- gris-800 elementos flexibles-centro" > 
                      Mas Informacion
                      < div className = " ml-2 mt-0.5 " > 
                          < svg className = " fill-stroke" width = " 16 " height = " 16 " viewBox = " 0 0 16 16 " fill = " neone " xmlns = " http://www.w3.org/2000/svg " >      
                              < ruta d = " M3.33325 8H12.6666 " trazo = " color actual " trazoLinecap = " redondo " trazoLinejoin = " redondo " />     
                              < ruta d = " M10 10.6667L12.6667 8 " trazo = " color actual " trazoLinecap = " redondo " trazoLinejoin = " redondo " />     
                              < ruta d = " M10 5.33301L12.6667 7.99967 " trazo = " color actual " trazoLinecap = " redondo " trazoLinejoin = " redondo " />     
                          </ svg >
                      </ div >
                  </button>
              </ div >
          </ div >
      </ div >
  </ div >
  ) ;
  }
    
  export default Heroes;
  