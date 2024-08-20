import { Drawer, Button, Row, Col, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { defaultApiUrl } from '../../Atom';
import { useRecoilValue } from 'recoil';
import { CiCircleInfo } from 'react-icons/ci';
import { PostAxios } from '../../assets/Alert/Alert';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AntDrawer = (props) => {
    let defaultApi = useRecoilValue(defaultApiUrl);
    let selectedUser = props.elem || {};

    const onCloseFun = () => {
        try {
            console.log("Before closing:", props.openDrawer); // Check the current state
            props.backFun(false);
            console.log("After closing:", props.openDrawer); // Check if the state is updated
        } catch (error) {
            console.error("Error closing the drawer:", error);
        }
    };

    const ImageHandle = (src) => {
        try {
            let img = defaultApi + "/" + src.replace("\\", "/");
            return img;
        } catch (error) {
            console.error("Error handling image URL:", error);
            return ''; // Fallback if image URL fails
        }
    };

    let Nav = useNavigate();

    const clickForCall = async () => {
        try {
            let obj = {
                user2Id: selectedUser.user._id
            };

            let head = "";
            let Token = localStorage.getItem("LoginToken");

            if (JSON.parse(Token).accessToken) {
                head = {
                    headers: {
                        'Authorization': `Bearer ${JSON.parse(Token).accessToken}`,
                        'Content-Type': 'application/json' // Optional, specify if you are sending JSON data
                    }
                }
            }

            let res = await PostAxios(defaultApi + "/api/Meeting/scheduleMeeting", obj, head);
            console.log("API response:", res);

            if (res?.message === "Meeting scheduled and emails sent") {
                // Open the meeting URL in a new window
                window.open(res.apiResponse.join_url, '_blank');

                Nav("/User/UserReview");


            }




        } catch (error) {
            console.error("Error making API call:", error);
        }
    };

    return (
        <Drawer
            title={
                <div className='d-flex justify-content-between align-items-center'>
                    <span>User Details</span>
                </div>
            }
            placement="right"
            onClose={onCloseFun}
            visible={props.openDrawer}
            width={600}
            bodyStyle={{ padding: '20px' }} // Add padding to the drawer body
        >
            {selectedUser && selectedUser.user && selectedUser.flat ? ( // Add defensive checks
                <div>
                    <Row gutter={24}>

                        <Col span={24}>
                            <label disabled role='button' className='curserPointer w-100 mb-5 text-center'  >
                                <Image fluid src={ImageHandle(selectedUser.user.imageUrl)} roundedCircle className='ProfileImgSize' />
                            </label>
                        </Col>

                        <Col span={12}>
                            <h3>User Details</h3>
                            <p><strong>Name:</strong> {selectedUser.user.userName || 'N/A'}</p>
                            <p><strong>Email:</strong> {selectedUser.user.email || 'N/A'}</p>
                            <p><strong>Phone:</strong> {selectedUser.user.phoneNumber || 'N/A'}</p>
                            <p><strong>Address:</strong> {selectedUser.user.address || 'N/A'}</p>
                            <p><strong>Area:</strong> {selectedUser.user.area_FK?.areaName || 'N/A'}</p>
                        </Col>
                        <Col span={12}>
                            <h3>Flat Details</h3>
                            <p><strong>Number of Rooms:</strong> {selectedUser.flat.numberRoom || 'N/A'}</p>
                            <p><strong>Bedrooms:</strong> {selectedUser.flat.bedRoom || 'N/A'}</p>
                            <p><strong>Bathrooms:</strong> {selectedUser.flat.washRoom || 'N/A'}</p>
                            <p><strong>Kitchen:</strong> {selectedUser.flat.kitchen ? 'Yes' : 'No'}</p>
                            <p><strong>Bed Type:</strong> {selectedUser.flat.bedType || 'N/A'}</p>
                            <p><strong>Floor:</strong> {selectedUser.flat.Floor || 'N/A'}</p>
                        </Col>
                    </Row>

                    <div style={{ marginTop: '20px' }}>
                        <h3>Images</h3>
                        <Row gutter={16}>
                            {selectedUser.flat.imgs_Url?.map((img, idx) => {
                                let src = ImageHandle(img);
                                return (
                                    <Col span={8} key={idx} style={{ marginBottom: '10px' }}>
                                        <img src={src} alt={`Flat ${idx}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                                    </Col>
                                );
                            }) || <p>No images available</p>}
                        </Row>
                    </div>

                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                        <Button type="primary" style={{ marginRight: '10px' }} onClick={clickForCall}>
                            Contact
                            <Tooltip title="Click For online Call">
                                <CiCircleInfo style={{ cursor: 'pointer' }} />
                            </Tooltip>
                        </Button>
                        <Button style={{ marginRight: '10px' }} onClick={onCloseFun}>Close</Button>
                    </div>
                </div>
            ) : (
                <p>No user or flat details available</p> // Fallback for missing data
            )}
        </Drawer>
    );
};

export default AntDrawer;
