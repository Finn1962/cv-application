export default function Header({ data }) {
  return (
    <header className="cv-header" tabIndex="0">
      <h2>
        {data.firstName || "Max"} {data.lastName || "Mustermann"}
      </h2>

      <div className="horizontal-alignment">
        <p>
          {data.streetName || "Musterstraße"} {data.houseNumber || "38"}
        </p>
        <span aria-hidden="true">•</span>

        <p>
          {data.postalCode || "52310"} {data.cityName || "Musterstadt"}
        </p>
        <span aria-hidden="true">•</span>

        <p>{data.phoneNumber || "+49 80 485 9044"}</p>
        <span aria-hidden="true">•</span>

        <p>{data.emailAdress || "max.mustermann@gmail.com"}</p>
      </div>
    </header>
  );
}
