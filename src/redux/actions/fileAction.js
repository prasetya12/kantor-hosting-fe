import axios from 'axios'
require('dotenv').config();

export const getFiles = (token)=>{
    return (dispatch)=>{
        dispatch({type:"FILE_LOADING"})
        return axios.get(`${process.env.REACT_APP_URL}/oss`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res=>{
            dispatch({type:"FILE_SUCCESS",payload:res.data.data})
        })
        .catch((err)=>{
            console.log(err)
            dispatch({type:"FILE_ERROR",payload:err.response.data})
        })
    }
}