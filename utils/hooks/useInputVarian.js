import { useState } from "react";
import { toBase64, verifyFile } from "../base64";

const useInputVarian = (initialState) => {
  const [data, setData] = useState(initialState); // data utama []

  const setVarian = (py) => {
    let doesItemExist = data.some(item => item.unique === py.unique)
    if (doesItemExist) {
      setData((prev) => {
        return prev.map((item) => {
          if (item.unique === py.unique) {
            return py;
          }
          return item;
        });
      });
    } else {
      setData((prev) => [...prev, py]);
    }
  };

  return [data, setVarian];
};

export const useVarianInput = (initialState) => {
  const [data, setData] = useState(initialState);

  const handleImage = async (e) => {
    // validasi file
    const { files } = e.target;

    if (files && files.length > 0) {
      if (verifyFile(files)) {
        const currentFile = files[0];
        const base64Image = await toBase64(currentFile);
        const image = {
          image: base64Image,
        };

        setData((prev) => ({ ...prev, image }));
      }
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  return { data, handleImage, handleChange };
};

export default useInputVarian;
