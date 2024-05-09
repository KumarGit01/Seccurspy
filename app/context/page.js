"use client"
import { useEffect, useState } from 'react';

const Con=()=>{
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        const onScroll = () => {
          const triggerBottom = window.innerHeight / 9 * 10;
          const serviceElement = document.getElementById('Call');
          const se = document.getElementById('Call1'); 

      
    
          if (serviceElement || se  ) {
            const boxTop = serviceElement.getBoundingClientRect().top;
            const boxTop1 = serviceElement.getBoundingClientRect().top;
            const boxTop2 = serviceElement.getBoundingClientRect().top;
    
              if ((boxTop || boxTop1 || boxTop2 )  < triggerBottom) {
                setIsVisible(true)
              } else {
                setIsVisible(false)

              }
            }
          };
        window.addEventListener('scroll', onScroll);
      
        return () => {
          window.removeEventListener('scroll', onScroll);
        };
      }, []);


return isVisible

}

export default Con