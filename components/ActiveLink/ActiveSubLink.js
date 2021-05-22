import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    textAlign:"center",
    borderRadius: "15px",
    padding: "5px 15px",
    marginRight: "10px",
    cursor: "pointer",
    fontSize: "0.85rem",
    color: router.asPath === href ? "white" : "#4999f5",
    background: router.asPath === href ? "#4999f5" : "#f0f0f0f0",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
