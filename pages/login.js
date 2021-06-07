import Link from "next/link";
import Image from "next/image";

import axios from "../utils/axios";
import styleLogin from "../styles/Login.module.css";
import { useEffect, useState } from "react";
import { Button, InputAdornment, TextField } from "@material-ui/core";

import Visibility from "@material-ui/icons/VisibilityOutlined";
import VisibilityOff from "@material-ui/icons/VisibilityOffOutlined";
import Back from '@material-ui/icons/ArrowBackIos';

import MassageError from "../components/utils/MassageError";

import { connect } from "react-redux";
import { whoami,is_login } from "../actions/user";
import Router  from "next/router";

function loginPage({ whoami,is_auth,is_login }) {
  
  // check apa sudah login ? kalau sudah redirect ke homepage  note:perlu optimasi masih bingung
  useEffect(() => {
    if(is_auth) Router.push('/')
  },[is_auth])
  
  const [state, setState] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [required, setRequired] = useState();
  const [email, setEmail] = useState();

  const changeInput = (e) => {
    const { value, id } = e.target;
    setState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onSubmit = () => {
    const data = JSON.stringify(state);
    axios
      .post("api/auth/login/", data)
      .then((res) => {
        is_login(true)
        whoami();
      })

      .catch((err) => {
        const msg = JSON.parse(err.request.response);
        for (let key in msg) {
          setErrMsg(msg[key]);
        }
        setErr(false);
      });
  };
  const validate = (e) => {
    const { id, value } = e.target;
    var mailformat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (id === "email") {
      {
        value.length > 0 && value.match(mailformat)
          ? setEmail(false)
          : setEmail(true);
      }
    } else {
      {
        value.length > 0 ? setRequired(false) : setRequired(true);
      }
    }
  };

  return (
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
              onInput={validate}
              multiline={false}
              helperText={
                <small className={styleLogin.helper}>
                  {email ? "Must Enter Your Email Valid" : ""}
                </small>
              }
              error={email}
            />
            <TextField
              label="Password"
              variant="outlined"
              size="small"
              style={{ marginBottom: "10px" }}
              id="password"
              value={state.password}
              onBlur={validate}
              onInput={validate}
              helperText={
                <small className={styleLogin.helper}>
                  {required ? "Must enter Your password" : ""}
                </small>
              }
              error={required}
              onChange={(e) => changeInput(e)}
              type={show ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {!show ? (
                      <Visibility
                        color="action"
                        onClick={() => setShow(show ? false : true)}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <VisibilityOff
                        color="action"
                        onClick={() => setShow(show ? false : true)}
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
            style={{
              color: "white",
              background: `${
                required == false && email == false ? "#0070f3" : "lightgray"
              }`,
            }}
            onClick={() => onSubmit()}
            disabled={required == false && email == false ? false : true}
          >
            Login
          </Button>

          <MassageError err={err} errMsg={errMsg} style={styleLogin.alert} />

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

const mapStateToProps = (state) => ({
  is_auth: state.user.is_auth,
});

export default connect(mapStateToProps, { whoami,is_login })(loginPage);
