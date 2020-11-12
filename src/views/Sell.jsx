import React from 'react'
import {WingBlank,SegmentedControl,Tabs, WhiteSpace} from 'antd-mobile';
// import { Tabs, WhiteSpace } from 'antd-mobile';
import '../layout/Sell.scss'
import img from '../img/history.png'
import hot2 from '../asset/image/hot2.png'
import request from '../utils/request';
import { Menu } from 'antd';
const { SubMenu } = Menu;


const num1 = <img className="hot" src={hot2}/>
class Sell extends React.Component{
    state = {
        tabs:[num1,"A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
        num:'',
        current: '0',
        data:[],
        page:1,
        flag:false
    }
    onChange=(e)=>{
        this.setState({
            num:e.nativeEvent.selectedSegmentIndex,
            page:1
        })
        request.get('/homeApi/5173type',{
            hot:"1",
            gametype:this.state.num+1,
            page:1,
            pagesize:15
        }).then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    onScroll = (scroll)=>{

        if(scroll.target.scrollTop +scroll.target.clientHeight>=scroll.target.scrollHeight){
            this.setState({
                flag:true,
                page:this.state.page+1
            })
        }
    }
    handleClick = e => {
        this.setState({ current: e.key });
      };

    componentWillMount(){
        request.get('/homeApi/5173type',{
            hot:"1",
            gametype:"2",
            page:1,
            pagesize:15
        }).then(res=>{
            this.setState({
                data:res.data
            })
        })
    }

    shouldComponentUpdate(newprops,newstate){
        let {flag,data,page} = this.state
        if(newstate.flag != flag){
            page++
            request.get('/homeApi/5173type',{
                hot:"1",
                gametype:"2",
                page:page,
                pagesize:15
            }).then(res=>{
                if(res.data){
                    data.push(...res.data)
                    this.setState({
                        data,
                        flag:false,
                        page:page
                    })
                }else{
                    this.setState({
                        flag:true
                    })
                }
            })
            return true
        }
        return true
    }
   
    render(){
        const { current } = this.state;
        return(
            <div style={{height:"100%",display:"flex",flexDirection:"column"}}>
               <div>
                    <div className="selltop clear">
                            <h1>我要卖</h1>
                            <img src={img}/>
                            <div className="search">搜索游戏</div>
                    </div>
                    <WingBlank size="lg" className="sc-example">
                        <SegmentedControl 
                        values={['手游', '端游']} 
                        style={{height:'40px',background: '#F1F1F1'}}
                        onChange={this.onChange}
                        selectedIndex={this.state.num?this.state.num:0}/>
                    </WingBlank>
                </div>
                <div style={{overflow:"hidden",flex:"1",display:"flex",justifyContent:"space-between"}}>
                    <div className="sell_main">
                        <ul onScroll={this.onScroll.bind(this)}>
                            {this.state.data.map((item,index)=>(<li key={index}>
                                <img src={item.game_image_url} alt=""/>
                            <p>{item.name}</p>
                            </li>))}
                        </ul>
                    </div>
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="vertical">
                    { this.state.tabs.map((item,index)=><Menu.Item key={index}>
                        {item}
                        </Menu.Item>)
                    }
                    
                    </Menu>
              </div>
        </div>
        )
    }
}

export default Sell