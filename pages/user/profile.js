import Styles from "../../styles/user.module.css";
import LayoutUser from "../../components/Layout/LayoutUser";
import useFetch from "../../utils/hooks/useFetch";
import Image from "next/image";
import useFormData from "../../utils/hooks/useFormData";
import { srcImage } from "../../utils/url";

const profile = () => {
  const [data, error, loading, setData] = useFetch("api/auth/");
  const {handleImage, handleChange} = useFormData(data,setData);
  const { username, email, phone, profil } = data;
  return (
    <LayoutUser>
      <div className={Styles.headcontent}>
        <h3>Profile</h3>
      </div>
      <div className={Styles.bodyContent}>
        <div className={Styles.op}>
          <div className={Styles.changeImg}>
            <Image
              src={srcImage(profil)}
              alt="username photo"
              width={300}
              height={300}
            />
            <label>
              <input
                type="file"
                name="profil"
                id="profil"
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
          {/* <div className={Styles.field}>
            <div className={Styles.label}>
              <label>Date of Birth</label>
            </div>
            <div className={Styles.input}>
              <input type="date" />
            </div>
          </div> */}
          {/* <div className={Styles.field}>
            <div className={Styles.label}>
              <label>Gender </label>
            </div>
            <div className={Styles.gender}>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  style={{ marginRight: "5px" }}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  style={{ marginRight: "5px" }}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  style={{ marginRight: "5px" }}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div> */}
          <h4>Change Account</h4>
          <div className={Styles.field}>
            <div className={Styles.label}>
              <label>Email Account</label>
            </div>
            <div className={Styles.input}>
              <input
                type="email"
                value={email}
                id="email"
                onChange={(e) => handleChange(e)}
              />
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
        </form>
      </div>
    </LayoutUser>
  );
};

export default profile;
