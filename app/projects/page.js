import Image from 'next/image' 
import s from '../../images/s20.jpg'
import style from '../Project.module.css'
const Project =() =>{
    return(
        <>
        <h1 className={style.ph}>Projects</h1>
        <div className={style.g}>
            <div >
                <Image src = {s} alt='s' />
                <h1>SafeHaven</h1>
                <p>SAFETY NET</p>
            </div>
            <div>
                <Image src = {s} alt='s' />
                <h1>RiskAssure</h1>
                <p>LOCK DOWN</p>
            </div>
            <div>
                <Image src = {s} alt='s' />
                <h1>PhysicalGuardian</h1>
                <p>GUARD FORCE</p>
            </div>
            <div>
                <Image src = {s} alt='s' />
                <h1>ThreatDetect</h1>
                <p>THREAT WATCH</p>
            </div>
            <div>
                <Image src = {s} alt='s' />
                <h1>BiometricGuard</h1>
                <p>PRIVACY GUARD</p>
            </div>
            <div>
                <Image src = {s} alt='s' />
                <h1>SecurityAware</h1>
                <p>RISK MITIGANT</p>
            </div>
        </div>

     
        </>
    )
}
export default Project