import {  combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Get_Entity_Reducer, Post_Entity_Reducer } from "./EntityRedux/EntityReducers";

const rootReducer= combineReducers({
      entity_post:Post_Entity_Reducer,
      entity_get:Get_Entity_Reducer
})

export const store= createStore( rootReducer,applyMiddleware(thunk)

)