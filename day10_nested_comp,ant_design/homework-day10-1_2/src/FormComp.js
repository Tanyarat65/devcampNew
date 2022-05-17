import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import moment from "moment";

import {
  Form,
  Input,
  InputNumber,
  Button,
  Radio,
  Select,
  DatePicker,
  Checkbox
} from "antd";

const { RangePicker } = DatePicker;


const { Option } = Select;

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please select time!',
    },
  ],
};


const FormComp = ()=>{
   
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day').subtract(1, "days");
  }


  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!"
    },
    number: {
      range: "${label} must be between ${min} and ${max}"
    }
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  /* eslint-enable no-template-curly-in-string */
    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log(values);
    };
  


    return(
      <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="firstname"
        label="Firstname"
        rules={[
          {
            required: true,
            max: 50
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastname"
        label="Lastname"
        rules={[
          {
            required: true,
            max: 50
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            type: "number",
            min: 18,
            max: 60,
            required: true
          }
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item name="gender" label="Gender" rules={[{ requird: true }]}>
        <Radio.Group>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="website" label="Website">
        <Input />
      </Form.Item>
      <Form.Item name="skill" label="Skill">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="select"
        label="Select"
        initialValue="Bangkok"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select your country!"
          }
        ]}
      >
        <Select placeholder="Please select">
          <Option value="china" default>
            Bangkok
          </Option>
          <Option value="usa">Samutsakhon</Option>
          <Option value="usa">Samutpakan</Option>
          <Option value="usa">Samutsongkram</Option>
          <Option value="usa">Surachtanee</Option>
        </Select>
      </Form.Item>

      <Form.Item name="period" label="Member Period" rules={[{requird: true}]} {...rangeConfig}>
      <RangePicker disabledDate={disabledDate} />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            required: true
          },

        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>Accept Term</Checkbox>
      </Form.Item>



      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComp;