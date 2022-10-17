import React from "react";
import "./Footer.css";
import Logo from "../../Images/logo.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="Container">
      <div className="footerContainer">
        <img src={Logo} className="footerLogo" alt="footer-logo" />

        <div>
          <div className="footerInfo">
            <div className="footerPhone">
              <p className="phone1">{t("phone_1")}</p>
              <p>+221 78 155 9669</p>
            </div>

            <div className="footerEmail">
              <p className="email">{t("email")}</p>
              <p>contact@pole-matech.com</p>
              <p>sales@pole-matech.com</p>
            </div>
          </div>
          <div className="footerAddress">
            <p>{t("footer_p1")}:&nbsp;</p>
            <p className="address">{t("address_1")}</p>
          </div>
        </div>
      </div>
      <p className="copyRight">
        Copyright 2022 © <strong>POLE MATECH</strong>
      </p>
    </div>
  );
}
