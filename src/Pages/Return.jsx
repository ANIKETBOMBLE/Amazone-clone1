import React from 'react'
import YourB from './YourB'
import HomeData from '../HomeData'
import { Link } from 'react-router-dom'
import { BiSolidChevronRight } from "react-icons/bi";
import { TbSearch } from "react-icons/tb";
import Loader from '../Componetus/Loader';
function Return() {
  
  <Loader/> 
  return (
    <>
    
    
<div className="container mx-auto px-4 py-6 space-y-6">

  
  <div className="flex gap-2 items-center text-sm">
    <Link to="/Profile" className="flex items-center gap-1 text-blue-600 hover:underline">
      Your Account <BiSolidChevronRight />
      <span className="text-red-600">Your Orders</span>
    </Link>
  </div>

  
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
    <h2 className="text-3xl font-semibold">Your Orders</h2>
    <div className="flex items-center gap-2">
      <TbSearch className="w-6 h-6 text-gray-500" />
      <input
        type="text"
        placeholder="Search all orders"
        className="w-64 p-2 border rounded-md focus:ring focus:ring-blue-300"
      />
      <button className="px-4 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-800">
        Search Orders
      </button>
    </div>
  </div>

  
  <div className="flex gap-4 text-sm border-b border-gray-300 pb-2">
    <span className="text-black font-bold underline underline-offset-2 decoration-2 decoration-orange-600 cursor-pointer">Orders</span>
    <span className="text-blue-600 hover:underline cursor-pointer">Buy Again</span>
    <span className="text-blue-600 hover:underline cursor-pointer">Not Yet Shipped</span>
    <span className="text-blue-600 hover:underline cursor-pointer">Cancelled Orders</span>
  </div>

  
  <div className="flex items-center gap-2">
    <p><strong>1 order</strong> placed in</p>
    <select className="border p-2 rounded-md">
      <option>Past 3 months</option>
      <option>Last 30 days</option>
      <option>2025</option>
      <option>2024</option>
      <option>Archived Orders</option>
    </select>
  </div>

  
  <div className="border rounded-xl overflow-hidden bg-gray-100">
    <div className="flex justify-between px-4 py-2 text-sm bg-gray-200">
      <div className="flex gap-4">
        <p><strong>Order placed:</strong> 10 April 2025</p>
        <p><strong>Total:</strong> ₹8,299.00</p>
        <p><strong>Ship to:</strong> Aniket Manoj Bomble</p>
      </div>
      <div>
        <p><strong>Order #:</strong> 171-5525926-9977164</p>
        <a href="#" className="text-blue-600 hover:underline mx-2">View Order Details</a>
        <a href="#" className="text-blue-600 hover:underline">Invoice</a>
      </div>
    </div>

    <div className="p-4 md:flex gap-6">
      <div className="flex gap-4">
        <img
          className="w-24 h-24 object-contain"
          src="https://m.media-amazon.com/images/I/81BGKLI+cWL._SS142_.jpg"
          alt="Product"
        />
        <div className="space-y-2 text-sm">
          <p className="font-bold">Delivered 12 April</p>
          <p className="text-gray-600">Package was handed to resident</p>
          <p className="text-blue-600 hover:underline cursor-pointer">
            Redmi A4 5G (Sparkle Purple, 4GB RAM, 64GB Storage) <br />
            SD 4s Gen 2 | 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging
          </p>
          <p className="text-gray-500">Return window closed on 19 April 2025</p>
          <div className="flex gap-2 mt-2">
            <button className="px-4 py-1 bg-yellow-400 text-sm rounded-md">Buy it again</button>
            <button className="px-4 py-1 border text-sm rounded-md">View your item</button>
          </div>
        </div>
      </div>

     
      <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-auto">
        {[
          'Get product support',
          'Track package',
          'Ask Product Question',
          'Leave seller feedback',
          'Leave delivery feedback',
          'Write a product review',
        ].map((text, idx) => (
          <button key={idx} className="px-3 py-1 border text-xs rounded-md hover:bg-gray-50">
            {text}
          </button>
        ))}
      </div>
    </div>
  </div>
</div>


<HomeData/>
<HomeData/>

<YourB/>

    </>
	
  )
}

export default Return