import React from 'react'

const NFT = () => {
  return (
    <div>
          {/* NFTs section */}
        <div id="/Nfts" className=" max-w-[1440px] bg-[#A02279] mx-auto flex flex-col justify-between items-center p-10  md:flex-row mt-4 ">
           <div className=' flex flex-col justify-center items-left mb-10 md:pr-6  '>
           <h1 className="text-3xl font-medium text-white my-2 py-2 md:py-4 lg:text-4xl">Metabnb NFTs</h1>
            <p className="text-[14px] text-white font-medium md:pr-[150px]">Discover our NFT gift cards
              collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs
              gives our customer access to loads of our exclusive services.</p>
              <button className=" w-[120px] text-[#A02279] bg-white  text-[15px]  py-1 my-11 rounded-md cursor-pointer" >Learn more</button>
            </div>
            <img src="/assets/group-2.png"  alt="Group1" className="w-full justify-center md:w-5/12 " />
        </div>
    </div>
  )
}

export default NFT