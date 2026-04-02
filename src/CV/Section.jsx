export default function Section({ data }) {
  return (
    <section tabIndex="0">
      <div className="horizontal-grid">
        <h3>Persönliche Daten</h3>
        <hr />
      </div>
      <div className="data-parent-container">
        {data.map((dataElement) => {
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
