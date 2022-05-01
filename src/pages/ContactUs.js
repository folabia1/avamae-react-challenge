import React, { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <label name="fullName">Full Name</label>
        <input name="fullname" type="text"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}