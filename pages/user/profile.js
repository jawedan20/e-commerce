import user from "../../styles/user.module.css";
import LayoutUser from "../../components/LayoutUser";

const profile = () => {
  return (
    <LayoutUser>
        <div className={user.headcontent}>
          <h3>Address List</h3>
        </div>
        <div className={user.bodyContent}>
          <div className={user.op}>
            <div className={user.changeImg}>
              <img src="/a.jpeg" alt="user.photo" />
              <button>Choose Image</button>
            </div>
            <button className={user.password}>Change Password</button>
          </div>
          <form className={user.change}>
            <h4>Change Profile</h4>
            <div className={user.field}>
              <div className={user.label}>
                <label>Full Name</label>
              </div>
              <div className={user.input}>
                <input type="text" />
              </div>
            </div>
            <div className={user.field}>
              <div className={user.label}>
                <label>Date of Birth</label>
              </div>
              <div className={user.input}>
                <input type="date" />
              </div>
            </div>
            <div className={user.field}>
              <div className={user.label}>
                <label>Gender </label>
              </div>
              <div className={user.gender}>
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    style={{ marginRight: "5px" }}
                  />
                  <label for="male">Male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    style={{ marginRight: "5px" }}
                  />
                  <label for="female">Female</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="other"
                    name="gender"
                    value="other"
                    style={{ marginRight: "5px" }}
                  />
                  <label for="other">Other</label>
                </div>
              </div>
            </div>
            <h4>Change Account</h4>
            <div className={user.field}>
              <div className={user.label}>
                <label>Email Account</label>
              </div>
              <div className={user.input}>
                <input type="email" />
              </div>
            </div>
            <div className={user.field}>
              <div className={user.label}>
                <label>Phone Number</label>
              </div>
              <div className={user.input}>
                <input type="number " />
              </div>
            </div>
          </form>
        </div>
    </LayoutUser>
  );
};

export default profile;
