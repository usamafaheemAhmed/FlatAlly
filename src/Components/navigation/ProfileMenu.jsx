import { Badge } from 'antd';
import Nav from 'react-bootstrap/Nav';

import { NavLink, useNavigate } from 'react-router-dom';

function ProfileMenu() {
    return (
        <Nav variant="tabs" defaultActiveKey="/DashBoard/Profile">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/DashBoard/Profile" className='textGolden textGoldenHover'>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/DashBoard/Preferences" className='textGolden textGoldenHover'>
                    Preferences
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/DashBoard/notification" className='textGolden textGoldenHover'>
                    Notification
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default ProfileMenu;