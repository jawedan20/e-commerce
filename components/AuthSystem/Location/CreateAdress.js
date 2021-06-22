import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appendLocation } from "../../../actions/user";
import axios from "../../../utils/axios";
import useFormData from "../../../utils/hooks/useFormData";

const CreateAdress = () => {
  const dispatch = useDispatch();
  const isSetPrimary = useState(false);
  const user = useSelector((state) => state.user.detail_user.id);
  const { data, handleChange } = useFormData({
    name: "",
    phone: "",
    city: "",
    address: "",
    other: "",
    name_location: "",
    user,
  });

  const handleCheck = (e) => isSetPrimary(e.target.checked);

  const handleSubmit = () => {
    let formData = data;

    axios
      .post("api/auth/location/", JSON.stringify(formData))
      .then((res) => {
        dispatch(appendLocation(res.data));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input
        id="name"
        onChange={(e) => handleChange(e)}
        placeholder="nama penerima..."
      />
      <input
        id="phone"
        onChange={(e) => handleChange(e)}
        placeholder="kontak penerima"
      />
      <input
        id="city"
        onChange={(e) => handleChange(e)}
        placeholder="provinsi dll penerima..."
      />
      <input
        id="address"
        onChange={(e) => handleChange(e)}
        placeholder="alamat penerima..."
      />
      <input
        id="other"
        onChange={(e) => handleChange(e)}
        placeholder="patokan opsional penerima..."
      />
      {/* yang bawah enak pake opsion kayak rumah / kantor */}
      <input
        id="name_location"
        onChange={(e) => handleChange(e)}
        placeholder="nama penerima..."
      />
      <input
        id="set_primary"
        type="check"
        checked={isSetPrimary}
        onChange={(e) => handleCheck(e)}
        placeholder="nama penerima..."
      />
      <button type="submit" onClick={() => handleSubmit()}>
        submit
      </button>
    </div>
  );
};

export default CreateAdress;
