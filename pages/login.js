import Link from "next/link";
import Image from "next/image";
import styleLogin from "../styles/Login.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "../utils/axios";
import { useState } from "react";
import { Button, InputAdornment, TextField } from "@material-ui/core";
import Visibility from "@material-ui/icons/VisibilityOutlined";
import VisibilityOff from "@material-ui/icons/VisibilityOffOutlined";

export default function login() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(show ? false : true);
  };

  const [state, setState] = useState({ email: "", password: "" });

  const changeInput = (e) => {
    const { value, id } = e.target;
    setState((prev) => ({
      ...prev,
      [id]: value,
    }));
    console.log(state);
  };

  const onSubmit = () => {
    if (state.email === "" || state.password === "") {
      console.log("falied");
    } else {
      const data = JSON.stringify(state);
      axios
        .post("api/auth/login/", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };
  const [required, setRequired] = useState(false);
  const validate = (e) => {
    const { value, id } = e.target;
    setRequired(value === "" ? false : true);
    console.log(required)
  };

  return (
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
      <form>
        <div className={styleLogin.card}>
          <div className={styleLogin.head}>
            <h2>Login</h2>
            <Link href="/register">
              <a className={styleLogin.regis}>Register</a>
            </Link>
          </div>
          <div className={styleLogin.field}>
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              style={{ marginBottom: "20px" }}
              required
              id="email"
              value={state.email}
              onChange={(e) => changeInput(e)}
              onBlur={validate}
              multiline={false}
              helperText={<small className={styleLogin.helper}>asdas</small>}
            />
            <TextField
              label="Password"
              variant="outlined"
              size="small"
              style={{ marginBottom: "10px" }}
              id="password"
              value={state.password}
              required
              onChange={(e) => changeInput(e)}
              type={show ? "text" : "password"}
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
          </div>
          <a>Lupa kata sandi?</a>
          <Button
            style={{ color: "white", background: "#0070f3" }}
            variant="contained"
            onClick={() => onSubmit()}
            disabled={false}
          >
            Login
          </Button>
          <div className={styleLogin.auth}>
            <button>
              <img width="20px" src="/googleLogo.png" />
              <span>Google</span>
            </button>
            <button disabled>
              <FacebookIcon color="primary" />
              <span>Facebook</span>
            </button>
          </div>
          <p className={styleLogin.detail}>
            Don't have account?{" "}
            <Link href="/register">
              <a>Register</a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
