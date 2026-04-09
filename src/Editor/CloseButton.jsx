import closeIcon from "../assets/close-icon.svg";

export default function CloseButton({ onClick }) {
  return (
    <button
      className="button"
      draggable="false"
      aria-label="Schließt das Fenster zum editieren"
      onClick={onClick}
    >
      <img src={closeIcon} draggable="false" aria-hidden="true" width="25px" />
    </button>
  );
}
