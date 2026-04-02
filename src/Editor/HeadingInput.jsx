import { useState } from "react";

export default function HeadingInput() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Abschnittsüberschrift"
    />
  );
}
