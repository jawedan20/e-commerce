import React from "react";

const InputFile = ({ formImage, setFormImage, handleChange }) => {
  return (
    <>
      {[...Array(formImage)].map((item, i) => {
        if (i === 5) return;
        else if (i + 1 === [...Array(formImage)].length) {
          return (
            <input
              key={i}
              type="file"
              onChange={(e) => handleChange(e)}
              onFocus={() => setFormImage((prev) => prev + 1)}
              placeholder="type choose answer ..."
            />
          );
        } else {
          return (
            <input
              key={i}
              onChange={(e) => handleChange(e)}
              type="file"          
              placeholder="type choose answer ..."
            />
          );
        }
      })}
    </>
  );
};

export default InputFile;
