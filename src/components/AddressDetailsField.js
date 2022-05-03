import React, { useState } from "react";
import { FormField } from "./FormField";


export function AddressDetailsField(props) {

  const emptyAddress = {
    "addressLine1": "",
    "addressLine2": "",
    "postcode": "",
    "city": "",
    "country": "",
  }

  const [ addressActive, setAddressActive ] = useState(false);
  const [ addressDetails, setAddressDetails ] = useState(emptyAddress);

  function handleChange(field, value) {
    // manage change in state
    setAddressDetails((prevAddressDetails) => {
      return {
        ...prevAddressDetails,
        [field]: value,
      }
    })
    props.onChange("addressDetails", addressDetails)
  }

  function toggleActive() {
    setAddressActive((prevAddressActive) => {
      if (prevAddressActive) {
        setAddressDetails(emptyAddress)
      }
      return !prevAddressActive
    })
  }

  return (
    <div className="AddressDetailsField">
      <button id="addAddressDetailsButton" onClick={toggleActive}/>
      <label htmlFor="addAddressDetailsButton">{addressActive ? "Remove address details" : "Add address details"}</label>
      {!addressActive ? null :
      <>
        {Object.entries(addressDetails).map(([detail, value], index) => {
          return (
            <FormField
              key={index}
              name={detail}
              type="text"
              value={value}
              onChange={handleChange} 
            />
          )
        })}
      </>
      }
    </div>
  )

}