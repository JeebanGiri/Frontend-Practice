import { Outlet } from "react-router-dom";
import Navbar from "../Resuable/Navbar/navbar";
import LoginedNavbar from "../Resuable/Navbar/logined-navbar";

const Layout = (props) => {
  const { isLogin } = props;

  return (
    <>
      {isLogin.isLogin ? <Navbar /> : <LoginedNavbar />}
      <Outlet />
    </>
  );
};
export default Layout;

// handleLogout={handleLogout}
