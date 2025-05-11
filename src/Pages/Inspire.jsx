import React from 'react'
import { Link } from 'react-router-dom'

import { BiRightArrowAlt ,BiLeftArrowAlt  } from "react-icons/bi";

import { useState } from 'react';
function Inspire() {
	 const [images] = useState([
 "https://m.media-amazon.com/images/I/71s+auflKiL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/813QOuzoAAL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/61g9YCGFuFL._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71pJ5EgGP+L._AC_SY200_.jpg",
  "https://m.media-amazon.com/images/I/71XvQfZoNJL._AC_UL480_FMwebp_QL65_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
  'https://m.media-amazon.com/images/I/61SJHAQfHwL._AC_SY200_.jpg',
  'https://m.media-amazon.com/images/I/71mufQFK6wL._AC_SY200_.jpg',
]);
	
	  const [startIndex, setStartIndex] = useState(0);
	  const itemsPerPage = 6;
	
	  const handleNext = () => {
		setStartIndex((prev) => (prev + itemsPerPage) % images.length);
	  };
	
	  const handlePrev = () => {
		setStartIndex((prev) =>
		  (prev - itemsPerPage + images.length) % images.length
		);
	  };
	
	  const visibleImages = [...images, ...images].slice(startIndex, startIndex + itemsPerPage);
	
  return (
	<>
	 <div className="bg-gray-100 mt-2 p-4 rounded w-full max-w-8xl mx-auto relative min-h-fit">
		  <div className="flex justify-between items-center mb-4 px-2">
			<h2 className="text-lg font-bold text-gray-800">
			 Inspired by your cart
			</h2>
			<a href="*" className="text-blue-600 text-sm hover:underline">See all offers</a>
		  </div>
	<Link to="*">
		  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
			{visibleImages.map((src, i) => (
			  <img
				key={i}
				src={src}
				alt={`Kitchen item ${startIndex + i + 1}`}
				className="w-full h-48 object-contain rounded shadow hover:scale-105 transition-transform duration-300"
			  />
			))}
		  </div>
		  </Link>
	  
		  <button
			onClick={handlePrev}
			className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white shadow p-4 rounded hover:bg-gray-300"
		  >
		  <BiLeftArrowAlt/>
		  </button>
		  <button
			onClick={handleNext}
			className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white shadow p-4 rounded hover:bg-gray-300"
		  >
			<BiRightArrowAlt />
	
		  </button>
		  
		</div>
		
		</>
  )
}

export default Inspire