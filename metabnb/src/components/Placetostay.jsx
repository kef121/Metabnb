import React, {useState} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


const Placetostay = () => {

   const list = [
     "Resturant", "Cottage",
      "Castle", "fantast city", "beach", "Carbins", "Off-grid", "Farm"
   ]

   
  return (
    <div className="font-RedRose">
        <Navbar />
        
        <div className='flex flex-row justify-between items-center py-10 py-4 px-2 md:py-4 px-8'>
          
           <div id="slider" className='flex flex-row w-full h-full overflow-y-scroll scroll  whitespace-nowrap pb-2 '>
           <ul className='flex flex-row text-center justify-center items-center  text-xl'>
           {
              list.map((item) => (
                <li className='px-2'>
                  {item}
                </li>
              ))
            }
            </ul>
            </div>
          
          <div className='border border-[#B4B4B4] hover:bg-[#F1F3F9] py-3 px-3 flex flex-row gap-6 rounded-lg justify-between md:gap-8  md:px-6 lg:gap-10'>
            <span className='text-xl'>Location </span>
            <img src="/assets/setting-5.png" alt="Setting" className='w-9 pr-4'/> 
          </div>
        </div>
        



        <Footer />
    </div>
  )
}

export default Placetostay