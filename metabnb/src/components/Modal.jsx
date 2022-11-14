import React, { useState} from 'react'
import Metamask from "../assets/metamask.png"
import Walletconnect from "../assets/walletconnect.png"
import Arrow from "../assets/arrow-right.png"
import Close from "../assets/wallet-close.png"

const Modal = ({ isVisible, onClose}) => {
    if ( !isVisible) return null;
  
    const handleClose = (e) => {
       if(e.target.id === "wrapper" ) onClose() 
    }

  return (
    
    <div>
         {/*   Modal*/ }
      <div  className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={() => onClose()} id="wrapper">
        <div className='w-[400px] md:w-[500px] '>
          <div className='bg-white rounded-lg h-64 '>
            <div className='flex flex-row justify-between items-center p-2 px-4 md:px-6'>
              <h2 className='text-[20px] font-medium text-[#333333]'>Connect Wallet</h2>
              <button onClick={() => onClose()}><img src={Close} alt="Close" className='w-[16px]'/></button>
            </div>
            <hr/>
            <p className='p-2 px-4 text-[15px] md:px-6'>Choose your preferred wallet:</p>
            
            <div className='flex justify-between items-center cursor-pointer hover:bg-[#F1F3F9]  p-2 border border-gray-300 mx-4 rounded-lg my-2 md:px-6'>
            <div className='flex flex-row items-center '>
              <img src={Metamask} alt="Metamask" className='w-[35px]'/>
              <h6 className='pl-4 text-[18px] text-[#000000]'>Metamask</h6>
              </div>
              <img src={Arrow} alt="Arrow"  className='text-[#777777]  w-[20px]'/>
            </div>
            <div className='flex justify-between items-center cursor-pointer hover:bg-[#F1F3F9]  p-2 border border-gray-300 mx-4  rounded-lg my-4 md:px-6 '>
            <div className='flex flex-row items-center'>
              <img src={Walletconnect} alt="Metamask" className='w-[35px]' />
              <h6 className='pl-4 text-[18px] text-[#000000]'>WalletConnect</h6>
              </div>
              <img src={Arrow} alt="Arrow"  className='text-[#777777]  w-[20px]'/>
            </div>
            

          </div>

        </div>
      </div>
    </div>
    
  )
}

export default Modal