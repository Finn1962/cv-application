import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./CV/Header.jsx";
import CvContainer from "./CV/ContentContainer.jsx";
import Section from "./CV/PersonalData.jsx";

import "./reset.css";
import "./index.css";
import "./CV/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CvContainer>
      <Header />
      <Section />
      <Section />
      <Section />
    </CvContainer>
  </StrictMode>,
);
