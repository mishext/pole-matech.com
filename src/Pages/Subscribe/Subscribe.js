import React, { useState, useRef, useEffect } from "react";
import "./Subscribe.css";
import emailjs from "@emailjs/browser";
import CheckIcon from "@mui/icons-material/Check";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";

export default function Subscribe(props) {
  const recaptchaRef = React.createRef(String());
  const { t, i18n } = useTranslation();

  const initialValues = {
    cpName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    Captcha: "",
  };
  function onChangez(value) {
    value = String;

    console.log("value", value);
  }
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const form = useRef();

  const sendEmail = () => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_8nxs8zr",
        "template_wl3w9nt",
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue) {
      console.log("Wrong");
    } else {
      console.log("Right");
    }
    setIsSubmit(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      sendEmail();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!values.cpName) {
      errors.cpName = t("err_1");
    }
    if (!values.address) {
      errors.address = t("err_2");
    }
    if (!values.country) {
      errors.country = t("err_3");
    }

    if (!values.email) {
      errors.email = t("err_5");
    } else if (!regex.test(values.email)) {
      errors.email = t("err_5");
    }
    if (!values.phone) {
      errors.phone = t("err_4");
    }
    if (values.phone.length < 4) {
      errors.phone = t("err_4");
    }
    if (!recaptchaValue) {
      errors.Captcha = "Captcha Required";
    }
    return errors;
  };
  // let lng = props.lang;
  return (
    <div
      className={
        i18n.language === "ar"
          ? "SubscribeContainerRight"
          : "SubscribeContainer"
      }
    >
      <p className="mainWord paddingLeft">
        <span>{t("sub_w1")}</span>
      </p>
      <div className="formContainer2">
        <form ref={form} onSubmit={handleSubmit} className="formContainer1">
          <div className="formSize">
            <div>
              <input
                placeholder={t("sub_1")}
                type="cpName"
                name="cpName"
                value={formValues.cpName}
                onChange={handleChange}
                className="inputNormal block"
              />
              <p className="errors">{formErrors.cpName}</p>
              <input
                placeholder={t("sub_2")}
                type="address"
                name="address"
                value={formValues.address}
                onChange={handleChange}
                className="inputNormal block"
              />
              <p className="errors">{formErrors.address}</p>
              <input
                placeholder={t("sub_3")}
                type="country"
                name="country"
                value={formValues.country}
                onChange={handleChange}
                className="inputNormal block"
              />
              <p className="errors">{formErrors.country}</p>
              <input
                placeholder={t("sub_4")}
                type="Leader"
                name="Leader"
                value={formValues.fullName}
                onChange={handleChange}
                className="inputNormal block"
              />
            </div>
            <div>
              <input
                placeholder={t("sub_5")}
                type="number"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                className="inputNormal block number"
              />
              <p className="errors">{formErrors.phone}</p>
              <input
                placeholder={t("sub_6")}
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="inputNormal block"
              />
              <p className="errors">{formErrors.email}</p>
              <input
                placeholder={t("sub_7")}
                type="website"
                name="website"
                value={formValues.fullName}
                onChange={handleChange}
                className="inputNormal block"
              />
              <input
                placeholder={t("sub_8")}
                type="activArea"
                name="activArea"
                value={formValues.fullName}
                onChange={handleChange}
                className="inputNormal block"
              />
            </div>
          </div>
          {/* <label className="label">Message</label> */}
          <textarea
            placeholder={t("sub_9")}
            name="typeOfWork"
            className="inputMessg messg"
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfhXFciAAAAACbE9hXiD1ml52k8Uw98fJ44Mfat"
            onChange={onChangez}
            value={formValues.Captcha}
          />
          <p className="errors">{formErrors.Captcha}</p>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="butonsubmit">
              <p className="success">
                {t("contact_p12")} <CheckIcon className="checkIcon" />
              </p>
            </div>
          ) : (
            <input
              placeholder={t("sub_10")}
              type="submit"
              value={t("sub_10")}
              className="sendButton butonsubmit"
            />
          )}
        </form>
      </div>
    </div>
  );
}
