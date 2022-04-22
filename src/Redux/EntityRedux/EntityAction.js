import axios from "axios";

// post entity actions
export const ENTITY_POST_LOADING="ENTITY_POST_LOADING";
export const ENTITY_POST_ERROR="ENTITY_POST_ERROR";
export const ENTITY_POST_SUCCESS="ENTITY_POST_SUCCESS";

// post entity action creatos
export const entity_post_loading=()=>({type:ENTITY_POST_LOADING});
export const entity_post_error=()=>({type:ENTITY_POST_ERROR});
export const entity_post_success=(payload)=>({type:ENTITY_POST_SUCCESS, payload})

// post entity actions
export const ENTITY_GET_LOADING="ENTITY_POST_LOADING";
export const ENTITY_GET_ERROR="ENTITY_POST_ERROR";
export const ENTITY_GET_SUCCESS="ENTITY_POST_SUCCESS";

// post entity action creatos
export const entity_get_loading=()=>({type:ENTITY_GET_LOADING});
export const entity_get_error=()=>({type:ENTITY_GET_ERROR});
export const entity_get_success=(payload)=>({type:ENTITY_GET_SUCCESS, payload})

// post method
export  const post_entity=(data)=>(dispatch)=>{
           dispatch(entity_post_loading())
           axios.post(" http://localhost:8080/data" ,data).then((res)=>{
               dispatch(entity_post_success(res.data))
               alert("added item in db.json")
           }).catch((err)=>{
               dispatch(entity_post_error())
           })
     
}

// get method
export  const get_entity=()=>(dispatch)=>{
    dispatch(entity_get_loading())
    axios.get("http://localhost:8080/data").then((res)=>{
        console.log(res.data)
        dispatch(entity_get_success(res.data))
    }).catch((err)=>{
        dispatch(entity_get_error())
    })

}