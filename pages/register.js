import Link from "next/link";
import Image from "next/image";
import styleLogin from "../styles/Login.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Visibility from "@material-ui/icons/VisibilityOutlined";
import VisibilityOff from "@material-ui/icons/VisibilityOffOutlined";
import { axiosReg } from "../utils/axios";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, InputAdornment } from "@material-ui/core";
import Warning from "@material-ui/icons/ErrorOutline";

const register = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(show ? false : true);
  };
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
  
  const [err, setErr] = useState(true);
  const onSubmit = () => {
    if (state.password === state.password2) {
      const data = JSON.stringify(state); 
      axiosReg
        .post("api/auth/register/", data)
        .then((res) => console.log(res))
        .catch((err) => {
          setErr(false);
          console.log(err)
          }
        );
      // ngirim request
    }
    console.log(state.email.length);
  };

  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
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
      } else if(id === "username"){
        {
          value.length > 0 ? setUser(false) : setUser(true);
        }
      }else if(id === "password"){
        var numbers = /[0-9]/g;
        var upperCaseLetters = /[A-Z]/g;
        {
          value.length >= 8 && value.match(numbers && upperCaseLetters) ? setPassword(false) : setPassword(true);
        }
        
      }else{
        {
          value.length > 0 && value.match(state.password)
            ? setPassword2(false)  
            : setPassword2(true);
        }
      }
    };

  return (
    <div>
      <div className={styleLogin.container}>
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
                    {
                      password 
                      ? "Password min 8 characters, must content a uppercase letter and number" 
                      : ""
                    }
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
                        onClick={handleShow}
                        style={{ cursor: "pointer" }}
                        />
                        ) : (
                          <VisibilityOff
                          color="action"
                          onClick={handleShow}
                          style={{ cursor: "pointer" }}
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
                  user == false && email == false && password2 == false ? "#0070f3" : "lightgray"
                }`,
              }}
              onClick={() => onSubmit()}
              disabled={user == false && email == false && password2 == false ? false : true}
            >
              Login
            </Button>
            <div hidden={err}>
              <p className={styleLogin.alert} >
                <Warning fontSize="small" /> 
                <span>Email or Password Invalid</span>
              </p>
            </div>
            <div className={styleLogin.auth}>
              <button>
                <img width="20px" src="/googleLogo.png" />
                <span>Google</span>
              </button>
              <button>
                <FacebookIcon color="primary" />
                <span>Facebook</span>
              </button>
            </div>
            <p className={styleLogin.detail}>
              You have an Account?{" "}
              <Link href="/login">
                <a>Login</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
