import {useEffect} from "react";

import {Breadcrumb, Col, Row,} from "antd";

import {LogoutOutlined,} from "@ant-design/icons";

import {NavLink} from "react-router-dom";


function Header({name}) {


  useEffect(() => window.scrollTo(0, 0));


  const onSignOut = () => {
    sessionStorage.clear();
    window.location.href = '/sign-in'
  }
  // const getRole = () => {
  //   const role = UtilitiService.getRole();
  //   return role === ROLE_CUSTOMER ?
  //       "Client" : role === ROLE_CLARK ? "Clerk" : "Manager"
  // }
  return (
      <>

        <Row gutter={[24, 0]}>
          <Col xs={8} sm={8} md={8} lg={8} xl={8}>
            <Breadcrumb>
              <Breadcrumb.Item>
                <NavLink to="/">Pages</NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item style={{textTransform: "capitalize"}}>
                {name.replace("/", "")}
              </Breadcrumb.Item>
            </Breadcrumb>

          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8} className="header-control">

            <p style={{marginBottom: 2, marginLeft: 7, color: 'white',
              fontFamily:"Open Sans",fontStyle:"italic",fontWeight:500}}>
              Welcome {"Admin" + " (" + 'sasassasass' + ")"}</p>

          </Col>
          <Col xs={8} sm={8} md={8} lg={8} xl={8} className="header-control">

            <p style={{marginBottom: 2, marginLeft: 7, color: 'white'}}>Log Out
            </p><LogoutOutlined style={{color: 'white'}} onClick={() => onSignOut()}/>

          </Col>
        </Row>
      </>
  );
}

export default Header;
