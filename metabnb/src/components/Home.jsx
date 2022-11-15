import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';


import Data from './Community-data'


const Home = () => {
  

  return (
    
    <div className="font-RedRose">
      <Navbar />

      {/* Hero section */}
        <div className=" max-w-[1440px] mx-auto flex flex-col justify-center items-center p-10  md:flex-row  ">
           <div className=' flex flex-col justify-center items-left mb-10 md:pr-6  '>
           <h1 className="text-4xl font-medium text-[#434343] my-2 py-2 md:py-4 lg:text-5xl">Rent a 
                <span className='text-[#A02279] font-bold'> Place</span> away from
                <span className='text-[#A02279] font-bold'> Home</span> in the <span className='text-[#A02279] font-bold'>Metaverse</span></h1>
                <p className="text-[20px] text-[#434343] font-medium ">we provide you access to luxury and affordable houses
                in the metaverse, get a chance to turn your
                imagination to reality at your comfort zone</p>
                <div className="flex flex-row  mt-8  ">
                    <input placeholder='Search for location' className="border border-[#A3A3A3] focus:border-[#A02279] text-[16px]  pl-2 mb-5 py-1 rounded-l-md outline-0 md:pr-[5px] lg:pr-[150px]"/>
                    <span className=' bg-[#A02279] text-xl text-white mb-5 rounded-r-md px-2 cursor-pointer md:px-[30px] lg:px-[50px]'>Search</span>
                </div>
            </div>
            <img src='/assets/group-1.png'  alt="Group1" className="w-full justify-center md:w-5/12 " />
        </div>

      {/* Brand section */}
      <div>
        <ul className='bg-[#A02279] flex flex-col text-white items-center justify-center py-3 md:flex-row md:justify-evenly '>
          <img src="/assets/MBToken.png" className="w-[150px] py-4" alt="Brand1" />
          <img src="/assets/METAMASK-3.png" className="w-[150px] py-4" alt="Brand2" />
          <img src="/assets/OpenSea.png" className="w-[150px] py-4" alt="Brand3" />
        </ul>
      </div>

      <Data />

       {/* NFTs section */}
       <div className=" max-w-[1440px] bg-[#A02279] mx-auto flex flex-col justify-between items-center p-10  md:flex-row mt-4 ">
           <div className=' flex flex-col justify-center items-left mb-10 md:pr-6  '>
           <h1 className="text-3xl font-medium text-white my-2 py-2 md:py-4 lg:text-4xl">Metabnb NFTs</h1>
            <p className="text-[14px] text-white font-medium md:pr-[150px]">Discover our NFT gift cards
              collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs
              gives our customer access to loads of our exclusive services.</p>
              <button className=" w-[120px] text-[#A02279] bg-white  text-[15px]  py-1 my-11 rounded-md cursor-pointer" >Learn more</button>
            </div>
            <img src="/assets/group-2.png"  alt="Group1" className="w-full justify-center md:w-5/12 " />
        </div>
        <Footer />
    </div>
    
   
  )
}

export default Home