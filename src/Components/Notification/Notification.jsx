import React, { useState } from 'react';
import { Avatar, List, Radio, Space } from 'antd';
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
    {
        title: 'Ant Design Title 5',
    },
    {
        title: 'Ant Design Title 6',
    },
    {
        title: 'Ant Design Title 7',
    },
];

const Notification = () => {
    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');
    return (
        <>
            <List
                pagination={{
                    position,
                    align,
                }}
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                        <div>Contacted you</div>
                    </List.Item>
                )}
            />
        </>
    );
};
export default Notification;


