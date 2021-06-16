import { useState, useEffect } from "react";
import useInputImage from "../../../utils/hooks/useInputImage";
import VarianForm from "./varianInput/Root";
import ImageForm from "./imageInput/Root";
import useInputVarian from "../../../utils/hooks/useInputVarian";

const Root = () => {
  const [image, handleChange] = useInputImage([]);
  const [varian, setVarian] = useInputVarian([]);
  return (
    <>
      {/* <ImageForm handleChange={handleChange} /> */}
      {/* <VarianForm setForm={setVarian} /> */}

      {/* ini form biasa aja */}
      <input type="text" name="title" />
      <textarea name="desc" />
      <input name="category" />

      {/* input buat gambar bisa looping sampe 5 gambar */}
      <input type="file" />

      {/* ini input buat varian bisa input sampe 5 varian */}
      <label htmlFor="name">name</label>
      <input id="name" />
      <label htmlFor="price">price</label>
      <input id="price" />
      <label htmlFor="stock">stock</label>
      <input id="stock" />
      <label htmlFor="image">image</label>
      <input id="image" type="file" />
      {/* tombol submit */}
      
      <input type="button" value="submit" />
    </>
  );
};

export default Root;

/* 
    hasil yang diharapkan
    {
        category:"baju anak",
        title:"baju anak murah",
        desc:"desc panjang",
        varian:[
            {
            name:"sm",
            stock:"10",
            price:"5000000",
            image:{
                image:"file image"
            }
            },
            {
            name:"xl",
            stock:"10",
            price:"5000000"
            image:{#image opsional
                image:"file image"
            }
            
            },
            {
            banyak lagi
            }
            ],
            image:[
            {
                image:"file image",
                is_thumb:true
            },
            
            ]
        }
    todo List
        -> image [done]
        -> varian [done]
        -> title [done]
        -> desc [done]
        -> category [done]
    
*/
