import CloseIcon from "../assets/close-icon.svg";

export default function CloseButton({ onClick }) {
  return (
    <button
      className="close-button"
      aria-label="Schließt das Fenster zum editieren"
      onClick={onClick}
    >
      <img src={CloseIcon} aria-hidden="true" />
    </button>
  );
}
