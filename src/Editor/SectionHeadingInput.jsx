export default function SectionDataInput({ data, updateData }) {
  return (
    <input
      className="input"
      type="text"
      value={data.sectionTitle || ""}
      onChange={(event) => {
        updateData({ sectionTitle: event.target.value });
      }}
      placeholder="Abschnittsüberschrift"
    />
  );
}
