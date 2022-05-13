import React from "react";
import { TYPES } from "../actions/cartActions";
import { cartReducer, cartInitialState } from "../reducer/cartReducer";
import Product from "./Product";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
export default function Products() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const [isLoading, setLoading] = useState(true)
  const { products, cart } = state;
   
  const updateState = async () => {
    const productsURL = "https://apicarrito.maxiconstancio.repl.co/products";
    const cartURL = "https://apicarrito.maxiconstancio.repl.co/cart";
    const resProducts = await axios.get(productsURL);
    const resCart = await axios.get(cartURL);
    const newProduct = await resProducts.data;
    const newCartItem = await resCart.data;
    setLoading(false);
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
    //console.log(state.cart);
    let itemInCart = state.cart.find(
      (item) => item.codeProduct === data.codeProduct
    );

    if (itemInCart) {
      let endpoint = `https://apicarrito.maxiconstancio.repl.co/cart/${data.codeProduct}`;

      let options = {
        method: "PUT",
        url: endpoint,
        data: { quantity: itemInCart.quantity + 1 },
      };
      axios(options);
    } else {
      axios({
        method: "POST",
        url: "https://apicarrito.maxiconstancio.repl.co/cart",
        data: { ...data, quantity: 1 },
      });
    }

    dispatch({ type: TYPES.ADD_TO_CART, payload: data });

    //  dispatch({type: TYPES.ADD_TO_CART_NAV, payload: id});
  };

  let count = 0;

  state.cart.map((item) => {
    count = count + item.quantity;
    document.getElementById("cartIng").innerHTML = count;
    document.getElementById("cartIng2").innerHTML = count;
  });

  return isLoading ? (
      <div className="text-center">
          <svg role="status" className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
      </div>
  ):(
    <div className="mx-auto container py-8 px-6">
      <div className="container md:auto text-center">
      

        <div className="box grid-responsive grid justify-items-center grid-flow-row-dense  grid-cols-1 grid-rows-1 gap-3 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-4 grid-rows-1  ">
          {products.map((product) => (
            <Product
              key={product["_id"]}
              data={product}
              addToCart={addToCart} 
              deleteFromCart = {deleteFromCart}
              cart = {cart.find(element => element.codeProduct === product.codeProduct)||0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
