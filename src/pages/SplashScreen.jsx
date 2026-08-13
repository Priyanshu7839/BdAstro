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
   <div className="h-[100vh]  w-full flex flex-col items-center" style={{ background: '#EDE3D5' }}>
      <div className="w-full flex flex-col relative overflow-hidden h-full" style={{ maxWidth: '550px', minHeight: '100vh' }}>
       

            <img src={SplashScreenImg} alt=""  className='object-fill h-full w-full'
            
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
