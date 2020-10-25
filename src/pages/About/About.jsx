import React, { Component } from 'react';

import styles from './AboutMe.module.css';

class About extends Component {
    render() {
        return (
            <div className={styles.aboutMe}>
                <h1 className={styles.header}>About me</h1>
                <img src="otherImages/art_site_profile_pic.JPG" className={styles.profilePic} alt="Failed to load" />
                <div className={styles.text}>Kimmi Risk is a San Francisco based artist. She has turned her family’s garage into a eccentric studio where she creates her art. (Her husband and son have made this great sacrifice which she is reminded of from time to time.)</div>
            </div>
        );
    }
}

export default About;
