import NavUser from "./NavUser";

const LayoutUser = ({ children }) => {
  const style = {
    display: "flex",
    color: "#666666",
  };
  const content = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    background: "white",
    borderRadius: "10px",
    boxShadow: "0 0 10px lightgray",
    marginLeft: "20px ",
  };
  return (
    <div style={style}>
      <NavUser />
      <div style={content}>{children}</div>
    </div>
  );
};

export default LayoutUser;
