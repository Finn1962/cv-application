export default function Section({
  data,
  selectSection,
  deleteSection,
  className,
}) {
  return (
    <section tabIndex="0" onClick={selectSection} className={className}>
      <div className="horizontal-grid">
        <h3>{data[0].sectionTitle || "Abschnittsüberschrift"}</h3>
        <hr />
      </div>
      <div className="data-parent-container">
        {data.map((dataElement, index) => {
          if (index === 0) return null;
          return (
            <Data
              meta={dataElement.meta}
              details={dataElement.details}
              key={dataElement.key}
            />
          );
        })}
      </div>
      <div>
        <DeleteButton deleteSection={deleteSection} />
      </div>
    </section>
  );
}

function Data({ meta, details }) {
  return (
    <div className="data-container">
      <p>{meta || "Tätigkeit oder Datum"}</p>
      <p>{details || "Informationen"}</p>
    </div>
  );
}

function DeleteButton({ deleteSection }) {
  return (
    <button
      aria-label="Delete item"
      className="delete-button"
      onClick={deleteSection}
    >
      <svg
        className="trash-svg"
        width="25"
        viewBox="0 -10 64 74"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="trash-can">
          <rect
            x="16"
            y="24"
            width="32"
            height="30"
            rx="3"
            ry="3"
            fill="#e74c3c"
          ></rect>

          <g transformOrigin="12 18" id="lid-group">
            <rect
              x="12"
              y="12"
              width="40"
              height="6"
              rx="2"
              ry="2"
              fill="#c0392b"
            ></rect>
            <rect
              x="26"
              y="8"
              width="12"
              height="4"
              rx="2"
              ry="2"
              fill="#c0392b"
            ></rect>
          </g>
        </g>
      </svg>
    </button>
  );
}
