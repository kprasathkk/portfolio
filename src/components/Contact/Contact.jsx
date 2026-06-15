import { memo } from 'react';
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils';

import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
             <ul className={styles.links}>
            <li className={styles.link}>
                <img src={emailIcon} alt="Email Icon" />
                <a href="mailto:karthikprasath@gmail.com" target="_blank" rel="noopener noreferrer">karthikprasath@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={linkedinIcon} alt="Linkedin Icon" />
                <a href="https://www.linkedin.com/in/karthik-prasath-3777b8b3/" target="_blank" rel="noopener noreferrer">linkedin.com/kprasath</a>
            </li>
            <li className={styles.link}>
                <img src={githubIcon} alt="Github Icon" />
                <a href="https://github.com/kprasathkk/" target="_blank" rel="noopener noreferrer">github.com/kprasathkk</a>
            </li>
        </ul>
        </footer>
    );
};

export default memo(Contact);