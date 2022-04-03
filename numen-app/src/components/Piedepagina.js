import React from "react";
import { Link } from "react-router-dom";

export default function PieDePagina() {
    return ( 
        <div className="container max-w-full px-16 py-16 xl:px-20 lg:px-12 sm:px-6;">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
                <div className="flex flex-col flex-shrink-0">
                    <div>
                        <svg width="57" height="50" viewBox="0 0 57 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.36 12.328H12.896V16H0.464V0.159999H5.36V12.328ZM18.8135 16.24C17.5815 16.24 16.6055 15.92 15.8855 15.28C15.1655 14.624 14.8055 13.552 14.8055 12.064V4H19.6535V10.936C19.6535 11.544 19.7655 11.976 19.9895 12.232C20.2135 12.488 20.5415 12.616 20.9735 12.616C21.4375 12.616 21.8055 12.44 22.0775 12.088C22.3655 11.736 22.5095 11.168 22.5095 10.384V4H27.3575V16H23.0135L22.8935 13.6C22.1735 15.36 20.8135 16.24 18.8135 16.24ZM34.3209 4L36.1209 7.672L37.9689 4H43.3689L39.2649 9.976L43.4649 16H37.9449L36.0249 12.136L34.1289 16H28.6809L32.9289 9.904L28.8249 4H34.3209ZM50.2822 16.24C48.2022 16.24 46.5702 15.696 45.3862 14.608C44.2022 13.52 43.6102 11.984 43.6102 10C43.6102 8.672 43.8822 7.544 44.4262 6.616C44.9702 5.688 45.7302 4.984 46.7062 4.504C47.6822 4.008 48.8102 3.76 50.0902 3.76C51.4022 3.76 52.5142 4.008 53.4262 4.504C54.3542 4.984 55.0582 5.656 55.5382 6.52C56.0342 7.384 56.2822 8.392 56.2822 9.544C56.2822 10.136 56.2422 10.64 56.1622 11.056H48.2662C48.3782 11.776 48.6022 12.272 48.9382 12.544C49.2902 12.8 49.7542 12.928 50.3302 12.928C50.8262 12.928 51.2182 12.824 51.5062 12.616C51.8102 12.408 52.0262 12.12 52.1542 11.752L56.0422 12.904C55.8342 13.64 55.4422 14.256 54.8662 14.752C54.2902 15.248 53.6022 15.624 52.8022 15.88C52.0022 16.12 51.1622 16.24 50.2822 16.24ZM50.0902 7.048C49.5782 7.048 49.1702 7.192 48.8662 7.48C48.5782 7.768 48.3862 8.256 48.2902 8.944H51.6982C51.6342 8.32 51.4742 7.848 51.2182 7.528C50.9782 7.208 50.6022 7.048 50.0902 7.048Z"
                                fill="#1F2937"
                            />
                        </svg>
                    </div>
                    <p className="mt-4 text-sm leading-none text-gray-800">Copyright © 2021 Luxe</p>
                    <p className="mt-4 text-sm leading-none text-gray-800">All rights reserved</p>
                   
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

