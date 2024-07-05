"use client";

import styles from "../contact/contact.module.css";
import { ChangeEvent, SetStateAction, useState } from "react";
import Validation from "../components/validation/Validatios";
import { FormValues, FormErrors } from "../components/validation/Validatios";

export default function ContactMe() {
  const [formvalue, setFormValue] = useState<FormValues>({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [submit, setSubmit] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleDefault = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(formvalue);
    const validationErrors = Validation(formvalue);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setFormValue({ fullName: "", email: "", message: "" });
      setSubmit(true);
      setTimeout(() => {
        setSubmit(false)
      }, 2000);
    }
    };

  return (
    <div>
      <h2>Contact Me</h2>
      <form action="" className={styles.form} onSubmit={handleDefault}>
        <div className={styles.inputsDiv}>
          <label className={styles.label} htmlFor={"nombre"}>
            {"Nombre"}
          </label>
          <input
            onChange={handleOnChange}
            className={styles.input}
            value={formvalue.fullName}
            placeholder="Enter your name"
            name="fullName"
            type="text"
          />
          {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}

          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            onChange={handleOnChange}
            className={styles.input}
            type="email"
            value={formvalue.email}
            placeholder="Enter your mail"
            name="email"
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <input
            onChange={handleOnChange}
            className={styles.input}
            type="text"
            value={formvalue.message}
            placeholder="Enter your message"
            name="message"
          />
          {errors.message && <p className={styles.error}>{errors.message}</p>}

          <button className={submit ? styles.buttonSend : styles.button}>{submit ? "Message sent": "Send message"}</button>
        </div>
      </form>
    </div>
  );
}
