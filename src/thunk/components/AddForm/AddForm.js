import { Button, Form, Input } from 'antd';
import React from 'react';
import {useDispatch} from "react-redux";
import { v4 as uuid } from 'uuid';

import { addData } from "../../redux/actions";


const { TextArea } = Input;

const AddFrom = ({ onClose }) => {
  const dispatch = useDispatch()

  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(addData({
      userId: 1,
      id: uuid(),
      ...values,
    }))
    onClose();
    form.resetFields();
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      onFinish={onFinish}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input your post title!' }]}
        initialValue=''
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Body"
        name="body"
        rules={[{ required: true, message: 'Please input your post text!' }]}
        initialValue=''
      >
        <TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddFrom;
