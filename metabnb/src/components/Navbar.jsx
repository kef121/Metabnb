import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import {AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-6'>
        <img src={Logo} alt="logo" className='cursor-pointer w-[25%] object-contain lg:w-[15%]'></img>
        <ul className=' hidden md:flex text-[18px] text-[#434343]'>
            <li><a href="" className="p-4">Home</a></li>
            <li><a href="" className="p-4">Place to stay</a></li>
            <li><a href="" className="p-4">NFTs</a></li>
            <li><a href="" className="p-4">Community</a></li>
        </ul>
        <button className=" hidden md:flex  bg-[#A02279] text-white text-[18px] px-2 py-1 rounded-md cursor-pointer">Collect wallet</button>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={25} className="cursor-pointer"/> : <AiOutlineMenu size={25} className="cursor-pointer"/>}
        </div>

        <div className={nav ? 'fixed flex flex-col items-center justify-center left-0 top-0 w-[60%] h-full bg-white ease-in-out duration-500' : 'fixed left-[-100%] '}>
            <ul className='text-[18px] text-[#434343]'>
               <li className="p-4 cursor-pointer"><a href="">Home</a></li>
               <li className="p-4 cursor-pointer"><a href="" >Place to stay</a></li>
               <li className="p-4 cursor-pointer"><a href="" >NFTs</a></li>
               <li className="p-4 cursor-pointer"><a href="" >Community</a></li>
            </ul>
            <button className="  bg-[#A02279] text-white text-[18px] px-2 py-1 ml-6 rounded-md cursor-pointer">Connect wallet</button>
        </div>
        
    </div>
  )
}

export default Navbar