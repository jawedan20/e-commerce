import Link from "next/link";
import Image from "next/image";
import styleLogin from "../styles/Login.module.css";
import Visibility from "@material-ui/icons/VisibilityOutlined";
import VisibilityOff from "@material-ui/icons/VisibilityOffOutlined";
import TextField from "@material-ui/core/TextField";
import { Button, InputAdornment } from "@material-ui/core";
import Router from "next/router";
import { axiosReg } from "../utils/axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/user";
import MassageError from "../components/utils/MassageError";
import Back from '@material-ui/icons/ArrowBackIos';


const register = ({ login, is_login }) => {
  // check apa sudah login ? kalau sudah redirect ke homepage  note:perlu optimasi masih bingung 
  // notebaru : semuahny filenya  kwokwowko
  useEffect(() => {
    if (is_login) Router.push("/");
  }, [is_login]);

  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [password2, setPassword2] = useState();
  const [errMsg, setErrMsg] = useState([]);
  const [err, setErr] = useState(true);
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const changeInput = (e) => {
    const { value, id } = e.target;
    setState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onSubmit = () => {
    axiosReg
      .post("api/auth/register/", JSON.stringify(state))
      .then((res) => login(state.email, state.password))
      .catch((err) => {
        let msgErr = [];
        const msg = JSON.parse(err.request.response);
        for (let key in msg) {
          msgErr.push(msg[key]);
        }
        setErr(false);
        setErrMsg(msgErr);
      });
    // ngirim request
  };

  const validate = (e) => {
    const { value, id } = e.target;
    var mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (id === "email") {
      {
        value.length > 0 && value.match(mailformat)
          ? setEmail(false)
          : setEmail(true);
      }
    } else if (id === "username") {
      {
        value.length > 0 ? setUser(false) : setUser(true);
      }
    } else if (id === "password") {
      var numbers = /[0-9]/g;
      var upperCaseLetters = /[A-Z]/g;
      {
        value.length >= 8 && value.match(numbers && upperCaseLetters)
          ? setPassword(false)
          : setPassword(true);
      }
    } else {
      {
        value.length > 0 && value.match(state.password)
          ? setPassword2(false)
          : setPassword2(true);
      }
    }
  };

  return (
    <>
      <div className={styleLogin.container}>
        <Link href="/">
          <a className={styleLogin.back}>
            <Back/>
            Home
          </a>
        </Link>
        <div className={styleLogin.image}>
          <Image
            src="/shop.svg"
            alt="Picture of the author"
            width={300}
            height={300}
          />
          <h2>Easy Buying and Selling only on This</h2>
          <p>new shopping experience with ease</p>
        </div>
        <div>
          <div className={styleLogin.card}>
            <div className={styleLogin.headReg}>
              <h2>Register An account</h2>
            </div>
            <div className={styleLogin.field}>
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                id="email"
                style={{ marginBottom: "20px" }}
                helperText={<small className={styleLogin.helper}>asdas</small>}
                value={state.email}
                onInput={validate}
                onBlur={validate}
                onChange={(e) => changeInput(e)}
                error={email}
                helperText={
                  <small className={styleLogin.helper}>
                    {email ? "Must Enter Your Email Valid" : ""}
                  </small>
                }
              />
              <TextField
                label="Username"
                variant="outlined"
                size="small"
                style={{ marginBottom: "20px" }}
                id="username"
                value={state.username}
                onChange={(e) => changeInput(e)}
                onInput={validate}
                onBlur={validate}
                error={user}
                helperText={
                  <small className={styleLogin.helper}>
                    {user ? "Must Enter your Username" : ""}
                  </small>
                }
              />
              <TextField
                label="Password"
                variant="outlined"
                size="small"
                style={{ marginBottom: "20px" }}
                helperText={
                  <small className={styleLogin.helper}>
                    {password
                      ? "Password min 8 characters, must content a uppercase letter and number"
                      : ""}
                  </small>
                }
                id="password"
                value={state.password}
                type={!show ? "password" : "text"}
                onChange={(e) => changeInput(e)}
                onBlur={validate}
                onInput={validate}
                error={password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {!show ? (
                        <Visibility
                          color="action"
                          onClick={() => setShow((prev) => !prev)}
                          style={{ cursor: "pointer" }}
                        />
                      ) : (
                        <VisibilityOff
                          color="action"
                          onClick={() => setShow((prev) => !prev)}
                          style={{ cursor: "poe3inter" }}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Confirm Password"
                variant="outlined"
                style={{ marginBottom: "20px" }}
                helperText={
                  <small className={styleLogin.helper}>
                    {password2 ? "doesn't match password" : ""}
                  </small>
                }
                size="small"
                id="password2"
                value={state.password2}
                error={password2}
                onChange={(e) => changeInput(e)}
                onInput={validate}
                onBlur={validate}
                type={!show ? "password" : "text"}
              />
            </div>
            <Button
              style={{
                color: "white",
                background: `${
                  user == false && email == false && password2 == false
                    ? "#0070f3"
                    : "lightgray"
                }`,
              }}
              onClick={() => onSubmit()}
              disabled={
                user == false && email == false && password2 == false
                  ? false
                  : true
              }
            >
              Login
            </Button>

            <MassageError err={err} style={styleLogin.alert} errMsg={errMsg} />

            <p className={styleLogin.detail}>
              You have an Account?{" "}
              <Link href="/login">
                <a>Login</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  is_login: state.user.is_auth,
});
export default connect(mapStateToProps, { login })(register);
