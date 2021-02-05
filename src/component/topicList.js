import React from 'react';
import {List,Col,Avatar,Tooltip} from 'antd';
import {Link} from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import TopicTag from "../component/tags";
import FromNow from "./fromnow";

function TopicsList(props){
    let {loading,data} = props;
    return (
        <List
            className="topic_list"
            loading={loading}
            dataSource={data}
            renderItem={(data)=>{
                let {author:{avatar_url,loginname},id,last_reply_at,tab,title,good,top} = data;
                return <List.Item>
                    <Col xs={24} md={20} className="text-hidden">
                        <Link to={`/user/${loginname}`}>
                            <Avatar 
                                icon={<UserOutlined />} 
                                size={30}
                                src={avatar_url}
                                title={loginname}  
                            />
                        </Link>
                        <TopicTag tab={tab} />
                        <Tooltip title={title}>
                            <Link to={`/topics/${id}`}>
                                {title}
                            </Link>
                        </Tooltip>
                    </Col>
                    <Col xs={0} md={4} align="right">
                        <FromNow date={last_reply_at} />
                    </Col>  
                </List.Item>
            }}
        />
    );
}

export default TopicsList;