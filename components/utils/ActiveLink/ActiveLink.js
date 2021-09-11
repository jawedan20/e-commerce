import { useRouter } from "next/router";
import style from "../../../styles/Seller.module.css"

function ActiveLink({ children, href, type }) {
  const router = useRouter();
  const link = {
    color: router.asPath.includes(href) ? "#4999f5" : "#707070",
    background: router.asPath.includes(href) ? "white" : "none",
  };
  const subLink = {
    textAlign: "center",
    borderRadius: "15px",
    padding: "5px 15px",
    marginRight: "10px",
    cursor: "pointer",
    fontSize: "0.85rem",
    color: router.asPath === href ? "white" : "#4999f5",
    background: router.asPath === href ? "#4999f5" : "#f0f0f0f0",
  };
  const bottom ={
    color: router.asPath === href ? "#4999f5" : "",
  }
  const side = {
    borderLeft: router.asPath === href ? "#0094da 3px solid" : "",
    color: router.asPath === href ? "#0094da" : "#444444",
  }

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={type == "link" ? link : type == "bottom" ? bottom : type == "subLink" ? subLink : side}
      className={type == "side" ? style.navSide : ""}
    >
      {children}
    </a>
  );
}

export default ActiveLink;
