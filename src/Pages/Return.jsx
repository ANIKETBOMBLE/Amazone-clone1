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
    
    
    {/*  */}
    <div className="h-px bg-gray-300 my-4 w-full" />
    {/* its just line */}
    
    <div className='flex flex-col justify-center items-center m-6'>
       <div className="flex items-center justify-start gap-1">
      <h2> <b>1 order </b> placed in </h2> 
      <select name="Months" id="" className='border p-2 rounded ' >
        <option defaultValue="past 3 months"  >past 3 months</option>
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
    <div className="flex items-center justify-around w-200  rounded-t-2xl h-20 bg-gray-300 place-content-center mt-2  ">
      <div className="flex gap-4 ">
         <h2>Order placed :
10 April 2025</h2>
      <h2>Total: 
₹8,299.00
</h2>
      <span>SHIP TO 
        <select name="Aniket Manoj bomble" className='p-1 border  rounded ' id="">
          {/* <option defaultvalue >address</option> */}
         </select></span>
      </div>
     
    
    <div className="">
      <h2>Order # 171-5525926-9977164</h2>
      <a href="" className='mx-4 text-blue-600' >View Order Details</a>
      <a href="" className='mx-2 text-blue-600'>Invoice</a>
    </div>
    </div>
   
            <div className="flex items-center justify-between relative h-70 w-200 border-2 p-2 rounded-b-2xl rounded-t-none">
               <div className="flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <div className="p-4  ">
          <h2 className='font-bold'>Delivered 12 April</h2>
      <p>Package was handed to resident</p>
        </div>
              <div className="flex ">
        <img  className="w-20 h-20" src="https://m.media-amazon.com/images/I/81BGKLI+cWL._SS142_.jpg" alt="" />
        <div className="">
            <p className='hover:underline text-blue-600'>
Redmi A4 5G (Sparkle Purple, 4GB RAM, 64GB Storage) <br />| Global Debut  SD 4s Gen 2 |<br /> Segment Largest  6.88in 120Hz <br />| 50MP Dual Camera | 18W Fast Charging</p>
<p>Return window closed on 19 April 2025</p>
<div className="mx-2 flex gap-2 mt-2">
  <button className='p-2 rounded-2xl text-black bg-yellow-400 border'>Buy it again</button><button className='p-2 rounded-2xl border'>View Your item</button>
        </div>
      
</div>
      </div>
      <div className="rightdiv rounded-2xl gap-5 absolute mx-2 flex flex-col right-0">
        <button className=' rounded-2xl px-2 text-x bg-yellow-400'>Get product support</button>
        <button className='border outline-0 rounded-2xl  text-x '>Track package</button>
        <button className='border outline-0 rounded-2xl  text-x '>Ask Product Question</button>
        <button className='border outline-0 rounded-2xl  text-x '>Leave seller feedback</button>
        <button className='border outline-0 rounded-2xl  text-x '>Leave delivery feedback</button>
        <button className='border outline-0 rounded-2xl  text-x '>Write a product review</button>

        
      </div>
            </div>
   
      
      
      </div>
  
    </div>
      
    </div>
    
    <div className="siddiv absolute   w-80 h-60 border right-1 top-100 rounded-2xl p-2 ">
       <h2 className='font-bold'>Customers also bought <br /> these digital items </h2> 

    <div className=" flex justify-between items-center">
      <img src="https://images-eu.ssl-images-amazon.com/images/I/31HvucLchNL._AC_UL150_SR150,150_.jpg" alt="" />
   <div className="">
       <p className='text-blue-600 hover:underline'>
         Cancellation Protect charge <br />
 <br />Travel Bookings <br />
1 offer from ₹500
      </p>
      <button className='p-2 border rounded-2xl text-xs'>See all buying options
</button>    </div>  
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