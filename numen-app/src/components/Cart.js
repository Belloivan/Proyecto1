import { TYPES } from "../actions/cartActions";
import { cartReducer, cartInitialState } from "../reducer/cartReducer";
import CartItem from "./CartItem";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
const Cart = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const [isLoading, setLoading] = useState(true);
  const { cart } = state;

  const updateState = async () => {
    const productsURL = "https://apicarrito.maxiconstancio.repl.co/products";
    const cartURL = "https://apicarrito.maxiconstancio.repl.co/cart";
    const resProducts = await axios.get(productsURL);
    const resCart = await axios.get(cartURL);
    const newProduct = await resProducts.data;
    const newCartItem = await resCart.data;
    setLoading(false)
    dispatch({ type: TYPES.READ_STATE, payload: [newProduct, newCartItem] });
  };
  useEffect(() => {
    updateState();
  }, []);

  const deleteFromCart = (data, all = false) => {
    // console.log(id, all)
    // Explicar esto antes que la programación del reducer
    let itemInCart = state.cart.find(
      (item) => item.codeProduct === data.codeProduct
    );
    let endpoint = `https://apicarrito.maxiconstancio.repl.co/cart/${data.codeProduct}`;

    if (all || data.quantity === 1) {
      console.log("salta aca");
      axios.delete(endpoint).then(console.log("ok"));
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: data.codeProduct });
    } else {
      let options = {
        method: "PUT",
        url: endpoint,
        data: { ...data, quantity: itemInCart.quantity - 1 },
      };
      axios(options);
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: data.codeProduct });
    }
  };
  
  const addToCart = (data) => {
   
    let itemInCart = state.cart.find(item => item.codeProduct === data.codeProduct)
    
    if (itemInCart) {
        let endpoint=`https://apicarrito.maxiconstancio.repl.co/cart/${data.codeProduct}`
        
        let options = {
            method: "PUT",
            url: endpoint,
            data: { quantity: itemInCart.quantity + 1}
        }
        axios(options)
    } else {
        axios({
            method: 'POST',
            url: 'https://apicarrito.maxiconstancio.repl.co/cart',
            data: ({...data, quantity: 1})
        }).then(console.log(data))
    }
    

    
    dispatch({type: TYPES.ADD_TO_CART, payload: data});
    
  //  dispatch({type: TYPES.ADD_TO_CART_NAV, payload: id});

};
    
  const clearCart = () => {
    axios.delete("https://apicarrito.maxiconstancio.repl.co/cart").then(console.log("ok"));
    dispatch({ type: TYPES.CLEAR_CART });
  };
  let count = 0;
  let sumTotal = 0

  
  state.cart.map((item) => {
    sumTotal = (item.price * item.quantity) + sumTotal
    count = count + item.quantity;
    return (document.getElementById("cartIng").innerHTML = count);
  });

  return isLoading ? (
    <div className="text-center">
          <svg role="status" className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
      </div>
  ) : (
     
    <div className="mx-auto container rounded-md py-2  px-2 bg-gradient-to-r from-slate-800 via-gray-600 to-slate-400 ">
      
     <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-full bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Carrito de Compras</h1>
          <h2 className="font-semibold text-2xl">{ state.cart.length} Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalle</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Cantidad</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Precio</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>  

        
        {cart.map((item, index) => (
           
            
          <CartItem key={index} data={item} deleteFromCart={deleteFromCart}  addToCart = {addToCart}/>
        ))}
        <span className="flex-end text-red-500 text-xs font-bold cursor-pointer no-underline  hover:underline" onClick={() =>
                clearCart()}>Vaciar Carrito</span>
      </div>
      
      </div>
      <div className="w-full flex justify-end  items-center text-2xl h-20 bg-gray-300 shadow px-10 py-5" >
        
          <span className="mx-8 text-xl font-bold">Total: ${sumTotal} </span>
          
          
          <button
            className="text-white bg-[#6479A7] hover:bg-[#002A52] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          > Finalizar Compra</button>
        
          
      </div>
      
    </div>  
    </div>
    
  );
};
export default Cart;
