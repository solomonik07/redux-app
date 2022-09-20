import { Card, Col, Row, Button, Tooltip, Spin, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React  from 'react';
import {useSelector, useDispatch} from "react-redux";
import { deletePost } from "../../redux/slice";

import '../../App.css'

const { Text } = Typography

const Posts = () => {
  const { posts, status, error } = useSelector(state => state.posts)

  const dispatch = useDispatch();

  const loading = (
    <div className='loadingContainer'>
      <Spin />
    </div>
  )

  if (status === 'loading') return loading
  if (error) return <Text>{error}</Text>

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
                    dispatch(deletePost(item))
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
