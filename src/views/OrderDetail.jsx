import React from 'react'
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
function OrderDetail(props) {
    let {path,data}=props.data.data
    return (
        <div>
            {data}
            <div className='error'>

            </div>
            <div className={path}>

            </div>
        </div>
    )
}

export default OrderDetail