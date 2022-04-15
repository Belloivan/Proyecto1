import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return ( 
        <div className="container  max-w-full px-16 py-16 xl:px-20 lg:px-12 sm:px-6;">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
                <div className="flex flex-col flex-shrink-0">
                    <div>
                     <img src="https://www.soydemac.com/wp-content/uploads/2014/10/Logo-de-Apple-entre-2001-y-2007.jpg.webp" alt="logo" ></img>
                    
                    </div>
                 
                 
                </div>
                <div className="ml-8 sm:ml-0">
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

