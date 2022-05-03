import React, { useState } from "react";
import { ContactUsForm } from "../components/ContactUsForm";
import companyIcon from "../media/Img_Contact.png";


export function ContactUs() {
  return (
    <div className="ContactUs">
      <div>
        <h1>Contact Us</h1>
        <ContactUsForm />
      </div>
      <img src={companyIcon} className="imgContact" /> 
    
    </div>
  )
}