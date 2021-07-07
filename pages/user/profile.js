import Styles from "../../styles/user.module.css";
import LayoutUser from "../../components/Layout/LayoutUser";
import useFetch from "../../utils/hooks/useFetch";
import Image from "next/image";
import useFormData from "../../utils/hooks/useFormData";
import { srcImage } from "../../utils/url";
import axios from "../../utils/axios";
import { fetchDataUser } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { isDataURL } from "../../utils/base64";

const profile = () => {
  const dispatch = useDispatch();
  const { data, handleImage, handleChange } = useFormData(
    useSelector((state) => state.user.detail_user)
  );
  const { username, email, phone, profile } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    if (isDataURL(profile)) {
      data = JSON.stringify({ username, email, phone, profile });
    } else {
      data = JSON.stringify({ username, email, phone });
    }
    const res = await axios
      .put("api/auth/", data)
      .catch((err) => console.log(err.request.response));
      dispatch(fetchDataUser(res.data));
  };
  return (
    <LayoutUser>
      <div className={Styles.headcontent}>
        <h3>Profile</h3>
      </div>
      <div className={Styles.bodyContent}>
        <div className={Styles.op}>
          <div className={Styles.changeImg}>
            <Image
              src={srcImage(profile)}
              alt="username photo"
              width={300}
              height={300}
            />
            <label className={Styles.changeFoto}>
              <input
                type="file"
                name="profile"
                id="profile"
                hidden={true}
                onChange={(e) => handleImage(e)}
              />
              Choose Image
            </label>
          </div>
          <button className={Styles.password}>Change Password</button>
        </div>
        <form className={Styles.change}>
          <h4>Change Profile</h4>
          <div className={Styles.field}>
            <div className={Styles.label}>
              <label>Username</label>
            </div>
            <div className={Styles.input}>
              <input
                type="text"
                value={username}
                id="username"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <h4>Change Account</h4>
          <div className={Styles.field}>
            <div className={Styles.label}>
              <label>Email Account</label>
            </div>
            <div className={Styles.input}>
              <input type="email" value={email} readOnly id="email" />
            </div>
          </div>
          <div className={Styles.field}>
            <div className={Styles.label}>
              <label>Phone Number</label>
            </div>
            <div className={Styles.input}>
              <input
                type="number"
                id="phone"
                value={phone}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className={Styles.field}>
            <div className={Styles.input}>
              <input
                type="submit"
                value={"Change Profile"}
                onClick={(e) => handleSubmit(e)}
              />
            </div>
          </div>
        </form>
      </div>
    </LayoutUser>
  );
};

export default profile;
