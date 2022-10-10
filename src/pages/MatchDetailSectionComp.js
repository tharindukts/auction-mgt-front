import {Button, Card, Col, Form, Input, Row, Space, Table} from "antd";
import moment from "moment";

export default function MatchDetailSectionComp(){
    const columnsMatchDetails = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Date',
            dataIndex: 'Date',
            render: (text) => (
                <>
                    {text != null ? moment(text).format("YYYY-MM-DD") : "N/A"}
                </>
            )
        },

        {
            title: 'Location',
            dataIndex: 'location'

        }
    ]
    return(
        <Card title={"Match Details"}
              style={{
                  width: '100%',
                  marginTop: 50,
                  background: 'rgba(0,0,0,0.42)',
                  fontcolor: 'white'
              }}>
            <Form>
                <Row gutter={16}>
                    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Form.Item name={"Name"} label={"Name"}>
                            <Input type={"text"}
                                   style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                            />

                        </Form.Item>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Form.Item name={"Date"} label={"Date"}>
                            <Input type={"text"}
                                   style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                            />

                        </Form.Item>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Form.Item name={"location"} label={"Location"}>
                            <Input type={"text"}
                                   style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                            />

                        </Form.Item>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Form.Item>
                            <Space size={16} style={{float: 'right'}}>

                                <Button style={{
                                    color: '#ffffff',
                                    backgroundColor: 'transparent',
                                    borderColor: '#ffffff',
                                    width: '100%',
                                    top:30
                                }}
                                    // onClick={() => confirmPayment()}
                                >
                                    Add</Button>


                            </Space>

                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Table columns={columnsMatchDetails}
                               size={"small"}
                               dataSource={[]}
                               scroll={{x: 'max-content'}}
                               pagination={{
                                   // total: troppyData.length,
                                   pageSizeOptions: ['10', '50', '100', '500'],
                                   defaultPageSize: 10,
                                   showSizeChanger: true,
                                   showTotal: (total) => total === 1 ? `Total ${total} item` : `Total ${total} items`
                               }}
                        />
                    </Col>
                </Row>
            </Form>

        </Card>
    )
}