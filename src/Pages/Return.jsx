import React from 'react'
import YourB from './YourB'
import HomeData from '../HomeData'
import { Link } from 'react-router-dom'
import { BiSolidChevronRight } from "react-icons/bi";
import { TbSearch } from "react-icons/tb";
function Return() {
  return (
    <>
    
    {/* <div class="max-w-4xl mx-auto p-6">
  <h1 class="text-2xl font-bold mb-6">Your Orders</h1>

  <div class="space-y-6">

    <div class="border rounded-xl shadow-sm p-4 hover:shadow-md transition">
      <div class="flex justify-between items-center mb-3">
        <div>
          <p class="text-sm text-gray-500">Order #123456789</p>
          <p class="text-sm text-gray-500">Placed on April 25, 2025</p>
        </div>
        <span class="text-sm px-2 py-1 bg-green-100 text-green-700 rounded-full">Delivered</span>
      </div>
      <div class="flex items-center space-x-4">
        <img src="https://via.placeholder.com/60" alt="Product" class="w-16 h-16 rounded border" />
        <div>
          <p class="font-medium text-gray-800">Wireless Headphones</p>
          <p class="text-sm text-gray-500">Qty: 1</p>
        </div>
      </div>
      <div class="mt-4 text-right">
        <a href="#" class="text-sm text-blue-600 hover:underline">View Details</a>
      </div>
    </div>

  </div>
</div> */}
<div className="">
  <div className="">
      <Link className='flex gap-2 items-center' to="/Profile"> Your Account <BiSolidChevronRight />  <span className='text-red-600'> Your Orders</span></Link>
  </div>
  <div className="flex flex-grow justify-around text-xs  ">
    <h2 className='text-3xl font-semibold'>Your Orders</h2>
    <div className="flex justify-around items-center gap-2 rounded">
      <TbSearch className='w-8 h-10   ' />
          <input type="text" placeholder='Search all orders' className=' w-100 p-2 border rounded hover:border-blue-500 hover:border-2
    ' />
           <button className='p-2 rounded-2xl text-white bg-gray-700 '>Search Orders</button>

    </div>
    </div>
    <div className="flex justify-center items-center flex-col ">
       <u className='list-none no-underline flex gap-4 '>
      <li className='underline decoration-orange-600 decoration-2 underline-offset-2 font-bold text-black'>Orders</li>
      <li className='text-blue-700 hover:underline cursor-pointer'>Buy Again</li>
      <li className='text-blue-700 hover:underline cursor-pointer'>Not Yet Shippend</li>
      <li className='text-blue-700 hover:underline cursor-pointer'>Cancelled Orders</li>
    </u>
   {/* <hr className="border-t border-gray-700 my-4" /> */}
    </div>
    <div className="h-px bg-gray-300 my-4 w-full" />
    <div className="flex items-center justify-center gap-1">
      <h2> <b>1 order </b> placed in </h2> 
      <select name="Months" id="" className='border p-2 rounded ' >
        <option value="past 3 months" selected disabled >past 3 months</option>
        <option value="last 30 days">last 30 days</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
                <option value="2022">2022</option>
        <option value="2021">2021</option>
                <option value="2020">2020</option>
                        <option value="Archived Orders">Archived Orders</option>



      </select>
    </div>
    <div className="flex items-center justify-around w-20vw   h-20 bg-gray-300 place-content-center mt-2  ">
      <div className="flex gap-4 ">
         <h2>Order placed
10 April 2025</h2>
      <h2>Total
₹8,299.00
</h2>
      <span>SHIP TO 
        <select name="Aniket Manoj bomble" className='p-1 border  rounded ' id="">
          <option value="" selected disabled>address</option>
         </select></span>
      </div>
     
    
    <div className="">
      <h2>Order # 171-5525926-9977164</h2>
      <a href="" className='mx-4 text-blue-600' >View Order Details</a>
      <a href="" className='mx-2 text-blue-600'>Invoice</a>
    </div>
    </div>
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <div className="p-4">
          <h2 className='font-bold'>Delivered 12 April</h2>
      <p>Package was handed to resident</p>
        </div>
            
      <div className="flex ">
        <img  className="w-20 h-20" src="https://m.media-amazon.com/images/I/81BGKLI+cWL._SS142_.jpg" alt="" />
        <div className="">
            <p className='hover:underline text-blue-600'>
Redmi A4 5G (Sparkle Purple, 4GB RAM, 64GB Storage) | Global Debut SD 4s Gen 2 |<br /> Segment Largest 6.88in 120Hz | 50MP Dual Camera | 18W Fast Charging</p>
<p>Return window closed on 19 April 2025</p>
<div className="mx-2 flex gap-2 mt-2">
  <button className='p-2 rounded-2xl text-black bg-yellow-400 border'>Buy it again</button><button className='p-2 rounded-2xl border'>View Your item</button>
        </div>
      
</div>
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