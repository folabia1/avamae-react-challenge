import React from "react";
import { ContactUsForm } from "../components/ContactUsForm";

export function ContactUs() {
  return (
    <div className="ContactUs">
      <div className="left">
        <h1>Contact Us</h1>
        <strong>
          <p>
            Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi
            aliquam eligendi ne. Ferri euismod accusata te nec, summo accumsan
            at vix.
          </p>
        </strong>
        <ContactUsForm />
      </div>
      <div className="right" />
      {/* <img src={companyIcon} className="company-icon" alt=""/> */}
    </div>
  );
}
