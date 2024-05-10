"use client"
import { useEffect, useRef, useState } from 'react';
import style from './Home.module.css'; 
import { FaArrowRight,FaGlobeAmericas } from "react-icons/fa";
import { GiMoebiusTriangle } from "react-icons/gi";
import { PiCircleNotchFill } from "react-icons/pi";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Link from 'next/link';


export default function Home() {
  const [setOver, setSetOver] = useState('s1');
  const [slider, setSlider] = useState('si1');
  

  const hanC = (clicked) => {
    setSetOver(clicked);
  };




  return (
    <>
      <div className={style.mainbg} >
      <div className={style. convexshape}  > </div>
     
     <div className={style.hn} > 
     </div>
        <div className={style.mid}>
<p className={style.p1} >ENSURING YOUR SAFETY</p>
<h1>EXPERIENCE SECURITY LIKE NEVER BEFORE!</h1>
<p className={style.p2}><span>Social Engineering</span>: This involves manipulating individuals into divulging confidential information or taking specific actions.</p>
        </div>
      </div>


<div className={style.Services}   > 
<div className={style.container}>
  <div  className={`${style.dropdown} ${style.trnslate}`} >All Services <span className={style.i}><FaArrowRight /> </span></div>
  <h1  className={`${style.h} ${style.trnslate}` } >Protection Services</h1>
  <div   className={`${style.subheading} ${style.trnslate}`}>Our Services, Your Peace of Mind</div>
  <p   className={ `${style.subheadingsub} ${style.trnslate}`}  >At Security, we offer a comprehensive range of security solutions designed to protect you, your assets, and your peace of mind.</p>
  <ul  className={ `${style.serviceslist} ${style.trnslate}` } >
    <li><span><IoMdAdd/></span>Security Consulting</li>
    <li><span><IoMdAdd/></span>Alarm Systems and Monitoring</li>
    <li><span><IoMdAdd/></span>Access Control</li>
    <li><span><IoMdAdd/></span>Video Surveillance</li>
    <li><span><IoMdAdd/></span>Security Training</li>
    <li><span><IoMdAdd/></span>Retail Security</li>
  </ul>
  <div className={ `${style.metrics} ${style.trnslate}`}>
    <div className={style.metric} >
      <h2 className={ `${style.metrich2} ${style.adct1}`}></h2>
      <p>Assessment and Analysis</p>
    </div>
    <div className={style.metric}>
      <h2 className={style.metrich2}></h2>
      <p>Strategy Development</p>
    </div>
    <div className={style.metric}>
      <h2 className={style.metrich2}></h2>
      <p>Ongoing Improvement</p> 
    </div>
  </div>
</div>
</div>

<div className={style.fix} >
  <div className={style.con} id = 'con'>

  </div>

 
  
  <div className={style.over} >
<div className={style.sss}>

<div className={style.ah}>
  <h1 className={ `${style.ah11} ${style.ahpro}`} ></h1>
  <span className={style.s1}>1.</span>
  <span className={style.s2}><FaGlobeAmericas/></span>
<span className={style.hj}>Identification of Assets</span>
<span className={style.pj}>The first step is to identify what needs protection. This includes physical assets like buildings, equipment, and inventory, as well as digital assets like data, networks, and software, and human assets such as employees or VIPs.</span>
</div>
<div className={style.ah}>
  <span className={style.s1}>2.</span>
  <span className={style.s2}><GiMoebiusTriangle/></span>
<span className={style.hj}>Threat Assessment </span>
<span className={style.pj}>Evaluate potential threats that could harm the identified assets. Threats can be natural (e.g., earthquakes, floods), human (e.g., theft, cyberattacks), or environmental (e.g., fires, chemical spills).</span>
</div>
<div className={style.ah}>
  <span className={style.s1}>3.</span>
  <span className={style.s2}><PiCircleNotchFill/></span>
<span className={style.hj}>Vulnerability Assessment</span>
<span className={style.pj}>Determine the weaknesses or vulnerabilities in the security of the assets. This involves assessing how susceptible each asset is to the identified threats.</span>
</div>
<div className={style.ah}>
  <span className={style.s1}>4.</span>
  <span className={style.s2}><MdOutlineCatchingPokemon/></span>
<span className={style.hj}>Risk Analysis</span>
<span className={style.pj}>Calculate the level of risk by combining the likelihood of a threat occurring with the potential impact it would have on the asset. This helps prioritize security measures.</span>
</div>
  </div>
  </div>
</div>

{/*------------------------------------------------------------------------ */}
<div className={style.over1} >
  <Link href='/about'><h1 className={style.abo}>About Us</h1></Link>
  <h1  className={style.co}>Company Overview</h1>
<h3 className={style.co1}>Discover Our Security Story</h3>

  <div className={style.s}>
    <div className={style.imghol}>
</div>
    <div className={style.heha}>
  <p className={` ${setOver === 's1' ? style.b1 : ''}`} onClick={()=>hanC('s1')}>History</p>
  <p className={` ${setOver === 's2' ? style.b1 : ''}`} onClick={()=>hanC('s2')}>Mission</p>
  <p className={` ${setOver === 's3' ? style.b1 : ''}`} onClick={()=>hanC('s3')}>Vision</p>
  </div>

  <div className={` ${setOver === 's1' ? style.act : style.s1}`}>
<p>Welcome to Secury Solutions, your partner in comprehensive security services. With a commitment to excellence and a focus on innovation, we're dedicated to safeguarding your world. Our mission is to provide top-notch security solutions that empower you to live and work with confidence.Secury Established in 2005, SecureGuard Solutions was born out of a vision to redefine security in a rapidly changing world. Founded by Jane Anderson, a security industry veteran with a passion for protecting communities, our company has grown to become a trusted name in security services.
</p>
</div>
<div className={` ${setOver === 's2' ? style.act : style.s2}`}>
<p>At Secury , our mission is simple but profound: to safeguard your world, one step at a time. We believe that security is not just a service; it's a commitment to the safety, well-being, and peace of mind of our clients.Together, we can create a safer world. Whether you're a business owner, homeowner, or community leader, we invite you to join us in our mission to secure your world, one step at a time.</p>
</div>
<div className={` ${setOver === 's3' ? style.act : style.s3}`}>
<p>At Secury, our vision is clear: to redefine security and create a safer tomorrow for our clients, communities, and the world at large. We are dedicated to being at the forefront of innovation and excellence in the security industry.We invite you to join us on our journey to redefine security for a safer tomorrow. Together, we can shape a future where safety is not just a goal but a reality.Thank you for considering Secury as your trusted partner in protection. We look forward to working with you to achieve our shared vision of a safer world.</p>
</div>

<div className={style.per}>
  <div className={style.per1}>
<div>Risk Reduction </div>
<div>95%</div>
</div>
<div className={style.per1}>
<div>Incident Prevention </div>
<div>85%</div>
</div>
<div className={style.per1}>
<div>Data Protection </div>
<div>75%</div>
</div>
</div>


  </div>
</div>



{/*------------------------------------------------------------------------ */}

<div className={style.project}  >
<h1 className={style.pro1}>Safety Projects</h1>
<Link href='/projects'><p className={style.pro2}>Latest Projects</p></Link>
<h1 className={style.pro3}>Securing Your Future Projects</h1>

<div className={style.slider1}>
<button onClick={() => setSlider('si1')}><span>1.</span></button>
      <button onClick={() => setSlider('si2')}><span>2.</span></button>
      <button onClick={() => setSlider('si3')}><span>3.</span></button>
      <button onClick={() => setSlider('si4')}><span>4.</span></button>
<div className= {`${style[slider]}`}>
</div>
  <h1 className= {`${slider === 'si1' ? style.stactive: style.st}`}>Risk Assure</h1>
  <h1 className= {`${slider === 'si1' ? style.stactive1: style.st}`}>View Project</h1>

  <h1 className= {`${slider === 'si2' ? style.stactive: style.st}`}>SecurityAware</h1>
  <h1 className= {`${slider === 'si2' ? style.stactive1: style.st}`}>View Project</h1>

  <h1 className= {`${slider === 'si3' ? style.stactive: style.st}`}>BiometricGuard</h1>
  <h1 className= {`${slider === 'si3' ? style.stactive1: style.st}`}>View Project</h1>

  <h1 className= {`${slider === 'si4' ? style.stactive: style.st}`}>SafeHaven</h1>
  <h1 className= {`${slider === 'si4' ? style.stactive1: style.st}`}>View Project</h1>


</div>
  </div>


    </>
  );
}




