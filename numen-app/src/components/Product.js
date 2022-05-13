import { useState } from "react";
import ProductModal from "./ProductModal";

const Product = ({ data, addToCart, deleteFromCart, cart }) => {
  const { img, name, price } = data;
  const [showModal, setShowModal] = useState(false);
  

  return (
    <div className="product max-w-72 mt-8 p-2 px-10 max-w-sm bg-gray-400 rounded-lg shadow-md">
      <img
        className="box h-36 w-36  p-2 rounded-t-lg"
        src={img}
        alt="product-img"
        onClick={() => setShowModal(true)}
      ></img>
      <div className="px-1 pb-1">
        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </div>
      <div className="flex justify-center items-center">
        <span className="text-1xl pb-2 font-bold text-gray-900 dark:text-white">
          $ {price}
        </span>
      </div>  
      <div className="flex justify-center items-center">
      <button
      
          className="text-white bg-[#6479A7] hover:bg-[#002A52] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => addToCart(data)}
        >
          Agregar
        </button>  
       

        {showModal ? (
          //MODAL DE PRODUCTO
          <ProductModal 
        data= {data}
        addToCart={addToCart}   
        deleteFromCart={deleteFromCart}
        cart = {cart}     
        setShowModal={setShowModal} 
          />
        ) : null}
        
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
