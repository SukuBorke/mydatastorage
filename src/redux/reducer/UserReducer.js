import axios from "axios"

const iniuser={}

const userReducer=(state=iniuser,action)=>{
    switch(action.type){
        case 'REGISTER_USER':return{
            ...state,
            

        }
    }
}

const  regUser=async (user)=>{
    return await axios.post('')
    .then(res=>{
        return res.data;
    })
    .catch(err=>{
        return err;
    })
}