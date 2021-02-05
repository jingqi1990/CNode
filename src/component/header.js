import React from 'react';
import { Affix, Menu } from 'antd';
import {Layout,Row, Col} from 'antd';
import { Link, useLocation } from "react-router-dom";
import {GithubOutlined} from '@ant-design/icons';
import {nav} from  '../router/index';


function Header (props) {

    let { pathname:pathName} = useLocation();

    let activedIndex = nav.findIndex((navData)=>{
        return pathName === navData.to;
    })
    
    return (
        <Affix offsetTop={0}>
            <Layout.Header >
                <Row className="header">
                    <Col xs={4} sm={4} md={4} lg={2} xl={2}>
                        <Link to="/">
                            {/* <h1 className="logo">logo</h1> */}
                            <GithubOutlined 
                                className="logo"
                            />
                        </Link>
                    </Col>
                    <Col xs={20} sm={20} md={20} lg={22} xl={22}>
                        <Menu 
                            mode={'horizontal'} 
                            theme={'dark'}
                            defaultSelectedKeys={[activedIndex.toString()]}
                            selectedKeys = {[activedIndex.toString()]} 
                        >
                            {
                                nav.map((item,index)=>{
                                    return(
                                        <Menu.Item key={index}>
                                            <Link to={item.to}>{item.title}</Link>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Col>
                </Row>
            </Layout.Header>
        </Affix>
    )
}
export default Header;