import {Button, Card, Col, DatePicker, Form, Input, Row, Space, Table, Tooltip} from "antd";
import moment from "moment";
import {EditOutlined,PlusOutlined} from "@ant-design/icons";
import {useState} from "react";
import Modal from "antd/es/modal/Modal";
import TrophyDataSectionComp from "./TrophyDataSectionComp";
import MatchDetailSectionComp from "./MatchDetailSectionComp";

export default function TeamMgt() {
    const [{isModalVisible, selectedRecReservationId}, setReDetailModalVisible] = useState(
        {isModalVisible: false, trophyId: ""});
    const setModalVisible = (trophyId) => {
        setReDetailModalVisible({isModalVisible: true, trophyId: trophyId})
    }

    const teamData = [
        {
            createdDate:'2022-09-25',
            owner:'W.Pasan',
            maxPrice:'10000000',
            qty:'10',
            teamName:'Royal Challenges ',
            teamId:'TM001',
        },
        {
            createdDate:'2022-09-25',
            owner:'W.Pasan',
            maxPrice:'10000000',
            qty:'10',
            teamName:'Royal Challenges ',
            teamId:'TM001',
        },
        {
            createdDate:'2022-09-25',
            owner:'W.Pasan',
            maxPrice:'10000000',
            qty:'10',
            teamName:'Royal Challenges ',
            teamId:'TM001',
        },
    ]
    const columns = [
        {
            title: 'Team ID',
            dataIndex: 'teamId',
        },
        {
            title: 'Team Name',
            dataIndex: 'teamName',
        },
        {
            title: 'Current Participants',
            dataIndex: 'qty',
        },
        {
            title: 'Maximum Price',
            dataIndex: 'maxPrice',
        },
        {
            title: 'Team Owner',
            dataIndex: 'owner',
        },
        {
            title: 'Team Created Date',
            dataIndex: 'createdDate',
            render: (text) => (
                <>
                    {text != null ? moment(text).format("YYYY-MM-DD") : "N/A"}
                </>
            )
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            fixed: 'right',
            render: (text, rec) => (
                <Space size="middle">
                    <Tooltip title="View" style={{backgroundColor: '#000000fa'}}>
                        <Button className={"table-icon-color"} onClick={() => setModalVisible(rec.teamId)}
                                style={{color: '#faad14', backgroundColor: '#070814f5'}}


                        ><EditOutlined/></Button>
                    </Tooltip>
                </Space>
            )
        }
    ]

    const columnsTeamPrticipance = [
        {
            title: 'Player Id',
            dataIndex: 'playerId',
        },
        {
            title: 'Player Name',
            dataIndex: 'playerName',
        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Player Type',
            dataIndex: 'type',
        }

    ]

    const showAddNewTeamModal=()=>{
        setModalVisible("")
    }
    return (
        <>
            {
                isModalVisible ?
                    <Modal className="modal-custom-bg"
                           title="Trophy Details"
                           style={{
                               width: '100%', marginTop: 50, backgroundColor: '#08325e',
                               fontcolor: 'white',
                               // overflow: 'scroll'
                           }}
                           centered
                           maskClosable={false}
                           visible={isModalVisible}
                           onCancel={() =>
                               setReDetailModalVisible(
                                   {isModalVisible: false, selectedRecReservationId: ""})}
                           destroyOnClose={true}
                           footer={null}
                           width={1000}>
                        <Form layout="vertical"
                            // form={resForm}
                            // onFinish={updateReservationStatus}
                        >

                            <Row gutter={16}>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item name={"teamName"} label={"Team Name"}>
                                        <Input type={"text"}
                                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                                        />

                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item name={"maxPrice"} label={"Max Price"}>
                                        <Input type={"text"}
                                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                                        />

                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item name={"teamOwner"} label={"Team Owner"}>
                                        <Input type={"text"}
                                               style={{background: 'rgba(0,0,0,0)', color: 'white'}}
                                        />

                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Table columns={columnsTeamPrticipance}
                                           size={"small"}
                                           dataSource={[]}
                                           scroll={{x: 'max-content'}}
                                           pagination={{
                                               // total: teamData.length,
                                               pageSizeOptions: ['10', '50', '100', '500'],
                                               defaultPageSize: 10,
                                               showSizeChanger: true,
                                               showTotal: (total) => total === 1 ? `Total ${total} item` : `Total ${total} items`
                                           }}
                                    />
                                </Col>
                            </Row>

                            <Form.Item>
                                <Space size={16} style={{float: 'right'}}>

                                    <Button style={{
                                        color: '#f1efee',
                                        backgroundColor: 'transparent',
                                        borderColor: '#da7714',
                                        width: '100%',
                                        top:30
                                    }}
                                        // onClick={() => confirmPayment()}
                                    >
                                        Submit</Button>


                                </Space>

                            </Form.Item>
                        </Form>

                    </Modal>

                    :
                    ''
            }
            <Card
                style={{width: '100%', marginTop: 50, background: 'rgba(0,0,0,0.42)', fontcolor: 'white'}}
                extra={
                        <Button type="primary" onClick={showAddNewTeamModal}
                                icon={<PlusOutlined/>}>Add New Team</Button>

                }
            >
                <Row style={{marginTop: 15}}>
                    <Col span={24}>
                        <Table columns={columns}
                               size={"small"}
                               dataSource={teamData}
                               scroll={{x: 'max-content'}}
                               pagination={{
                                   total: teamData.length,
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