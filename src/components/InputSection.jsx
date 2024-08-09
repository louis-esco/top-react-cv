import "./InputSection.css";

export default function InputSection({ title, fields, data, setFormData }) {
  return (
    <section className="inputSection">
      <h3 className="sectionTitle">{title}</h3>

      <form className="inputFields">
        {fields.map((field) => (
          <>
            <label className="formLabel" htmlFor={field.value.toLowerCase()}>
              {field.value}
            </label>
            <input
              value={data[field.id]}
              type="text"
              name={field.value.toLowerCase()}
              id={field.value.toLowerCase()}
              onChange={(e) => {
                const newData = { ...data };
                newData[field.id] = e.target.value;
                setFormData(newData);
              }}
            />
          </>
        ))}
      </form>
    </section>
  );
}
