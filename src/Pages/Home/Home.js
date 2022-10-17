import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import MovingComponent from "react-moving-text";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Home.css";
import { useTranslation } from "react-i18next";
import DakarImg from "../../Images/Dakar.jpg";
import PlanImg from "../../Images/plans.png";

export default function Home(props) {
  const { t, i18n } = useTranslation();

  const handleDragStart = (e) => e.preventDefault();
  const Images = [
    { image1: require("../../Images/pic5.jpg"), id: 0 },
    { image1: require("../../Images/bg11.jpg"), id: 1 },
    { image1: require("../../Images/bg9.jpg"), id: 2 },
    { image1: require("../../Images/bg12.jpg"), id: 3 },
    { image1: require("../../Images/pic2.jpg"), id: 4 },
    { image1: require("../../Images/pic1.jpg"), id: 5 },
    { image1: require("../../Images/pic6.jpg"), id: 6 },
    { image1: require("../../Images/pic7.jpg"), id: 7 },
  ];
  let lng = props.lang;
  return (
    <div className="HomeContainer">
      <AliceCarousel
        mouseTracking
        infinite
        // items={items}
        autoPlayStrategy="action"
        autoPlayInterval="3000"
        autoPlay={true}
        animationType="fadeout"
        animationDuration="2800"
      >
        {Images.map((item) => {
          return (
            <div>
              <img key={item.id} src={item.image1} className="SliderImage" />
              <MovingComponent
                type="slideInFromLeft"
                duration="1000ms"
                delay="1s"
                direction="normal"
                timing="ease-in-out"
                iteration="1"
                fillMode="both"
                className={
                  i18n.language === "ar" ? "movingText2Right" : "movingText2"
                }
              >
                <p>
                  {t("slider_w1")}
                  <br />
                  {t("slider_w2")}
                  <br />
                  {t("slider_w3")}
                </p>
                <button className="clickHereButton">
                  <Link to="/Pole-Matech">
                    {t("slider_w4")}
                    <br />
                    {t("slider_w5")}
                  </Link>
                </button>
              </MovingComponent>
            </div>
          );
        })}
      </AliceCarousel>
      <div
        className={i18n.language === "ar" ? "DownSectionRight" : "DownSection"}
      >
        <div
          className={
            i18n.language === "ar" ? "DownPSectionRight" : "DownPSection"
          }
        >
          <p className="mainWord aftersize">POLE MATECH</p>
          <p className="marginZero">{t("pole_p2")}</p>
          <p>{t("pole_p3")}</p>
          <ul
            className="marginZero"
            id={i18n.language === "ar" ? "ulRemove" : ""}
          >
            <li>{t("pole_p4")}</li>
            <li>{t("pole_p5")}</li>
          </ul>
          <p>{t("pole_p6")}</p>
          <p>{t("pole_p7")}</p>
          {t("pole_100")} <Link to="./Pole-Matech">{t("pole_101")}</Link>
        </div>
        <img src={DakarImg} className="DakarImage" />
      </div>
      <div
        className={i18n.language === "ar" ? "planSectionRight" : "planSection"}
      >
        <p className="mainWord paddingTop aftersize">{t("pole_p8")}</p>
        <p>{t("pole_p9")}</p>
        <p>{t("pole_p10")}</p>
        <ul>
          <li>{t("pole_p11")}</li>
          <li>{t("pole_p12")}</li>
        </ul>
        <img alt="Picture" src={PlanImg} className="PlanImg" />
      </div>
    </div>
  );
}
