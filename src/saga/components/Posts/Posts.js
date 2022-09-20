import { Card, Col, Row, Button, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React from 'react';
import {useSelector, useDispatch} from "react-redux";

import '../../App.css'
import { removeData } from "../../redux/actions";


const Posts = () => {
  const posts = useSelector(state => state.data)

  const dispatch = useDispatch();

  return (
    <Row gutter={24}>
      {
        posts?.length > 0 && posts.map((item) => {
          return (
            <Col key={item.id} span={8} className='postContainer' >
              <Tooltip title="Delete post">
                <Button
                  shape="circle"
                  icon={<DeleteOutlined />}
                  danger
                  className='deleteBtn'
                  onClick={() => {
                    dispatch(removeData(item))
                  }}
                />
              </Tooltip>
              <Card title={item.title} bordered size='small'>
                {item.body}
              </Card>
            </Col>
          )
        })
      }
    </Row>
  );
}

export default Posts;
