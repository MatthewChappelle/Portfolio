import React from "react";
import ContactInfo from "../../components/ContactInfo";
import EmailForm from "../../components/EmailForm";

function Contact() {
  return (
    <div className="row" style={{ marginRight: 0 }}>
      <EmailForm></EmailForm>
      <ContactInfo></ContactInfo>
    </div>
  );
}

export default Contact;