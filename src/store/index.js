import React,{useReducer}from 'react'

import {request} from './request'
let currentUser=JSON.parse(localStorage.getItem('currentUser'))

const reducer=(state,action)=>{
    switch (action.type) {
        case 'login':
            return state.filter(item=>item.name!=action.name)
         case 'logout':
             return state.map(item=>{
                 if(item.name==action.name){
                     item.num=action.num
                 }
                 return item
             })
        default:
            return state
    }
 }

export let Context =React.createContext(null)

export const Provider=function(props){
    // 使用useReducer共享state 和dispatch
    let [state,dispatch]=useReducer(reducer,currentUser)
    // 共享数据
    return(
        <Context.Provider value={{state,dispatch}}>
            {/* 通过props.chlidren获取父元素传递的数据 */}
            {props.children}
        </Context.Provider>
    )
} 
