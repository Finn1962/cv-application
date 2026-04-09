export default function MetaInput({ data, placeHolder, updateData }) {
  return (
    <input
      className="input"
      type="text"
      value={data.value || ""}
      onChange={(event) => {
        updateData({ value: event.target.value });
      }}
      placeholder={placeHolder}
    />
  );
}
