import React, { useState } from "react";
import { ContactUsForm } from "../components/ContactUsForm";
import companyIcon from "../media/Img_Contact.png";


export function ContactUs() {

  const [ formData, setFormData ] = useState({})
  function handleSubmit(event) {
    event.preventDefault();
    setFormData(event.target[0].data)
  }
  return (
    <div>
      <h1>Contact Us</h1>
      <p>{formData["fullName"]}</p>
      <ContactUsForm />
      {/* <form onSubmit={handleSubmit}>
        <label name="fullName">Full Name</label>
        <input name="fullname" type="text"/>
        <label name="email">Email address</label>
        <input name="email" type="text"/>
        <label name="phone">Phone Number<span>- optional</span></label>
        <input name="phone" type="text"/>
        <label name="fullName">Full Name</label>
        <input name="fullname" type="text"/>
        <label name="fullName">Full Name</label>
        <input name="fullname" type="text"/>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  )
}