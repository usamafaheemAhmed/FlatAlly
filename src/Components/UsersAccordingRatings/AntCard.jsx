import React from 'react';

import { Avatar, Card } from 'antd';
const { Meta } = Card;
import HannanPro from "../../assets/images/Hannanp-1.jpg"
import roamImg1 from "../../assets/images/RoomImg (4).jpg"
import { IoSettingsOutline } from 'react-icons/io5';
import { LuClipboardEdit } from 'react-icons/lu';
import { BiDotsHorizontal } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
const AntCard = () => {
    // Create the custom title element
    const customTitle = (
        <div className='d-flex justify-content-between'>
            Hannan Tahir
            <AiOutlineHeart style={{ marginRight: 8, color: 'red' }} /> {/* Heart icon */}
        </div>
    );

    return (
        <Card
            hoverable
            style={{
                width: 400,
            }}
            cover={
                <img
                    alt="RoomImg"
                    src={roamImg1}
                    style={{
                        height:"300px"
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
                avatar={<Avatar src={HannanPro} />}
                title={customTitle}
                description="he lives in London Stratford and have a one man Vacancy ..."
            />
        </Card>
    );
}
export default AntCard;