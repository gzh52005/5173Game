import React from 'react'
import { NavBar,Tabs, WhiteSpace } from 'antd-mobile';
// import { Tabs, WhiteSpace } from 'antd-mobile';
import '../layout/Sell.scss'
import request from '../utils/request';

const tabs = [
    { title: '手游' },
    { title: '端游' },
  ];

class Sell extends React.Component{
    state = {
        tabs:[
        { title: '手游' },
        { title: '端游' },
        ],
        num:0
    }
    componentDidMount(){
        request.get('/homeApi/5173type',{
            hot:"1",
            gametype:"2",
            page:1,
            pagesize:15
        })
    }
    render(){
        return(
            <div>
            <NavBar
            style={{background:"#197fee",color:"#FFF"}}
            mode="light"
            onLeftClick={() => console.log('onLeftClick')}
            >我要卖</NavBar> 
            <WhiteSpace />
                <Tabs tabs={this.state.tabs} initialPage={this.state.num} animated={false} useOnPan={false} onTabClick={(val,index)=>{this.setState({num:index})}} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                    Content of first tab
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                    Content of second tab
                </div>
           
                </Tabs>
            <WhiteSpace />
        </div>
        )
    }
}

export default Sell