import { useState } from "react";
import ProductModal from "./ProductModal";

const CartItem = ({data, deleteFromCart, addToCart}) => {
    let {img, name, price, quantity} = data;
    
    const [showModal, setShowModal] = useState(false);
    return (
    <div className="cart-item flex items-center hover:bg-gray-100 -mx-10 px-2 py-5">
         <div className="flex w-2/5"> 
            <div className="flex flex-wrap">
            <button className="font-semibold hover:text-red-500 text-red-500 text-xs px-2" onClick={() => deleteFromCart(data, true)}>X</button>
            <div className="w-20">
            <img className="h-26" src={img} alt="" onClick={() => setShowModal(true)}/>
            </div>
            
            <div className="flex flex-col justify-between px-5 ml-2 flex-grow">    
            <span className="font-bold text-sm">{name}</span>
            <span className="text-red-500 text-xs">Apple</span>
            </div>
            </div>    
            </div>  
            <div  className="flex justify-center w-1/5">
            <svg onClick={() =>
                deleteFromCart(data)} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
           
            <input className="mx-2 border text-center w-8" type="text" value={quantity}/>

            <svg  onClick={() =>
                addToCart(data)} className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
          <span className="text-center w-1/5 font-semibold text-sm"> ${price * quantity}</span>
   
          {showModal ? (
          //MODAL DE PRODUCTO
          <ProductModal 
        data= {data}
        addToCart={addToCart}   
        deleteFromCart={deleteFromCart}
        cart = {data}     
        setShowModal={setShowModal} 
          />
        ) : null}        
    </div>
    )
    }
    export default CartItem