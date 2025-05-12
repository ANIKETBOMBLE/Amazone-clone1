import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import YourB from './YourB';
import HomeData from '../HomeData';


function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems([
      { id: 1, name: "Fossil Men Leather Watch", price: "₹13,400", image: "https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg", rating: 4 },
      { id: 2, name: "Fossil Women Leather Watch", price: "₹9,999", image: "https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg", rating: 5 },
    ]);
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <>
      <div className="Cart-div flex flex-col gap-5 p-10">
        {cartItems.length === 0 ? (
          <div className="firstdiv w-full p-4 flex flex-col justify-around border-2 bg-gray-200">
            <h2 className="font-bold text-2xl">Your Amazon Cart is empty</h2>
            <span>
              Check your Saved for later items below or{' '}
              <Link to="/" className="text-blue-400 hover:underline">
                continue shopping.
              </Link>
            </span>
          </div>
        ) : (
          <div className="flex flex-wrap justify-start gap-4 w-full">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex flex-col border rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <div className="text-xs text-start">
                  <h2 className="text-blue-500 hover:underline p-2">{item.name}</h2>
                  <span className="text-orange-400 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < item.rating ? 'text-yellow-400' : ''} />
                    ))}
                  </span>
                  <span className="font-semibold">{item.price}</span>
                  <p>
                    Get it by <b>Tuesday, May 13</b>
                    <br /> FREE Delivery by Amazon
                  </p>
                  <button
                    className="p-2 rounded-2xl text-black bg-yellow-400 mt-1 hover:underline cursor-pointer"
                    onClick={() => addToCart(item)}
                  >
                     Add to cart
                 </button>
                 </div>
               </div>
             ))}
           </div> 
      )} 
     
         <div className="flex justify-end w-full mt-8">
           <div className="sidebar p-4 rounded-2xl w-80 text-center bg-gray-200">
             <h2 className="font-bold text-start">You might also like</h2>
             <div className="flex flex-col gap-4">
               {cartItems.slice(0, 3).map((item) => (
                 <div
                   key={item.id}
                   className="flex w-72 h-45 border rounded-2xl gap-2 items-center"
                 >
                   <img
                     className="w-30 h-20 object-cover ml-2"
                     src={item.image}
                     alt={item.name}
                   />
                   <div className="text-xs text-start">
                     <h2 className="text-blue-500 hover:underline p-2">{item.name}</h2>
                     <span className="text-orange-400 flex gap-1">
                       {[...Array(5)].map((_, i) => (
                         <FaStar key={i} className={i < item.rating ? 'text-yellow-400' : ''} />
                       ))}
                     </span>
                     <span className="font-semibold">{item.price}</span>
                     <p>
                       Get it by <b>Tuesday, May 13</b>
                       <br /> FREE Delivery by Amazon
                     </p>
                     <button className="p-2 rounded-2xl text-black bg-yellow-400 mt-1 hover:underline cursor-pointer">
                       Add to cart
                     </button>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </div>
  
    
      <HomeData />
      <YourB />
    </>
  );
}

export default Cart;
