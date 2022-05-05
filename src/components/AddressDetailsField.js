import React, { useState } from "react";
import { FormField } from "./FormField";

export function AddressDetailsField(props) {
  const emptyAddress = {
    addressLine1: "",
    addressLine2: "",
    "city/town": "",
    "state/county": "",
    postcode: "",
    country: "",
  };

  const [addressActive, setAddressActive] = useState(false);
  const [addressDetails, setAddressDetails] = useState(emptyAddress);

  function handleChange(field, value) {
    // manage change in state
    setAddressDetails((prevAddressDetails) => {
      return {
        ...prevAddressDetails,
        [field]: value,
      };
    });
    props.onChange("addressDetails", addressDetails);
  }

  function toggleActive() {
    setAddressActive((prevAddressActive) => {
      if (prevAddressActive) {
        setAddressDetails(emptyAddress);
      }
      return !prevAddressActive;
    });
  }

  return (
    <div className="AddressDetailsField">
      <div className="toggle-address-details">
        <button
          id="toggle-address-details__button"
          className={addressActive ? "active" : ""}
          onClick={toggleActive}
        />
        <label htmlFor="toggle-address-details__button">
          <strong>Add address details</strong>
        </label>
      </div>
      {!addressActive ? null : (
        <div className="address-details">
          {Object.entries(addressDetails).map(([detail, value], index) => {
            return (
              <FormField
                key={index}
                name={detail}
                type="text"
                value={value}
                onChange={handleChange}
                optional={detail === "addressLine2"}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
