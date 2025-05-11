import React from 'react'
import { Link } from 'react-router-dom'
import { useState ,  } from 'react';
// import React, { useState } from 'react';
import { BiRightArrowAlt ,BiLeftArrowAlt  } from "react-icons/bi";

const More = () => {
  const [images] = useState([
    "https://m.media-amazon.com/images/I/71TkSS9TtHL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61YEVDC1fLL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/51-JRlxqusL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81iQUGrOmrL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/91lGJlFTNNL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/7157yEU6GUL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71LS6kUWpML._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/813qneIYZOL._AC_SY200_.jpg"
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

    <div className="bg-gray-100 p-4 rounded w-full h-auto object-cover max-w-8xl mx-auto  relative flex-nowrap min-h-fit">
      <div className="flex justify-between items-center mb-4 px-2">
        <h2 className="text-lg font-bold text-gray-800">
          Up to 60% off | Kitchen essentials
        </h2>
        <a href="#" className="text-blue-600 text-sm hover:underline">See all offers</a>
      </div>
   <Link to='*'> 
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
  {visibleImages.map((src, i) => (
    <img
      key={i}
      src={src}
      alt={`Kitchen item ${startIndex + i + 1}`}
      className="w-full h-48 object-cover rounded shadow hover:scale-105 transition-transform duration-300"
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
  
  );
};

export default More;


