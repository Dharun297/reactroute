import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate =useNavigate()
  return (
    <>
    <h1 onClick={()=>navigate("/home")}>Welcome</h1>
    <Outlet />
    </>
  )
};
export default Layout;