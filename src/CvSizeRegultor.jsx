export default function CvSizeRegulator() {
  return (
    <div className="size-regulator-container">
      <button>
        <svg
          className="plus-icon"
          width="20"
          id="Ebene_1"
          data-name="Ebene 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 716.63 716.63"
        >
          <defs>
            <style>{`
            .cls-1 {
                fill: none;
                stroke: #686868;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 56.67px;
            }
            `}</style>
          </defs>
          <path
            className="cls-1 minus-icon"
            d="M688.3,358.32H28.33M358.32,28.33v659.97"
          />
        </svg>
      </button>
      <button>
        <svg
          className="minus-icon"
          width="20"
          id="Ebene_1"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 716.63 716.63"
        >
          <defs>
            <style>
              {`
            .st0 {
                fill: none;
                stroke: #686868;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 56.67px;
            }
            `}
            </style>
          </defs>
          <path className="st0 minus-icon" d="M688.31,358.31H28.34" />
        </svg>
      </button>
    </div>
  );
}
