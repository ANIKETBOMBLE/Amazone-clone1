import React from 'react'
import { Link } from 'react-router-dom'
import navLogo from "./../assets/OO.png"
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import flag from "./../assets/FLAG.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Cart from '../Pages/Cart';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
  return (
	<>
 <header className="bg-[#131921] w-full ">
  <nav className="w-full flex flex-wrap items-center justify-between p-2 lg:py-2 text-white text-sm">

    
    <Link to="/" className="p-">
      <img
        src={navLogo}
        alt="NavLogo"
        className="w-28 sm:w-36 hover:border hover:border-white rounded transition p-2"
      />
    </Link>

   
    <div className="hidden lg:flex items-center px-2 py-1 hover:border hover:border-white rounded">
      <LocationOnRoundedIcon />
      <div className="ml-1 flex flex-col leading-tight">
        <span className="text-xs">Delivering to Aniket</span>
        <span className="text-sm">Update Location</span>
      </div>
    </div>

  
    <div className="flex flex-grow max-w-3xl mx-2 rounded overflow-hidden border">
      <div className="bg-gray-300 px-2 flex items-center text-gray-600 text-sm cursor-pointer hover:border-3 hover:border-orange-400">
        All <ArrowDropDownIcon />
      </div>
      <input
        type="text"
        placeholder="Search Amazon.in"
        className="flex-grow px-2 text-black bg-amber-50 focus:outline-none hover:border-3 hover:border-orange-400"
      />
      <button className="bg-orange-300 hover:bg-orange-400 p-2 text-black hover:border-3 hover:border-orange-400">
        <SearchIcon />
      </button>
    </div>

   
    <div className="hidden md:flex items-center gap-1 px-2 hover:border hover:border-white rounded cursor-pointer ">
      <img src={flag} alt="flag" className="w-6" />
      <span className="text-sm">EN <ArrowDropDownIcon /></span>
    </div>

    
    <Link to="/Profile" className="hidden md:flex flex-col px-2 hover:border hover:border-white rounded">
      <span>Hello, User</span>
      <span className="font-bold flex items-center gap-1">Accounts & Lists <ArrowDropDownIcon /></span>
    </Link>

    
    <Link to="/Return" className="hidden md:flex flex-col px-2 hover:border hover:border-white rounded">
      <span>Returns</span>
      <span className="font-bold">& Orders</span>
    </Link>


    <Link to="/Cart" className="relative flex items-center px-3 hover:border hover:border-white rounded">
      <span className="absolute top-0 right-1 text-orange-400 text-xs">2</span>
      <ShoppingCartIcon />
      <span className="ml-1">Cart</span>
    </Link>


    <div className="hidden sm:flex items-center px-2 cursor-pointer" title="Profile">
      <Link to="/Profile" >   <AccountCircleIcon sx={{ fontSize: 36 }} /> </Link>
    {/* <div className="hidden">Wishlist</div> */}
    </div>
    <div className="">
      <Link to="/Wishlist"> Wishlist</Link>
    </div>
  </nav>
</header>

  </>
  )
}

export default Header