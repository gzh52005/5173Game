import React,{useState,useCallback} from 'react'
import { List,Icon } from 'antd-mobile';
import '../layout/OrderDetail.scss'
import img from '../assets/img/gamelogo.png'

const Item = List.Item;
const Brief = Item.Brief;
function OrderDetail(props) {
    console.log(props.data.data);
    let {path,title}=props.data.data

    let [isShow,changeShow]=useState(true)
    console.log(isShow);

    let change=useCallback(function(){
        changeShow(false)
    })
    return (
        <div className='OrderDetail'>
            {title}
            <div className='error'  style={{display:isShow?'flex':'none'}}>
                <span className='iconBox' >
                     <Icon onClick={change} type="cross-circle" color='#cf9a1b' size='xs'/>
                </span>
                <span style={{color:'#cf9a1b'}}>买家订单改版啦~~~游戏币、装备、帐号、手游、代练订单都可以在这里查看啦~~~</span>
            </div>
            <div className='noshopItem'>
                <p><img src={img} alt=""/></p>
                <h6>您没有任何订单</h6>
            </div>
            <div className={path}>

            </div>


        </div>
    )
}

export default OrderDetail