import Header from "../CV/Header.jsx";
import Section from "../CV/Section.jsx";
import SectionHeadingInput from "../Editor/SectionHeadingInput.jsx";
import SectionDataInput from "../Editor/SectionDataInput.jsx";
import HeaderNameInput from "../Editor/HeaderNameInput.jsx";
import HeaderMetaInput from "../Editor/HeaderMetaInput.jsx";

import newHeader from "../structurePresets/header.js";
import newSection from "../structurePresets/section.js";

import { useState } from "react";
import { produce } from "immer";

export function useCvStructure() {
  //Übersetzung der Komponenten
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

  //Fügt eine Sektion im CV hinzu
  function addSection() {
    setCvStructure(
      produce((draft) => {
        draft.push(newSection(componentMap));
      }),
    );
  }

  //Löscht eine Sektion im CV
  function deleteSection(sectionKey) {
    setCvStructure(
      produce((draft) => {
        const section = draft.find((section) => section.key === sectionKey);

        if (!section) return;
        const index = draft.indexOf(section);
        draft.splice(index, 1);
      }),
    );
  }

  return {
    componentMap,
    cvStructure,
    selectedKey,
    selectedSection,
    activeInputs,
    setCvStructure,
    setSelectedKey,
    updateData,
    addInput,
    deleteInput,
    addSection,
    deleteSection,
  };
}
