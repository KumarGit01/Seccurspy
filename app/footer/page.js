"use client"
import { useRouter } from 'next/navigation';
import { MdOutlineCopyright } from "react-icons/md";
import style from './navbar.module.css'

const Footer = () => {
  const router = useRouter()

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
    <h1>1st Office</h1>
  <p>555-1296</p>
  <p>info@secury.com</p>
  <p>123 Main Street, Suite 200 City: Anytown State: StateName</p>
  </div>
  <div>
  <h1>2st Office</h1>
  <p>+33 1 23 45 9966<br /></p>
  <p>info@securyparis.com<br /></p>
  <p>123 Rue de la Paix, 75002 Paris, France</p>
  </div>
  <div>
  <h1> 3rd Office </h1>
  <p>+49 30 12343693<br /></p>
  <p>info@securyberlin.com<br /></p>
  <p>Mauerstrasse 45, 10117 Berlin, Germany</p>
  </div>
  </div>
  <h1 className={style.foc}><span><MdOutlineCopyright/></span> Securspy 2024 - Bangolore </h1>
  </div>
  </>

  );
};

export default Footer;
