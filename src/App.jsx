import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { defaultData } from "./assets/defaultData";

function App() {
  const [formData, setFormData] = useState(defaultData);

  window.myData = formData;

  return (
    <>
      <Form formData={formData} setFormData={setFormData} />
    </>
  );
}

export default App;
