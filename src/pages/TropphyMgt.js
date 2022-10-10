import {Button, Card, Col, DatePicker, Form, Input, Row, Space, Table, Tooltip} from "antd";
import moment from "moment";
import {EditOutlined,PlusOutlined} from "@ant-design/icons";
import {useState} from "react";
import Modal from "antd/es/modal/Modal";
import TrophyDataSectionComp from "./TrophyDataSectionComp";
import MatchDetailSectionComp from "./MatchDetailSectionComp";

export default function TroppyMgt() {
    const [{isModalVisible, selectedRecReservationId}, setReDetailModalVisible] = useState(
        {isModalVisible: false, trophyId: ""});
    const setModalVisible = (trophyId) => {
        setReDetailModalVisible({isModalVisible: true, trophyId: trophyId})
    }

    const troppyData = [
        {
            venue: "PALLKALE",
            endDate: "2022-11-30",
            startingDate: "2022-10-05",
            tropphyName: "FUKPL"
        },
        {
            venue: "PALLKALE",
            endDate: "2022-11-30",
            startingDate: "2022-10-05",
            tropphyName: "FUKPL"
        },
        {
            venue: "PALLKALE",
            endDate: "2022-11-30",
            startingDate: "2022-10-05",
            tropphyName: "FUKPL"
        }
    ]
    const columns = [
        {
            title: 'Tropphy Name',
            dataIndex: 'tropphyName',
        },
        {
            title: 'Starting Date',
            dataIndex: 'startingDate',
            render: (text) => (
                <>
                    {text != null ? moment(text).format("YYYY-MM-DD") : "N/A"}
                </>
            )
        },
        {
            title: 'End Date',
            dataIndex: 'endDate',
            render: (text) => (
                <>
                    {text != null ? moment(text).format("YYYY-MM-DD") : "N/A"}
                </>
            )
        },
        {
            title: 'Venue',
            dataIndex: 'venue'

        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            fixed: 'right',
            render: (text, rec) => (
                <Space size="middle">
                    <Tooltip title="View" style={{backgroundColor: '#000000fa'}}>
                        <Button className={"table-icon-color"} onClick={() => setModalVisible(rec.reservationId)}
                                style={{color: '#faad14', backgroundColor: '#070814f5'}}


                        ><EditOutlined/></Button>
                    </Tooltip>
                </Space>
            )
        }
    ]

    const showAddNewTrophyModal=()=>{
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

                            <TrophyDataSectionComp/>

                            <MatchDetailSectionComp/>

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
                        <Button type="primary" onClick={showAddNewTrophyModal}
                                icon={<PlusOutlined/>}>Add New Trophy</Button>

                }
            >
                <Row style={{marginTop: 15}}>
                    <Col span={24}>
                        <Table columns={columns}
                               size={"small"}
                               dataSource={troppyData}
                               scroll={{x: 'max-content'}}
                               pagination={{
                                   total: troppyData.length,
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