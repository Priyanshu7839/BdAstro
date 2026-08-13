import { ArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import InfoScreenImg from '../assets/InfoScreenImg.jpeg'
import { useNavigate } from 'react-router-dom'
const InfoScreen = () => {

    const navigate = useNavigate()

    
  return (
    <div className="h-[100vh] w-full flex flex-col items-center" style={{ background: '#EDE3D5' }}>
      <div className="w-full flex flex-col relative" style={{ maxWidth: '550px', height: '100dvh'     }}>
            
                <div className=' overflow-hidden h-full'>
                        <img src={InfoScreenImg} alt=""  className='h-full'/>
                </div>
                <div className='px-6 py-8 rounded-t-[40px] mt-[-35px] bg-[#3E060D] border-t-[1.5px] border-[#E08F3B] flex flex-col gap-10'>

                   <div className='flex items-center flex-col justify-center gap-3'>
                     <h1 className='font-extrabold text-[34px] text-[#FFDEAF]'>
                        मन में सवाल है?
                    </h1>

                    <p className='text-[22px] text-[#FFDEAF] font-semibold'>दिशा यहीं से मिलेगी।</p>

                    <div className='w-full flex items-center justify-center gap-2.5'>
                        <div className='w-[44px] h-[1px] bg-[#724A51]'></div>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_154_95)">
<path d="M4.00037 1.38989C4.00808 1.38994 4.0157 1.39182 4.02283 1.39478L4.04236 1.40747L6.59216 3.95728C6.59768 3.96279 6.60283 3.9696 6.60583 3.97681C6.60884 3.98405 6.60974 3.99241 6.60974 4.00024C6.6097 4.0079 6.60875 4.01562 6.60583 4.02271L6.59216 4.04224L4.04236 6.59204C4.03682 6.59758 4.03007 6.60271 4.02283 6.60571C4.01574 6.60863 4.00803 6.60957 4.00037 6.60962C3.99253 6.60962 3.98417 6.60871 3.97693 6.60571C3.96972 6.60271 3.96291 6.59756 3.9574 6.59204L1.40759 4.04224L1.3949 4.02271C1.39194 4.01558 1.39006 4.00796 1.39001 4.00024C1.39001 3.99241 1.3919 3.98404 1.3949 3.97681L1.40759 3.95728L3.9574 1.40747C3.96285 1.40202 3.96982 1.39777 3.97693 1.39478C3.98417 1.39178 3.99253 1.38989 4.00037 1.38989Z" stroke="#EFA953" stroke-width="1.5"/>
</g>
<defs>
<clipPath id="clip0_154_95">
<rect width="8" height="8" fill="white"/>
</clipPath>
</defs>
</svg>

                        <div className='w-[44px] h-[1px] bg-[#724A51]'></div>
                        

                    </div>



                    <p className='text-[15px] font-medium text-[#F5E4DC]  text-center'>अपने जीवन के महत्त्वपूर्ण सवाल पूछें। <br/>
व्यक्तिगत ज्योतिषीय मार्गदर्शन पाएं।</p>
                   </div>


                   <button
                   onClick={()=>{navigate('/SignIn')}}
                   className='flex gap-1 items-center justify-center w-full py-3 bg-linear-to-b from-[#FCD084] to-[#E08F3B] drop-shadow-2xl drop-shadow-[#E08F3B40] rounded-full text-[18px] text-[#41080f] font-extrabold' >
शुरू करें <ArrowRight size={18} strokeWidth={4} className='mt-[-2px]'/>
                   </button>


                   <div className='w-full text-center font-medium text-[14px] text-[#F5E4DC]'>
                    पहले से सदस्य हैं? <span className='text-[#FFDEAF] font-bold underline'>लॉग इन करें</span>



                   </div>

                </div>
      </div>
      
    </div>
  )
}

export default InfoScreen
