import React, { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";
import CheckIcon from "@mui/icons-material/Check";
import emailjs from "@emailjs/browser";
import WhatsApp from "../../Images/whatsApp.png";
import { useTranslation } from "react-i18next";

export default function Contact(props) {
  const recaptchaRef = React.createRef(String());

  const { t, i18n } = useTranslation();
  // let lng = props.lang;
  const form = useRef();

  const sendEmail = () => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_8nxs8zr",
        "template_a684jub",
        form.current,
        "NKkNVna4yRlmz8njc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const initialValues = { fullName: "", email: "", phone: "", Captcha: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function onChangez(value) {
    value = String;

    console.log("value", value);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    setFormErrors(validate(formValues));
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      console.log("Wrong");
    } else {
      console.log("Right");
    }
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      sendEmail();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!values.fullName) {
      errors.fullName = t("contact_p11");
    }
    if (!values.email) {
      errors.email = t("contact_p2");
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = t("contact_p4");
    }
    if (values.phone.length < 4) {
      errors.phone = t("contact_p4");
    }
    if (!recaptchaValue) {
      errors.Captcha = "Captcha Required";
    }
    return errors;
  };

  return (
    <div
      className={
        i18n.language === "ar" ? "contactContainerRight" : "contactContainer"
      }
    >
      <p className="mainWord">
        <span>{t("contact_p9")}</span>
      </p>
      <div className="contactSContainer">
        <div>
          <p className="green phone fontFamily phoneAlign">
            {t("phone_1")} / <span> &nbsp;{t("whatsApp")}</span> :{" "}
            {t("contact_phone")}
            <a href="https://wa.me/+221781559669" target="_blank">
              <img src={WhatsApp} className="WhatsApp" />
            </a>
          </p>
          <p className="phone fontFamily">
            {t("email")} : contact@pole-matech.com
          </p>
        </div>
        <div>
          <p className="bold phone">{t("contact_p7")}</p>
          <form ref={form} onSubmit={handleSubmit} className="formContainer">
            <input
              placeholder={t("contact_p1")}
              type="fullName"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
              className="inputNormal"
            />
            <p className="errors">{formErrors.fullName}</p>

            <input
              placeholder="E-mail"
              type="email"
              name="email"
              className="inputNormal"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="errors">{formErrors.email}</p>

            <input
              placeholder={t("contact_p3")}
              type="number"
              name="phone"
              className="inputNormal"
              id="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            <p className="errors">{formErrors.phone}</p>
            <label className="label">{t("Message")}</label>
            <textarea
              name="message"
              className="inputMessg"
              placeholder={t("contact_p6")}
            />
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfhXFciAAAAACbE9hXiD1ml52k8Uw98fJ44Mfat"
              onChange={onChangez}
              value={formValues.Captcha}
            />
            <p className="errors">{formErrors.Captcha}</p>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <div>
                <p className="success">
                  {t("contact_p12")} <CheckIcon className="checkIcon" />
                </p>
              </div>
            ) : (
              <input
                type="submit"
                value={t("contact_p8")}
                className="sendButton"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
