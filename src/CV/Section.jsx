export default function Section({ data, onClick, className }) {
  return (
    <section tabIndex="0" onClick={onClick} className={className}>
      <div className="horizontal-grid">
        <h3>{data[0].sectionTitle}</h3>
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
    </section>
  );
}

function Data({ meta, details }) {
  return (
    <div className="data-container">
      <p>{meta}</p>
      <p>{details}</p>
    </div>
  );
}
