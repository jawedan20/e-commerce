import { useState } from "react";
import InputImage from "./InputFile";

const Root = ({ handleChange }) => {
  const [formImage, setFormImage] = useState(1);

  return (
    <InputImage
      formImage={formImage}
      setFormImage={setFormImage}
      handleChange={handleChange}
    />
  );
};

export default Root;
