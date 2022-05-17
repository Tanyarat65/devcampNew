import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Button, notification } from 'antd';

const ButtonComp = ()=>{

    const openNotification = () => {
        notification.open({
          message: 'Notification Title',
          description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      };

    return(<>
        <Button type="primary" onClick={openNotification}>
            Notification
        </Button>
    </>);
}

export default ButtonComp;