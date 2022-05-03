import React from "react";
import fondoFooter from "../assets/img/fondo-footer.jpg"
import logoFooter from "../assets/img/logo-footer.png";

export default function Footer() {
    return ( 
        <div className="container bg-repeat max-w-full px-16 py-16 xl:px-20 lg:px-12 sm:px-6;" style={{backgroundImage: `url(${fondoFooter})`}}>
            <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-0">
                <div className="flex flex-col justify-center w-40 ">
                    <div>
                     <img src={logoFooter} alt="Logo" ></img>
                    </div>
                 
                 
                </div>
                <div className="ml-0 sm:-ml-5">
                    <h2 className="text-2xl font-semibold leading-4 text-slate-300 ">Empresa</h2>
                    <p className="mt-6 text-base leading-4 cursor-pointer text-slate-300 hover:text-green-500">Blog</p>
                    <p className="mt-6 text-base leading-4 cursor-pointer text-slate-300 hover:text-green-500">Sobre Nosotros</p>
                    <p className="mt-6 text-base leading-4 cursor-pointer text-slate-3000 text-slate-300 marker:hover:text-green-500">Contacto</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold leading-4 text-slate-300">Soporte</h2>
                    <p className="mt-6 text-base leading-4 cursor-pointer text-slate-300 hover:text-green-500">Politica Legal</p>
                    <p className="mt-6 text-base leading-4 cursor-pointer text-slate-300 hover:text-green-500">Politica de estado</p>
                    <p className="mt-6 text-base leading-4 cursor-pointer text-slate-300 hover:text-green-500">Politica de privacidad</p>
                    <p className="mt-6 text-base leading-4 cursor-pointer text-slate-300 hover:text-green-500">Terminos del servicio</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold leading-4 text-slate-300">Acerca de</h2>
                    <p className="mt-6 text-base leading-4 cursor-pointer text-slate-300 hover:text-green-500">Directivos de la empresa</p>
                    <p className="mt-6 text-base leading-4 cursor-pointer text-slate-300 hover:text-green-500">Oportunidades laborales</p>
                    <p className="mt-6 text-base leading-4 cursor-pointer text-slate-300 hover:text-green-500">Etica y cumplimiento de politicas</p>
                </div>               
                </div>
            </div>
    );
};  

