import { useState } from "react";
import { produce } from "immer";

import Header from "./CV/Header.jsx";
import CvContainer from "./CV/ContentContainer.jsx";
import Section from "./CV/Section.jsx";
import EditorContainer from "./Editor/ContentContainer.jsx";
import CloseButton from "./Editor/CloseButton.jsx";
import AddButton from "./Editor/AddButton.jsx";
import Switch from "./Editor/Switch.jsx";
import SectionHeadingInput from "./Editor/SectionHeadingInput.jsx";
import SectionDataInput from "./Editor/SectionDataInput.jsx";
import HeaderNameInput from "./Editor/HeaderNameInput.jsx";
import HeaderMetaInput from "./Editor/HeaderMetaInput.jsx";
import ControlElementsContainer from "./Editor/ControlElementsContainer.jsx";

export default function App() {
  //Übersetzung von Tag zu Komponente
  const componentMap = {
    header: Header,
    section: Section,
    sectionHeadingInput: SectionHeadingInput,
    sectionDataInput: SectionDataInput,
    headerNameInput: HeaderNameInput,
    headerMetaInput: HeaderMetaInput,
  };

  //Struktur des Lebenslaufs, bestehend aus Komponenten, Daten und Keys
  const [cvStructure, setCvStructure] = useState([
    {
      tag: componentMap.header,
      inputs: [
        { tag: componentMap.headerNameInput, key: crypto.randomUUID() },
        {
          tag: componentMap.headerMetaInput,
          placeHolder: "Straße",
          key: crypto.randomUUID(),
        },
        {
          tag: componentMap.headerMetaInput,
          placeHolder: "Hausnummer",
          key: crypto.randomUUID(),
        },
        {
          tag: componentMap.headerMetaInput,
          placeHolder: "PLZ",
          key: crypto.randomUUID(),
        },
        {
          tag: componentMap.headerMetaInput,
          placeHolder: "Stadt",
          key: crypto.randomUUID(),
        },
        {
          tag: componentMap.headerMetaInput,
          placeHolder: "Telefon",
          key: crypto.randomUUID(),
        },
        {
          tag: componentMap.headerMetaInput,
          placeHolder: "E-Mail",
          key: crypto.randomUUID(),
        },
      ],
      data: [
        { value: "Finn Schmidt", key: crypto.randomUUID() },
        { value: "Maurerweg", key: crypto.randomUUID() },
        { value: "24", key: crypto.randomUUID() },
        { value: "38126", key: crypto.randomUUID() },
        { value: "Braunschweig", key: crypto.randomUUID() },
        { value: "0162/9794940", key: crypto.randomUUID() },
        { value: "finn.arvid@outlook.de", key: crypto.randomUUID() },
      ],
      key: crypto.randomUUID(),
    },
    {
      tag: componentMap.section,
      inputs: [
        { tag: componentMap.sectionHeadingInput, key: crypto.randomUUID() },
        { tag: componentMap.sectionDataInput, key: crypto.randomUUID() },
      ],
      addableInputs: {
        tag: componentMap.sectionDataInput,
      },
      data: [
        { sectionTitle: "Persönliche Daten", key: crypto.randomUUID() },
        { meta: "Name", details: "Finn Schmidt", key: crypto.randomUUID() },
      ],
      key: crypto.randomUUID(),
    },
  ]);

  //Auswahl für aktive Abschnitte und zugehörige Inputs
  const [selectedId, setSelectedId] = useState(null);

  const selectedSection = cvStructure.find(
    (element) => element.key === selectedId,
  );

  const activeInputs = selectedSection ? selectedSection.inputs : [];

  //Algorithmus zum Aktualisieren der Datenstruktur des Lebenslaufs
  function updateCvStructure({ sectionKey, dataIndex, newData }) {
    setCvStructure(
      produce((draft) => {
        const section = draft.find((section) => section.key === sectionKey);

        if (section) {
          const oldData = section.data[dataIndex];
          section.data[dataIndex] = { ...oldData, ...newData };
        }
      }),
    );
  }

  function addInput() {
    const inputToAdd = selectedSection.addableInputs;
    setCvStructure(
      produce((draft) => {
        const section = draft.find((section) => section.key === selectedId);
        if (section && inputToAdd) {
          const oldInputs = section.inputs;
          section.inputs = [
            ...oldInputs,
            { ...inputToAdd, key: crypto.randomUUID() },
          ];
          section.data.push({
            meta: "",
            details: "",
            key: crypto.randomUUID(),
          });
        }
      }),
    );
  }

  //Rückgabe
  return (
    <div className="page-wrapper">
      <main>
        {activeInputs.length > 0 && (
          <EditorContainer>
            <ControlElementsContainer>
              <Switch />
              <CloseButton onClick={() => setSelectedId(null)} />
            </ControlElementsContainer>

            {activeInputs.map((input, index) => {
              const placeHolder = input.placeHolder || "";
              const Tag = input.tag;
              return (
                <Tag
                  key={input.key}
                  data={selectedSection.data[index]}
                  updateData={(newData) =>
                    updateCvStructure({
                      sectionKey: selectedSection.key,
                      dataIndex: index,
                      newData,
                    })
                  }
                  placeHolder={placeHolder}
                />
              );
            })}

            {selectedSection.tag === componentMap.section && (
              <AddButton onClick={addInput} />
            )}
          </EditorContainer>
        )}

        <CvContainer>
          {cvStructure.map((section) => {
            const Tag = section.tag;
            return (
              <Tag
                className={section.key === selectedId ? "active" : ""}
                data={section.data}
                sectionTitle={section.sectionTitle}
                key={section.key}
                onClick={() => setSelectedId(section.key)}
              />
            );
          })}
        </CvContainer>
      </main>
    </div>
  );
}
