import { useEffect } from "react";
import { useVarianInput } from "../../../../utils/hooks/useInputVarian";

const VarianForm = ({ setForm, unique }) => {
  const { data, handleChange, handleImage } = useVarianInput({
    unique,
    name: "",
    stock: "",
    price: "",
    image: {},
  });
  /* jika mau tidak terapkan */
//   useEffect(() => {
//     const { name, stock, price } = data;
//     if (name !== "" && stock !== "" && price !== "") {
//       setForm(data);
//     }
//   }, [data]);
  return (
    <>
      <label htmlFor="name">name</label>
      <input id="name" onChange={(e) => handleChange(e)} />
      <label htmlFor="price">price</label>
      <input id="price" onChange={(e) => handleChange(e)} />
      <label htmlFor="stock">stock</label>
      <input id="stock" onChange={(e) => handleChange(e)} />
      <label htmlFor="image">image</label>
      <input id="image" onChange={(e) => handleImage(e)} type="file" />

      <input type="submit" value="set" onClick={() => setForm(data)} />
    </>
  );
};

export default VarianForm;
