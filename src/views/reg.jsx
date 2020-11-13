import React, { useCallback, useState } from 'react'
import '../layout/login.scss'
import '../layout/base.css'
import { message } from 'antd';
import {Toast} from 'antd-mobile'
import request from '../utils/request'


class Reg extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password:''
        }
    }
    changeName = (e) => {
        console.log(this.props);
        this.setState({
            username: e.target.value
        })
        setTimeout(async () => {
            let p = await request.get('/homeApi/user/checkname', {
                name: this.state.username,
            })
            console.log(p);
            if (!p.flag) {
                message.error('用户名以存在,请重新输入');
                e.target.value=''
            }
        }, 500)
    }

    changePsw = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    login = () => {
        let {history} =this.props
        let {username,password}=this.state
        console.log(this.state);
        if (!username) {
            message.error({
                content: '请输入用户名',
            });
        } else if (!password) {
            message.error('请输入密码');
        }else if(username&&password){
           setTimeout(async()=>{
                let p = await request.post('/homeApi/user/reg', {
                    name:username,
                    password:password
                })
                if(p.flag){
                    Toast.success('注册成功', 1);
                    history.replace({
                        pathname:'/login',
                        search:`username=${username}` 
                    })
                }
           },1000)
        }
    }
    render() {
        return (
            <div className='login'>
                <header className='loginHead'>5173免费注册</header>
                <form className='loginFrom' >
                    <p>
                        <label htmlFor="username">用户名</label>
                        <input type="text" id='username' onBlur={this.changeName.bind(null)} placeholder='绑定手机/用户名' />
                    </p>
                    <p>
                        <label htmlFor="password">密&nbsp;&nbsp;&nbsp;码</label>
                        <input type="text" onBlur={this.changePsw.bind(null)} id='password' placeholder='请输入密码' />
                    </p>
                    <input type="button" className='loginBtn' value="注册" onClick={this.login} />
                </form>
            </div>

        )
    }

}

export default Reg