import React from 'react'
// import HomeProduct from './homeprodcut';
import {productData } from './homeprodcut'
import { Link } from 'react-router-dom'
function DATA() {
  


  return (
    
    <>
    <Link to='*'> 
 <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6  absolute top-95   ">
  {productData.map((product, index) => (
    <div
      key={index}
      className="bg-white rounded shadow hover:shadow-xl  transition p-5 flex flex-col "
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        {product.itemTitle}
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {product.imgs.map((img, i) => (
          
          <img
            key={i}
            src={img}
            alt={`product ${i}`}
            className="w-fit h-24 object-cover rounded-md cursor-pointer " />
        ))}
        <div className="link">
          <Link className='text-blue-500 hover:underline cursor-pointer' to="/*">{product.DATAF}</Link>
        </div>
      
        
      </div>
    
    </div>
  ))}
  
</div>
</Link>
    
    </>
  )
}





export default DATA