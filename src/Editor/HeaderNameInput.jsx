export default function NameInput({ data, updateData }) {
  return (
    <input
      className="input"
      type="text"
      value={data.value || ""}
      onChange={(event) => {
        updateData({ value: event.target.value });
      }}
      placeholder="Voller Name"
    />
  );
}
