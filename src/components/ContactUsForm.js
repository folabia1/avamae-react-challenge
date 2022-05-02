import React, { useState } from "react";
import { FormField } from "./FormField";
import { PhoneNumberField } from "./PhoneNumberField";
import { AddressDetailsField } from "./AddressDetailsField";
import submitIcon from "../media/Icon_Submit.svg";
import validIcon from "../media/Icon_Valid.svg";

export function ContactUsForm() {
  // could use react-address-lookup with Postcoder for better UX
  const [ state, setState ] = useState({
    "fullName": "",
    "emailAddress": "",
    "phoneNumbers": [],
    "message": "",
    "addressDetails": {
      "addressLine1": "",
      "addressLine2": "",
      "postcode": "",
      "city": "",
      "country": "",
    }
  })

  function handleChange(event) {
    // manage change in state
  }

  function handleSubmit(event) {
    event.preventDefault();
    // manage api connection and form submission
  }

  return (
    <form className="ContactUsForm" onSubmit={handleSubmit}>
      <div className="nameAndEmail">
        <FormField name="fullName" type="text" value={state["fullName"]} onChange={handleChange} />
        <FormField name="emailAddress" type="text" value={state["emailAddress"]} onChange={handleChange} />
      </div>
      <PhoneNumberField value={state["phoneNumbers"]} onChange={handleChange} />
      <FormField name="message" type="textarea" value={state["message"]}
        subText="Maximum text length is 500 characters" onChange={handleChange} />
      <AddressDetailsField value={state["addressDetails"]} onChange={handleChange} />
      <button type="submit">
        <img src={submitIcon}/>
        Submit
      </button>
    </form>
  )
}