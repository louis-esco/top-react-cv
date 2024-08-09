import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Curriculum from "./components/Curriculum";
import { defaultData } from "./data/defaultData";

function App() {
  const [formData, setFormData] = useState(defaultData);

  window.myData = formData;

  return (
    <>
      <Form formData={formData} setFormData={setFormData} />
      <Curriculum formData={formData} />
    </>
  );
}

export default App;
