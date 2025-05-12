import React from 'react';
import { useCart } from '../Componetus/CartContext';
import { FaStar } from 'react-icons/fa';

function Cart() {
  const { cart, handleRemoveFromCart, addToCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 max-w-7xl mx-auto flex flex-col gap-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {/* Empty State */}
      {cart.length === 0 ? (
        <div className="w-full p-6 border-2 bg-gray-100 rounded-md flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Your Amazon Cart is empty</h2>
          <p>
            Check your saved items or{' '}
            <a href="/" className="text-blue-500 hover:underline">
              continue shopping.
            </a>
          </p>
        </div>
      ) : (
        <>
          {/* Simple List View */}
          <div className="p-4 max-w-4xl mx-auto bg-white border rounded shadow-sm">
            {cart.map((item) => (
              <div key={item.id} className="border-b py-4 flex justify-between">
                <div>
                  <h2 className="font-semibold">{item.title || item.name}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price}</p>
                </div>
                <button
                  className="bg-red-500 text-white w-40 h-10 rounded"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Detailed Card View + Sidebar */}
          <div className="flex flex-wrap gap-6 mt-6">
            {/* Grid Cards */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 flex flex-col shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <div className="text-xs text-start">
                    <h2 className="text-blue-500 hover:underline p-1">{item.name}</h2>
                    <span className="text-orange-400 flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < item.rating ? 'text-yellow-400' : ''} />
                      ))}
                    </span>
                    <span className="font-semibold block mb-1">₹{item.price}</span>
                    <p className="mb-2">
                      Get it by <b>Tuesday, May 13</b><br />
                      FREE Delivery by Amazon
                    </p>
                    <p>Quantity: {item.quantity}</p>
                    <div className="flex gap-2 mt-2">
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                      <button
                        className="px-3 py-1 bg-yellow-400 text-black rounded hover:underline"
                        onClick={() => addToCart(item)}
                      >
                        Add More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
=
            <div className="w-full lg:w-80">
              <div className="bg-gray-100 p-4 rounded-2xl">
                <h2 className="font-bold text-start mb-4">You might also like</h2>
                <div className="flex flex-col gap-4">
                  {cart.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="flex border rounded-2xl gap-2 items-center p-2"
                    >
                      <img
                        className="w-24 h-20 object-cover rounded"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="text-xs text-start">
                        <h2 className="text-blue-500 hover:underline">{item.name}</h2>
                        <span className="text-orange-400 flex gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < item.rating ? 'text-yellow-400' : ''} />
                          ))}
                        </span>
                        <span className="font-semibold block">₹{item.price}</span>
                        <p className="text-xs">
                          Get it by <b>Tuesday, May 13</b><br />
                          FREE Delivery
                        </p>
                        <button
                          className="mt-1 px-2 py-1 bg-yellow-400 text-black rounded hover:underline"
                          onClick={() => addToCart(item)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

     
          <div className="text-right text-xl font-bold mt-6">
            Total: ₹{totalPrice}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
