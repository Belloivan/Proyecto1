import React from 'react'
import { TYPES } from "../actions/cartActions";
import { cartReducer, cartInitialState } from "../reducer/cartReducer";
import Product from "./Product";
import { useEffect, useReducer } from "react";
import axios from 'axios';
export default function Products() {
    
const [state, dispatch] = useReducer(cartReducer,
    cartInitialState);
    
    const {products} = state;

    const updateState = async () => {
        const productsURL = "https://apicarrito.maxiconstancio.repl.co/products";
        const cartURL = "https://apicarrito.maxiconstancio.repl.co/cart";
        const resProducts = await axios.get(productsURL);
        const resCart = await axios.get(cartURL);
        const newProduct = await resProducts.data
        const newCartItem = await resCart.data
        dispatch({type: TYPES.READ_STATE, payload: [newProduct, newCartItem]})
        }
        useEffect(() => {
        updateState()
        }, [])
    
    
    
    
        
        
    
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

    let count = 0;
        
        
         let countCar = state.cart.map((item)=> {
            count = count + item.quantity 
            document.getElementById("cartIng").innerHTML=count
        })
           
    return (
        <div className="container md:auto text-center" >
        <h1> Carrito de Compras</h1>
        <h2>Productos</h2>
        <div className="box grid-responsive grid justify-items-center grid-flow-row-dense  grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 grid-rows-4  " >
        {products.map((product) => <Product key={product['_id']}
        data={product} addToCart={addToCart}/>)}
        </div>
        </div>
  )
}
