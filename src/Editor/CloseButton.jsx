import CloseIcon from "../assets/close-icon.svg";

export default function CloseButton() {
  return (
    <button
      className="close-button"
      aria-label="Schließt das Fenster zum editieren"
    >
      <img src={CloseIcon} aria-hidden="true" />
    </button>
  );
}
