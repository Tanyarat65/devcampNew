import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import TableComp from './TableComp';
import FormComp from './FormComp';



const ContentComp = ()=>{
    return(<>
    <Row>
      <Col span={24}><TableComp/></Col>
    </Row>
    <Row>
        <Col span={24}><FormComp/></Col>
    </Row>
    {/* <Row>
        <Col span={24}><SubmitTableComp/></Col>
    </Row> */}
    
  </>)
}

export default ContentComp;