export default function FontInput({ label }) {
  return (
    <>
      <p>{label}</p>
      <fieldset>
        <div className="button-group">
          <input type="radio" id="svelt" name="frameworks" checked={true} />
          <label htmlFor="svelt">Svelt</label>
        </div>

        <div className="button-group">
          <input type="radio" id="react" name="frameworks" checked={false} />
          <label htmlFor="react">React</label>
        </div>

        <div className="button-group">
          <input type="radio" id="vue" name="frameworks" checked={false} />
          <label htmlFor="vue">Vue</label>
        </div>
      </fieldset>
    </>
  );
}
