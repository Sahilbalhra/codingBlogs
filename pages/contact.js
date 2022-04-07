import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [desc, setDesc] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, desc);
  };
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
        // console.log(e.target.value);
  };
      
    

    // console.log(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.center}>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone:
          </label>
          <input
            type="number"
            id="phone"
            value={phone}
            onChange={handleChange}
            name="phone"
            className="form-control"
          />
        </div>
        <div className="form-floating">
          <label htmlFor="desc">Elaborate your concern:</label>
          <textarea
            className="form-control"
            placeholder="write your concern here"
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.center}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
