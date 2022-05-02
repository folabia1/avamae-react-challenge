import React, { useState } from "react";
import { FormField } from "./FormField";

export function PhoneNumberField(props) {
  const [ phoneNumbers, setPhoneNumbers ] = useState([""])

  function handleInputChange(event) {
    // manage input change
  }

  return (
    <div className="PhoneNumberfield">
      {phoneNumbers.map((phoneNumber, index) => 
        <FormField
          key={index}
          name={"phoneNumber" + String(index+1).padStart(2, '0')}
          type="text" value={phoneNumber}
          onChange={handleInputChange} />
      )}
      {phoneNumbers.length <= 3 ? <button>Add new phone number</button> : null}
    </div>
  )
}