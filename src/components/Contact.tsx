import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  // --- REPLACE THESE WITH YOUR ACTUAL EMAILJS IDS ---
  // NOTE: If using process.env, ensure your .env file is in the root directory
  const SERVICE_ID = "service_cq64g3o";
  const TEMPLATE_ID = "template_hd6d5uk";
  const PUBLIC_KEY = "RCgSYOs0W-D5teytC";

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, { name, email, message }, PUBLIC_KEY)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert("Message sent successfully!");
          setName('');
          setEmail('');
          setMessage('');
        }, (err) => {
          console.error('FAILED...', err);
          alert(`Failed to send message: ${err.text || err}`);
        });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          
          <Box
            component="form"
            className="contact-form"
            noValidate
            autoComplete="off"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
              />
              <TextField
                required
                label="Email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
              />
            </div>
            
            <TextField
              required
              label="Message"
              placeholder=""
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
            />
            
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;