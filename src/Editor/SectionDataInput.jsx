export default function DataInput({ data, updateData }) {
  return (
    <div className="data-input-container">
      <input
        type="text"
        value={data.meta || ""}
        onChange={(event) => {
          updateData({ meta: event.target.value });
        }}
        placeholder="Tätigkeit oder Datum"
      />
      <textarea
        value={data.details || ""}
        onChange={(event) => {
          updateData({ details: event.target.value });
        }}
        rows="3"
        placeholder="Ausführlichere Informationen"
      />
    </div>
  );
}
