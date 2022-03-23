const Product = ({data, addToCart}) => {
    const { img, name, price} = data;
  
    return (
    <div className="product mt-8 p-8 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <img className="box h-56 w-56  p-8 rounded-t-lg" src={img} alt="product-img"></img> 
    <div className="px-5 pb-5">
    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
    </div> 
    <div className="flex justify-between items-center">
    <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
    
    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() =>
    addToCart(data)}>Agregar</button>
    </div>
    </div>
    )
    }
    export default Product