import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
// require("dotenv").config();

const u = process.env.REACT_APP_MAILCHIMP_U;
const id = process.env.REACT_APP_MAILCHIMP_ID;

const CustomForm = ({ status, message, onValidated }) => {
  let email;

  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <section>
      <br />
      {status === "sending" && <section>sending...</section>}
      {status === "error" && (
        <section
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <section dangerouslySetInnerHTML={{ __html: message }} />
      )}
      <section>
        <input
          className="signup_field"
          ref={(node) => (email = node)}
          type="email"
          placeholder="put email here"
        />
      </section>
      <button className="signup_btn" label="subscribe" onClick={submit}>
        SIGN UP
      </button>
    </section>
  );
};

const MailchimpContainer = () => {
  const url = `https://hotmail.us14.list-manage.com/subscribe/post?u=${u}&id=${id}`;

  return (
    <section>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </section>
  );
};

export default MailchimpContainer;
