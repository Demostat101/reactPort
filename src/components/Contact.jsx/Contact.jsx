import "./Contact.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import React from "react";

const Contact = () => {
  return (
    <div className="contactMe" id="contactMe">
      <div className="contact">
        <span className="cont">CONTACT</span>
        <span className="mee"> ME</span>
      </div>

      <form action="" className="form">
        <input type="text" placeholder="your name" id="name" name="name" />

        <br />

        <input type="email" name="email" id="email" placeholder="your mail" />

        <br />

        <input type="text" name="subject" id="subject" placeholder="subject" />

        <br />

        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="your message"
        ></textarea>

        <br />

        <button type="submit" id="submit">
          Send Message
        </button>

        <div className="deliver"></div>
      </form>

      <div className="emailPhone">

        <div className="phonenumber">

            <FaPhone size={20}/> 
            <div>07032517660</div>
   
        </div>

        <div className="email">
            <MdEmail size={20}/> 
            <div>demostat1995@gmail.com</div>
        </div>

      </div>

    </div>
  );
};

export default Contact;
