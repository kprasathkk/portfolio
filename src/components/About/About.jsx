import { memo } from 'react';
import styles from "./About.module.css";
import aboutImage from "../../assets/about/karthikabout.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={aboutImage} alt="Me sitting with laptop" className={styles.aboutImage}></img>
        
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={cursorIcon} alt="Cursor Icon"></img>
                <div className={styles.aboutItemText}>
                    <h3>Technology Architect / Cloud Architect</h3>
                    <p> 
                        Design and modernize enterprise-scale applications by migrating legacy systems to cloud-native architectures on AWS. Experienced in building scalable, event-driven, and batch processing solutions using services like ECS, Lambda, Step Functions, EventBridge, and S3. Focused on improving reliability, performance, and operational efficiency in large enterprise systems.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={serverIcon} alt="Server Icon"></img>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                        Specialize in building and supporting backend systems, enterprise integrations, and high-volume batch processing workflows. Experienced in Java-based systems, spring boot, APIs, EDI transactions, XML/XSLT transformations, and enterprise messaging, ensuring reliable data exchange across complex systems.</p>
                </div>
            </li>
            {/* <li className={styles.aboutItem}>
                <img src={uiIcon} alt="UI Icon"></img>
                <div className={styles.aboutItemText}>
                    <h3>UI  Design</h3>
                    <p>
                        I have experience developing fast and optimised back-end systems
                and APIs</p>
                </div>
            </li>*/}
        </ul>
    </div>
    </section>
  );
};

export default memo(About);