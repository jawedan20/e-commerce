import Link from "next/link";
import Image from "next/image";
import styleLogin from "../styles/Login.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from '../utils/axios'
import { useState } from "react";

const register = () => {
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
    if(state.username === "" || state.email === "" || state.password === "" || state.password2 === ""){
      console.log("falied")
    }else{
      if(state.password === state.password2){
        const data = JSON.stringify(state)
        axios.post('api/auth/register/',data)
          .then(res => console.log(res))
          .catch(err => console.log(err))
        // ngirim request
      }
    }
  }
  
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
              <label forHtml="email">Email</label>
              <input id="email" value={state.email} onChange={ e => changeInput(e) } />
              <label forHtml="username">username</label>
              <input id="username" value={state.username} onChange={ e => changeInput(e) } />
              <label forHtml="password">password</label>
              <input id="password" value={state.password} onChange={ e => changeInput(e) } />
              <label forHtml="password2">password2</label>
              <input id="password2" value={state.password2} onChange={ e => changeInput(e) } />
            </div>
            <a></a>
            <button className={styleLogin.button} onClick={() => onSubmit()}>Login</button>
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
