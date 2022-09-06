import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pa3be17",
        "template_af2kr9n",
        form.current,
        "jcqaKZGY8N1jCqM4D"
      )
      .then(
        (result) => {
          setMessage(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container m-5" id="contact">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <h2>Need a Price Quote?</h2>
        </div>
        <div className="col text-center">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group m-3">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="form-control form-custom"
              />
            </div>
            <div className="form-group m-3">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="form-control form-custom"
              />
            </div>
            <div className="form-group m-3">
              <input
                type="number"
                name="user_servings"
                placeholder="Number of Servings"
                required
                className="form-control form-custom"
              />
            </div>
            <div className="form-group m-3">
              <input
                type="date"
                name="user_date"
                placeholder="Date of Event"
                required
                className="form-control form-custom"
              />
            </div>
            <div className="form-group m-3">
              <input
                type="text"
                name="user_address"
                placeholder="Delivery Address"
                required
                className="form-control form-custom"
              />
            </div>
            <div className="form-group m-3">
              <textarea
                name="message"
                placeholder="Details"
                required
                className="form-control form-custom"
              />
            </div>
            <button type="submit" className="btn btn-custom ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
