import React from "react";


export default function Footer() {
    return ( 
        <div className="container bg-green-400  max-w-full px-16 py-16 xl:px-20 lg:px-12 sm:px-6;">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-0">
                <div className="flex flex-col justify-center ">
                    <div>
                     <img src="https://img.icons8.com/plasticine/100/000000/mac-os.png" alt="Logo" ></img>
                    </div>
                 
                 
                </div>
                <div className="ml-0 sm:-ml-5">
                    <h2 className="text-base font-semibold leading-4 text-gray-800">Company</h2>
                    <p className="mt-6 text-base leading-4 text-gray-800 cursor-pointer hover:text-gray-500">Blog</p>
                    <p className="mt-6 text-base leading-4 text-gray-800 cursor-pointer hover:text-gray-500">About Us</p>
                    <p className="mt-6 text-base leading-4 text-gray-800 cursor-pointer hover:text-gray-500">Contact us</p>
                </div>
                <div>
                    <h2 className="text-base font-semibold leading-4 text-gray-800">Support</h2>
                    <p className="mt-6 text-base leading-4 text-gray-800 cursor-pointer hover:text-gray-500">Legal policy</p>
                    <p className="mt-6 text-base leading-4 text-gray-800 cursor-pointer hover:text-gray-500">Status policy</p>
                    <p className="mt-6 text-base leading-4 text-gray-800 cursor-pointer hover:text-gray-500">Privacy policy</p>
                    <p className="mt-6 text-base leading-4 text-gray-800 cursor-pointer hover:text-gray-500">Terms of service</p>
                </div>
                <div>
                    <h2 className="text-base font-semibold leading-4 text-gray-800">Acerca de</h2>
                    <p className="mt-6 text-base leading-4 text-gray-800 cursor-pointer hover:text-gray-500">Directivos de la empresa</p>
                    <p className="mt-6 text-base leading-4 text-gray-800 cursor-pointer hover:text-gray-500">Oportunidades laborales</p>
                    <p className="mt-6 text-base leading-4 text-gray-800 cursor-pointer hover:text-gray-500">Etica y cumplimiento de politicas</p>
                </div>               
                </div>
            </div>
    );
};  

