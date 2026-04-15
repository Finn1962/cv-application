import CvContainer from "./CV/ContentContainer.jsx";
import EditorContainer from "./Editor/ContentContainer.jsx";
import SortableItemWrapper from "./CV/SortableItemWrapper.jsx";
import CloseButton from "./Editor/CloseButton.jsx";
import InputAddButton from "./Editor/AddButton.jsx";
import SectionAddButton from "./CV/AddButton.jsx";
import Switch from "./Editor/Switch.jsx";
import ControlElementsContainer from "./Editor/ControlElementsContainer.jsx";

import { useCvStructure } from "./hooks/useCvStructure.js";

export default function App() {
  const {
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
  } = useCvStructure();

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

        <CvContainer cvStructure={cvStructure} setCvStructure={setCvStructure}>
          {cvStructure.map((section) => {
            const Tag = section.tag;

            const content = (
              <Tag
                className={section.key === selectedKey ? "active" : ""}
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
  );
}
