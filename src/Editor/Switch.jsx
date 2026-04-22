export default function Switch({
  setShowInputSettings,
  setShowDesignSettings,
}) {
  return (
    <div className="container">
      <div className="tabs">
        <input type="radio" id="radio-1" name="tabs" />
        <label
          className="tab"
          htmlFor="radio-1"
          onClick={() => {
            setShowInputSettings(true);
            setShowDesignSettings(false);
          }}
        >
          Inhalt
        </label>
        <input
          type="radio"
          id="radio-2"
          name="tabs"
          onClick={() => {
            setShowInputSettings(false);
            setShowDesignSettings(true);
          }}
        />
        <label className="tab" htmlFor="radio-2">
          Design
        </label>
        <span className="glider"></span>
      </div>
    </div>
  );
}
