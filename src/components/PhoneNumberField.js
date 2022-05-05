import React, { useEffect, useState } from "react";
import { FormField } from "./FormField";

export function PhoneNumberField(props) {
  const [phoneNumbers, setPhoneNumbers] = useState([""]);

  function handleInputChange(index, value) {
    setPhoneNumbers((prevPhoneNumbers) => {
      prevPhoneNumbers.splice(index, 1, value);
      return prevPhoneNumbers;
    });
    props.onChange("phoneNumbers", phoneNumbers);
  }

  function handleClick() {
    console.log(phoneNumbers[phoneNumbers.length - 1]);
    setPhoneNumbers((prevPhoneNumbers) => {
      const newPhoneNumbers = [...prevPhoneNumbers];
      newPhoneNumbers.push("");
      return newPhoneNumbers;
    });
  }

  return (
    <div className="PhoneNumberField">
      {phoneNumbers.map((phoneNumber, index) => (
        <FormField
          key={index}
          name={"phoneNumber" + String(index + 1).padStart(2, "0")}
          type="text"
          value={phoneNumbers[index]}
          onChange={(field, value) => handleInputChange(index, value)}
          optional
        />
      ))}
      {phoneNumbers.length < 3 ? (
        <button onClick={handleClick}>Add new phone number</button>
      ) : null}
    </div>
  );
}
