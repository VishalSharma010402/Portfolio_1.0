import React, {useState} from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [message, setMessage]= useState('');

    const submitForm = (e) => {
         e.preventDefault();
        const serviceId = 'service_hd7d81u';
        const templateId = 'template_oxnhvn8';
        const publicKey = '33mrHyu6B6gcM7Uxc';
        
        const templatePara= {
            form_name : name,
            form_email : email,
            to_name : 'Vishal',
            message : message,
        };

        emailjs.send(serviceId,templateId,templatePara,publicKey).then((response)=>{
            console.log("Email Send Sucessfully", response);
            setName('');
            setEmail('');
            setMessage('');
        }).catch((error)=>{
            console.log("Error in Sending email", error)
        })

    }


  return (
    <section id="contact" className="mainContainer">
      <br />
      <br />
      <div className="subContainer">
        <div className="content1">
          <h3>Contact</h3>
          <img src="/Image/Social media.gif" alt="Social Media gif" />
        </div>
        <div className="content2">
          <form className="forms" onSubmit={submitForm}>
            <input
              type="text"
              value={name}
              placeholder="Enter your Name"
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <input
              type="email"
              value={email}
              placeholder="Enter your Email"
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
            <textarea
              className="typeo"
              placeholder="Type Your Message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              required
            ></textarea>
          </form>
          <button id="btn" className="but0" type="submit">
            SEND
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
