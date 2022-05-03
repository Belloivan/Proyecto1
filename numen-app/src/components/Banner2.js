import React from 'react'

const Banner2 = () => {
  return (
    < div className = "" > 
    < div className = "flex flex-col items-stretch px-0 py-0 lg:flex-row lg:px-0 lg:py-0 2xl:mx-auto 2xl:container"  > 
    < div className = "flex items-center p-8 bg-gray-100 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-0" > 
            < div >
                < h1 className = " mb-11 dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text -4xl font-semibold text-gray-800 mayúsculas " > Las Mejores Experiencias</ h1 > 
                < p className = "md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 texto-base principal-normal texto-gris-600">
                    <ul>
                        <li>Escucha tu musica favorita.</li>
                        <li>Los mejores juegos moviles.</li>
                        <li>El mejor lugar para tus fotos y archivos.</li>
                        <li>Millones de programas.</li>
                    </ul>
                  </ p > 
                < button className = "w-full px-8 py-4 mt-8 bg-red-500 dark:bg-red-500 dark:hover:bg-gray-400 dark:hover:text-red-500 dark:text-gray-800 sm:w-auto texto-base justificar -entre foco:anillo-2 foco:anillo-desplazamiento-2 foco:anillo-gris-700 foco:contorno-ninguno hover:bg-gris-700 fuente-medio inicial-ninguno texto-blanco bg- gris-800 elementos flexibles-centro" > 
                    Mas Informacion
                    < div className = " ml-2 mt-0.5 " > 
                    </ div >
                </button>
            </ div >
        </ div >
        < div className = "z-30 relativo lg:w-1/2" > 
            < div className = "items-center hidden w-full bg-white-100 dark:bg-gray-800 lg:w-10/12 lg:h-full lg:flex allow-end" > 
                < div className = "w-full lg:w-auto lg:-mr-32" > 
                    < img src = " https://www.metroecuador.com.ec/resizer/qpLUXSbrt2z9VfIfl4qDn1-AJr4=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/UK7CH5HKYBFVRI42DQXTFUOLBE.png " alt = "" className = "z-30 w-full px-6 py-0 lg:pl-20" />    
                </ div >
            </ div >
            < div className = "top-0 hidden bg-white-100 md:block lg:hidden" > </ div > 
            < div className = " lg:hidden" > 
                < img src = " https://www.metroecuador.com.ec/resizer/qpLUXSbrt2z9VfIfl4qDn1-AJr4=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/UK7CH5HKYBFVRI42DQXTFUOLBE.png " alt = "" className = "z-30 w-full py-0 lg:pl-20 md:px-6 md:py-0" />    
            </ div >
        </ div >
        
    </ div >
</ div >
  )
}

export default Banner2