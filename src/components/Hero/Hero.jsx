import { memo } from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import heroImage from "../../assets/hero/karthik.png";


const Hero = () => {
  return (
  
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Karthik</h1>
    <p className={styles.description}>Experienced Technology Architect with 15+ years of expertise in enterprise integration, cloud modernization, and large-scale application transformation.
      Proven track record of migrating legacy applications to AWS cloud platforms, designing cloud-native solutions, and delivering high-volume business-critical processing systems.</p>
    <a href="mailto:karthikprasath@gmail.com" className={styles.contactBtn}>Contact me</a>
    </div>
    <img src={heroImage} alt="Hero Image" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section> 
    
  );
};

export default memo(Hero);