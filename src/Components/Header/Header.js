import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import Logo from "../../Images/logo.png";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import SenegalFlg from "../../Images/senFlag.png";

export default function Header(props) {
  const { i18n } = useTranslation();

  const { t } = useTranslation();
  const options = [
    {
      label: "ENGLISH",
      value: "en",
    },
    {
      label: "FRENCH",
      value: "fr",
    },
    { label: "ARABIC", value: "ar" },
  ];
  // function onChangeLang(e) {
  //   i18n.changeLanguage(e.target.value);
  //   e.target.value(setShowLinks(!showLinks));
  // }
  function onChangeLang1(e) {
    i18n.changeLanguage(e.target.value);
    // e.target.value(setShowLinks(!showLinks));
  }
  const [showLinks, setShowLinks] = useState(false);

  let lng = props.lang;
  return (
    <div className="HeaderContainer">
      <div className="logoContainer">
        <Link to="/">
          <img src={Logo} className="Logo" alt="Pole-Matech-Logo" />
        </Link>
      </div>
      <div className="linksContainer">
        <button
          className="tabBarContainer"
          onClick={() => setShowLinks(!showLinks)}
        >
          <FontAwesomeIcon icon={faBars} className="tab-bar" />
        </button>
        <div
          className={
            i18n.language === "ar" ? "hiddenLinksRight" : "hiddenLinks"
          }
          id={showLinks ? "hidden" : ""}
        >
          <Link
            onClick={() => setShowLinks(!showLinks)}
            className="links hover-underline-animation"
            to="/"
          >
            {t("home_ww")}
          </Link>
          <Link
            onClick={() => setShowLinks(!showLinks)}
            className="links hover-underline-animation"
            to="/Senegal"
          >
            {t("header_s1")}
          </Link>
          <Link
            onClick={() => setShowLinks(!showLinks)}
            className="links hover-underline-animation"
            to="/Apix"
          >
            APIX
          </Link>
          <Link
            onClick={() => setShowLinks(!showLinks)}
            className="links hover-underline-animation"
            to="/Pole-Matech"
          >
            POLE MATECH
          </Link>
          <Link
            onClick={() => setShowLinks(!showLinks)}
            className="links hover-underline-animation"
            to="/Subscribe"
            reloadDocument
          >
            {t("header_s2")}
          </Link>
          <Link
            onClick={() => setShowLinks(!showLinks)}
            className="links hover-underline-animation"
            to="/Options"
          >
            {t("header_s3")}
          </Link>
          <Link
            onClick={() => setShowLinks(!showLinks)}
            className="links hover-underline-animation"
            to="/Contact"
            reloadDocument
          >
            {t("contact_ww")}
          </Link>
          <div className={i18n.language === "ar" ? "selectRight" : "select"}>
            <select
              value={i18n.language}
              onChange={props.onChange}
              className="select-option"
            >
              {options.map((item) => {
                return (
                  <option className="select-option1" value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <img src={SenegalFlg} className="SenegalFlag" />
        <div className="select1">
          <select
            onClick={() => setShowLinks(false)}
            value={i18n.language}
            onChange={props.onChange}
            className="select-option1"
          >
            {options.map((item) => {
              return (
                <option className="select-option1" value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
