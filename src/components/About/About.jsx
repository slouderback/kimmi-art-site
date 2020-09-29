import React, { Component } from 'react';

import styles from './AboutMe.module.css';

class About extends Component {
    render() {
        return (
            <div className={styles.aboutMe}>
                <img src="otherImages/art_site_profile_pic.JPG" className={styles.profilePic} alt="Failed to load" />
                <div className={styles.text}>About me! About me! About me! About me! About me! About me! About me! About me! About me! About me! About me!</div>
            </div>
        );
    }
}

export default About;
