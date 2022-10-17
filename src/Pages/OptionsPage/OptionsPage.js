import React from "react";
import "./Options.css";
import { useTranslation } from "react-i18next";

export default function OptionsPage(props) {
  const { t, i18n } = useTranslation();
  // let lng = props.lang;
  return (
    <div
      className={
        i18n.language === "ar" ? "OptionsContainerRight" : "OptionsContainer"
      }
    >
      <p className="mainWord">
        <span>{t("option_1")}</span>
      </p>

      <p className="bold">{t("option_2")}</p>
      <p>- {t("option_3")}.</p>
      <p>- {t("option_4")}.</p>
      <p className="bold big blueSky paddingTop">{t("option_5")}</p>
    </div>
  );
}
