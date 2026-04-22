import Header from "../CV/Header.jsx";
import Section from "../CV/Section.jsx";
import SectionHeadingInput from "../Editor/SectionHeadingInput.jsx";
import SectionDataInput from "../Editor/SectionDataInput.jsx";
import HeaderNameInput from "../Editor/HeaderNameInput.jsx";
import HeaderMetaInput from "../Editor/HeaderMetaInput.jsx";
import ColorInput from "../Editor/ColorInput.jsx";
import CheckBoxInput from "../Editor/Checkbox.jsx";
import FontInput from "../Editor/FontInput.jsx";

import newHeader from "../structurePresets/headerPreset.js";
import newSection from "../structurePresets/sectionPreset.js";
import designSettings from "../structurePresets/designSettings.js";

import { useState } from "react";
import { produce } from "immer";

export function useCvData() {
  //Übersetzung der Komponenten
  const componentMap = {
    header: Header,
    section: Section,
    sectionHeadingInput: SectionHeadingInput,
    sectionDataInput: SectionDataInput,
    headerNameInput: HeaderNameInput,
    headerMetaInput: HeaderMetaInput,
    colorInput: ColorInput,
    checkboxInput: CheckBoxInput,
    fontInput: FontInput,
  };

  //Speichert die Struktur und Einstellungen des Lebenslaufs
  const [cvData, setCvData] = useState({
    build: [newHeader(componentMap), newSection(componentMap)],
    settings: designSettings(componentMap),
  });

  //Speichert aktive Section, Key und zugehörige Inputs
  const [selectedKey, setSelectedKey] = useState(null);

  const selectedSection = cvData.build.find(
    (element) => element.key === selectedKey,
  );

  const activeInputs = selectedSection ? selectedSection.inputs : [];

  //Ändert die Daten in der cvStructure, wenn in einem Input etwas geändert wird
  function updateSectionData({ sectionKey, dataIndex, newData }) {
    setCvData(
      produce((draft) => {
        const section = draft.build.find(
          (section) => section.key === sectionKey,
        );

        if (!section) return;
        const oldData = section.data[dataIndex];
        section.data[dataIndex] = { ...oldData, ...newData };
      }),
    );
  }

  function updateSettingsData({ settingKey, newValue }) {
    setCvData(
      produce((draft) => {
        const setting = draft.settings.find(
          (setting) => setting.key === settingKey,
        );
        if (setting) {
          setting.value = newValue;
        }
      }),
    );
  }

  //Fügt einen input und Datensatz zum ausgewählten Abschnitt hinzu
  function addInput() {
    const inputToAdd = selectedSection.addableInputs;
    setCvData(
      produce((draft) => {
        const section = draft.build.find(
          (section) => section.key === selectedKey,
        );

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
    setCvData(
      produce((draft) => {
        const section = draft.build.find(
          (section) => section.key === selectedKey,
        );

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
    setCvData(
      produce((draft) => {
        draft.build.push(newSection(componentMap));
      }),
    );
  }

  //Löscht eine Sektion im CV
  function deleteSection(sectionKey) {
    setCvData(
      produce((draft) => {
        const section = draft.build.find(
          (section) => section.key === sectionKey,
        );

        if (!section) return;
        const index = draft.build.indexOf(section);
        draft.build.splice(index, 1);
      }),
    );
  }

  return {
    componentMap,
    cvData,
    selectedKey,
    selectedSection,
    activeInputs,
    setCvData,
    setSelectedKey,
    updateData: updateSectionData,
    addInput,
    deleteInput,
    addSection,
    deleteSection,
    updateSettingsData,
  };
}
