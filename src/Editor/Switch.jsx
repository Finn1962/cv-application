export default function Switch() {
  return (
    <div className="container">
      <div className="tabs">
        <input type="radio" id="radio-1" name="tabs" />
        <label className="tab" htmlFor="radio-1">
          Inhalt
        </label>
        <input type="radio" id="radio-2" name="tabs" />
        <label className="tab" htmlFor="radio-2">
          Design
        </label>
        <span className="glider"></span>
      </div>
    </div>
  );
}
