import React, { useState } from "react";
import { FormField } from "./FormField";

export function PhoneNumberField(props) {
  const [phoneNumbers, setPhoneNumbers] = useState([""]);

  function handleInputChange(index, value) {
    setPhoneNumbers((prevPhoneNumbers) => {
      if (!value && prevPhoneNumbers.length > 1) {
        // remove empty non-primary phone number fields
        prevPhoneNumbers.splice(index, 1);
      } else {
        prevPhoneNumbers.splice(index, 1, value);
      }
      return prevPhoneNumbers;
    });
    props.onChange("PhoneNumbers", phoneNumbers);
  }

  function handleClick() {
    setPhoneNumbers((prevPhoneNumbers) => {
      const newPhoneNumbers = [...prevPhoneNumbers];
      if (prevPhoneNumbers[prevPhoneNumbers.length - 1]) {
        // only add new number field if previous field has a phone number
        newPhoneNumbers.push("");
      }
      return newPhoneNumbers;
    });
  }

  return (
    <div className="PhoneNumberField">
      {phoneNumbers.map((phoneNumber, index) => (
        <FormField
          key={index}
          name={"PhoneNumber" + String(index + 1).padStart(2, "0")}
          type="text"
          value={phoneNumbers[index]}
          onChange={(field, value) => handleInputChange(index, value)}
          optional
        />
      ))}
      {phoneNumbers.length < 3 && phoneNumbers[0] ? (
        <button type="button" onClick={handleClick}>
          Add new phone number
        </button>
      ) : null}
    </div>
  );
}
