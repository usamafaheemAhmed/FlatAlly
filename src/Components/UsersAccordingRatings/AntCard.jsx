import React from 'react';

import { Avatar, Card } from 'antd';
const { Meta } = Card;
import HannanPro from "../../assets/images/Hannanp-1.jpg"
import roamImg1 from "../../assets/images/RoomImg (4).jpg"
import { IoSettingsOutline } from 'react-icons/io5';
import { LuClipboardEdit } from 'react-icons/lu';
import { BiDotsHorizontal } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import { defaultApiUrl } from '../../Atom';
import { useNavigate } from 'react-router-dom';

const AntCard = (props) => {
    let defaultApi = useRecoilValue(defaultApiUrl);

    let data = props.data || {};

    // Handle userName
    let userName = data.userName || "Hannan Tahir";

    // Handle profilePic, ensuring it only prepends `defaultApi` if `data.profilePic` exists
    let profilePic = data.profilePic ? `${defaultApi}/${data.profilePic}` : HannanPro;

    // Handle flatImg, checking if `flatDetails` and `imgs_Url` exist and contain at least 2 elements
    let flatImg = (data.flatDetails && data.flatDetails.imgs_Url && data.flatDetails.imgs_Url[1])
        ? `${defaultApi}/${data.flatDetails.imgs_Url[1]}`
        : roamImg1;

    // Handle address
    let address =
        (data.userName ? data.userName + "'s address is " +
            (data.address || "an unspecified location") +
            " Flat is on " +
            (data.flatDetails && data.flatDetails.Floor !== undefined ? data.flatDetails.Floor : "an unspecified") +
            " floor and has " +
            (data.flatDetails && data.flatDetails.numberRoom !== undefined ? data.flatDetails.numberRoom : "an unspecified number of") +
            " rooms." :
            "He lives in London Stratford and has a one-man vacancy...");


    // Create the custom title element
    const customTitle = (
        <div className='d-flex justify-content-between'>
            {userName}
            <AiOutlineHeart style={{ marginRight: 8, color: 'red' }} /> {/* Heart icon */}
        </div>
    );

    let Nav = useNavigate();
    let gotoSearch = () => {
        Nav("/Search");
    }

    return (
        <Card
            onClick={gotoSearch}
            hoverable
            style={{
                width: 400,
            }}
            cover={
                <img
                    alt="RoomImg"
                    src={flatImg}
                    style={{
                        height: "300px"
                    }}
                />
            }
            actions={[
                <IoSettingsOutline key="setting" />,
                <LuClipboardEdit key="edit" />,
                <BiDotsHorizontal key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={<Avatar src={profilePic} />}
                title={customTitle}
                description={address}
            />
        </Card>
    );
}
export default AntCard;