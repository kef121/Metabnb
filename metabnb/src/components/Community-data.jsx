import React from "react"
import Nfts from "./Community"


const imageData = [
   {
      id: 1,
      img:"assets/nft-5.png",
      title:"Desert king",
      subtitle:"1MBT per night",
      distance:"2345km away",
      duration:"available for 2weeks stay",
      starimage:"assets/Star-2.png",
      heart:"assets/Vector.svg"
   },
   {
      id: 2,
      img:"assets/nft-6.png",
      title:"Desert king",
      subtitle:"1MBT per night",
      distance:"2345km away",
      duration:"available for 2weeks stay",
      starimage:"assets/Star-2.png",
      heart:"assets/Vector.svg"
   },
   {
      id: 3,
      img:"assets/nft-7.png",
      title:"Desert king",
      subtitle:"1MBT per night",
      distance:"2345km away",
      duration:"available for 2weeks stay",
      starimage:"assets/Star-2.png",
      heart:"assets/Vector.svg"
   },
   {
      id: 4,
      img:"assets/nft-8.png",
      title:"Desert king",
      subtitle:"1MBT per night",
      distance:"2345km away",
      duration:"available for 2weeks stay",
      starimage:"assets/Star-2.png",
      heart:"assets/Vector.svg"
   },
   {
      id: 5,
      img:"assets/nft-1.png",
      title:"Desert king",
      subtitle:"1MBT per night",
      distance:"2345km away",
      duration:"available for 2weeks stay",
      starimage:"assets/Star-2.png",
      heart:"assets/Vector.svg"
   },
   {
      id: 6,
      img:"assets/nft-2.png",
      title:"Desert king",
      subtitle:"1MBT per night",
      distance:"2345km away",
      duration:"available for 2weeks stay",
      starimage:"assets/Star-2.png",
      heart:"assets/Vector.svg"
   },
   {
      id: 7,
      img:"assets/nft-3.png",
      title:"Desert king",
      subtitle:"1MBT per night",
      distance:"2345km away",
      duration:"available for 2weeks stay",
      starimage:"assets/Star-2.png",
      heart:"assets/Vector.svg"
   },
   {
      id: 8,
      img:"assets/nft-4.png",
      title:"Desert king",
      subtitle:"1MBT per night",
      distance:"2345km away",
      duration:"available for 2weeks stay",
      starimage:"assets/Star-2.png",
      heart:"assets/Vector.svg"
   },
   
  
]

const Data = () => {
   
  return (
    <div >
      
      <div className="flex flex-col items-center justify-center" >
      <h1 className='px-4 text-3xl  font-bold pt-4 pb-6 '>Inspiration for your next adventure</h1>
      </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
         {imageData.map(img =>
            (

               <Nfts 
                 key={img.id}
                 img={img.img}
                 title={img.title}
                 subtitle={img.subtitle}
                 distance={img.distance}
                 duration={img.duration}
                 starimage={img.starimage}
                 heart={img.heart}
               />
            )
            )  }

       </div>
    </div>
  )
}

export default Data
 
    
   
  


