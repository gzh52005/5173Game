import React from 'react'

import { NavBar } from 'antd-mobile';
import '../layout/Information.scss'

function Information(){
    return(
        <div>
             <NavBar
                style={{background:"#F60",color:"#FFF"}}
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                >消息</NavBar>
            <ul>
                <li>
                    
                </li>
            </ul>


        </div>
    )
}

export default Information