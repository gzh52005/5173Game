import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

import hist from './hist.json'
import '../layout/base.css'
import '../layout/history.scss'

class History extends React.Component{
    render(){
        return(
            <div className="hist">
                   <NavBar
                        mode="light"
                        icon={<Icon type="left" color="#333" size="md" />}
                        rightContent={[
                            <p className="p1">清空</p>,
                            <p>编辑</p>,
                        ]}
                    >浏览记录</NavBar>
            </div>
        )
    }
}

export default History