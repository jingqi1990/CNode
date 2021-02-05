export default function user(user= {
    loading:true,
    data:{}
},action){
    switch(action.type){
        case "User_loading":
            return {
                loading:true,
                data:{}
            }
        case "User_Complete":
            return{
                loading:false,
                data:action.data
            }
        default:
            return user;
    }
}