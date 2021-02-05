import dayjs from "dayjs";
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn') // 全局使用
let relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);


const FromNow = (props)=>{
    let {date} = props;
    // console.log(dayjs(date).fromNow());
    return dayjs(date).fromNow();
}

export default FromNow;