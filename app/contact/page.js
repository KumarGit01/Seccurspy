
import Con from '../context/page'

const Contact = () => {
 
   
  return (
    <>
      <h1 className={styles.about}>Contact Us</h1>
      <div className={styles['c-f']}>

       <div>
        <h1>Let's Talk </h1>
<p>Got a project on your mind? Let's discuss about the details.</p>
     <div className={styles.call}>
      
<p >Call Us</p>
<h2>+12 9887 234 122</h2>
     </div>
       </div>
          <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Name" required />
            <input className={styles.input} type="text" placeholder="E-Mail I.D." required/>
            <textarea className={styles.textarea} placeholder="Enter message" required></textarea> 
            <center><button className={styles.button}>Send </button></center>
          </form>
      </div>
    </>
  );
};

export default Contact;
