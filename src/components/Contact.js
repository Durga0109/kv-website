import React from "react";
import "../assets/css/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Message</label>
        <textarea placeholder="Enter your message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;