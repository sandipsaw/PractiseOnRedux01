import axios from '../Api/AxiosConfig'
import { loadUser } from './UserSlice'

export const asyncRigsterUser = (user) =>async(dispatch, getState)=>{
    try{
        const res = await axios.post("/users",user)
        loadUser(res.data);
        console.log(res.data);
        
    }catch(error){
        console.log(error);
        
    }
}

export const asyncLoginUser = (user) =>async(dispatch,getState)=>{
    try{
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        console.log(data[0]);
        localStorage.setItem("user",JSON.stringify(data[0]))
    }catch(error){
        console.log(error);
        
    }
}

export const asyncLogoutUser = (user) => async(dispatch,getState)=>{
    try{
        localStorage.removeItem(user)
    }catch(error){
        console.log(error);   
    }
}

export const asyncCurrentUser = () =>async(dispatch,getState)=>{
    try{
        const user = JSON.parse(localStorage.getItem("user"))
        if(user) dispatch(loadUser(user))
            else console.log("User not logged in..");    
    }catch(error){
        console.log(error);
        
    }
}