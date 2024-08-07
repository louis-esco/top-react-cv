import { useState } from "react";

export default function InputSection({ title, fields, data, setFormData }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="inputSection">
      <div className="sectionTitle">
        <h3>{title}</h3>
        <button onClick={() => setIsExpanded(!isExpanded)}>Show fields</button>
      </div>
      {isExpanded ? (
        <form className="inputFields">
          {fields.map((field) => (
            <div key={field.id} className="inputField">
              <label htmlFor={field.value.toLowerCase()}>{field.value}</label>
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
            </div>
          ))}
        </form>
      ) : null}
    </section>
  );
}
