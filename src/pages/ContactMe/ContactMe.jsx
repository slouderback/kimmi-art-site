import React, { Component } from 'react';

import EmailForm from '../../components/EmailFormComponent/EmailForm';

import styles from './ContactMe.module.css';

class ContactMe extends Component {

    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.header}>Contact Me</h1>
                <p className={styles.description}>Please put in the name of the painting you would like to purchase and make sure to leave the correct email so I can reach you!</p>
                <EmailForm />
            </div>
        );
    }
}

export default ContactMe;
