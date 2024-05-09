"use client"
import Link from 'next/link'
import { useEffect,useState } from 'react'

export default function Header() {
  const [state,setState] = useState(false)
const [a,Sa] = useState('home')
  useEffect(()=>{
  
  const change = () => {
    setState(window.scrollY > 0);
  };
  window.addEventListener('scroll',change)
  return () => {
    window.removeEventListener('scroll', change);
  };
},[])

  return (
    <> 
    
    <div className={ state ?'hed1':'hed'}>
      <div className={ state ?'Title1':'Title'}>
       <h1>Securspy .</h1>
      </div>
      <div className={ state ?'me1':'me'} >
  
      <Link onClick={()=>Sa('home')} href='/' className={`${a === 'home' ? 'active' : ''}`}> <h1>Home</h1></Link>
 <Link onClick={()=>Sa('about')} href='/about' className={`${a === 'about' ? 'active' : ''}`}><h1>About Us</h1></Link>
 <Link onClick={()=>Sa('project')}  href='/projects' className={`${a === 'project' ? 'active' : ''}`}><h1>Projects</h1></Link>

  <Link onClick={()=>Sa('service')} href='/service' className={`${a === 'service' ? 'active' : ''}`}> <h1>Services</h1></Link>
  <Link onClick={()=>Sa('contact')} href='/contact' className={`${a === 'contact' ? 'active' : ''}`}><h1>Contact</h1></Link>
  </div>
</div>


 </>
  )
}