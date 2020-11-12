import React, { useCallback, useState } from 'react'
import '../layout/login.scss'
import '../layout/base.css'
import { Button, message } from 'antd';



class Reg extends React.Component{
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
            message.error({
                content: '请输入用户名',
                className: 'error_name_class',
              });
        }else if(!this.state.password){
            message.error('请输入密码');
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
                    <input type="button" className='loginBtn' value="注册" onClick={this.login}/>
                </form>
            </div>

        )
    }

}

export default Reg