export default function Section() {
  return (
    <section>
      <div className="horizontal-grid">
        <h3>Persönliche Daten</h3>
        <hr />
      </div>
      <div className="data-parent-container">
        <Data meta="Name" details="Finn Schmidt" />
        <Data meta="Geburtsdatum" details="01.06.2004" />
        <Data meta="Geburtsort" details="Braunschweig" />
        <Data meta="Familienstand" details="Ledig" />
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
