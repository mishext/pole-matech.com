import React from "react";
import "./ApixPage.css";
import { useTranslation } from "react-i18next";

export default function ApixPage(props) {
  const { t, i18n } = useTranslation();
  // let lng = props.lang;
  return (
    <div
      className={
        i18n.language === "ar" ? "ApixContainerRight" : "ApixContainer"
      }
    >
      <p className="mainWord">
        <span>APIX</span>
      </p>
      <p>
        <span className="bold big">L </span> {t("apix_p1")}{" "}
      </p>
      <ul>
        <li>
          {t("apix_p1_p1")} :
          <ul>
            <li>{t("apix_p1_p2")}</li>
            <li>{t("apix_p1_p3")}</li>
            <li>{t("apix_p1_p4")}</li>
            <li>{t("apix_p1_p5")}</li>
            <li>{t("apix_p1_p6")}</li>
            <li>{t("apix_p1_p7")}</li>
          </ul>
        </li>
      </ul>
      <p>{t("apix_p1_p8")}</p>
      <p className="underLine green bold">{t("apix_p1_p9")}</p>
      <p className="paddingTop italic blueSky">{t("apix_p1_p10")}</p>
      <p className="marginZero">{t("apix_p1_p11")}</p>
      <p className="paddingTop italic blueSky">{t("apix_p1_p12")}</p>
      <p className="marginZero bold">{t("apix_p1_p13")} :</p>
      <li>
        <span className="bold">{t("apix_p1_p14")},&nbsp;</span>
        {t("apix_p1_p15")}
      </li>
      <li>
        <span className="bold"> {t("apix_p1_p16")}</span> {t("apix_p1_p17")}
      </li>
      <li>
        <span className="bold">{t("apix_p1_p18")} </span>
        {t("apix_p1_p19")}
      </li>
      <li>
        <span className="bold">{t("apix_p1_p20")}</span> {t("apix_p1_p21")}
      </li>
      <li>
        <span className="bold">{t("apix_p1_p22")}</span> {t("apix_p1_p23")}
      </li>
      <p className="paddingTop italic blueSky">{t("apix_p1_p24")}</p>
      <p className="marginZero">{t("apix_p1_p25")} :</p>
      <li>{t("apix_p1_p26")}</li>
      <li>{t("apix_p1_p27")}</li>
      <li>{t("apix_p1_p28")}</li>
      <li>{t("apix_p1_p29")}</li>
      <li>{t("apix_p1_p30")} ;</li>
      <li>{t("apix_p1_p31")}</li>
      <p className="blueSky">{t("apix_p1_p32")}</p>
      <p className="italic blueSky">{t("apix_p1_p33")}</p>
      <p className="bold">{t("apix_p1_p34")}:</p>
      <li>{t("apix_p1_p35")}</li>
      <li>{t("apix_p1_p36")}</li>
      <li>{t("apix_p1_p37")}</li>
      <li>{t("apix_p1_p38")}</li>
      <li>{t("apix_p1_p39")}</li>
      <li>{t("apix_p1_p40")}</li>
      <p className="blueSky italic">{t("apix_p1_p41")}</p>
      <p>{t("apix_p1_p42")} :</p>
      <p className="bold">{t("apix_p1_p43")} / ZES</p>
      <li>{t("apix_p1_p44")}</li>
      <li>{t("apix_p1_p45")}</li>
      <li>{t("apix_p1_p46")}</li>
      <p className="underLine green bold paddingTop">{t("apix_p1_p47")} </p>
      <p className="marginZero">{t("apix_p1_p48")}</p>
      <p className="underLine">{t("apix_p1_p49")}</p>
      <li>{t("apix_p1_p50")}</li>
      <li>{t("apix_p1_p51")}</li>
      <li>TIC</li>
      <li>{t("apix_p1_p52")}</li>
      <li>{t("apix_p1_p53")}</li>
      <li>{t("apix_p1_p54")}</li>
      <li>Services</li>
      <li>{t("apix_p1_p55")}</li>
      <p>{t("apix_p1_p56")}</p>
      <p className="paddingTop bold big">{t("apix_p1_p57")} </p>
      <p className="marginZero">
        <span className="bold">{t("apix_p1_p58")}</span> {t("apix_p1_p59")}
      </p>
      <li className="liStyle">{t("apix_p1_p60")}</li>
      <li className="liStyle">L apix</li>
      <li className="liStyle">{t("apix_p1_p61")}</li>
      <p>{t("apix_p1_p62")}</p>
      <p className="marginZero">{t("apix_p1_p63")}</p>
    </div>
  );
}
