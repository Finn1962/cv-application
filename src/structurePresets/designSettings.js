export default function designSetting(componentMap) {
  return [
    {
      name: "Farbe",
      settings: [
        {
          label: "Farbe",
          tag: componentMap.colorInput,
          value: "#000000",
          key: crypto.randomUUID(),
        },
        {
          label: "Farbe",
          tag: componentMap.colorInput,
          value: "#000000",
          key: crypto.randomUUID(),
        },
        {
          label: "Verlauf nutzen",
          tag: componentMap.switchInput,
          value: true,
          key: crypto.randomUUID(),
        },
      ],
    },
    { name: "Kopfzeile-Schriftfarbe" },
    { name: "Schriftfarbe" },
    { name: "Schriftgröße" },
    { name: "Überschriftengröße" },
    { name: "Schrift" },
    { name: "Layout" },
  ];
}
