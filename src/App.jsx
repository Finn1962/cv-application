import { useState } from "react";

import CvContainer from "./CV/ContentContainer.jsx";
import EditorContainer from "./Editor/ContentContainer.jsx";
import SortableItemWrapper from "./CV/SortableItemWrapper.jsx";
import CloseButton from "./Editor/CloseButton.jsx";
import InputAddButton from "./Editor/AddButton.jsx";
import SectionAddButton from "./CV/AddButton.jsx";
import Switch from "./Editor/Switch.jsx";
import ControlElementsContainer from "./Editor/ControlElementsContainer.jsx";
import Header from "./Header.jsx";

import { useCvData } from "./hooks/useCvData.js";
import { useScrollDirection } from "./hooks/useScrollDirection.js";

export default function App() {
  const {
    componentMap,
    cvData,
    selectedKey,
    selectedSection,
    activeInputs,
    setCvData,
    setSelectedKey,
    updateData,
    addInput,
    deleteInput,
    addSection,
    deleteSection,
    updateSettingsData,
  } = useCvData();

  const lastScrollDirection = useScrollDirection();

  const [showInputSettings, setShowInputSettings] = useState(true);
  const [showDesignSettings, setShowDesignSettings] =
    useState(!showInputSettings);

  return (
    <>
      <Header lastScrollDirection={lastScrollDirection} />
      <div className="page-wrapper">
        <main>
          {activeInputs.length > 0 && (
            <EditorContainer>
              <ControlElementsContainer>
                <Switch
                  setShowInputSettings={setShowInputSettings}
                  setShowDesignSettings={setShowDesignSettings}
                />
                <CloseButton onClick={() => setSelectedKey(null)} />
              </ControlElementsContainer>

              {showInputSettings &&
                activeInputs.map((input, index) => {
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

              {showInputSettings &&
                selectedSection.tag === componentMap.section && (
                  <InputAddButton addInput={addInput} />
                )}

              {showDesignSettings &&
                cvData.settings.map((setting) => {
                  const Tag = setting.tag;
                  return (
                    <Tag
                      label={setting.label}
                      value={setting.value}
                      updateData={(newValue) => {
                        updateSettingsData({
                          settingKey: setting.key,
                          newValue,
                        });
                      }}
                      key={setting.key}
                    />
                  );
                })}
            </EditorContainer>
          )}

          <CvContainer cvBuild={cvData.build} setCvData={setCvData}>
            {cvData.build.map((section) => {
              const Tag = section.tag;

              const content = (
                <Tag
                  className={section.key === selectedKey ? "active" : ""}
                  key={section.key}
                  data={section.data}
                  deleteSection={() => {
                    deleteSection(section.key);
                  }}
                  selectSection={() => setSelectedKey(section.key)}
                />
              );

              if (section.tag === componentMap.section) {
                return (
                  <SortableItemWrapper key={section.key} id={section.key}>
                    {content}
                  </SortableItemWrapper>
                );
              } else {
                return content;
              }
            })}
            <SectionAddButton addSection={addSection} />
          </CvContainer>
        </main>
      </div>
    </>
  );
}
