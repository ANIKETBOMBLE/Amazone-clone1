import React from 'react'
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import YourB from './YourB';
import HomeData from '../HomeData';
import { useState } from 'react';
function Cart() {
	

  
//   const sortCartByName = () => {
//     const sorted = [...cartItems].sort((a, b) => a.name.localeCompare(b.name));
//     setCartItems(sorted);
//   };
  
 
  
 return(
  
	<>
	{/* <Link to="/Cart">
	</Link> */}
	<div className="Cart-div flex  flex-col justify-between gap-5 p-10">
		
		<div className="firstdiv w-260  h-30    p-2 flex flex-col  justify-around  border-transparent border-2 bg-gray-200 ">
			<h2 className='font-bold text-2xl'>Your Amazon Cart is empty</h2>
			<span>Check your Saved for later items below or  <Link to="/" className='text-blue-400 hover:underline'>continue shopping.</Link></span>
		</div>
	
			
	<div className="flex justify-end  relative right-0   items-end">
		
		<div className="sidebar  flex flex-col gap-1 justify-between p-4 rounded-2xl w-80  text-center bg-gray-200  ">
			<h2 className='font-bold text-start'>You might also like</h2>
			
		<div className="flex w-72 h-45 border rounded-2xl  gap-2 items-center ">
				<img className='w-30  h-20 object-cover ml-2' src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg" alt="" />
				<div className="text-xs text-start ">
					<h2 className='text-blue-500 hover:underline p-2'>Fossil Men Leather Machine Analog Black Dial Watch-Fs4656, Band Color-Brown</h2>
				<span className='text-orange-400 flex gap-1'><FaStar/><FaStar/><FaStar/><FaStar/></span>
				<span className='font-semibold '>₹13,400</span>
				<p className=''>Get it by <b> Tuesday, May 13</b>
 <br /> FREE Delivery by Amazon</p>
<button className='p-2 rounded-2xl text-black bg-yellow-400 mt-1 hover:underline cursor-pointer'>Add to cart</button>
				</div>
				
			</div>	
			<div className="flex w-72 h-45 border rounded-2xl  gap-2 items-center ">
				<img className='w-30  h-20 object-cover ml-2' src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg" alt="" />
				<div className="text-xs text-start ">
					<h2 className='text-blue-500 hover:underline p-2'>Fossil Men Leather Machine Analog Black Dial Watch-Fs4656, Band Color-Brown</h2>
				<span className='text-orange-400 flex gap-1'><FaStar/><FaStar/><FaStar/><FaStar/></span>
				<span className='font-semibold '>₹13,400</span>
				<p className=''>Get it by <b> Tuesday, May 13</b>
 <br /> FREE Delivery by Amazon</p>
<button className='p-2 rounded-2xl text-black bg-yellow-400 mt-1 hover:underline cursor-pointer'>Add to cart</button>
				</div>
				
			</div>	<div className="flex w-72 h-45 border rounded-2xl  gap-2 items-center ">
				<img className='w-30  h-20 object-cover ml-2' src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg" alt="" />
				<div className="text-xs text-start ">
					<h2 className='text-blue-500 hover:underline p-2'>Fossil Men Leather Machine Analog Black Dial Watch-Fs4656, Band Color-Brown</h2>
				<span className='text-orange-400 flex gap-1'><FaStar/><FaStar/><FaStar/><FaStar/></span>
				<span className='font-semibold '>₹13,400</span>
				<p className=''>Get it by <b> Tuesday, May 13</b>
 <br /> FREE Delivery by Amazon</p>
<button className='p-2 rounded-2xl text-black bg-yellow-400 mt-1 hover:underline cursor-pointer'>Add to cart</button>
				</div>
				
			</div>	<div className="flex w-72 h-45 border rounded-2xl  gap-2 items-center ">
				<img className='w-30  h-20 object-cover ml-2' src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg" alt="" />
				<div className="text-xs text-start ">
					<h2 className='text-blue-500 hover:underline p-2'>Fossil Men Leather Machine Analog Black Dial Watch-Fs4656, Band Color-Brown</h2>
				<span className='text-orange-400 flex gap-1'><FaStar/><FaStar/><FaStar/><FaStar/></span>
				<span className='font-semibold '>₹13,400</span>
				<p className=''>Get it by <b> Tuesday, May 13</b>
 <br /> FREE Delivery by Amazon</p>
<button className='p-2 rounded-2xl text-black bg-yellow-400 mt-1 hover:underline cursor-pointer'>Add to cart</button></div></div>	
			<div className="flex w-72 h-45 border rounded-2xl  gap-2 items-center ">
				<img className='w-30  h-20 object-cover ml-2' src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg" alt="" />
				<div className="text-xs text-start ">
					<h2 className='text-blue-500 hover:underline p-2'>Fossil Men Leather Machine Analog Black Dial Watch-Fs4656, Band Color-Brown</h2>
				<span className='text-orange-400 flex gap-1'><FaStar/><FaStar/><FaStar/><FaStar/></span>
				<span className='font-semibold '>₹13,400</span>
				<p className=''>Get it by <b> Tuesday, May 13</b>
 <br /> FREE Delivery by Amazon</p>
<button className='p-2 rounded-2xl text-black bg-yellow-400 mt-1 hover:underline cursor-pointer'>Add to cart</button>
				</div>
				</div>	
		
				
			</div>
	</div>
	<div className=" w-full h-auto  top-78   ">
		
	
	<div className=" flex flex-wrap absolute top-1/2">
		 <div className="w-80 h-40  p-4  rounded-lg shadow-sm">
      <div className="border rounded-md p-4">
		<h2>Men's wrist watches (1)</h2>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg"
          alt="Fossil Men Watch"
          className="w-full h-auto object-contain mb-3"
        />

        <h3 className="font-medium text-sm mb-1">
          Fossil Men Leather ChroNo.graph White Dial An...
        </h3>

        <div className="text-xl font-bold mb-1">₹8,495<sup className="text-sm">00</sup></div>

        <p className="text-xs text-gray-600">50+ bought in past month</p>
        <p className="text-xs text-gray-600 mb-1">Eligible for FREE Shipping</p>

        <span className="inline-block bg-gray-200 text-xs font-semibold text-gray-800 px-2 py-0.5 rounded mb-2">
          🚚 Fulfilled
        </span>

        <p className="text-sm mb-3"><span className="font-semibold">Colour:</span> Brown</p>

        <button className="w-full border rounded-full py-1 text-sm font-medium hover:bg-gray-100 mb-2">
          Move to cart
        </button>

        <div className="text-xs text-blue-600 space-y-1">
          <p className="cursor-pointer hover:underline">Delete</p>
          <p className="cursor-pointer hover:underline">Add to list</p>
          <p className="cursor-pointer hover:underline">See more like this</p>
        </div>
      </div>
    </div>
	<div className="w-80 h-15  p-4  rounded-lg shadow-sm">
      <div className="border rounded-md p-4">
		<h2>Men's wrist watches (1)</h2>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg"
          alt="Fossil Men Watch"
          className="w-full h-auto object-contain mb-3"
        />

        <h3 className="font-medium text-sm mb-1">
          Fossil Men Leather ChroNo.graph White Dial An...
        </h3>

        <div className="text-xl font-bold mb-1">₹8,495<sup className="text-sm">00</sup></div>

        <p className="text-xs text-gray-600">50+ bought in past month</p>
        <p className="text-xs text-gray-600 mb-1">Eligible for FREE Shipping</p>

        <span className="inline-block bg-gray-200 text-xs font-semibold text-gray-800 px-2 py-0.5 rounded mb-2">
          🚚 Fulfilled
        </span>

        <p className="text-sm mb-3"><span className="font-semibold">Colour:</span> Brown</p>

        <button className="w-full border rounded-full py-1 text-sm font-medium hover:bg-gray-100 mb-2">
          Move to cart
        </button>

        <div className="text-xs text-blue-600 space-y-1">
          <p className="cursor-pointer hover:underline">Delete</p>
          <p className="cursor-pointer hover:underline">Add to list</p>
          <p className="cursor-pointer hover:underline">See more like this</p>
        </div>
      </div>
    </div><div className="w-80 h-15  p-4  rounded-lg shadow-sm">
      <div className="border rounded-md p-4">
		<h2>Men's wrist watches (1)</h2>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/I/71RE2ca6YzL._AC_UL200_SR200,200_.jpg"
          alt="Fossil Men Watch"
          className="w-full h-auto object-contain mb-3"
        />

        <h3 className="font-medium text-sm mb-1">
          Fossil Men Leather ChroNo.graph White Dial An...
        </h3>

        <div className="text-xl font-bold mb-1">₹8,495<sup className="text-sm">00</sup></div>

        <p className="text-xs text-gray-600">50+ bought in past month</p>
        <p className="text-xs text-gray-600 mb-1">Eligible for FREE Shipping</p>

        <span className="inline-block bg-gray-200 text-xs font-semibold text-gray-800 px-2 py-0.5 rounded mb-2">
          🚚 Fulfilled
        </span>

        <p className="text-sm mb-3"><span className="font-semibold">Colour:</span> Brown</p>

        <button className="w-full border rounded-full py-1 text-sm font-medium hover:bg-gray-100 mb-2">
          Move to cart
        </button>

        <div className="text-xs text-blue-600 space-y-1">
          <p className="cursor-pointer hover:underline">Delete</p>
          <p className="cursor-pointer hover:underline">Add to list</p>
          <p className="cursor-pointer hover:underline">See more like this</p>
        </div>
      </div>
    </div>
    </div>
	</div>
	</div>
	
	<HomeData className=""/>
	<YourB className=""/>		
			
			
		
									
	
		
		
	

  </>
 )
}
export default Cart

