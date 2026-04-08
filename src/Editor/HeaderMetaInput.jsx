export default function MetaInput({ data, placeHolder, updateData }) {
  return (
    <input
      type="text"
      value={data.value || ""}
      onChange={(event) => {
        updateData({ value: event.target.value });
      }}
      placeholder={placeHolder}
    />
  );
}
