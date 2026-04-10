export default function AddButton({ addSection }) {
  return (
    <button className="button" draggable="false" onClick={addSection}>
      <svg
        className="add-icon"
        width="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="plus"
          d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          className="outer-circle"
          d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <style>{`
        .plus {
          stroke: var(--main-color);
        }

        .outer-circle {
          stroke: var(--main-color);
          transition: transform 0.5s ease;
          transform-origin: center; /* Verhindert das Wegspringen */
        }
        .add-icon:hover .outer-circle {
          transform: rotate(360deg);
        }
      `}</style>
    </button>
  );
}
