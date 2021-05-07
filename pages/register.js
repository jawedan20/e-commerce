import Link from "next/link";
import Image from "next/image";
import styleLogin from "../styles/Login.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const register = () => {
  return (
    <div>
      <Link href="/">
        <a className={styleLogin.homeNav}>
          <ArrowBackIcon />
          HOME
        </a>
      </Link>
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
              <label>Email/Username</label>
              <input />
              <label>Password</label>
              <input />
              <label>Confirm Password</label>
              <input />
            </div>
            <a></a>
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
