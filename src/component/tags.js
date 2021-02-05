import React from 'react';
import {Tag} from 'antd';


function settag(tab){
    switch(tab){
        case 'top':
            return <Tag className="tagstyle" color="#87d068">置顶</Tag>
        case 'good':
            return <Tag className="tagstyle" color="#f50">精华</Tag>
        case 'share':
            return <Tag className="tagstyle" color="green">分享</Tag>
        case 'ask':
            return <Tag className="tagstyle" color="gold">问答</Tag>
        case 'job':
            return <Tag className="tagstyle" color="blue">招聘</Tag>        
        case 'dev':
            return <Tag className="tagstyle" color="purple">测试</Tag>
        default:
            return null;
    }
}




function TopicTag(props){
    let {tab} = props;
    return settag(tab);
}


export default TopicTag;