
const ProductModal = ({data, addToCart, deleteFromCart, cart, setShowModal}) => {
    


return (
    <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-2xl">
                <div className="border-4 border-solid  rounded-lg shadow-lg relative flex flex-col w-full h-full bg-gray-300 outline-none focus:outline-none">
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
                  <div className="relative p-1 flex justify-center">
                    <img
                      className="box h-56 w-56  p-5  border-solid border-blueGray-200 rounded-t-lg"
                      src={data.img}
                      alt="product-img"
                    ></img>
                  </div>
                  <div className="relative  p-2 flex-auto">
                    {data.description}
                  </div>
                  <div className="relative p-2 text-2xl flex-auto">
                    $ {data.price}
                  </div>
                  <div className="relative p-2 flex-auto">
                     
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
                    
                  </div>
                </div>
              </div>
            </div>
          </>
)
}

export default ProductModal;