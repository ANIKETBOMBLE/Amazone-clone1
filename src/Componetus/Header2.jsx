import React from 'react'
import { href, Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
function Header2() {
  return (
	<>
<div className="Nav-div bg-[#232f36] text-white">
  <div className="main-div grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-evenly items-center text-xs cursor-pointer p-2">
    
    <div className="All flex items-center gap-1 border border-transparent hover:border-white rounded px-2 py-1 transition">
      <IoMenu className="h-5 w-5" />
      <Link to="/HomeData2"><span>All</span>
      </Link>
      
    </div>

    {[
      { label: "MX Player", href: "https://www.mxplayer.in/" },
       { label: "Today's Deal",href: "/HomeData2" },

      { label: "Sell" , href: "*"},
      { label: "Gift Cards",href: "*" },
      { label: "Amazon Pay",href: "*" },
      { label: "Buy Again",href: "/HomeData2" },
      { label: "AmazonBasics" ,href: "*" },
      { label: "Gift ideas" ,href: "*" },
      { label: "Books" ,href: "*" },
      { label: "Home Improvement",href: "*" },
      { label: "Health, Household & Personal Care",href: "*" },
      // { label: "Today's Deal",href: "/HomeData2" },
      { label: "Browsing History",href: "*" },
      { label: "Customer Services",href: "*" },
    ].map((item, index) => (
      <div
        key={index}
        className="border border-transparent hover:border-white rounded px-2 py-1 transition"
      >
        {item.href ? <Link to={item.href}>{item.label}</Link> : item.label}
      </div>
    ))}
  </div>
</div>


	
	</>
  )
}

export default Header2