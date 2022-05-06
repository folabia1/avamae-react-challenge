import React, { useState, createContext } from "react";
import { FormField } from "./FormField";
import { PhoneNumberField } from "./PhoneNumberField";
import { AddressDetailsField } from "./AddressDetailsField";
import submitIcon from "../media/Icon_Submit.svg";
import validIcon from "../media/Icon_Valid.svg";

export const FieldRefsContext = createContext(); // used in FormField.js to validate data

export function ContactUsForm() {
  // refs object of form fieldName(string): ref(React.MutableRefObject<any>)
  const [fieldRefs, setFieldRefs] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errors, setErrors] = useState([]);
  const [formState, setFormState] = useState({
    FullName: "",
    EmailAddress: "",
    PhoneNumbers: [],
    Message: "",
    AddressDetails: {
      AddressLine1: "",
      AddressLine2: "",
      "City/Town": "",
      "State/County": "",
      Postcode: "",
      Country: "",
    },
  });

  function validateFields() {
    // validate state data
    const fieldValidityMap = {};
    const optionalFields = [
      "PhoneNumber01",
      "PhoneNumber02",
      "PhoneNumber03",
      "AddressLine2",
    ];
    let isFieldValid;
    for (const [fieldName, ref] of Object.entries(fieldRefs)) {
      if (optionalFields.includes(fieldName)) {
        // set empty optional fields to null instead of false
        console.log(fieldName, !!ref.current.value);
        isFieldValid = !!ref.current.value ? true : null;
      } else {
        isFieldValid = !!ref.current.value;
      }
      fieldValidityMap[fieldName] = isFieldValid;
      // red border styling for empty required fields
      if (isFieldValid === false) {
        ref.current.style.borderColor = "red";
      } else {
        ref.current.style.borderColor = "#f8f9fc";
      }
    }
    const areAllFieldsValid = Object.values(fieldValidityMap).every(
      (v) => v === true || v === null
    );
    return areAllFieldsValid;
  }

  function handleChange(field, value) {
    setFormState((prevFormState) => {
      return {
        ...prevFormState,
        [field]: value,
      };
    });
  }

  async function sendDataToApi(data) {
    const dataToSend = { ...data };
    // if no phone numbers given, don't send empty string
    if (
      dataToSend["PhoneNumbers"].length === 1 &&
      dataToSend["PhoneNumbers"][0] === ""
    ) {
      dataToSend["PhoneNumbers"].pop();
    }
    // remove slashes from address field names
    dataToSend["bIncludeAddressDetails"] = !!dataToSend["AddressLine1"];
    for (const [addressFieldName, addressFieldValue] of Object.entries(
      dataToSend["AddressDetails"]
    )) {
      if (addressFieldName.includes("/")) {
        delete dataToSend["AddressDetails"][addressFieldName];
        const substitutedName = addressFieldName.replace(/\//g, "");
        dataToSend["AddressDetails"][substitutedName] = addressFieldValue;
      }
    }
    // send data to api endpoint
    try {
      const rawResponse = await fetch(
        "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );
      const readableResponse = await rawResponse.json();
      // red border styling for invalid fields
      readableResponse["Errors"].forEach(({ FieldName }, index) => {
        fieldRefs[FieldName].current.style.borderColor = "red";
      });
      return {
        ok: readableResponse["Status"] === "1",
        errors: readableResponse["Errors"],
      };
    } catch (error) {
      console.log(error);
      return { ok: false };
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // validate state data
    const areAllFieldsValid = validateFields();
    if (areAllFieldsValid) {
      // form submission
      setSubmissionStatus("pending");
      const res = await sendDataToApi(formState);
      setSubmissionStatus(res.ok ? "recieved" : "error");
      res.ok ? setErrors([]) : setErrors(res.errors);
    } else {
      setSubmissionStatus("error");
      setErrors([]);
    }
  }

  return submissionStatus !== "recieved" ? (
    <FieldRefsContext.Provider value={{ fieldRefs, setFieldRefs }}>
      <form
        className="ContactUsForm"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="name-and-email">
          <FormField
            name="FullName"
            type="text"
            value={formState["FullName"]}
            onChange={handleChange}
          />
          <FormField
            name="EmailAddress"
            type="text"
            value={formState["EmailAddress"]}
            onChange={handleChange}
          />
        </div>
        <PhoneNumberField
          value={formState["PhoneNumbers"]}
          onChange={handleChange}
        />
        <FormField
          name="Message"
          type="textarea"
          value={formState["Message"]}
          subText="Maximum text length is 500 characters"
          onChange={handleChange}
        />
        <AddressDetailsField
          value={formState["AddressDetails"]}
          onChange={handleChange}
        />
        <button className="submit-button" type="submit">
          <img className="submit-icon" src={submitIcon} alt="submit-icon" />
          Submit
        </button>
      </form>
      {submissionStatus === "pending" && <p>Submission pending...</p>}
      {submissionStatus === "error" &&
        (errors ? (
          Object.values(errors).map((error, index) => (
            <p key={index}>{error["MessageCode"]}</p>
          ))
        ) : (
          <p>An error occurred. Please try again.</p>
        ))}
      {submissionStatus === "recieved" && (
        <p>Submission Recieved. Thank you.</p>
      )}
    </FieldRefsContext.Provider>
  ) : (
    <div className="message-sent">
      <img src={validIcon} className="valid-icon" />
      <h2>Your message has been sent</h2>
      <p>We will be in contact with you within 24 hours.</p>
    </div>
  );
}
