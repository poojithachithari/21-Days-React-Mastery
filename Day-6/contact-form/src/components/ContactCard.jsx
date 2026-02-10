import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ContactCard = (props) => {
  const [anotherForm, setAnotherForm] = useState(false);

  function handleClick(e) {
    setAnotherForm(true);
    return;
  }

  if (anotherForm) {
    return <ContactForm />;
  }

  return (
    <div>
      <h1 className="heading">FORM SUBMITTED SUCCESSFULLY!</h1>
      <h3 className="text">
        Thank you for contacting us!
        <br />
        We'll get back to you soon.
      </h3>

      <div className="info">
        <h2 className="text">📋 SUBMITTED INFORMATION</h2>
        <p className="info-text">
          <strong>Name:</strong> {props.data.name}
        </p>
        <p className="info-text">
          <strong>Email:</strong> {props.data.email}
        </p>
        <p className="info-text">
          <strong>Phone:</strong> {props.data.pnum}
        </p>
        <p className="info-text">
          <strong>Subject:</strong> {props.data.sub}
        </p>
        <p className="info-text">
          <strong>Message:</strong> {props.data.msg}
        </p>
      </div>

      <button className="btn" type="button" onClick={handleClick}>
        Submit Another Form
      </button>
    </div>
  );
};

export default ContactCard;
