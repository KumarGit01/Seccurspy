"use client"
import { useState } from 'react';
import styles from '../About.module.css'; 
import Image from 'next/image';
import ns1 from '../../images/S images/ns1.jpg';
import ns2 from '../../images/S images/ns2.jpg';
import ns3 from '../../images/S images/ns3.jpg';
import img from '../../images/S images/ns2.jpg';
import { IoArrowForwardSharp } from "react-icons/io5";

const About = () => {

  const [state,setState] = useState('')
 const tra=(a)=>{
  setState(a)
 }

  return (
    <>
      <h1 className={styles.about}>About Us</h1>
    <div className={styles.acw} > 
     <div className={styles.ac}>
      <div>
      <h1>Company Overview </h1>
<h3>Discover Our Security Story</h3>
</div>

<div>
  <Image src={img} alt='hh'  priority={false} placeholder = "blur" quality={5}/>
</div>
</div>
<p>Welcome to Secury Solutions, your partner in comprehensive security services.
   With a commitment to excellence and a focus on innovation, we’re dedicated 
   to safeguarding your world. Our mission is to provide top-notch security 
   solutions that empower you to live and work with confidence.Secury
    Established in 2005, SecureGuard Solutions was born out of a vision to 
    redefine security in a rapidly changing world. Founded by Jane Anderson, 
    a security industry veteran with a passion for protecting communities, our 
    company has grown to become a trusted name in security services.At Secury , our mission is simple but profound: to safeguard your world, one step at a time. We believe that security is not just a service; it’s a commitment to the safety, well-being, and peace of mind of our clients.Together, we can create a safer world. Whether you’re a business owner, homeowner, or community leader, we invite you to join us in our mission to secure your world, one step at a time.</p>
</div>

<div className={styles.slider}  > 
  <div className={`${styles.slider1} ${state === 'left'? styles.s1left : styles.s1right } `}>
<div className={styles.s1}>
  <Image src={ns1} alt='ii' priority={false} placeholder = "blur" quality={5} /><br/>
  <h1>Company Founding</h1>
  <p>
John Smith and Jane Doe co-found Secury Security Solutions. The company starts as a small local security services provider.
<br/>1990</p>
</div>

<div className={styles.s2}>
  <h1>Expansion to Regional Markets</h1>
<p>
Secury Security Solutions expands its service area to neighboring cities and regions. The company establishes its first regional office.
<br/>1995</p>
<Image src={ns2} alt='ii'  priority={false} placeholder = "blur" quality={5} />

</div>

<div className={styles.s3}>
<Image src={ns3} alt='ii' priority={false} placeholder = "blur" quality={5} /><br/>
<h1>Introduction of Advanced Technology</h1>
<p>
The company embraces technology, implementing a state-of-the-art tracking system that provides real-time visibility of shipments to clients.
<br/>2000</p>

</div>
<div  className={styles.s4}>
  <h1>ISO Certification</h1>
<p>
The company gains national recognition for its Achieves ISO 9001 certification for quality management. Expands into the government and critical infrastructure security markets. 2020: Global Expansion
<br/>
2015</p>
<Image src={ns2} alt='ii'  priority={false} placeholder = "blur" quality={5}/>

</div>
</div>
</div>

<div className={styles.sb} >
  <button className={styles.sb1} onClick={()=>tra('left')}><IoArrowForwardSharp /></button>
  <button className={styles.sb2} onClick={()=>tra('right')}><IoArrowForwardSharp /></button>
</div>


    </>
  );
};

export default About;
