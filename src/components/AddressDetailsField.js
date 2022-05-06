import React, { useState } from "react";
import { FormField } from "./FormField";

export function AddressDetailsField(props) {
  const emptyAddress = {
    AddressLine1: "",
    AddressLine2: "",
    "City/Town": "",
    "State/County": "",
    Postcode: "",
    Country: "",
  };

  const [addressActive, setAddressActive] = useState(false);
  const [addressDetails, setAddressDetails] = useState(emptyAddress);

  function handleChange(field, value) {
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
      // reset address details to blank when closed
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
          type="button"
          id="toggle-address-details__button"
          className={addressActive ? "active" : ""}
          onClick={toggleActive}
        />
        <label htmlFor="toggle-address-details__button">
          <strong>Add address details</strong>
        </label>
      </div>
      {addressActive && (
        <div className="address-details">
          {Object.entries(addressDetails).map(([detail, value], index) => {
            return (
              <FormField
                key={index}
                name={detail}
                type="text"
                value={value}
                onChange={handleChange}
                optional={detail === "AddressLine2"}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
