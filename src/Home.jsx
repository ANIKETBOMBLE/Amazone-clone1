import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import DATA from './Pages/DATA';
import Kitchenessentials from './Pages/Kitchenessentials'
import Inspire from './Pages/Inspire'
import More from './Pages/More';
import Addmore  from './Pages/Addmore';
import HomeData from './HomeData';
import  YourB from './Pages/YourB'
import instance from './Componetus/axios';
// import Product from './Prodcut';
import Header from './Componetus/Header';
import { Link } from 'react-router-dom';
function Home({searchTerm}) {
  const images = [
    'https://m.media-amazon.com/images/I/81BKxaj0USL._SX3000_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/90days2x._CB795748422_.jpg',
    'https://m.media-amazon.com/images/I/81fxOpw3zsL._SX3000_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/Shankhadip/MayART25/MAY25_GW_PC_Hero_H1_8PM_EToday_2X._CB795749964_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/2025/Auto/MayArt/GW/Main/PC/Vehicle-care--accessories._CB794909485_.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/MayART25/Hero/Clean_Main_event_Rec_PC._CB794884745_.jpg'
    
  ];

    


  const [next, setNext] = useState(0);

  const handleNext = () => {
    setNext((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setNext((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  
  
  
  
  return (
    <>
     
      <div
        className="min-h-screen bg-no-repeat bg-contain relative transition-all duration-400"
        style={{ backgroundImage: `url(${images[next]})` }}/>

     
      <div className="flex justify-between realtive  ">
        <button
          type="button"
          className="p-2 hover:border-2 border-white rounded-full  absolute top-60 left-3" 
          onClick={handlePrev}
        >
          <FaChevronLeft />
        </button>


        <button
          type="button"
          className="p-2 hover:border-2 border-white rounded-full absolute top-60 right-3"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>
    
    <DATA/>
    <Kitchenessentials/>
    <Inspire/> 
     <HomeData searchTerm={searchTerm} />
    <Addmore/>
     <More/>
     
        <HomeData searchTerm={searchTerm}  />
         <YourB/>
         
         
         
         
         
         
         
         
         
         
         
         
         
       
      
    </>
  );
}

export default Home;
