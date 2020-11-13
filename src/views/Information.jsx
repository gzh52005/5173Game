import React from 'react'

import { NavBar } from 'antd-mobile';
import '../layout/Information.scss'
import system from '../asset/image/system.png'
import kefu from '../asset/image/icon-kfu.png'
import { Icon } from 'antd-mobile';

function Information(){
    return(
        <div className="inf">
             <NavBar
                style={{background:"#F60",color:"#FFF"}}
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                >消息</NavBar>
            <div className="message">
                <ul>
                    <li>
                        <img src={system} alt=""/>
                        <p>
                           <span>系统消息</span>
                           <span className="title">暂无消息</span>
                          
                        </p>
                      <p className="icon"><Icon style={{fontWeight:400}} size="lg" color="#ccc" type="right" /></p>
                    </li>
                    <li>
                        <img src={kefu} alt=""/>
                        <p>
                           <span>在线咨询客服</span>
                           <span className="title">您好，欢迎光临5173，请问有什么可以帮您？</span>
                          
                        </p>
                      <p className="icon"><Icon style={{fontWeight:400}} size="lg" color="#ccc" type="right" /></p>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Information