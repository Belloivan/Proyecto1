import React from 'react'

const Heroes = () => {
  return (
    < div className = "" > 
    < div className = "flex flex-col items-stretch px-0 py-0 lg:flex-row lg:px-0 lg:py-0  2xl:mx-auto 2xl:container" > 
        < div className = "z-30 lg:w-1/2" > 
            < div className = "items-center hidden w-full bg-gray-100 dark:bg-gray-800 lg:w-10/12 lg:h-full lg:flex allow-end" > 
                < div className = "w-full lg:w-auto lg:-mr-32" > 
                    < img src = " https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFKaEF5NFU0Q1MuX0FDX1NMMTUwMF8uanBn.jpg " alt = "" className = "z-30 w-full px-6 py-0 lg :pl-20" />    
                </ div >
            </ div >
            < div className = "top-0 hidden w-full bg-gray-100 absoluto dark:bg-gray-800 md:h-96 md:block lg:hidden" > </ div > 
            < div className = "w-full h-full lg:hidden" > 
                < img src = " https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFKaEF5NFU0Q1MuX0FDX1NMMTUwMF8uanBn.jpg " alt = " imagen con sillas decentes " className = "z-30 w-full py-5 pariente lg :pl-20 md:px-6 md:py-14" />    
            </ div >
        </ div >
        < div className = "flex items-center p-8 bg-gray-100 lg:w-1/2 lg:ml-12 lg:p-14" > 
            < div >
                < h1 className = "w-full font-semibold text-gray-800 md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 xl:text-6xl sm:text-5xl text -4xl" > AirTag </ h1 > 
                < p className = "my-3 oscuro:texto-gris-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 texto-base principal-normal texto-gris-600 mt -5"  > Ponle uno a tus llaves y otro a tu mochila. 
                Si las pierdes, simplemente usa la app Encontar.</ p > 
                < button className = "w-full px-8 py-4 mt-8 dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto texto-base" > 
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
