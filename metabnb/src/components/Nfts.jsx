import React from 'react'
import Star from "../assets/Star-2.png";
import Heart from "../assets/Vector.svg"


const Nfts = (props) => {
  

  return (
    <div className="font-RedRose">

        {/* Community section */}
      <div className='p-10 '>
        <p className='text-3xl font-bold pb-6 '>Inspiration for your next adventure</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='border border-[#A3A3A3] p-4 rounded-2xl '>
          <div className='flex justify-start items-start relative  '>
            <img src="../assets/nft-1.png" alt="nft" />
            <img src={Heart} alt="Heart" className='absolute fill-[#A02279] pt-4 w-6 mr-4'/>
            
          </div>
            
          
          <div className='flex justify-between pt-4 text-xl'>
            <p>Desert king</p>
            <p className='font-bold'>1MBT per night</p>
          </div>
          <div className='flex flex-col justify-between pt-4 text-xl md:flex-row'>
            <p className='pb-1'>2345km away</p>
            <p >available for 2weeks stay</p>
            
          </div>
          <span className='flex pt-4 '><img src={Star} alt="Star" className='mr-4 w-6 text-[#A02279] ' /> <img src={Star} alt="Star" className='mr-4 w-6 text-[#A02279] ' /> <img src={Star} alt="Star" className='mr-4 w-6 text-[#A02279] ' /> <img src={Star} alt="Star" className='mr-4 w-6 text-[#A02279] ' /> <img src={Star} alt="Star" className=' w-6 text-[#A02279] ' /></span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Nfts