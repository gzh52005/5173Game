import React, { useCallback, useState,useEffect,useRef} from 'react'
import '../layout/login.scss'
import '../layout/base.css'
import {message } from 'antd';
import {Toast} from 'antd-mobile'
import request from '../utils/request'
import {searchFormat} from '../utils'
import HeaderCom from '../components/headerCom'

function Login(props){
    let [username,changeN]=useState('')
    let [password,changeP]=useState('')

    let changeName=useCallback(function(e){
        changeN(e.target.value)
    })
    let changePsw=useCallback(function(e){
        changeP(e.target.value)
    })
    let login=useCallback(async function(){
        if(!username){
            Toast.info('请输入用户名');
        }else if(!password){
            Toast.info('请输入密码');
        }else if(username&&password){
          let p=await request.get('/homeApi/user/login',{
                name:username,
                password:password
             })
          if(p.flag){
              props.history.replace('/mine')
            localStorage.setItem('currentUser',JSON.stringify(p))
          }   
        }
    })
    const couterRef = useRef();
    useEffect(function(){
        let search= props.location.search
        let params=searchFormat(search)
        console.log(params);
        if(params.username){
            changeN(params.username)
           couterRef.current.value=params.username
        }
    },[])
  
    let gotoReg=useCallback(function(){
        props.history.replace('/reg')
    })
    return (
            <div className='login'>
                  <HeaderCom data={{props,title:"5173用户登录",isselect:false}}/>
                <form className='loginFrom' >
                    <p>
                        <label htmlFor="username">用户名</label>
                        <input type="text" id='username' onBlur={changeName} placeholder='绑定手机/用户名' ref={couterRef}/>
                    </p>
                    <p>
                        <label htmlFor="password">密&nbsp;&nbsp;&nbsp;码</label>
                        <input type="text" onBlur={changePsw} id='password' placeholder='请输入密码' />
                    </p>
                    <h6>
                         <span onClick={gotoReg}>注册用户</span>
                    </h6>
                   
                    <input type="button" className='loginBtn' value="登录" onClick={login}/>
                </form>
            </div>

        )
    }



export default Login