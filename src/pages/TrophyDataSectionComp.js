import {Col, DatePicker, Form, Input, Row} from "antd";

export default function TrophyDataSectionComp(){
    return(
        <>
            <Row gutter={16}>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item name={"trophyName"} label={"Trophy Name"}>
                        <Input type={"text"}
                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                        />

                    </Form.Item>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item name={"startDate"} label={"Start Date"}>
                        <DatePicker format={"YYYY_MM_DD"}
                                    placeholder={"Please Select"}
                                    style={{background: 'rgba(0,0,0,0)', color: 'white', width: '100%'}}
                        />

                    </Form.Item>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item name={"endDate"} label={"End Date"}>
                        <DatePicker format={"YYYY_MM_DD"}
                                    placeholder={"Please Select"}
                                    style={{background: 'rgba(0,0,0,0)', color: 'white', width: '100%'}}
                        />

                    </Form.Item>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item name={"venue"} label={"Venue"}>
                        <Input type={"text"}
                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                        />

                    </Form.Item>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item name={"teams"} label={"Teams"}>
                        <Input type={"text"}
                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                        />

                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}