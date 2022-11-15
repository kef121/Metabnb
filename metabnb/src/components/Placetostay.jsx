import React from 'react'




const Placetostay = ({id, img, title, subtitle, distance, duration, starimage, heart}) => {

  
   
  return (
    <div className="font-RedRose z-0">
        
        

      {/* Placetostay section */}
      <div className='p-10  lg:p-4'>
       
       
       <div className=' grid grid-cols-1 '>
       <div className=' border border-[#A3A3A3] p-3 rounded-2xl '>
         <div className='flex flex-col justify-between  items-end relative '>
           <img src={img} alt="nft" />
           <img src={heart} alt="Heart" className=' justify-end absolute  cursor-pointer pt-4 w-6 mr-3 '/>
           
         </div>
           
         
         <div className='flex justify-between pt-2 text-xl'>
           <p className='text-[13px]'>{title}</p>
           <p className='font-bold'>{subtitle}</p>
         </div>
         <div className='flex flex-row justify-between pt-2 text-[13px] md:flex-col lg:flex-row'>
           <p className='pb-1'>{distance}</p>
           <p >{duration}</p>
           
         </div>
         <span className='w-[12px] flex pt-3 '><img src={starimage} alt="Star" className='mr-4 w-6 text-[#A02279] ' /> <img src={starimage} alt="Star" className='mr-4 w-6 text-[#A02279] ' /> <img src={starimage} alt="Star" className='mr-4 w-6 text-[#A02279] ' /> <img src={starimage} alt="Star" className='mr-4 w-6 text-[#A02279] ' /> <img src={starimage} alt="Star" className=' w-6 text-[#A02279] ' /></span>
        </div>
       </div>
     </div>
        
    </div>
   
  )
}

export default Placetostay