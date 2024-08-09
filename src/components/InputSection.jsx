import "../styles/InputSection.css";

export default function InputSection({
  title,
  fields,
  data,
  setFormData,
  inputsType,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formDataObj = Object.fromEntries(new FormData(form));
    const newExperiences = [...data.experiences, formDataObj];
    setFormData({ ...data, experiences: newExperiences });
    console.log(formDataObj);
  };

  const experiencesList = () => {
    function handleDelete(index) {
      const newExperiences = data.experiences;
      newExperiences.splice(index, 1);
      setFormData({ ...data, experiences: newExperiences });
    }

    if (inputsType === "manual")
      return (
        <div className="sub-exps">
          {data.experiences.map((experience, index) => (
            <div key={index} className="sub-exp">
              <div className="sub-exp-details">
                <div className="sub-exp-position">
                  {experience.position} - {experience.company}
                </div>
                <div className="sub-exp-dates">
                  {experience.started} - {experience.ended}
                </div>
                <div className="sub-exp-responsibilities">
                  {experience.responsibilities}
                </div>
              </div>
              <button
                className="del-exp"
                onClick={() => {
                  handleDelete(index);
                }}
              >
                &#x2715;
              </button>
            </div>
          ))}
        </div>
      );
  };

  const input = (field, type) => {
    if (type === "auto")
      return (
        <input
          className="formInput"
          value={data[field.id]}
          type="text"
          name={field.id}
          id={field.id}
          onChange={(e) => {
            const newData = { ...data };
            newData[field.id] = e.target.value;
            setFormData(newData);
          }}
        />
      );
    else
      return (
        <input
          className="formInput"
          type="text"
          name={field.id}
          id={field.id}
        />
      );
  };
  return (
    <section className="inputSection">
      <h3 className="sectionTitle">{title}</h3>

      <form className="inputFields" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} className="inputField">
            <label className="formLabel" htmlFor={field.id}>
              {field.value.toUpperCase()}
            </label>
            {input(field, inputsType)}
          </div>
        ))}
        {inputsType === "manual" && (
          <button type="submit" className="submitBtn">
            Add experience
          </button>
        )}
      </form>
      {experiencesList()}
    </section>
  );
}
