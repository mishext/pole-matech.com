import React from "react";
import "./SenegalPage.css";
import { useTranslation } from "react-i18next";

export default function SenegalPage(props) {
  const { t, i18n } = useTranslation();
  // let lng = props.lang;
  return (
    <div
      className={
        i18n.language === "ar" ? "SenegalContainerRight" : "SenegalContainer"
      }
    >
      <p className="mainWord">
        <span>{t("senegal_w1")}</span>
      </p>
      <ul>
        <li>
          <li className="bold">{t("senegal_p1")}</li>
          <ul>
            <li>{t("senegal_ul_p1")}</li>
            <li>{t("senegal_ul_p2")}</li>
            <li>{t("senegal_ul_p3")}</li>
            <li>{t("senegal_ul_p4")}</li>
            <li>{t("senegal_ul_p5")}</li>
            <li>{t("senegal_ul_p6")}</li>
            <li>{t("senegal_ul_p7")}</li>
          </ul>
          <li className=" bold">PES</li>
        </li>
      </ul>

      <p className="bold"> {t("senegal_p2")} </p>
      <p className="green bold underLine paddingTop">- {t("senegal_p3")}</p>
      <p>{t("senegal_p3_p1")}</p>
      <p>{t("senegal_p3_p2")} : 196 722 km2</p>
      <p>{t("senegal_p3_p3")} : Dakar</p>
      <p>Population : 15 millions {t("senegal_p3_p4")}</p>
      <p>{t("senegal_p3_p5")}</p>
      <p>{t("senegal_p3_p6")}</p>
      <p>{t("senegal_p3_p7")}</p>
      <ul>
        <li>{t("senegal_p3_p7_p1")}</li>
        <li>{t("senegal_p3_p7_p2")}</li>
        <li>{t("senegal_p3_p7_p3")}</li>
        <li>{t("senegal_p3_p7_p4")}</li>
        <li>{t("senegal_p3_p7_p5")}</li>
        <li>{t("senegal_p3_p7_p6")}</li>
        <li>{t("senegal_p3_p7_p7")}</li>
      </ul>

      <p className="underLine bold green paddingTop">{t("senegal_p3_p8")}</p>
      <p className="bold">{t("senegal_p3_p8_p1")}</p>
      <p>{t("senegal_p3_p8_p2")}</p>
      <p>{t("senegal_p3_p8_p3")}</p>
      <p>{t("senegal_p3_p8_p4")}</p>
      <p>{t("senegal_p3_p8_p5")}</p>
      <p>{t("senegal_p3_p8_p6")}</p>
      <p>{t("senegal_p3_p8_p7")}</p>
      <p className="underLine green bold paddingTop">{t("senegal_p3_p9")}</p>
      <p>{t("senegal_p3_p9_p1")}</p>
      <p>{t("senegal_p3_p9_p2")}</p>
      <p>{t("senegal_p3_p9_p3")}</p>
      <p className="underLine green bold paddingTop">{t("senegal_p3_p10")}</p>
      <p>{t("senegal_p3_p10_p1")}</p>
      <p>{t("senegal_p3_p10_p2")}</p>
      <p>{t("senegal_p3_p10_p3")}</p>
      <p>{t("senegal_p3_p10_p4")}</p>
      <p>{t("senegal_p3_p10_p5")}</p>
      <li className="blueSky paddingTop">{t("senegal_p3_p11")}</li>
      <p>{t("senegal_p3_p11_p1")}</p>
      <li className="blueSky paddingTop">{t("senegal_p3_p12")}</li>
      <p>{t("senegal_p3_p12_p1")}</p>
      <p>{t("senegal_p3_p12_p2")}</p>
      <li className="blueSky paddingTop">{t("senegal_p3_p13")}</li>
      <p>{t("senegal_p3_p13_p1")}</p>
      <p>
        <span className="bold">{t("senegal_p3_p13_p3_p1")}</span>{" "}
        {t("senegal_p3_p13_p3_p2")}
      </p>
      <p>
        <span className="bold">{t("senegal_p3_p13_p4_p1")}</span>{" "}
        {t("senegal_p3_p13_p4_p2")}
      </p>
      <p>
        {t("senegal_p3_p13_p5_p1")}{" "}
        <span className="blue underLine">{t("senegal_p3_p13_p5_p1_blue")}</span>{" "}
        {t("senegal_p3_p13_p5_p2")}
        <span className="blue underLine">
          {" "}
          {t("senegal_p3_p13_p5_p2_blue")}
        </span>{" "}
        {t("senegal_p3_p13_p5_p3")}
        <span className="blue underLine">
          {" "}
          {t("senegal_p3_p13_p5_p3_blue")}
        </span>
        {t("senegal_p3_p13_p5_p4")}
        <span className="blue underLine">
          {" "}
          {t("senegal_p3_p13_p5_p4_blue")}
        </span>{" "}
        {t("senegal_p3_p13_p5_p5")}
      </p>
      <p>{t("senegal_p3_p13_p6")}</p>
      <li className="blueSky paddingTop">{t("senegal_p3_p14")}</li>
      <p>{t("senegal_p3_p14_p1")}</p>
      <li className="blueSky paddingTop">{t("senegal_p3_p15")}</li>
      <ul>
        <li>
          {t("senegal_p3_p15_p1")}
          <ul>
            <li>{t("senegal_p3_p15_p2")}</li>
            <li>{t("senegal_p3_p15_p3")}</li>
          </ul>
          {t("senegal_p3_p15_p4")}{" "}
        </li>
      </ul>
      <li className="blueSky paddingTop">{t("senegal_p3_p16")}</li>
      <p>{t("senegal_p3_p16_p1")}</p>
      <li className="blueSky paddingTop">{t("senegal_p3_p17")}</li>
      <p>{t("senegal_p3_p17_p1")}</p>
      <p>{t("senegal_p3_p17_p2")}</p>
      <p>
        <span className="bold">{t("senegal_p3_p17_p3")} :</span>{" "}
        {t("senegal_p3_p17_p4")}
      </p>
      <p>
        <span className="bold">{t("senegal_p3_p17_p5")} : </span>
        103,29%
      </p>
      <p>
        <span className="bold">{t("senegal_p3_p17_p6")} :</span> 90%
      </p>
      <p>
        <span className="bold">{t("senegal_p3_p17_p7")} :</span> 62,97%
      </p>
      <p>
        9,34 millions{" "}
        <span className="bold">{t("senegal_p3_p17_p8")} 2G+3G</span>
      </p>
      <p className="italic">({t("senegal_p3_p17_p9")})</p>
      <p>« {t("senegal_p3_p17_p10")} »</p>
      <p>{t("senegal_p3_p17_p11")}</p>
      <p className="bold green paddingTop underLine">{t("senegal_p3_p18")}</p>
      <li className="blue">{t("senegal_p3_p18_p1")}</li>
      <p>{t("senegal_p3_p18_p2")} </p>
      <li>{t("senegal_p3_p18_p3")}</li>
      <li>{t("senegal_p3_p18_p4")}</li>
      <li>{t("senegal_p3_p18_p5")}</li>
      <li>{t("senegal_p3_p18_p6")}</li>

      <li className="blue paddingTop">{t("senegal_p3_p18_p7")}</li>
      <p>{t("senegal_p3_p18_p8")}</p>
      <li className="blue paddingTop">{t("senegal_p3_p18_p10")}</li>
      <p>{t("senegal_p3_p18_p9")}</p>
      <p className="paddingTop green underLine bold">{t("senegal_p3_p19")}</p>
      <li className="blue">{t("senegal_p3_p19_p1")}</li>
      <p>{t("senegal_p3_p19_p2")}</p>
      <p>{t("senegal_p3_p19_p3")}</p>
      <p>{t("senegal_p3_p19_p4")}</p>
      <p className="bold">{t("senegal_p3_p19_p5")}:</p>
      <p>
        {t("senegal_p3_p19_p6")}
        <span className="bold">(UEMOA)</span>.
      </p>
      <p>
        {t("senegal_p3_p19_p7")}
        <span className="bold">(CEDEAO)</span>.
      </p>
      <p>
        {t("senegal_p3_p19_p8")} <span className="bold">(UA)</span>.
      </p>
      <p>
        {t("senegal_p3_p19_p9")}
        <span className="bold">(OMVG)</span>.
      </p>
      <p>
        {t("senegal_p3_p19_p10")} <span className="bold">(OMVS)</span>.
      </p>
      <li className="paddingTop blue">{t("senegal_p3_p19_p11")}</li>
      <p>{t("senegal_p3_p19_p12")}</p>
      <li className="paddingTop blue">Accessible</li>
      <p>{t("senegal_p3_p19_p13")}</p>
      <p className="paddingTop green underLine bold">
        {t("senegal_p3_p19_p14")}
      </p>
      <p>{t("senegal_p3_p19_p15")}</p>
      <p>{t("senegal_p3_p19_p16")}</p>
      <p>{t("senegal_p3_p19_p17")}</p>
      <li className="paddingTop blue">{t("senegal_p3_p19_p18")}</li>
      <p>{t("senegal_p3_p19_p19")}</p>
      <li className="paddingTop blue">{t("senegal_p3_p19_p21")}</li>
      <p>{t("senegal_p3_p19_p22")}</p>
      <li className="paddingTop blue">{t("senegal_p3_p20")}</li>
      <p>{t("senegal_p3_p20_p1")}</p>
      <li className="paddingTop blue">{t("senegal_p3_p20_p2")}</li>
      <p>{t("senegal_p3_p20_p3")}</p>
      <li className="paddingTop blue">{t("senegal_p3_p20_p4")}</li>
      <p>{t("senegal_p3_p20_p5")}</p>
      <p className="green bold underLine">{t("senegal_p3_p20_p6")}</p>
      <p>{t("senegal_p3_p20_p7")}</p>
      <ul>
        <li>{t("senegal_p3_p20_p8")}</li>
        <li>{t("senegal_p3_p20_p9")}</li>
        <li>{t("senegal_p3_p20_p10")}</li>
        <li>{t("senegal_p3_p20_p11")}</li>
        <li>{t("senegal_p3_p20_p12")}</li>
        <li>{t("senegal_p3_p20_p13")}</li>
        <li>{t("senegal_p3_p20_p14")}</li>
        <li>{t("senegal_p3_p20_p15")}</li>
      </ul>
      <li className="paddingTop blue">{t("senegal_p3_p20_p16")}</li>
      <p>{t("senegal_p3_p20_p17")}</p>
      <p>{t("senegal_p3_p20_p18")}</p>
      <p className="mainWord">
        <span>P</span>ES
      </p>
      <p>{t("senegal_p3_p20_p19")} (PSE) </p>
      <p className="italic">{t("senegal_p3_p20_p20")} – PAP 2019-2023</p>
      <p>{t("senegal_p3_p20_p21")}. </p>
      <p className="bold">{t("senegal_p3_p20_p22")} PSE </p>
      <a
        className="blue"
        target="_blank"
        href="https://www.sentresor.org/publication/plan-senegal-emergent-plan-dactions-prioritaires-2019-2023/"
      >
        https://www.sentresor.org/publication/plan-senegal-emergent-plan-dactions-prioritaires-2019-2023/
      </a>
    </div>
  );
}
