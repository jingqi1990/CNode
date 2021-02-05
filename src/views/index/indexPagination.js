import { React } from "react";
import { Pagination } from 'antd'
import {useLocation,Link} from "react-router-dom";
import qs from 'qs';


function IndexPagination(props){
    const {search} = useLocation();
    const {page:c_page = 1} = qs.parse(search.substring(1));
    const {tab} = props;
    return <div className="index-pagination">
        <Pagination
            current={Number(c_page)}
            defaultCurrent={c_page}
            defaultPageSize={20}
            total={1000}
            itemRender = {(page,type)=>{
                // return page;
                switch(type){
                    case 'page':
                        return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                    case 'prev':
                        return <Link to={`/?tab=${tab}&page=${page}`}>{"<"}</Link>
                    case 'next':
                        return <Link to={`/?tab=${tab}&page=${page}`}>{">"}</Link>
                    default:
                        return <Link to={`/?tab=${tab}&page=${page}`}>{"..."}</Link>
                }
            }}
        />
    </div>
}

export default IndexPagination;