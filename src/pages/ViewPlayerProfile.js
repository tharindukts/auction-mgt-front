import {Button, Card, Col, Form, Input, Row, Space, Table, Tooltip} from "antd";
import {EditOutlined} from "@ant-design/icons";
import moment from "moment";
import {useState} from "react";
import Modal from "antd/es/modal/Modal";

export default function ViewPlayerProfile() {
    const [{isModalVisible, selectedPlayerId}, setPlayerModalVisible] = useState(
        {isModalVisible: false, selectedPlayerId: ""});
    const setModalVisible = (playerId) => {
        setPlayerModalVisible({isModalVisible: true, selectedPlayerId: playerId})
    }
    const data=[
        {
            basePrice:'2000000',
            team:'TEAM NO ',
            country:'Lake pankawa',
            playerName:'maalimga',
            playerId:'pl00012',
        },
        {
            basePrice:'2000000',
            team:'TEAM NO ',
            country:'Lake pankawa',
            playerName:'maalimga',
            playerId:'pl00012',
        }

    ]
    const columns=[

        {
            title: 'Player ID',
            dataIndex: 'playerId',
        },
        {
            title: 'Player Name',
            dataIndex: 'playerName',
        },
        {
            title: 'Country',
            dataIndex: 'country',
        },
        {
            title: 'Team',
            dataIndex: 'team',
        },
        {
            title: 'Base Price',
            dataIndex: 'basePrice',
        },

        {
            title: 'Action',
            key: 'action',
            align: 'center',
            fixed: 'right',
            render: (text, rec) => (
                <Space size="middle">
                    <Tooltip title="View" style={{backgroundColor: '#000000fa'}}>
                        <Button className={"table-icon-color"} onClick={() => setModalVisible(rec.playerId)}
                                style={{color: '#faad14', backgroundColor: '#070814f5'}}


                        ><EditOutlined/></Button>
                    </Tooltip>
                </Space>
            )
        }

    ]
    return(
        <>
            {
                isModalVisible ?
                    <Modal className="modal-custom-bg"
                           title="Player Details"
                           style={{
                               width: '100%', marginTop: 50, backgroundColor: '#08325e',
                               fontcolor: 'white',
                               // overflow: 'scroll'
                           }}
                           centered
                           maskClosable={false}
                           visible={isModalVisible}
                           onCancel={() =>
                               setPlayerModalVisible(
                                   {isModalVisible: false, selectedRecReservationId: ""})}
                           destroyOnClose={true}
                           footer={null}
                           width={1000}>
                        <Form layout="vertical"

                        >

                            <Row gutter={16}>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item name={"playerName"} label={"Player Name"}>
                                        <Input type={"text"}
                                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                                        />

                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item name={"contactNo"} label={"Contact Number"}>
                                        <Input type={"text"}
                                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                                        />

                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item name={"country"} label={"Country"}>
                                        <Input type={"text"}
                                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                                        />

                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item name={"basePrice"} label={"Base Price"}>
                                        <Input type={"text"}
                                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                                        />

                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item name={"playerType"} label={"Player Type"}>
                                        <Input type={"text"}
                                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                                        />

                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item name={"dominantStyle"} label={"Dominant Style"}>
                                        <Input type={"text"}
                                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                                        />

                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item name={"bowlinType"} label={"Bowlin Type"}>
                                        <Input type={"text"}
                                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                                        />

                                    </Form.Item>
                                </Col>
                            </Row>


                        </Form>

                    </Modal>

                    :
                    ''
            }
            <Card
                style={{width: '100%', marginTop: 50, background: 'rgba(0,0,0,0.42)', fontcolor: 'white'}}

            >
                <Row style={{marginTop: 15}}>
                    <Col span={24}>
                        <Table columns={columns}
                               size={"small"}
                               dataSource={data}
                               scroll={{x: 'max-content'}}
                               pagination={{
                                   total: data.length,
                                   pageSizeOptions: ['10', '50', '100', '500'],
                                   defaultPageSize: 10,
                                   showSizeChanger: true,
                                   showTotal: (total) => total === 1 ? `Total ${total} item` : `Total ${total} items`
                               }}
                        />
                    </Col>
                </Row>
            </Card>
        </>
    )
}