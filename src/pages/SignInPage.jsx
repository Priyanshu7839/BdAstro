import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react'
import React from 'react'
import LoginScreenImg from '../assets/LoginScreenImg.jpeg'
import AppleLogo from '../assets/AppleLogo.png'
import GoogleLogo from '../assets/GoogleLogo.png'
import { useNavigate } from 'react-router-dom'
const SignInPage = () => {

    const navigate = useNavigate()
  return (
    <div className="h-[100vh] w-full flex flex-col items-center" style={{ background: '#EDE3D5' }}>
      <div className="w-full flex flex-col relative" style={{ maxWidth: '480px', height: '100dvh'     }}>
            
                <div className='h-full overflow-hidden'>
                        <img src={LoginScreenImg} alt="" />
                </div>
                <div 
                
                className='px-6 py-8 rounded-t-[40px] mt-[-30px] bg-[#FBF7F2] border-t-[1.5px] border-white flex flex-col gap-5'>

                   <div className='flex items-center flex-col justify-center gap-3'>
                     <h1 className='font-extrabold text-[22px] text-[#4A0E17]'>
                        अपने मार्गदर्शन को जारी रखें
                    </h1>

                    <p className='text-[14px] text-[#6E5B5E]'>लॉगिन करें और अपनी यात्रा वहीं से आगे बढ़ाएं</p>

                    



                    <p className='text-[12px] font-medium text-[#6E5B5E]  text-center flex items-center justify-center gap-1'>
                        <ShieldCheck color='#4A0E17' size={14} strokeWidth={3}/>
                        आपकी जानकारी सुरक्षित है और गोपनीयता रखी जाती है।</p>

                        <div className="flex items-center gap-3 w-full max-w-md bg-white border border-[#F0E4D8] rounded-2xl px-5 py-4 shadow-sm">
  <span className="text-xl">🇮🇳</span>
  <span className="font-semibold text-[#1A1A1A] text-[16px]">+91</span>
  <ChevronDown size={16} className="text-gray-500" />
  <div className="w-[1px] h-6 bg-gray-200" />
  <input
    type="tel"
    placeholder="मोबाइल नंबर दर्ज करें"
    className="flex-1 bg-transparent outline-none text-[16px] text-gray-400 placeholder:text-gray-400"
  />
</div>


                          <button 
                          onClick={()=>{navigate('/Home')}}
                          className='flex gap-1 items-center justify-center w-full py-4 bg-[#4A0E17] drop-shadow-2xl drop-shadow-[#4A0E172B] rounded-2xl text-[18px] text-[#FFFFFF] font-extrabold' >
OTP भेजें <ArrowRight size={18} strokeWidth={4} className='mt-[-2px]'/>
                   </button>
                   </div>


                   <div className='flex items-center justify-center gap-[16px]'>
                        <div className='w-full h-[1px] bg-[#E5D9D2]'></div>
                        <p className='text-[#6E5B5E] text-medium text-[13px]'>या</p>

                        <div className='w-full h-[1px] bg-[#E5D9D2]'></div>

                   </div>



                        <div className='flex flex-col gap-3'>
                             <button 
                   onClick={()=>{navigate('/Home')}}
        
       className="px-5 py-4 bg-[#ffffff] font-semibold text-[16px] text-[#111827] w-full rounded-2xl border border-[#EADFD8] shadow-sm flex items-center justify-center gap-2">
        <img src={AppleLogo} alt="" className='w-[18px] mb-1' />
        Google से जारी रखें
      </button>
      {/* ------------------------------------------------------------------------------------------------------------- */}
       <button 

                   onClick={()=>{navigate('/Home')}}

       className="px-5 py-4 bg-[#ffffff] font-semibold text-[16px] text-[#111827] w-full rounded-2xl border border-[#EADFD8] shadow-sm flex items-center justify-center gap-2">
        <img src={GoogleLogo} alt="" className='w-[25px]' />
        Apple से जारी रखें
      </button>
                        </div>

                 





                   <div className='w-full text-center font-medium text-[14px] text-[#6E5B5E]'>
                        <p className='font-medium text-[12px]'>
                            हम आपकी जानकारी को कभी साझा नहीं करते।
                            <br/>
                            जारी रखते हुए, आप हमारी <span className="text-[#4A0E17] underline">गोपनीयता नीति</span>  और <span className="text-[#4A0E17] underline">शर्तों </span>  से सहमत हैं।
                        </p>

                        



                   </div>

                </div>
      </div>
      
    </div>
  )
}

export default SignInPage
