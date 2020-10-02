import React, { Component } from "react";
import emailjs from "emailjs-com";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styles from "./EmailForm.module.css";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "contact_form",
      "template_1xxtnxr",
      e.target,
      "user_ZhfrE9ZGTb4nvbnm0XTuP"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

class EmailForm extends Component {
  render() {
    return (
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <TextField
          label="Name"
          name="user_name"
          size="small"
          className={styles.nameInputField}
          variant="outlined"
        />

        <TextField
          label="Email"
          name="user_email"
          size="small"
          className={styles.emailInputField}
          variant="outlined"
        />

        <TextField
          label="Message"
          multiline
          rows={6}
          name="message"
          className={styles.messageInputField}
          variant="outlined"
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          value="Send"
          className={styles.sendButton}
        >
          Send
        </Button>
      </form>
    );
  }
}

export default EmailForm;
