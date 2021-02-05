import React from 'react';
import {Menu} from 'antd';
import {Link, useLocation} from 'react-router-dom';
import {indexNav,types} from '../../router/index';
import qs from 'qs';
function IndexNavTab(){
    let {search} = useLocation();
    search = qs.parse(search.substring(1));
    let activedIndex = search.tab === undefined ? 0 : types.indexOf(search.tab);
    return(
        <Menu 
            className = "indexNav"
            mode={'horizontal'}
            defaultSelectedKeys={[activedIndex.toString()]}
            selectedKeys={[activedIndex.toString()]}
        >

            {
                indexNav.map((item,index) => {
                    return <Menu.Item key={index}>
                        <Link to={item.url}>{item.name}</Link>
                    </Menu.Item>
                })  
            }
        </Menu>
    )
}

export default IndexNavTab;