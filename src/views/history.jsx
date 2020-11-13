import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import moment from 'moment';
import hist from './hist.json'
import '../layout/base.css'
import '../layout/history.scss'
class History extends React.Component{
    state={
        data:''
    }
    componentDidMount(){
        let histdata={}
        let a1 = new Date().getTime()
        a1 = a1/1000/60/60/24
        let a2
        let a3
        hist.goodsBrowseList.forEach(item=>{
           
            a2 = item.dateTime
            a2 = a2/1000/60/60/24
            a3 =Math.round(a1-a2)
            if(histdata[a3]){
                histdata[a3].push(item)
            }else{
                histdata[a3]=[item]
            }
        })
        this.setState({
            data:histdata
        })
        
    }
    render(){
        console.log(moment);
        const {data} = this.state

        return(
            <div className="hist">
                   <NavBar
                        mode="light"
                        icon={<Icon type="left" color="#333" size="md" />}
                        rightContent={[
                            <p key="0" className="p1">清空</p>,
                            <p key="1">编辑</p>,
                        ]}
                    >浏览记录</NavBar>
                   <div className="hisMain">
                   {
                       Object.keys(data).map(key=>{
                            return (
                                <ul key={key} className="histul">
                                    <h1>
                                        {key==0?'今天':moment(data[key][0].historyTime).format('MM/DD')
                                        }
                                    </h1>
                                   {
                                     data[key].map((item,index)=>(
                                        <li key={index} onClick={()=>(
                                            this.props.history.push({
                                                pathname:'/onedetail/'+item.goodsId
                                            })
                                        )}>
                                            <p className="img1">
                                            <img src={item.goodsImg} alt=""/>
                                            </p>
                                            <p className="conp">
                                                <span>{item.title}</span>
                                                <span>￥{item.price}</span>
                                                <span>{item.gameName}/{item.regionName}/{item.serverName}</span>
                                            </p>
                                        </li>
                                     ))  
                                   }
                                </ul>
                            )
                       })
                    }
                   </div>
            </div>
        )
    }
}

export default History