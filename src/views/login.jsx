import React, { useCallback, useState } from 'react'
import '../layout/login.scss'
import '../layout/base.css'
import {message } from 'antd';
import {Toast} from 'antd-mobile'
import request from '../utils/request'



class Login extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
    }
    changeName=(e)=>{
        console.log(e.target.value);
        this.setState({
            username:e.target.value
        })
    }
    changePsw=(e)=>{
        console.log(e.target.value);
        this.setState({
            password:e.target.value
        })
    }

    login=()=>{
        console.log(this.state);
        if(!this.state.username){
            Toast.info('请输入用户名');
        }else if(!this.state.password){
            Toast.info('请输入密码');
        }
        // request.get('http://47.110.59.220:5200/user/login',{
        //     name:'包子',
        //     password:'w12345678'
        // })
    }
    render() {
        return (
            <div className='login'>
                <header className='loginHead'>5173登录</header>
                <form className='loginFrom' >
                    <p>
                        <label htmlFor="username">用户名</label>
                        <input type="text" id='username' onBlur={this.changeName.bind(null)} placeholder='绑定手机/用户名' />
                    </p>
                    <p>
                        <label htmlFor="password">密&nbsp;&nbsp;&nbsp;码</label>
                        <input type="text" onBlur={this.changePsw.bind(null)} id='password' placeholder='请输入密码' />
                    </p>
                    <input type="button" className='loginBtn' value="登录" onClick={this.login}/>
                </form>
            </div>

        )
    }

}

export default Login