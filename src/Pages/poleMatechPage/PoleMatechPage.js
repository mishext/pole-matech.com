import React from "react";
import { Link } from "react-router-dom";
import "./PoleMatechPage.css";
import { useTranslation } from "react-i18next";
import PlanImg from "../../Images/plans.png";

export default function PoleMatechPage(props) {
  const { t, i18n } = useTranslation();

  // let lng = props.lang;
  return (
    <div
      className={
        i18n.language === "ar"
          ? "poleMatechContainerRight"
          : "poleMatechContainer"
      }
    >
      <p className="mainWord">
        <span>{t("pole_p1")}</span>
      </p>
      <p className="marginZero">{t("pole_p2")}</p>
      <p>{t("pole_p3")}</p>
      <ul className="marginZero">
        <li>{t("pole_p4")}</li>
        <li>{t("pole_p5")}</li>
      </ul>
      <p>{t("pole_p6")}</p>
      <p>{t("pole_p7")}</p>
      <p className="mainWord big bold paddingTop">
        <span>{t("pole_p8")}</span>
      </p>
      <p>{t("pole_p9")}</p>
      <p>{t("pole_p10")}</p>
      <ul>
        <li>{t("pole_p11")}</li>
        <li>{t("pole_p12")}</li>
      </ul>
      <img alt="Picture" src={PlanImg} className="PlanImg" />
      <p className="mainWord big bold paddingTop">
        <span>{t("pole_p13")}</span>
      </p>
      <p>
        {t("pole_p14")}
        <span className="underLine italic">{t("pole_p15")}</span>
      </p>
      <p>- {t("pole_p16")} </p>
      <ul className="marginZero">
        <li>{t("pole_p17")}</li>
        <li>{t("pole_p18")}</li>
      </ul>
      <p>- {t("pole_p19")}</p>
      <ul className="marginZero">
        <li>{t("pole_p20")}</li>
        <li>{t("pole_p21")} </li>
      </ul>
      <p>- {t("pole_p22")} </p>
      <ul className="marginZero">
        <li>{t("pole_p23")}</li>
        <li>{t("pole_p24")}</li>
      </ul>
      <p>- {t("pole_p25")} </p>
      <ul className="marginZero">
        <li>{t("pole_p26")}</li>
        <li>{t("pole_p27")}</li>
      </ul>
      <p className="mainWord big bold paddingTop">
        <span>SERVICE PLATINIUM</span>
      </p>
      <p>- {t("pole_p28")} </p>
      <p className="bold">{t("pole_p29")}</p>
      <ul className="marginZero">
        <li>{t("pole_p30")}</li>
        <li>{t("pole_p31")}</li>
        <li>{t("pole_p32")}</li>
      </ul>
      <p className="bold">{t("pole_p33")}</p>
      <ul className="marginZero">
        <li>{t("pole_p34")}</li>
        <li>{t("pole_p35")}</li>
      </ul>
      <p className="bold">{t("pole_p36")}</p>
      <ul className="marginZero">
        <li>{t("pole_p37")}</li>
        <li>{t("pole_p38")}</li>
        <li>{t("pole_p39")}</li>
      </ul>
      <p className="bold">{t("pole_p40")}</p>
      <ul className="marginZero">
        <li>{t("pole_p41")}</li>
      </ul>
      <p className="bold">{t("pole_p42")}</p>
      <ul className="marginZero">
        <li>{t("pole_p43")}</li>
        <li>{t("pole_p44")}</li>
        <li>{t("pole_45")}</li>
        <li>{t("pole_46")}</li>
      </ul>
      <p className="bold">{t("pole_47")}</p>
      <ul className="marginZero">
        <li>{t("pole_48")}</li>
        <li>{t("pole_49")}</li>
        <li>Ambulance</li>
      </ul>
      <p className="bold">{t("pole_50")}</p>
      <ul className="marginZero">
        <li>{t("pole_51")}</li>
        <li>{t("pole_52")}</li>
        <li>{t("pole_53")}</li>
      </ul>
      <p className="bold">{t("pole_54")}</p>
      <ul className="marginZero">
        <li>{t("pole_55")}</li>
        <li>{t("pole_56")}</li>
        <li>{t("pole_57")}</li>
      </ul>
      <p className="bold">{t("pole_58")}</p>
      <ul className="marginZero">
        <li>{t("pole_59")}</li>
        <li>{t("pole_60")}</li>
        <li>{t("pole_61")}</li>
        <li>{t("pole_62")}</li>
      </ul>
      <p>{t("pole_63")}</p>
      <p>{t("pole_64")} </p>
      <p className="bold paddingTop">{t("pole_65")}</p>
      <p className="marginZero">{t("pole_66")}</p>
      <ul className="marginZero">
        <li>{t("pole_67")}</li>
        <li>{t("pole_68")}</li>
        <li>{t("pole_69")}</li>
        <li>{t("pole_70")}</li>
      </ul>
      <p>{t("pole_71")}</p>
      <p className="bold italic underLine">{t("pole_72")}</p>
      <ul className="marginZero">
        <li>{t("pole_73")}</li>
        <li>{t("pole_74")}</li>
        <li>{t("pole_75")}</li>
        <li>{t("pole_76")}</li>
        <li>{t("pole_77")}</li>
        <li>{t("pole_78")}</li>
        <li>{t("pole_79")}</li>
        <li>{t("pole_80")}</li>
        <li>{t("pole_81")}</li>
      </ul>
      <p className="bold italic underLine">{t("pole_82")}</p>
      <ul className="marginZero">
        <li>{t("pole_83")}</li>
        <li>{t("pole_84")}</li>
      </ul>
      <p>{t("pole_85")}</p>
      <div className="poleButtonContainer">
        <p className="bold big blueSky">{t("pole_86")}</p>
        <button
          href="/Subscribe"
          className={i18n.language === "ar" ? "poleButtonRight" : "poleButton"}
        >
          <Link reloadDocument to="/Subscribe">
            {" "}
            {t("header_s2")} !
          </Link>
        </button>
      </div>
    </div>
  );
}
