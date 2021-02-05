import axios from 'axios';
import { useDispatch } from 'react-redux';


const http = axios.create({
    baseURL:'https://cnodejs.org/api/v1',

});

// 获取主题列表
function useTopicsList(){
    let dispatch = useDispatch();
    return function(tab='all',page=1,limit=20,mdrender='false'){
        dispatch({
            type:'topics_loading'
        })
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then((res)=>{
            dispatch({
                type:'topics_Complete',
                data:res.data.data
            })
        });
    }
}

// 获取主题详情

function useTopicContent(){
    let dispatch = useDispatch();
    return function(id){
        dispatch({
            type:'TopicCon_loading'
        })
        http.get(`/topic/${id}`).then((res)=>{
            dispatch({
                type:'TopicCon_Complete',
                data:res.data.data
            })
        }).catch((err)=>{
            const msg = err.response.data.error_msg;
            dispatch({
                type:'Error',
                err_msg:msg
            })
        })
    }
}

// 获取用户详情

function useUser(){
    let dispatch = useDispatch();
    return function(loginName){
        dispatch({
            type:'User_loading'
        })
        http.get(`/user/${loginName}`).then((res)=>{
            dispatch({
                type:'User_Complete',
                data:res.data.data
            })
        })
    }
}



export {useTopicsList, useTopicContent,useUser};