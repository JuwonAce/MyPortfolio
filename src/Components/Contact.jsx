import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm ('service_smb8uf2', 'template_82a6kh5', e.target, 'aejpVs-L-HoclGw4w')
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!'); 
        },  (error) => {
            console.log(error.text);
            alert('Failed to send the message. Please try again later!.'); 
        });
        e.target.reset();     
            
        };    
          
  return (
    <ContactContainer>
      <h2>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required />

        <button type="submit">Send Message</button>
      </form>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  padding: 20px;
  flex: 1;
  max-width: 1200px;
  margin-left: 250px;

  h2 {
    font-size: 2em;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
  }

  label {
    margin: 10px 0 5px;
    font-weight: bold;
  }

  input,
  textarea {
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 4px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  button {
    margin-top: 15px;
    padding: 10px;
    background: ${({ theme }) => theme.toggleBg};
    color: ${({ theme }) => theme.mode === 'light' ? 'black' : 'white'};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;


