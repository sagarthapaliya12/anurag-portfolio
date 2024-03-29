import React,{useRef}from "react";
import "./contact.css";
import emailjs from 'emailjs-com'


import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vwhy6fc', 'template_2zi15nq', form.current, 'JZQNjcJ04UwqGqwyV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
	return (
		<section id="contact">
			<h5>Let's Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact_container">
				<div className="contact_options">
					<article className="contact_option">
						<MdOutlineEmail className="contact-icon"/>
						<h4>Email</h4>
						<h5>anurag.timilsina@gmail.com</h5>
						<a href="mailto:sr3959596@gmail.com" target="_blank">Send a message</a>
					</article>
					<article className="contact_option">
						<BsWhatsapp className="contact-icon"/>
						<h4>WhatApp</h4>
						<h5>+977 9861285984</h5>
						<a href="https://wa.me/+9779861932095" target="_blank">
							Send a message
						</a>
					</article>
					{/* <article className="contact_option">
						<RiMessengerLine className="contact-icon"/>
						<h4>Messenger</h4>
						<h5>Sagar Raj</h5>
						<a href="https://m.me/raj.sagar.0511" target="_blank">Send a message</a>
					</article> */}
				</div>
				{/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
			</div>
		</section>  
	);
};

export default Contact;
