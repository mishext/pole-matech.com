import React, { Suspense, useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import i18next from "i18next";
import Header from "./Components/Header/Header";
import SenegalPage from "./Pages/Senegal/SenegalPage";
import ApixPage from "./Pages/ApixPage/ApixPage";
import Contact from "./Pages/Contact/Contact";
import PoleMatechPage from "./Pages/poleMatechPage/PoleMatechPage";
import Footer from "./Components/Footer/Footer";
import OptionsPage from "./Pages/OptionsPage/OptionsPage";
import Subscribe from "./Pages/Subscribe/Subscribe";
import "./App.css";
import { useTranslation } from "react-i18next";

// const Home = React.lazy(() => import("./Pages/Home/Home"));
const BrandComponent = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./Pages/Home/Home")), 2000)
    )
);

function App() {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState("en");

  const onChangeLang = (e) => {
    e.preventDefault();
    // window.location.;
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="App">
      <Router>
        <Suspense
          fallback={
            <div id="Loader">
              <ClipLoader
                className="ClipLoader"
                color="#0077b6"
                cssOverride={{
                  padding: "0px",
                  margin: "0px",
                  position: "relative",
                  display: "block",
                }}
                size={300}
                speedMultiplier={0.7}
              />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<BrandComponent />} />

            <Route path="/Senegal" element={<SenegalPage />} />
            <Route path="/apix" element={<ApixPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Pole-Matech" element={<PoleMatechPage />} />
            <Route path="/Options" element={<OptionsPage />} />
            <Route path="/Subscribe" element={<Subscribe />} />
          </Routes>
          <Header onChange={onChangeLang} />
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
