import { TYPES } from "../actions/cartActions";
import { cartReducer, cartInitialState } from "../reducer/cartReducer";
import CartItem from "./CartItem";
import { useEffect, useReducer } from "react";
import axios from "axios";
const Cart = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const { cart } = state;

  const updateState = async () => {
    const productsURL = "https://apicarrito.maxiconstancio.repl.co/products";
    const cartURL = "https://apicarrito.maxiconstancio.repl.co/cart";
    const resProducts = await axios.get(productsURL);
    const resCart = await axios.get(cartURL);
    const newProduct = await resProducts.data;
    const newCartItem = await resCart.data;
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
      axios(options).then(console.log(data));
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: data.codeProduct });
    }
  };
  
  const addToCart = (data) => {
    console.log(state.cart)
    let itemInCart = state.cart.find(item => item.codeProduct === data.codeProduct)
    
    if (itemInCart) {
        let endpoint=`https://apicarrito.maxiconstancio.repl.co/cart/${data.codeProduct}`
        
        let options = {
            method: "PUT",
            url: endpoint,
            data: { quantity: itemInCart.quantity + 1}
        }
        axios(options).then(console.log(data))
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

  return (
     
    <div className=" bg-gray-100">
      
     <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-full bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{ state.cart.length} Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>  

        
        {cart.map((item, index) => (
           
            
          <CartItem key={index} data={item} deleteFromCart={deleteFromCart}  addToCart = {addToCart}/>
        ))}
        
      </div>
      
      </div>
      <div className="w-full h-8 bg-gray-300 shadow px-10 py-8" >
          Total: {sumTotal}
      </div>
      
    </div>  
    </div>
    
  );
};
export default Cart;
