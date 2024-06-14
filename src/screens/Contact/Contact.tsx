import React from "react";
import "../../styles/styles.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="subPageContainer">
        <div>
          <h1 className="subH1">CONTACT</h1>
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit
            facilis quis dolore voluptatem incidunt sint ab inventore suscipit
            repudiandae.
          </p>
        </div>
        <form className="contact-form">
          <h1>Email us!</h1>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Topic:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Massage:</label>
          <textarea id="message" name="message" rows={4} required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
