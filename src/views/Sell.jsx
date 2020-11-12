import React from 'react'
import {WingBlank,SegmentedControl,Tabs, WhiteSpace} from 'antd-mobile';
// import { Tabs, WhiteSpace } from 'antd-mobile';
import '../layout/Sell.scss'
import img from '../img/history.png'
import hot2 from '../asset/image/hot2.png'
import request from '../utils/request';
import { Menu } from 'antd';


const num1 = <img className="hot" src={hot2}/>
class Sell extends React.Component{
    state = {
        tabs:[num1,"A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
        num:0,
        current: '0',
        data:[],
        page:1,
        flag:false,
        type:2
    }
getData=(type,query)=>{
    if(type==1){
        request.get('/homeApi/goods/5173type',query).then(res=>{
            this.setState({
                data:res.data
            })
         })
    }else if(type==2){
        let {data,page} = this.state
        page++
        request.get('/homeApi/goods/5173type',{
                query:JSON.stringify({"is_hot":"1", "game_type":`${this.state.type}`,}),
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
    }

}
    onChange=(e)=>{     
  
           e.target.scrollTop=0
        if(e.nativeEvent.selectedSegmentIndex==0){
            this.setState({
                num:e.nativeEvent.selectedSegmentIndex,
                page:1,
                type:2,
                flag:false,
                current:"0"
            })
            this.getData(1,{
                query:JSON.stringify({"is_hot":"1", "game_type":"2"}),
                page:1,
                pagesize:15})
        }else if(e.nativeEvent.selectedSegmentIndex==1){
            this.setState({
                num:e.nativeEvent.selectedSegmentIndex,
                page:1,
                type:1,
                flag:false,
                current:"0"
            })
            this.getData(1,{
                query:JSON.stringify({"is_hot":"1", "game_type":"1"}),
                page:1,
                pagesize:15})
        }
    }
    // 滚动条事件
    onScroll = (scroll)=>{
        if(scroll.target.scrollTop +scroll.target.clientHeight>=scroll.target.scrollHeight){
            this.setState({
                // flag:flas,
                page:this.state.page+1
            })
            this.getData(2)
        }
    }
    handleClick = e => {
        this.setState({ current: e.key});
        // this.getData(1,{
        //     query:JSON.stringify({"is_hot":"1", "game_type":`${this.state.type}`}),
        //     page:1,
        //     pagesize:15})
      };

    goto = (path,data)=>{
        this.props.history.push({
            pathname:path+'/'+data.name,
        })
    }
    componentWillMount(){
        request.get('/homeApi/goods/5173type',{
            query:JSON.stringify({"is_hot":"1", "game_type":`2`,}),
            page:1,
            pagesize:15
        }).then(res=>{
            this.setState({
                data:res.data
            })
        })
    }
    firs = (e)=>{
        if(e.type=='img'){
            this.getData(1,{
                query:JSON.stringify({"is_hot":"1", "game_type":`${this.state.type}`}),
                page:1,
                pagesize:15})
        }else{
            this.getData(1,{query:JSON.stringify({"first_py":e, "game_type":`${this.state.type}`})})
        }
    }
    // shouldComponentUpdate(newprops,newstate){
    //     console.log(newstate);
    //     console.log(this.state.page);
        
        
    //     let {flag} = this.state
    //     if(newstate.flag != flag){
    //         this.getData(2)
    //         return true
    //     }
    //     return true
    // }
   
    render(){
        const { current } = this.state;
        let {data} = this.state
       
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
                            {data?data.map((item,index)=>(<li key={index} onClick={this.goto.bind(null,'/details',item)}>
                                <img src={item.game_image_url} alt=""/>
                            <p>{item.name}</p>
                            </li>)):''}
                        </ul>
                    </div>
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="vertical">
                    {this.state.tabs.map((item,index)=><Menu.Item key={index} onClick={this.firs.bind(null,item)}>
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