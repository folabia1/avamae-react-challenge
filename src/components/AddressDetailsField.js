import React, { useState } from "react";
import { FormField } from "./FormField";


export function AddressDetailsField(props) {
  
  const [ addressDetails, setAddressDetails ] = useState({
    "addressLine1": "",
    "addressLine2": "",
    "postcode": "",
    "city": "",
    "country": "",
  })

  function handleChange() {
    // manage input change
  }


  return <FormField name="addressDetails" type="text" value={props.value} onChange={handleChange} />

}