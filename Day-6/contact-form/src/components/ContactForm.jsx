import React, { useState } from "react";
import ContactCard from "./ContactCard";

const ContactForm = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    pnum: "",
    sub: "",
    msg: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const validate = () => {
    let newErrors = {};

    if (!formdata.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formdata.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formdata.pnum.trim()) {
      newErrors.pnum = "Phone number is required";
    } else if (!/^\d{10}$/.test(formdata.pnum)) {
      newErrors.pnum = "Phone number must be 10 digits";
    }

    if (!formdata.sub.trim()) {
      newErrors.sub = "Subject is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata((values) => ({
      ...values,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // ✅ This clears the error when typing
    }));
  };

  function handleData(e) {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  }
  if (isSubmitted) {
    return <ContactCard data={formdata} />;
  }
  return (
    <div>
      <form className="contact-form" onSubmit={handleData}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formdata.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formdata.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <label htmlFor="pnum">Phone Number</label>
        <input
          type="text"
          name="pnum"
          id="pnum"
          value={formdata.pnum}
          onChange={handleChange}
        />
        {errors.pnum && <p className="error">{errors.pnum}</p>}
        <label htmlFor="sub">Subject</label>
        <input
          type="text"
          name="sub"
          id="sub"
          value={formdata.sub}
          onChange={handleChange}
        />
        {errors.sub && <p className="error">{errors.sub}</p>}
        <label htmlFor="msg">Message</label>
        <textarea
          name="msg"
          id="msg"
          value={formdata.msg}
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
