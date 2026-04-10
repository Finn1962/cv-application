import { useState } from "react";
import { produce } from "immer";

import Header from "./CV/Header.jsx";
import CvContainer from "./CV/ContentContainer.jsx";
import Section from "./CV/Section.jsx";
import EditorContainer from "./Editor/ContentContainer.jsx";
import CloseButton from "./Editor/CloseButton.jsx";
import InputAddButton from "./Editor/AddButton.jsx";
import SectionAddButton from "./CV/AddButton.jsx";
import Switch from "./Editor/Switch.jsx";
import SectionHeadingInput from "./Editor/SectionHeadingInput.jsx";
import SectionDataInput from "./Editor/SectionDataInput.jsx";
import HeaderNameInput from "./Editor/HeaderNameInput.jsx";
import HeaderMetaInput from "./Editor/HeaderMetaInput.jsx";
import ControlElementsContainer from "./Editor/ControlElementsContainer.jsx";

import newHeader from "./structurePresets/header.js";
import newSection from "./structurePresets/section.js";

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

  //Speichert die Struktur des Lebenslaufs
  const [cvStructure, setCvStructure] = useState([
    newHeader(componentMap),
    newSection(componentMap),
  ]);

  //Speichert aktive Section, Key und zugehörige Inputs
  const [selectedKey, setSelectedKey] = useState(null);

  const selectedSection = cvStructure.find(
    (element) => element.key === selectedKey,
  );

  const activeInputs = selectedSection ? selectedSection.inputs : [];

  //Ändert die Daten in der cvStructure, wenn in einem Input etwas geändert wird
  function updateData({ sectionKey, dataIndex, newData }) {
    setCvStructure(
      produce((draft) => {
        const section = draft.find((section) => section.key === sectionKey);

        if (!section) return;
        const oldData = section.data[dataIndex];
        section.data[dataIndex] = { ...oldData, ...newData };
      }),
    );
  }

  //Fügt einen input und Datensatz zum ausgewählten Abschnitt hinzu
  function addInput() {
    const inputToAdd = selectedSection.addableInputs;
    setCvStructure(
      produce((draft) => {
        const section = draft.find((section) => section.key === selectedKey);

        if (!section || !inputToAdd) return;
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
      }),
    );
  }

  //Löscht einen input und Datensatz aus dem ausgewählten Abschnitt
  function deleteInput(inputKey) {
    setCvStructure(
      produce((draft) => {
        const section = draft.find((section) => section.key === selectedKey);

        if (!section) return;
        const input = section.inputs.find((input) => input.key === inputKey);
        const index = section.inputs.indexOf(input);

        if (index < 0) return;
        section.inputs.splice(index, 1);
        section.data.splice(index, 1);
      }),
    );
  }

  function addSection() {
    setCvStructure(
      produce((draft) => {
        draft.push(newSection(componentMap));
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
              <CloseButton onClick={() => setSelectedKey(null)} />
            </ControlElementsContainer>

            {activeInputs.map((input, index) => {
              const placeHolder = input.placeHolder || "";
              const Tag = input.tag;
              return (
                <Tag
                  key={input.key}
                  data={selectedSection.data[index]}
                  deleteInput={() => deleteInput(input.key)}
                  updateData={(newData) =>
                    updateData({
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
              <InputAddButton addInput={addInput} />
            )}
          </EditorContainer>
        )}

        <CvContainer>
          {cvStructure.map((section) => {
            const Tag = section.tag;
            return (
              <Tag
                className={section.key === selectedKey ? "active" : ""}
                data={section.data}
                sectionTitle={section.sectionTitle}
                key={section.key}
                selectSection={() => setSelectedKey(section.key)}
              />
            );
          })}
          <SectionAddButton addSection={addSection} />
        </CvContainer>
      </main>
    </div>
  );
}
