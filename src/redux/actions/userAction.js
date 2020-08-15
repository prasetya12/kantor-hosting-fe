// import {url} from '../../config/config'
import axios from 'axios'
require('dotenv').config();

export const register = (params)=>{
	return (dispatch)=>{
		dispatch({type:"REGISTER_LOADING"})
		return axios.post(`${process.env.REACT_APP_URL}/user/register`,{username:params.username,email:params.email,password:params.password})
				.then(res=>{
					dispatch({type:"REGISTER_SUCCESS",payload:res.data.user})
				})
				.catch((err)=>{
					console.log(err,'err_register')
					dispatch({type:"REGISTER_ERROR",payload:err.response.data})
				})
			}
}

export const verify = (secretToken)=>{
    console.log(secretToken,'token')
	return (dispatch)=>{
		dispatch({type:"VERIFY_LOADING"})
		return axios.post(`${process.env.REACT_APP_URL}/user/verification/${secretToken}`)
			.then(res=>{
				dispatch({type:"VERIFY_SUCCESS",payload:res.data.user})
			})
			.catch((err)=>{
				console.log(err.response)
				dispatch({type:"VERIFY_ERROR",payload:err.response.data})
			})
	}
}

export const login = (params)=>{
    console.log(params)
	return (dispatch)=>{
		dispatch({type:"LOGIN_LOADING"})
		return axios.post(`${process.env.REACT_APP_URL}/user/login`,params)
				.then(res=>{
					console.log(res,'res')
					
					window.localStorage.setItem('token', JSON.stringify(res.data))
					dispatch({type:"LOGIN_SUCCESS",payload:res.data.user})
				})
				.catch((err)=>{
					console.log(err)
					dispatch({type:"LOGIN_ERROR",payload:err.response})
				})
	}
}



export const logoutUser = () => dispatch => {
	localStorage.removeItem('token');
}
