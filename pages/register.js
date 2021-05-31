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

  const onSubmit = () => {
    if (state.password === state.password2) {
      const data = JSON.stringify(state);
      axiosReg
        .post("api/auth/register/", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      // ngirim request
    }
    console.log(state.email.length);
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
                required
                onChange={(e) => changeInput(e)}
                error
              />
              <TextField
                label="Username"
                variant="outlined"
                size="small"
                style={{ marginBottom: "20px" }}
                helperText={<small className={styleLogin.helper}>asdas</small>}
                id="username"
                value={state.username}
                required
                onChange={(e) => changeInput(e)}
              />
              <TextField
                label="Password"
                variant="outlined"
                size="small"
                style={{ marginBottom: "20px" }}
                helperText={<small className={styleLogin.helper}>asdas</small>}
                id="password"
                value={state.password}
                type={!show ? "password" : "text"}
                required
                onChange={(e) => changeInput(e)}
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
                helperText={<small className={styleLogin.helper}>asdas</small>}
                size="small"
                id="password2"
                value={state.password2}
                required
                onChange={(e) => changeInput(e)}
                type={!show ? "password" : "text"}
              />
            </div>
            <a></a>
            <Button
              // style={{
              //   color: "white",
              //   background: `${
              //     required == false && email == false ? "#0070f3" : "lightgray"
              //   }`,
              // }}
              onClick={() => onSubmit()}
              // disabled={required == false && email == false ? false : true}
            >
              Login
            </Button>
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
