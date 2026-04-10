export default function Header({ data, selectSection, className }) {
  return (
    <header
      className={`cv-header ${className || ""}`}
      tabIndex="0"
      onClick={selectSection}
    >
      <h2>{data[0].value || "Max Mustermann"}</h2>

      <div className="horizontal-alignment">
        <p>
          {data[1].value || "Musterstraße"} {data[2].value || "38"}
        </p>
        <span aria-hidden="true">•</span>

        <p>
          {data[3].value || "52310"} {data[4].value || "Musterstadt"}
        </p>
        <span aria-hidden="true">•</span>

        <p>{data[5].value || "+49 80 485 9044"}</p>
        <span aria-hidden="true">•</span>

        <p>{data[6].value || "max.mustermann@gmail.com"}</p>
      </div>
    </header>
  );
}
