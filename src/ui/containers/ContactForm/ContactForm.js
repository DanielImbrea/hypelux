import React, { useState } from "react";
import { Link } from "gatsby";
import Input from "@components/Input";
import Textarea from "@components/Textarea";
import Button from "@components/Button";
import Checkbox from "@components/Checkbox";
import { useToasts } from "react-toast-notifications";

import "./ContactForm.styles.scss";

function encode(data) {
  return Object.keys(data)
    .map(
      key =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
    )
    .join("&");
}

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const getErrors = ({ value, name, required, type }) => {
  if (!value && required) {
    return { name, error: "This field is required" };
  }
  if (value && type === "email") {
    if (!emailRegex.test(String(value).toLowerCase())) {
      return { name, error: "This field must be an email" };
    }
  }
  return null;
};

const dataFields = [
  {
    name: "name",
    required: true,
    type: "text",
  },
  {
    name: "email",
    required: true,
    type: "email",
  },
  {
    name: "message",
    required: true,
    type: "text",
  },
];

const initialFields = {
  name: "",
  email: "",
  message: "",
  terms: false,
};

const ContactForm = () => {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState([]);
  const { addToast } = useToasts();

  const handleChange = e => {
    const {
      target: { name, value, type, checked, required },
    } = e;

    const error = getErrors({
      name,
      value: type === "checkbox" ? checked : value,
      type,
      required,
    });

    if (!error) {
      setErrors(errors.filter(item => item.name !== name));
    } else {
      setErrors([
        ...errors.filter(item => item.name !== name),
        error,
      ]);
    }

    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const errors = dataFields
      .map(item => {
        const error = getErrors({
          ...item,
          value: fields[item.name],
        });

        return error;
      })
      .filter(item => !!item);

    if (!errors.length) {
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({
          "form-name": "contact",
          ...fields,
        }),
      })
        .then(() => {
          setFields(initialFields);
          addToast("Message sent successfully!", {
            appearance: "success",
            autoDismiss: true,
          });
        })
        .catch(error => console.log(error));
    } else {
      setErrors(errors.filter(item => !!item));
    }
  };

  return (
    <form
      name="contact"
      method="post"
      action="/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="contact-form input-fields"
    >
      <Input
        name="name"
        label="Fullname"
        type="text"
        placeholder="Your Fullname"
        value={fields.name}
        onChange={handleChange}
        errors={errors}
        required
      />
      <Input
        name="email"
        label="Email"
        type="email"
        placeholder="Your Email"
        value={fields.email}
        onChange={handleChange}
        errors={errors}
        required
      />
      <Textarea
        name="message"
        label="Message"
        placeholder="Your message"
        value={fields.message}
        onChange={handleChange}
        errors={errors}
        required
      />

      <div className="contact-form__buttons">
        <div className="contact-form__terms">
          <Checkbox
            name="terms"
            id="terms"
            checked={fields.terms}
            type="checkbox"
            onChange={handleChange}
            errors={errors}
            label={
              <label
                htmlFor="terms"
                className="contact-form__terms__text"
              >
                {" "}
                Accept{" "}
                <Link to="/legal/privacy-policy">
                  Terms and Conditions
                </Link>
              </label>
            }
            required
          />{" "}
        </div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};

export default ContactForm;
