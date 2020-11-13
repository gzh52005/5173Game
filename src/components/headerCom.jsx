import React, { useCallback, useState } from 'react'
import { LeftOutlined, DashOutlined } from '@ant-design/icons'
import '../layout/HeaderCom.scss'

import {Popover} from 'antd-mobile'

const Item = Popover.Item;
function HeaderCom(props) {
    let [visible, onSelect] = useState(false)
    let [selected, handleVisibleChange] = useState('')
    let { data } = props
    let goback = useCallback(function () {
        data.props.history.go(-1)
    })   
   let checkItem=useCallback(function(e){
       let {path}=e.props
        onSelect(true)
        data.props.history.replace(path)
   })
    return (
        <div className='HeaderCom'>
            <div className='headermian'>
                <span className='backbtn' onClick={goback}>
                    <LeftOutlined />
                </span>
                <span className='headercnt'>{data.title}</span>
                <Popover mask
                    overlayClassName="fortest"
                    overlayStyle={{ color: 'currentColor' }}
                    visible={visible}
                    overlay={[
                        (<Item key="4" value="scan" data-seed="logId" style={{ whiteSpace: 'nowrap'}} icon={<img src={`https://gw.alipayobjects.com/zos/rmsportal/PKAgAqZWJVNwKsAJSmXd.svg`} className="am-icon am-icon-xs" alt="" />} path='/information'>消息</Item>),
                        
                        (<Item key="5" value="special"  style={{ whiteSpace: 'nowrap'}} icon={<img src={`https://gw.alipayobjects.com/zos/rmsportal/tOtXhkIWzwotgGSeptou.svg`} className="am-icon am-icon-xs" alt="" />}path='/home'>首页</Item>),
                    ]}
                    align={{
                        overflow: { adjustY: 0, adjustX: 0 },
                        offset: [-10, 0],
                    }}
                    onVisibleChange={handleVisibleChange}
                    onSelect={checkItem}
                >
                    <div
                    style={{
                        height: '100%',
                        padding: '0 5px',
                        marginRight: '-15px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    >
                    <span className='selectbtn' style={{ display: data.isselect ? "block" : 'none' }}>
                    <DashOutlined />
                     </span>
                    </div>
                </Popover>

            </div>
        </div>
    )
}

export default HeaderCom