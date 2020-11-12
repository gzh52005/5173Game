import logo from './logo.svg';
import React from 'react'
import './App.css';
import {Route,Switch,withRouter} from 'react-router-dom'
import { TabBar } from 'antd-mobile';

import Home from './views/Home'
import Mine from './views/Mine'
import Buy from './views/Buy'
import Information from './views/Information'
import Sell from './views/Sell'
import Login from './views/login'
import Reg from './views/reg'
import MG from './views/MG'
import PC from './views/PC'
import MineInfo from './views/MineInfo'
import {HomeOutlined,ShoppingCartOutlined,MessageOutlined,UserOutlined,TransactionOutlined,MessageFilled,HomeFilled } from '@ant-design/icons'
class App extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        selectedTab: '/home',
        hidden: false,
        fullScreen: false,
        navList:[
            {
                name:"首页",
                path:'/home',
                icon:<HomeOutlined />,
                select:<HomeFilled />
            },
            {
                name:"我要买",
                path:"/buy",
                icon:<ShoppingCartOutlined />,
                select:<ShoppingCartOutlined />

            },
            {
                name:"卖",
                path:"/sell",
                icon:<TransactionOutlined />,
                select:<TransactionOutlined />

            },
            {
                name:"消息",
                path:"/information",
                icon:<MessageOutlined />,
                select:<MessageFilled />
            },
            {
                name:"我的",
                path:"/mine",
                icon:<UserOutlined />,
                select:<UserOutlined />,
            }
        ]
      };
    
      this.goto = this.goto.bind(this)
    }
  goto(path){
      console.log(path);
      this.props.history.push(path)
      this.setState({
          selectedTab:path
      })
  }
  componentDidMount(){
    this.setState({
        selectedTab:this.props.location.pathname
    })
  }
    render(props) {
      return (
        
            
        <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
            <div style={{flex:1,background:"#F1F1F1",overflowY:"auto"}}>
            <Switch >
            <Route path="/home" component={Home} />
            <Route path="/mine" component={Mine} />
            <Route path="/buy" component={Buy} />
            <Route path="/information" component={Information} />
            <Route path="/sell" component={Sell} />
            <Route path="/login" component={Login} />
            <Route path="/MG" component={MG} />
            <Route path="/PC" component={PC} />
            <Route path='/reg' component={Reg}/>
            <Route path='/mineinfo' component={MineInfo}/>
            <Redirect path="/" to="/home" />
            </Switch>
            </div>
            <div style={{ width: '100%',height:'50px' }}>
            <TabBar
            unselectedTintColor="#949494"
            tintColor="#ff6600"
            barTintColor="white"
          >
           { this.state.navList.map((item,index)=>(<TabBar.Item
              title={item.name}
              key={index}
              icon={item.icon}
              selectedIcon={item.select}
              selected={this.state.selectedTab === item.path}
            //   badge={index}
              onPress={this.goto.bind(null,item.path)
              }
              data-seed="logId"
            >
            </TabBar.Item>))}
          
          </TabBar>
            </div>
        </div>
      );
    }
  }

  App = withRouter(App)
export default App;
