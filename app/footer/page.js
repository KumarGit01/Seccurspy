"use client"
import { useRouter } from 'next/navigation';
import { MdOutlineCopyright } from "react-icons/md";
import style from './navbar.module.css'
import { useEffect, useState } from 'react';

const Footer = () => {
  const router = useRouter()
const [show,setShow] = useState(false)

  useEffect(()=>{
    const change =()=>{
      if (window.scrollY > window.innerHeight/10*9)  {
        setShow(!show);
      }
}
window.addEventListener('scroll',change)
return()=>{
window.removeEventListener('scroll',change)
}
},[])

console.log(window.innerHeight/10*8,show)
  const rout=()=>{
    router.push('/contact')
      }
  return (
<>
    <div className={style.connect}>
<h1 className={style.connect0}>Contact Us</h1>

<h1 className={style.connect1}>Connect Today</h1>
<h3 className={style.connect2}>Connecting You to Protection</h3>
<div className={style.super}>
<h1 className={style.super1}>Have a project in mind?</h1>
<h3 className={style.super2}> Don't hesitate to say Hello</h3>
<button className={style.super3} onClick={rout}>Let's Talk</button>

</div>
</div>
    <div className={style.footer}>
    <div className={style.f1}>
    <div>
    <h1>Head Office</h1>
  <p>+91 96323 94942</p>
  <p>info@securspy.com</p>
  <p>02 SRC Towers Dommasandra, Sarjapura main road, Bengaluru, Karnataka 562125</p>
  </div>
  <div>
  <h1>Sub Branch-1</h1>
  <p>+91 89513 51408<br /></p>
  <p>info@securspy.com<br /></p>
  <p>29th A Cross Rd, Geetha Colony, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560041 </p>
  </div>
  <div>
  <h1> Sub Branch-2 </h1>
  <p>+91 63629 49812<br /></p>
  <p>info@securspy.com<br /></p>
  <p>Nearby Address: B74, 3rd Cross Rd, Peenya II Phase, Peenya, Bengaluru, Karnataka 560058</p>
  </div>
  </div>
  <h1 className={style.foc}><span><MdOutlineCopyright/></span> Securspy 2019 - Bengaluru </h1>
  </div>

  </>

  );
};

export default Footer;
