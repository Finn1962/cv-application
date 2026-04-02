import React, { useState } from "react";
import Header from "./CV/Header.jsx";
import CvContainer from "./CV/ContentContainer.jsx";
import Section from "./CV/Section.jsx";
import EditorContainer from "./Editor/ContentContainer.jsx";
import CloseButton from "./Editor/CloseButton.jsx";
import HeadingInput from "./Editor/HeadingInput.jsx";
import DataInput from "./Editor/DataInput.jsx";

export default function App() {
  const [cvStructure, setCvStructure] = useState([
    {
      tag: Header,
      data: {
        firstName: "Finn",
        lastName: "Schmidt",
        streetName: "Maurerweg",
        houseNumber: "24",
        postalCode: "38126",
        cityName: "Braunschweig",
        phoneNumber: "0162/9794940",
        emailAdress: "finn.arvid@outlook.de",
      },
      key: crypto.randomUUID(),
    },
    {
      tag: Section,
      inputTyps: [HeadingInput, DataInput],
      data: [
        { meta: "Name", details: "Finn Schmidt", key: crypto.randomUUID() },
        {
          meta: "Geburtsdatum",
          details: "01.06.2004",
          key: crypto.randomUUID(),
        },
        {
          meta: "Geburtsort",
          details: "Braunschweig",
          key: crypto.randomUUID(),
        },
        { meta: "Familienstand", details: "Ledig", key: crypto.randomUUID() },
      ],
      key: crypto.randomUUID(),
    },
  ]);

  return (
    <div className="page-wrapper">
      <main>
        <EditorContainer>
          <CloseButton />
          <HeadingInput
            cvData={cvStructure[0].data}
            setCvData={setCvStructure}
          />
          <DataInput />
          <DataInput />
          <DataInput />
        </EditorContainer>
        <CvContainer>
          {cvStructure.map((element) => {
            return <element.tag data={element.data} key={element.key} />;
          })}
        </CvContainer>
      </main>
    </div>
  );
}
