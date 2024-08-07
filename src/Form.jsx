import InputSection from "./InputSection";
import { identity, education, experience } from "./assets/inputsLists";

function Form({ formData, setFormData }) {
  return (
    <>
      <InputSection
        title="Identity"
        fields={identity}
        data={formData}
        setFormData={setFormData}
      />
      <InputSection
        title="Educational experience"
        fields={education}
        data={formData}
        setFormData={setFormData}
      />
      <InputSection
        title="Practical experience"
        fields={experience}
        data={formData}
        setFormData={setFormData}
      />
    </>
  );
}

export default Form;
