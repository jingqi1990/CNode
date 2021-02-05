import React, { useEffect } from 'react';
import {Card,Avatar} from 'antd';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { useUser } from '../../store/action';
import TopicList from '../../component/topicList';
import { UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

function UserPage(){

    let {loginname}  = useParams();
    let getData = useUser();
    let {data, loading} = useSelector(state=>state.user);

    let {recent_replies=[],recent_topics=[],avatar_url,create_at,githubUsername,score} = data;

    useEffect(()=>{
        getData(loginname);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loginname]);

    return(
        <div className="userPage">
            <Card
                loading={loading}
                className="user_detail"
            >
                <Avatar
                    icon={<UserOutlined />}
                    size={80}
                    src={avatar_url}
                />
                <p style={{marginTop:'20px'}}>
                    <p>用户名：{loginname}<span style={{marginLeft:'10px'}}>积分：{score}</span></p>
                    <p>注册时间：{dayjs(create_at).format('YYYY-MM-DD')}</p>
                </p>
                <p>Github：<a href={`http://github.com/${githubUsername}`} rel="noopener noreferrer" target="_blank">http://github.com/{githubUsername}</a></p>
            </Card>
            <Card
                loading={loading}
                title={"最近创建话题"}
                type="inner"
            >
                <TopicList
                    loading={loading}
                    data={recent_topics}
                />
            </Card>
            <Card
                loading={loading}
                title={"最近参与话题"}
                type="inner"
            >
                <TopicList
                    loading={loading}
                    data={recent_replies}
                />
            </Card>
        </div>
    )
}

export default UserPage;