import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";



const Footer = () => {
  return (
    <div className='font-RedRose bg-[#1D1D1E] text-white flex flex-col max-w-[1440px] mx-auto '>
        <div className='flex flex-col justify-left items-left p-10  md:flex-row md:justify-between md:pb-0  '>
        <div>
            <img src="/assets/logo2.png" alt="Logo" className='w-[150px] pb-8 md:pb-[80px]'/>   
            <div className='flex justify-start mb-10 '>
                <GrFacebookOption className='mr-4 '/>
                <AiOutlineInstagram className='mr-4'/>
                <AiOutlineTwitter className='mr-4'/>
            </div>
        </div>
        <div >
            <h5 className='text-xl font-semibold '>Community</h5>
            <ul className='text-[14px] my-3'>
                <li className=' my-1'>NFT</li>
                <li className=' my-1'>Tokens</li>
                <li className=' my-1'>Landlords</li>
                <li className=' my-1'>Discord</li>
            </ul>
        </div>
        <div>
            <h5 className='text-xl font-semibold'>Places</h5>
            <ul className='text-[14px] my-3 '>
                <li className=' my-1'>Castle</li>
                <li className=' my-1'>Farms</li>
                <li className=' my-1'>Beach</li>
                <li className=' my-1'>Learn more</li>
            </ul>
        </div>
        <div>
            <h5 className='text-xl font-semibold'>About us</h5>
            <ul className='text-[14px] mt-3 '>
                <li className=' my-1'>Road map</li>
                <li className=' my-1'>Creators</li>
                <li className=' my-1'>Career</li>
                <li className=' my-1'>Contact us</li>
            </ul>
        </div>
        </div>
        <p className='text-[15px] pl-9 pb-4 px-4 '> &#169; 2022 Metabnb</p>

    </div>
  )
}

export default Footer