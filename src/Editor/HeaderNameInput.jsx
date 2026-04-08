export default function NameInput({ data, updateData }) {
  return (
    <input
      type="text"
      value={data.value || ""}
      onChange={(event) => {
        updateData({ value: event.target.value });
      }}
      placeholder="Voller Name"
    />
  );
}
