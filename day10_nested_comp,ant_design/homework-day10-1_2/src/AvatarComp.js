import 'antd/dist/antd.css';
import './index.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const AvatarComp = () =>{
    return(<>
        <Avatar size="large" icon={<UserOutlined />} />
    </>);
}

export default AvatarComp;