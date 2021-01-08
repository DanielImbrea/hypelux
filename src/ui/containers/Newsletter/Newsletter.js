import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { useToasts } from "react-toast-notifications";

import "./Newsletter.styles.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { addToast } = useToasts();

  const handleChange = e => {
    const {
      target: { value },
    } = e;

    setEmail(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await addToMailchimp(email);

    if (data.result === "success") {
      addToast("Saved Successfully", {
        appearance: "success",
        autoDismiss: true,
      });
    } else {
      addToast("Something went wrong", {
        appearance: "error",
        autoDismiss: true,
      });
    }

    setEmail("");
  };

  return (
    <div className="newsletter">
      <div className="newsletter__details">
        <div className="newsletter__title">Newsletter</div>
        <div className="newsletter__description">
          Fill your email below to subscribe to my newsletter
        </div>
      </div>
      <div className="newsletter__info">
        <form onSubmit={handleSubmit}>
          <div className="newsletter__input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="newsletter__button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
