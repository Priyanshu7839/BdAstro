import React, { useEffect, useState } from 'react'

import SplashScreenImg from '../assets/SplashScreenImg.jpeg'
import { useNavigate } from 'react-router-dom'

const SplashScreen = () => {
  const navigate = useNavigate()

    const [SplashScreenEnded,setSplashScreenEnded] = useState(false)
        
          useEffect(()=>{
              setTimeout(() => {
                  navigate('/Info')
              }, 4000);
          },[])
  return (
   <div className="min-h-dvh w-full flex flex-col items-center" style={{ background: '#EDE3D5' }}>
      <div className="w-full flex flex-col relative overflow-hidden rounded-[40px]" style={{ maxWidth: '480px', minHeight: '100dvh' }}>
       

            <img src={SplashScreenImg} alt=""  className='object-cover'
            
             style={{
          clipPath: "circle(0% at 50% 50%)",
          animation: "circleReveal 1.5s ease-in-out forwards",
        }}
      />

      <style>{`
        @keyframes circleReveal {
          0% {
            clip-path: circle(0% at 50% 50%);
          }

          100% {
            clip-path: circle(150% at 50% 50%);
          }
        }
      `}</style>


      </div>
    </div>
  )
}

export default SplashScreen
