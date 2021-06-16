import { useState } from "react";
import InputVarian from "./InputVarian";

const Root = ({ handleChange,setForm }) => {
  const [countForm, setCountForm] = useState(2);

  return (
    <InputVarian
      countForm={countForm}
      setCountForm={setCountForm}
      handleChange={handleChange}
      setForm={setForm}
    />
  );
};

export default Root;
