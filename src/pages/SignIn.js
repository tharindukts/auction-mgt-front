import React, { useState } from "react";
import { Button, Col, Divider, Drawer, Form, Input, Layout, Row, Typography, } from "antd";
import Hotel from "../assets/images/crk-wallpaper.jpg";
import "../assets/styles/main.css";
import { Radio } from 'antd';

const { Title } = Typography;

function SignIn(props) {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true);
  }

  const onClose = () => {
    setVisible(false);
  };

  const registrationSubmit = (customerRegVals) => {

  };
  const [regType, setRegType] = useState("");

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setRegType(e.target.value);
  };
  return (
    <>

      <img alt="" src={Hotel} className="sign-in-background" />
      <div className="sign-in">
        <div className={"sign-in-content"}>
          <Row gutter={[24, 16]} justify="space-around">
            <Col

            >
              <Title className="mb-15" style={{ fontFamily: 'monospace', color: 'white' }}>Sign In</Title>
              <Title className="font-regular text-muted"
                style={{ fontFamily: 'monospace', color: 'white' }} level={5}>
                Enter your username and password to sign in
              </Title>
              <Form
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="sign-in-ant-input"
                  name="userName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input style={{ background: 'rgba(0,0,0,0)', color: 'white' }}
                    placeholder="Username" />
                </Form.Item>

                <Form.Item
                  className="sign-in-ant-input"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input type={"password"} style={{ background: 'rgba(0,0,0,0)', color: 'white' }}
                    placeholder="Password" />
                </Form.Item>

                <Form.Item>
                  <Button

                    type="primary"
                    htmlType="submit">
                    SIGN IN
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    onClick={showDrawer}
                    type="primary"
                    style={{
                      border: 'none'
                    }}
                  >
                    No Account? Register Here
                  </Button>
                </Form.Item>

              </Form>
            </Col>
            <>
              <Drawer title="Register Form" placement="right" onClose={onClose} visible={visible}>

                <Form layout="vertical" onFinish={registrationSubmit}>
                  <Row gutter={16} style={{ marginBottom: 15 }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Radio.Group onChange={onChange} value={regType}>
                        <Radio value={"ADMIN"}>Admin</Radio>
                        <Radio value={"PLAYER"}>Player</Radio>
                        <Radio value={"OWNER"}>Team Owner</Radio>
                      </Radio.Group>
                    </Col>
                  </Row>


                  <Row gutter={16}>
                    {
                      regType === "ADMIN" ?
                        < >
                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                              name={"nicPass"}>
                              <Input placeholder="NIC/Passport" />
                            </Form.Item>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                              name={"adminName"}>
                              <Input placeholder="Name" />
                            </Form.Item>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                              name={"country"}>
                              <Input placeholder="Country" />
                            </Form.Item>
                          </Col>

                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                              name={"contactNumber"}>
                              <Input placeholder="Contact Number" />
                            </Form.Item>
                          </Col>
                          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                              name={"email"}>
                              <Input placeholder="Email" />
                            </Form.Item>
                          </Col>
                        </> : regType === "PLAYER" ?
                          <>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                              <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                name={"nicPass"}>
                                <Input placeholder="NIC/Passport" />
                              </Form.Item>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                              <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                name={"playerName"}>
                                <Input placeholder="Name" />
                              </Form.Item>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                              <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                name={"country"}>
                                <Input placeholder="Country" />
                              </Form.Item>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                              <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                name={"gender"}>
                                <Input placeholder="Gender" />
                              </Form.Item>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                              <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                name={"type"}>
                                <Input placeholder="Player Type" />{/* Batsman,Bowler,Fielder,Allrounder */}

                              </Form.Item>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                              <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                name={"dominalStyle"}>
                                <Input placeholder="Dominan Style" />{/* left,right */}

                              </Form.Item>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                              <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                name={"bowlinType"}>
                                <Input placeholder="Bowling Type" />{/* fast,spin.. */}

                              </Form.Item>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                              <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                name={"contactNumber"}>
                                <Input placeholder="Contact Number" />
                              </Form.Item>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                              <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                name={"email"}>
                                <Input placeholder="Email" />
                              </Form.Item>
                            </Col>
                          </> : regType === "OWNER" ?
                            <>
                              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                  name={"nicPass"}>
                                  <Input placeholder="NIC/Passport" />
                                </Form.Item>
                              </Col>
                              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                  name={"ownerName"}>
                                  <Input placeholder="Name" />
                                </Form.Item>
                              </Col>
                              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                  name={"country"}>
                                  <Input placeholder="Country" />
                                </Form.Item>
                              </Col>

                              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                  name={"contactNumber"}>
                                  <Input placeholder="Contact Number" />
                                </Form.Item>
                              </Col>
                              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                                  name={"email"}>
                                  <Input placeholder="Email" />
                                </Form.Item>
                              </Col>
                            </> : <></>
                    }



                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                      <Divider />
                      <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                        name={"username"}>
                        <Input placeholder="User Name" />
                      </Form.Item>

                      <Form.Item rules={[{ required: true, message: 'This field is required.' }]}
                        name={"password"}>
                        <Input type={"password"} placeholder="Password" />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" htmlType={"submit"}>Submit</Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Drawer>
            </>

          </Row>
        </div>

      </div>
    </>
  )
    ;

}

export default SignIn;