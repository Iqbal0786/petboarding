import { ENTITY_GET_ERROR, ENTITY_GET_LOADING, ENTITY_GET_SUCCESS, ENTITY_POST_ERROR, ENTITY_POST_LOADING, ENTITY_POST_SUCCESS } from "./EntityAction"

// post entity reducer
const initial={
    isLoading:false,
    data:[],
    error:false
}
const initial2={
    isLoading:false,
    data:[],
    error:false
}
export const Post_Entity_Reducer=(store=initial,{type,payload})=>{
        switch(type){
            case ENTITY_POST_LOADING:return {...store, loading:true}
            case ENTITY_POST_ERROR: return {...store , loading:false,error:true}
            case ENTITY_POST_SUCCESS : return {...store, data:payload , loading:false,error:false}
            default:return store
        }
}
export const Get_Entity_Reducer=(store=initial2,{type,payload})=>{
    switch(type){
        case ENTITY_GET_LOADING:return {...store, loading:true}
        case ENTITY_GET_ERROR: return {...store , loading:false,error:true}
        case ENTITY_GET_SUCCESS : return {...store, data:payload , loading:false,error:false}
        default:return store
    }
}
