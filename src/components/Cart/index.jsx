import { useEffect, useState } from "react"
import { AiFillDelete } from 'react-icons/ai'
import { deleteItemCart, getCart } from "../../services/cart"
const Cart = () => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    getCart(userId).then(({ data }) => {
      const carts = data.carts
      setCart(carts)
    })
  }, [])
  const deleteCart = (id) => {
    deleteItemCart(id).then(()=> setCart(cart.filter(item => item.productId._id !== id)))  
  }
  return (

    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart?.map((cart) => {
            return (
                <div key={cart._id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">{cart.productId?.name}</h2>
                      <p className="mt-1 text-xs text-gray-700">{cart.productId?.category}</p>
                    </div>
                    <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{cart.productId?.price}</p>
                        <button onClick={ () => deleteCart(cart?.productId._id)}>                
                          <AiFillDelete />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            )



          })}

        </div>

        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">$4.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            {cart?.reduce(function (sum, item) {
              return sum + item.productId?.price * item.count;
            }, 0)}
            <div className="">
              <p className="mb-1 text-lg font-bold">$134.98 USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart