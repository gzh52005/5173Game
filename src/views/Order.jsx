import React,{useState} from 'react'
import HeaderCom from '../components/headerCom'
import { Tabs, WhiteSpace } from 'antd-mobile';
import OrderDetail from './OrderDetail'
const tabs = [
    { title: '全部', path: 'allOrder' },
    { title: '待付款', path: 'wantPay' },
    { title: '交易中', path: 'trade' },
    { title: '交易成功', path: 'success' },
];
function Order(props) {
    let [state,changeState]=useState(tabs[0])
    return (
        <div className='orderMain'>
            <HeaderCom data={{ props, title: "订单信息", isselect: true }} />
            <div>
           
                <Tabs tabs={tabs} initialPage={0}  animated={false} onTabClick={(tab, index) => { changeState(tab) }}>
                </Tabs >
            <WhiteSpace/>
                <OrderDetail data={{props,data:state}}/>
            </div>
        </div>
    )
}

export default Order 