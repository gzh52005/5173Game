import React, { useCallback, useState,useEffect} from 'react'
import '../layout/login.scss'
import '../layout/base.css'
import {message } from 'antd';
import {Toast} from 'antd-mobile'
import request from '../utils/request'
import {searchFormat} from '../utils'

function Login(props){
    let [username,changeN]=useState('')
    let [password,changeP]=useState('')
    let textInput = React.createRef();

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
    useEffect(function(){
        let search= props.location.search
        let params=searchFormat(search)
        if(params.username){
            changeN(params.username)
            setTimeout(()=>{
            textInput.value=username
            },500)
        }
    },[])
  
    return (
            <div className='login'>
                <header className='loginHead'>5173登录</header>
                <form className='loginFrom' >
                    <p>
                        <label htmlFor="username">用户名</label>
                        <input type="text" id='username' onBlur={changeName} placeholder='绑定手机/用户名' ref={textInput}/>
                    </p>
                    <p>
                        <label htmlFor="password">密&nbsp;&nbsp;&nbsp;码</label>
                        <input type="text" onBlur={changePsw} id='password' placeholder='请输入密码' />
                    </p>
                    <input type="button" className='loginBtn' value="登录" onClick={login}/>
                </form>
            </div>

        )
    }



export default Login