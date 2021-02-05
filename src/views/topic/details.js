import React, { Fragment } from 'react';
import { Card,Breadcrumb} from "antd";
import { Link } from 'react-router-dom';
import  TopicTag  from '../../component/tags';
import  FromNow  from "../../component/fromnow";
import { HomeOutlined } from '@ant-design/icons';

function Details(props){
    let {data,loading} = props;
    let {author,content,create_at,good,tab,top,title,visit_count} = data;
    return <Card
        bordered 
        loading={loading}
        className="card"
        title={
            <Fragment>
                <h1><TopicTag tab={top ? "top":(good?"good":tab)} />{title}</h1>
                <p>-作者：<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>  -创建时间：<FromNow date={create_at}/> -浏览人数：{visit_count}</p>
            </Fragment>
        }
        type="inner"
    >
        <Breadcrumb>
            <Breadcrumb.Item href="/">
                <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href={`/?tab=${tab}`}>
                <span>{tab}</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
        </Breadcrumb>
        <hr/>
        <div style={{marginTop:'20px'}}
            dangerouslySetInnerHTML={{
                __html:content
            }}
        ></div>
    </Card>;
}

export default Details;