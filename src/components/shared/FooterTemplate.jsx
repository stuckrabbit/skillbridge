
import styles from "./FooterTemplate.module.css";

function FooterSection(){
    return(<div className={styles.container}>
        <div className={styles.brandInfoSection}>
            <div className={styles.brandLogo}>
            <img alt='informational' src={process.env.PUBLIC_URL+'/images/Logo.png'}/>
            </div>
           <div className={styles.contactInfo}>
           <div className={styles.contactInfoImage}>
            <img alt='informational' src={process.env.PUBLIC_URL+'/images/Subtract.png'}/>
           </div>
            <p  className={styles.contactInfoText}>hello@skillbridge.com</p>
           </div>
           <div className={styles.contactInfo}>
           <div className={styles.contactInfoImage}>
            <img alt='informational' src={process.env.PUBLIC_URL+'/images/Vector (Stroke).png'}/>
           </div>    
            <p className={styles.contactInfoText}>+91 91813 23 2309</p>
           </div>
           <div className={styles.contactInfo}>
           <div className={styles.contactInfoImage}>
            <img alt='informational' src={process.env.PUBLIC_URL+'/images/Subtract(1).png'}/>
           </div>
            <p className={styles.contactInfoText}>Somewhere in the World</p>
           </div>
        </div>
        <div className={styles.linksContainer}>
        <div className={styles.homeLinksSection}>
            <p className={styles.sectionHeading}>Home</p>
            <a className={styles.link} href="/home">Benefits</a>
            <a className={styles.link} href="/home">Our Courses</a>
            <a className={styles.link} href="/home">Our Testimonials</a>
            <a className={styles.link} href="/home">Our FAQ</a>
        </div>
        <div className={styles.aboutusLinkSection}>
            <p className={styles.sectionHeading}>About Us</p>
            <a className={styles.link} href="/home">Company</a>
            <a className={styles.link} href="/home">Achievements</a>
            <a className={styles.link} href="/home">Our Goals</a>
        </div>
        </div>
        <div className={styles.socialProfilesSection}>
            <p className={styles.sectionHeading}>Social Profiles</p>
            <div className={styles.socialLinksContainer}>
            <a href="/home"><img alt='informational' src={process.env.PUBLIC_URL + '/images/Button(4).png'}/></a>
            <a href="/home"><img alt='informational' src={process.env.PUBLIC_URL + '/images/Button(6).png'}/></a>
            <a href="/home"><img alt='informational' src={process.env.PUBLIC_URL + '/images/Button(7).png'}/></a>
            </div>
        </div>
    </div>);
}

export default FooterSection;