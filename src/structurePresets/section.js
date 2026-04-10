export default function newSection(componentMap) {
  return {
    tag: componentMap.section,
    inputs: [
      { tag: componentMap.sectionHeadingInput, key: crypto.randomUUID() },
      { tag: componentMap.sectionDataInput, key: crypto.randomUUID() },
      { tag: componentMap.sectionDataInput, key: crypto.randomUUID() },
      { tag: componentMap.sectionDataInput, key: crypto.randomUUID() },
    ],
    addableInputs: {
      tag: componentMap.sectionDataInput,
    },
    data: [
      { sectionTitle: "", key: crypto.randomUUID() },
      { meta: "", details: "", key: crypto.randomUUID() },
      { meta: "", details: "", key: crypto.randomUUID() },
      { meta: "", details: "", key: crypto.randomUUID() },
    ],
    key: crypto.randomUUID(),
  };
}
