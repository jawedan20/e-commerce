import React from "react";
import VarianForm from "./VarianForm";

const InputVarian = ({ countForm, setForm }) => {
  return (
    <>
      {[...Array(countForm)].map((item, i) => {
        if (i + 1 === [...Array(countForm)].length) {
          return <VarianForm key={i - countForm} unique={i} setForm={setForm} />;
        } else {
          return <VarianForm key={i - countForm} unique={i} setForm={setForm} />;
        }
      })}
    </>
  );
};

export default InputVarian;
