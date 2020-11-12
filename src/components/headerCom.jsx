import React,{useCallback} from 'react'
import {LeftOutlined,DashOutlined} from '@ant-design/icons'
import '../layout/HeaderCom.scss'


function HeaderCom(props) {
    let {data} =props
    let goback=useCallback(function(){
        data.props.history.go(-1)
    })
    return (
        <div className='HeaderCom'>
            <div className='headermian'>
               <span className='backbtn' onClick={goback}>
                    <LeftOutlined />
               </span>
                <span className='headercnt'>{data.title}</span>
                <span className='selectbtn' style={{display:data.isselect?"block":'none'}}>
                    <DashOutlined />
                </span>
            </div>
        </div>
    )
}

export default HeaderCom