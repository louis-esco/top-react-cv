import InputSection from "./InputSection";
import { identity, education, experience } from "../data/inputsLists";

function Form({ formData, setFormData }) {
  return (
    <div className="form">
      <h2 className="formTitle">Create your curriculum !</h2>
      <InputSection
        title="Identity"
        fields={identity}
        data={formData}
        setFormData={setFormData}
        inputsType="auto"
      />
      <InputSection
        title="Educational experience"
        fields={education}
        data={formData}
        setFormData={setFormData}
        inputsType="auto"
      />
      <InputSection
        title="Practical experience"
        fields={experience}
        data={formData}
        setFormData={setFormData}
        inputsType="manual"
      />
    </div>
  );
}

export default Form;
