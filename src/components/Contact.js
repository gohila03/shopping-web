import React, { useState } from 'react';
import '../style/Contact.css';


const ContactSection = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add functionality to handle form submission, like sending data to an API
    setEmail('');
  };

  return (
    <section className="cont">
      <div className="contact">
        <div className="text">
          <h1>
            Sign Up To Shop Your <span>Fantasy</span>
          </h1>
          <br />
          <p>Get updates about our shop</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={handleInputChange}
            />
            <button type="submit">SignUp</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
