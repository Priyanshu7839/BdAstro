import React, { useEffect, useState } from 'react'
import SplashScreen from './SplashScreen'
import InfoScreen from './InfoScreen'

const AnimateSplash = () => {

     const [SplashScreenEnded,setSplashScreenEnded] = useState(false)
    
      useEffect(()=>{
          setTimeout(() => {
              setSplashScreenEnded(true)
          }, 4000);
      },[])
  return (
     <div>
            
    
            {SplashScreenEnded ? 
            <InfoScreen/>
    
            :  
            <SplashScreen/>
    
          }
            
        </div>
  )
}

export default AnimateSplash
