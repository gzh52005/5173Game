import React from 'react'
import {Button} from 'antd'
import '../layout/login.scss'

function Login(){
    return(
        <div className='login'>
            login
            <Button  type="primary">点击</Button>
            <p>我是猪猪<span>我是包子</span></p>
        </div>
    )
}

export default Login