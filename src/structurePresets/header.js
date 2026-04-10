export default function newHeader(componentMap) {
  return {
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
      { value: "", key: crypto.randomUUID() },
      { value: "", key: crypto.randomUUID() },
      { value: "", key: crypto.randomUUID() },
      { value: "", key: crypto.randomUUID() },
      { value: "", key: crypto.randomUUID() },
      { value: "", key: crypto.randomUUID() },
      { value: "", key: crypto.randomUUID() },
    ],
    key: crypto.randomUUID(),
  };
}
