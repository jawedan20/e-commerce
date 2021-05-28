import Link from "next/link";
import Image from "next/image";
import styleLogin from "../styles/Login.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from '../utils/axios'
import { useState } from "react";

export default function login() {
  const [state, setState] = useState({email:"",password:""})
  
  const changeInput = (e) => {
    const { value, id } = e.target;
    setState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const onSubmit = () => {
    if(state.email === "" || state.password === "" ){
      console.log("falied")
    }else{
        const data = JSON.stringify(state)
        axios.post('api/auth/login/',data)
          .then(res => console.log(res))
          .catch(err => console.log(err))
        // ngirim request
    }
  }
  
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
      <div>
        <div className={styleLogin.card}>
          <div className={styleLogin.head}>
            <h2>Login</h2>
            <Link href="/register">
              <a className={styleLogin.regis}>Register</a>
            </Link>
          </div>
          <div className={styleLogin.field}>
            <label forHtml="email">Email</label>
            <input id="email" value={state.email} onChange={ e => changeInput(e) } />
            <label forHtml="password">password</label>
            <input id="password" value={state.password} onChange={ e => changeInput(e) } />
          </div>
          <a>Lupa kata sandi?</a>
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
            Don't have account?{" "}
            <Link href="/register">
              <a>Register</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
