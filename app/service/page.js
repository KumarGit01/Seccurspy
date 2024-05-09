"use client"
import Image from 'next/image';
import styles from '../service.module.css';
import s14 from '../../images/s14.jpeg';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


const Service = () => {
const [state,setState] = useState('kk1')
  const Tt = (c) =>{
setState(c)
}


  
  return (
    <>
      <h1 className={styles.about}>Services</h1>
      <div className={styles.head} >
        <h2>Protection Services</h2>
        <div className={styles.p}>
        <div className={styles.p1}>
          <p><span><FaPlus/></span>Security Consulting</p>
          <p><span><FaPlus/></span>Alarm Systems and Monitoring</p>
          <p><span><FaPlus/></span>Access Control</p>
          <p><span><FaPlus/></span>Video Surveillance</p>
          </div>
          <div className={styles.p1}>
          <p><span><FaPlus/></span>Security Training</p>
          <p><span><FaPlus/></span>Retail Security</p>
          <p><span><FaPlus/></span>Physical Protection Services</p>
          <p><span><FaPlus/></span>Information Security</p>
          </div>
          </div>
      </div>

      <div className={styles.ed} >
      <h1 className={styles.edh}> Our Services, Your Peace of Mind</h1>
  <div >
    <div className={styles.eds}>
      <Image src={s14} alt='i' />
   <div className={styles.tra}>
    <div >
    <h1>Electronic Security<span>{state === 'kk1' ? <FaPlus/> : <FaMinus/> }</span></h1>
    <button  onClick={()=>Tt('kk1')} className={styles.kk}></button>
<div className={`${state === 'kk1' ? styles.se1 : styles.se }`}>
<p >Installation and monitoring of closed-circuit television cameras 
  to deter and record security incidents.
</p>
</div>
    </div>
    <div>
<h1>Physical Security<span>{state === 'kk2' ? <FaPlus/> : <FaMinus/> }</span></h1>

<button onClick={()=>Tt('kk2')} className={styles.kk}></button>
<div className={`${state === 'kk2' ? styles.se1 : styles.se }`}>

<p >Managing who enters and exits a facility, often using 
  technologies like key cards, biometrics, or PIN codes.
</p>
</div>
</div>
    <div>
    <h1>Cybersecurity <span>{state === 'kk3' ? <FaPlus/> : <FaMinus/> }</span></h1>
    <button onClick={()=>Tt('kk3')} className={styles.kk}></button>

    <div className={`${state === 'kk3' ? styles.se1 : styles.se }`}>

 <p > Protecting computer networks from cyber threats, including firewalls,
   intrusion detection systems, and antivirus software.
 </p>
 </div>
    </div>

      </div>
    </div>
  
  
    <div  className={styles.eds}>
      <div className={styles.edsach}>
    <div className={styles.tra}>
    <h1 className={styles.trah1}>Innovating Security Solutions</h1>
    <div >
    <h1>Alarm Monitoring<span>{state === 'kk1' ?<FaMinus/> : <FaPlus/>  }</span></h1>
    <button  onClick={()=>Tt('kk1')} className={styles.kk}></button>
<div className={`${state === 'kk1' ? styles.se1 : styles.se }`}>
<p >Surveillance of alarms, sensors, and security systems by a central 
monitoring station that can dispatch authorities if needed.</p>
</div>
    </div>
    <div>
<h1>Security Consulting<span>{state === 'kk2' ?<FaMinus/> : <FaPlus/>  }</span></h1>

<button onClick={()=>Tt('kk2')} className={styles.kk}></button>
<div className={`${state === 'kk2' ? styles.se1 : styles.se }`}>

<p >Identifying and evaluating security risks to develop effective security
   strategies.
</p>
</div>
</div>
    <div>
    <h1>Event Security<span>{state === 'kk3' ? <FaMinus/> : <FaPlus/>  }</span></h1>
    <button onClick={()=>Tt('kk3')} className={styles.kk}></button>

    <div className={`${state === 'kk3' ? styles.se1 : styles.se }`}>

 <p > Managing large gatherings, such as concerts or sporting events, to
   buttonvent security incidents and ensure safety.
 </p>
 </div>
    </div>

      </div>
    <Image src={s14} alt='i' />

    </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Service;
