import React from 'react'
import {WingBlank,SegmentedControl,Tabs, WhiteSpace} from 'antd-mobile';
// import { Tabs, WhiteSpace } from 'antd-mobile';
import '../layout/Sell.scss'
import img from '../img/history.png'
import hot2 from '../asset/image/hot2.png'
import request from '../utils/request';
import { Menu } from 'antd';



class Sell extends React.Component{
    state = {
        tabs:[
            { title: 'hot', key: 't1' },
            { title: 'A', key: 't2' },
            { title: 'B', key: 't3' },
            { title: 'C', key: 't4' },
            { title: 'D', key: 't5' },
            { title: 'E', key: 't6' },
            { title: 'F', key: 't7' },
            { title: 'H', key: 't8' },
            { title: 'I', key: 't9' },
            { title: 'J', key: 't10' },
            { title: 'K', key: 't11' },
            { title: 'K', key: 't12' },
            { title: 'K', key: 't13' },
            { title: 'K', key: 't14' },
        ],
        num:''
    }
    onChange=(e)=>{
        this.setState({
            num:e.nativeEvent.selectedSegmentIndex
        })
        
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };
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
               <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
        </div>
        )
    }
}

export default Sell