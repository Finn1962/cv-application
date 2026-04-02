import { useState } from "react";

export default function DataInput() {
  const [inputValueMeta, setInputValueMeta] = useState("");
  const [inputValueDetails, setInputValueDetails] = useState("");

  function handleChangeMeta(event) {
    setInputValueMeta(event.target.value);
  }

  function handleChangeDetails(event) {
    setInputValueDetails(event.target.value);
  }

  return (
    <div className="data-input-container">
      <input
        type="text"
        value={inputValueMeta}
        onChange={handleChangeMeta}
        placeholder="Tätigkeit oder Datum"
      />
      <textarea
        value={inputValueDetails}
        onChange={handleChangeDetails}
        rows="4"
        placeholder="Ausführlichere Informationen"
      />
    </div>
  );
}
