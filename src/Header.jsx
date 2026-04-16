import logo from "./assets/logo.svg";
import downloadIcon from "./assets/download-icon.svg";

export default function Header({ lastScrollDirection }) {
  return (
    <header
      className={`document-header ${lastScrollDirection === "down" && "document-header--hidden"}`}
    >
      <div className="content-limiter-header">
        <div className="logo-container">
          <img src={logo} width="50" />
          <h1>CV-Builder</h1>
        </div>

        <button className="download-btn pixel-corners">
          <div className="button-content">
            <div className="svg-container">
              <img src={downloadIcon} />
            </div>
            <div className="text-container">
              <div className="text">Download</div>
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}
