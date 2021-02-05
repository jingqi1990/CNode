import React, { Fragment, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {Alert} from 'antd';
import {useHistory, useParams} from 'react-router-dom';
import {useTopicContent} from '../../store/action';
import Details from './details';
import Replies from './replies';

function TopicsPage(){
    let {id} = useParams();
    let getData = useTopicContent();
    let history = useHistory();
    let {loading, data, isError, err_msg} = useSelector(state=>state.topicCon);    
    useEffect(()=>{
        getData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);

    return(
        <div>
            { isError ? <Alert
                closable={true}
                message={"请求出错"}
                type="error"
                description={
                    <Fragment>
                        <p>{err_msg}</p>
                        <p>点击关闭按钮返回上一步</p>
                    </Fragment>
                }
                afterClose={()=>{
                    history.goBack();
                }}
            />:(
                <Fragment>
                    <Details data={data} loading={loading} />
                    <Replies loading={loading} data={data.replies} />
                </Fragment>
            )} 
        </div>
    )
}

export default TopicsPage;