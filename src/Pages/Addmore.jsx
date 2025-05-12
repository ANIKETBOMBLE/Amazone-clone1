import React from 'react'
// import HomeProduct from './homeprodcut';
import {ProdcutData2 } from './Prodcut'
import { Link } from 'react-router-dom'
function Addmore() {
  


  return (
    
    <>
 <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6  ">
  {ProdcutData2.map((product, index) => (
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
          <Link className='text-blue-500 hover:underline cursor-pointer' to="/HomeData2">{product.DATAF}</Link>
        </div>
      
        
      </div>
    
    </div>
  ))}
</div>

    
    </>
  )
}





export default Addmore;