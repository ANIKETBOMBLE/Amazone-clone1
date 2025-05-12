import React from 'react'
import { useCart } from "../Componetus/CartContext";

function Cart() {
  const { cart, handleRemoveFromCart } = useCart();
  return (
    
    <>
    
     <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border-b py-4 flex justify-between">
            <div>
              <h2 className="font-semibold">{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price}</p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-1 rounded"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  
    
    </>
  )
}

export default Cart