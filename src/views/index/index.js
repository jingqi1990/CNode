import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import IndexNavTab from './indexNav';
import TopicsList from '../../component/topicList';
import { useTopicsList } from '../../store/action/index';
import IndexPagination from './indexPagination';
import qs from 'qs';

function IndexPage(props){
    let data = useSelector(state=>{
        return state.topics;
    });
    let {loading, data:dataList} = data;
    const getData = useTopicsList();
    let { search } = useLocation();
    let {tab="all",page=1}  = qs.parse(search.substring(1));


    useEffect(()=>{
        getData(tab,page);
        
        // eslint-disable-next-line
    },  [tab,page]);

    return(
        <div>
           <IndexNavTab/>
           <TopicsList
               loading={loading}
               data={dataList}
           />
           {loading ? "" :<IndexPagination tab={tab} />}
        </div>
    )
}

export default IndexPage;