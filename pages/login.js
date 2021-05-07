import Link from "next/link";
import Image from "next/image";
import styleLogin from "../styles/Login.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function login() {
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
            <label>Email/Username</label>
            <input />
            <label>Password</label>
            <input />
          </div>
          <a>Lupa kata sandi?</a>
          <button className={styleLogin.button}>Login</button>
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
