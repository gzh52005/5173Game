import React from 'react'

function OrderDetail(props){
    let {data}=props
    console.log(data);
    return(
        <div>
            {data.data.title}
        </div>
    )
}

export default OrderDetail