export default function ColorInput({ label, value, updateData }) {
  return (
    <>
      <p>{label}</p>
      <input
        className="input"
        type="color"
        value={value}
        onChange={(event) => {
          updateData(event.target.value);
        }}
      ></input>
    </>
  );
}
