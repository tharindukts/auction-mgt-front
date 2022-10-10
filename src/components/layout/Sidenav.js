import {Menu, Button} from "antd";
import {NavLink, useLocation} from "react-router-dom";
import logo from "../../assets/images/esportLogo.png";

function Sidenav({color}) {
    const {pathname} = useLocation();
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


                <Menu.Item key="2">
                    <NavLink to="/sign-in">
                        <span className="label">Sign In</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <NavLink to="/tropphy-mgt">
                        <span className="label">Manage Trophies</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                    <NavLink to="/view-player-profile">
                        <span className="label">View Player Profile</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                    <NavLink to="/team-mgt">
                        <span className="label">Manage Teams</span>
                    </NavLink>
                </Menu.Item>
            </Menu>

        </>
    );
}

export default Sidenav;
