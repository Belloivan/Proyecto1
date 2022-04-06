import { useState } from "react";
import ProductModal from "./ProductModal";

const Product = ({ data, addToCart, deleteFromCart, cart }) => {
  const { img, name, price } = data;
  const [showModal, setShowModal] = useState(false);
  

  return (
    <div className="product  grid  justify-center  hover:border hover:border-slate-700 hover:shadow-lg mt-5  p-5  w-56 bg-slate-200  rounded-lg shadow-inner ">
      <img
        className="box cursor-pointer	 rounded-md h-24 w-24 "
        src={img}
        alt="product-img"
        
        onClick={() => setShowModal(true)}
      ></img>
      <div className="px-5 pb-0">
        <h5 className="max-w-1xl  text-1xl font-semibold tracking-tight text-gray-900">
          {name}
        </h5>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-1xl font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
      </div>  
      <div className="flex justify-center">
        
       
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => addToCart(data)}
        >
          Agregar
        </button>
      </div>

        {showModal ? (
          //MODAL DE PRODUCTO
          <ProductModal
              data={data}
              addToCart={addToCart} 
              deleteFromCart = {deleteFromCart}
              cart = {cart||0}
              setShowModal={setShowModal}
          />
        ) : null}
        
    </div>
  );
};
export default Product;
