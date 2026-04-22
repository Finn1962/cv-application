export default function designSetting(componentMap) {
  return [
    {
      label: "Hauptfarbe",
      tag: componentMap.colorInput,
      value: "#ff0000",
      key: crypto.randomUUID(),
    },
    {
      label: "Font",
      tag: componentMap.fontInput,
      value: ["Arimo", "Mono", "Lora"],
      key: crypto.randomUUID(),
    },
  ];
}
