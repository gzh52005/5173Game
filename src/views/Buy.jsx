import React from 'react'
import '../layout/buy.scss'
import img from '../img/history.png'
import hot2 from '../asset/image/hot2.png'
import { SegmentedControl, WingBlank, Tabs, WhiteSpace} from 'antd-mobile';
import request from '../utils/request';
import { Menu } from 'antd';
// import search from './search'

const num1 = <img className="hot" src={hot2}/>
class Buy extends React.Component{
    constructor(){
        super()
        this.state={
            tabs:[num1,"A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
            num:0,
            idx: '0',
            data:[],
            page:1,
            flag:false,
            type:2
        }
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
        if(e.nativeEvent.selectedSegmentIndex==0){
            this.setState({
                num:e.nativeEvent.selectedSegmentIndex,
                page:1,
                type:2,
                flag:false,
                idx:"0"
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
                idx:"0"
            })
            this.getData(1,{
                query:JSON.stringify({"is_hot":"1", "game_type":"1"}),
                page:1,
                pagesize:15})
        }
    }

    onScroll = (scroll)=>{
        if(scroll.target.scrollTop +scroll.target.clientHeight>=scroll.target.scrollHeight){
            this.setState({
                flag:true,
                page:this.state.page+1
            })
        }
    }

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

    shouldComponentUpdate(newprops,newstate){
        let {flag} = this.state
        if(newstate.flag != flag){
            this.getData(2)
            return true
        }
        return true
    }

    handleClick = e => {
        this.setState({ idx: e.key });
    };

    jump =()=>{
        this.props.history.push('/search')
    }
    render(){
        let {data,idx} = this.state
        return(
            <div style={{height:"100%",display:"flex",flexDirection:"column"}}>
                <div>
                    <div className="buytop ">
                        <h1>我要买</h1>
                        <img src={img}/>
                        <div className="search" onClick={this.jump}>搜索游戏</div>
                    </div>
                    <WingBlank size="lg" className="sc-example">
                        <SegmentedControl 
                        values={['手游', '端游']} 
                        style={{height:'40px',background: '#F8F8F8'}}
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
                    <Menu onClick={this.handleClick} selectedKeys={[idx]} mode="vertical">
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

export default Buy