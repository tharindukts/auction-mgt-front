
import { Menu, Button } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/esportLogo.png";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  return (
    <>
      <div className="header-col header-brand">

          <img style={{width: 175, height: 122, marginLeft: 15, marginTop: -33}} src={logo} alt=""/>

      </div>
      <hr/>
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/dashboard">
          
            <span className="label">Dashboard</span>
          </NavLink>
        </Menu.Item>
       
    
        <Menu.Item key="7">
          <NavLink to="/sign-in">
            <span className="label">Sign In</span>
          </NavLink>
        </Menu.Item>
        
      </Menu>
      
    </>
  );
}

export default Sidenav;
