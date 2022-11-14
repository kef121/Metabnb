import React, {Fragment, useState } from 'react'
import Logo from "../assets/logo.png"
import {AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Modal from './Modal'


const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <Fragment>
    <div className='className="font-RedRose max-w-[1440px] mx-auto flex justify-between items-center p-4 md:p-10  '>
        <img src={Logo} alt="logo" className='w-[150px] cursor-pointer object-contain  '/>
        <ul className=' hidden md:flex text-[18px] text-[#434343]'>
            <li><a href="#" className="p-4 md:p-3">Home</a></li>
            <li><a href="#" className="p-4 md:p-3">Place to stay</a></li>
            <li><a href="#" className="p-4 md:p-3">NFTs</a></li>
            <li><a href="#" className="p-4 md:p-3">Community</a></li>
        </ul>
        <button  className=" hidden md:flex  bg-[#A02279] text-white text-[18px] px-2 py-1 rounded-md cursor-pointer">Collect wallet</button>

        <div  className='block md:hidden' onClick={handleNav}>
            {nav ? <AiOutlineClose size={25} className="cursor-pointer"/> : <AiOutlineMenu size={25} className="cursor-pointer"/>}
        </div>

        <div className={nav ? 'fixed flex flex-col items-center justify-center left-0 top-0 w-[60%] h-full bg-white ease-in-out duration-500' : 'fixed left-[-100%] '}>
            <ul className='text-[18px] text-[#434343]'>
               <li className="p-4 cursor-pointer"><a href="">Home</a></li>
               <li className="p-4 cursor-pointer"><a href="" >Place to stay</a></li>
               <li className="p-4 cursor-pointer"><a href="" >NFTs</a></li>
               <li className="p-4 cursor-pointer"><a href="" >Community</a></li>
            </ul>
            <button className="  bg-[#A02279] text-white text-[18px] px-2 py-1 ml-6 rounded-md cursor-pointer"  onClick={() => setShowModal(true)}>Connect wallet</button>
        </div>
        
    </div>
    <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
    </Fragment>
  )
}

export default Navbar