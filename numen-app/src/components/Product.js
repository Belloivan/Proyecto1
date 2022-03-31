import { useState } from "react";

const Product = ({ data, addToCart, deleteFromCart, cart }) => {
  const { img, name, price } = data;
  const [showModal, setShowModal] = useState(false);
  

  return (
    <div className="product mt-8 p-8 max-w-sm bg-white  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="box h-56 w-56  p-8 rounded-t-lg"
        src={img}
        alt="product-img"
      ></img>
      <div className="px-5 pb-5">
        <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
      </div>  
      <div className="flex justify-between items-center">
        
        <button
          className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Ver Mas
        </button>

        {showModal ? (
          //MODAL DE PRODUCTO
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-4 border-solid  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font=semibold">{data.name}</h3>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                        x
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <img
                      className="box h-80 w-150  p-8  border-solid border-blueGray-200 rounded-t-lg"
                      src={img}
                      alt="product-img"
                    ></img>
                  </div>
                  <div className="relative p-6 flex-auto">
                    {data.description}
                  </div>
                  <div className="relative p-6 flex-auto">
                     
                    <div  className="flex justify-center ">
                    {cart ? <svg onClick={() =>
                deleteFromCart(cart)} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg> : <div /> } 
           
            <input className="mx-2 border text-center w-8" type="text" value={cart ? cart.quantity : 0}/>

            <svg  onClick={() =>
                addToCart(data)} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
            </div>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => addToCart(data)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
export default Product;
