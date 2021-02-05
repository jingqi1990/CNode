import React from 'react';
import {Link} from 'react-router-dom';
import {Card,List,Comment,Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import FromNow from '../../component/fromnow'

export default function Replies(props){
    let {loading,data=[]} = props;
    data.reverse();
    return <Card
        title="评论"
        bordered
        loading={loading}
        type="inner"
    >
        <List
            dataSource={data}
            renderItem={(itemData)=>{
                let {author,content,create_at} = itemData;
                return <List.Item>
                <Comment
                    author={<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>}
                    avatar={
                        <Avatar 
                            icon={<UserOutlined />} 
                            size={30}
                            src={author.avatar_url}
                            title={author.loginname}
                        />
                    }
                    content={<div
                        dangerouslySetInnerHTML = {{
                            __html:content
                        }}>
                    </div>}
                    datetime={<time>发表于：<FromNow date={create_at}/></time>}
                /> 
                </List.Item>
            }}
            pagination={
                {
                    simple:true,
                    size:"small"
                }
            }
        />
    </Card>
}