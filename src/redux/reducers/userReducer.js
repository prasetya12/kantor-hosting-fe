const initialState = {
    data:{},
    isSuccess:false,
    isLoadingLogin:false,
    isError:false,
    isLoadingRegister:false,
    isVerify:false,
    isLogin:false
}


const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case "REGISTER_SUCCESS":
            return {
                ...state,
                isLoadingRegister:false,
                isSuccess:true,
                isLoading:false,
                data:action.payload
            }
        case "REGISTER_LOADING":
            return {
                ...state,
                isLoadingRegister:true,
                isLoading:true,
                isSuccess:false,
                isError:false

            }
        case "REGISTER_ERROR":
            return {
                ...state,
                isError:true,
                isLoading:false,
                isSuccess:false,
                data:action.payload
            }
        case "REGISTER_CLEAR":
            return{
                ...state,
                isError:false,
                isLoading:false,
                isSuccess:false,
                data:{}
            }
        case "LOGIN_LOADING":
            return{
                ...state,
                isLoadingLogin:true,
                isSuccess:false,
                isLogin:false,
                isError:false
            }
        case "LOGIN_SUCCESS":
            return{
                ...state,
                isLoading:false,
                isLogin:true,
                isError:false
            }
        case "LOGIN_ERROR":
            return{
                ...state,
                isLoading:false,
                isLogin:false,
                isError:true,
                data:action.payload
            }
        case "VERIFY_SUCCESS":
            return{
                ...state,
                isLoading:false,
                isVerify:true,
                isError:false
            }
        
        case "VERIFY_LOADING":
            return{
                ...state,
                isLoading:true,
                isVerify:false,
                isError:false
            }
        case "VERIFY_ERROR":
            return{
                ...state,
                isLoading:false,
                isVerify:false,
                isError:true
            }

        default:
    }

    return state
}

export default userReducer