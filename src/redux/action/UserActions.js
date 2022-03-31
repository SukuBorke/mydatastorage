import { LOGIN_USER, REGISTER_USER } from "../actiontype/ActionTypes"

const userLogin=user=>{
    return{
        type:LOGIN_USER,
        payload:user
    }
}
const userRegister=status=>{
    return{
        type:REGISTER_USER,
        payload:status
    }
}
