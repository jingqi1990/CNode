export default function topicCon(topicCon = {
    loading:true,
    data:{
        author:{}
    },
    isError:false,
    err_msg:'',
},action){
    switch(action.type){
        case "TopicCon_loading":
            return {
                loading:true,
                data:{
                    author:{}
                },
                isError:false,
                err_msg:'',
            }
        case "TopicCon_Complete":
            return{
                loading:false,
                data:action.data,
                isError:false,
                err_msg:'',
            }
        case "Error":
            return {
                loading:false,
                data:{
                    author:{}
                },
                isError:true,
                err_msg:action.err_msg,
            }
        default:
            return topicCon;
    }
}