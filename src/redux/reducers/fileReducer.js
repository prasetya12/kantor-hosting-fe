const initialState = {
    data:{},
    isSuccess:false,
    isLoading:false,
    isError:false
}

const fileReducer = (state=initialState,action)=>{
    switch(action.type){
        case "FILE_SUCCESS":
            return {
                ...state,
                isSuccess:true,
                isLoading:false,
                isError:false,
                data:action.payload
            }
        case "FILE_LOADING":
            return {
                ...state,
                isSuccess:false,
                isLoading:true,
                isError:false,
                
            }
        case "FILE_ERROR":
            return {
                ...state,
                isSuccess:false,
                isLoading:false,
                isError:true,
                data:action.payload
            }
        default:
    }
    return state
}

export default fileReducer