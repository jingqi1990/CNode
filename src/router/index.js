import React from "react";
import IndexPage from "../views/index/index";
import AboutPage from "../views/about/index";
import GetStartPage from "../views/getstart/index";
import TopicsPage from "../views/topic/index";
import UserPage from "../views/user/index";
import Page404 from "../views/page404/index";
import qs from 'qs';

const types = ['all','good','share','ask','job','dev'];

const route = [
    {
        path:'/',
        exact:true,
        render(props){
            let {search} = props.location;
            let {tab,page} = qs.parse(search.substring(1));
            if((tab === undefined && page===undefined)
               || (types.includes(tab) && (page===undefined||page>0))
            ){
                return <IndexPage {...props} />
            }
            return <Page404/>
        }
    },
    {
        path:'/topics/:id',
        exact:true,
        render(props){
            return <TopicsPage {...props} />
        }
    },
    {
        path:'/about',
        exact:true,
        render(props){
            return <AboutPage {...props} />
        }       
    },
    {
        path:'/user/:loginname',
        exact:true,
        render(props){
            return <UserPage {...props} />
        }       
    },
    {
        path:'/getstart',
        exact:true,
        render(props){
            return <GetStartPage {...props} />
        }  
    },
    {
        path:'',
        exact:false,
        render(props){
            return <Page404 {...props} />
        }          
    }
]

const nav = [
    {
        to:'/',
        title:"首页"
    },
    {
        to:'/getstart',
        title:"新手入门"
    },
    {
        to:'/about',
        title:"关于我们"
    }
]

const indexNav = [
    {
        name:"全部",
        url:"/?tab=all"
    },   
    {
        name:'精华',
        url:"/?tab=good"
    },
    {
        name:'分享',
        url:"/?tab=share"
    },
    {
        name:'问答',
        url:"/?tab=ask"
    },
    {
        name:'招聘',
        url:"/?tab=job"
    },
    {
        name:'客户端测试',
        url:"/?tab=dev"
    },
]


export { route , nav , indexNav, types}