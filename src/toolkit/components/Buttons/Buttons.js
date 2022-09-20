import { Button, Row, Col, Modal, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { fetchPosts } from '../../redux/slice'
import AddFrom from "../AddForm/AddForm";

const { Text } = Typography;

const Buttons = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch()
  const onLoadClick = () => dispatch(fetchPosts())

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const ModalTitle = (
      <Row gutter={24} justify='space-between'>
        <Col span={12}>
          <Text>Add post</Text>
        </Col>
        <Col span={2}>
          <CloseOutlined onClick={closeModal} />
        </Col>
      </Row>
    )

  return (
    <Row gutter={24} style={{ marginBottom: '20px' }}>
      <Col span={12}>
        <Button onClick={onLoadClick}>Load Posts</Button>
      </Col>
      <Col span={12}>
        <Button type="primary" onClick={showModal}>
          Add Post
        </Button>
        <Modal title={ModalTitle} open={isModalOpen} footer={null} closable={false}>
          <AddFrom onClose={closeModal}/>
        </Modal>
      </Col>
    </Row>
  );
}

export default Buttons;
