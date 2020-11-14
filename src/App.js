import logo from './logo.svg';
import React from 'react'
import './App.css';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom'
import { TabBar } from 'antd-mobile';

import Home from './views/Home'
import Mine from './views/Mine'
import Buy from './views/Buy'
import Information from './views/Information'
import Sell from './views/Sell'
import Login from './views/login'
import Reg from './views/reg'
import MineInfo from './views/MineInfo'
import Details from './views/details.jsx'
import search from './views/search'
import History from './views/history'
import OneDetail from './views/OneDetail.jsx'
import {HomeOutlined,ShoppingCartOutlined,MessageOutlined,UserOutlined,TransactionOutlined,MessageFilled,HomeFilled } from '@ant-design/icons'
import Order from './views/Order'

class App extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        selectedTab: '',
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
      let path=  this.props.location.pathname
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
            <Route path='/reg' component={Reg}/>
            <Route path='/details' component={Details}/>
            <Route path='/mineinfo' component={MineInfo}/>
            <Route path='/search' component={search}/>
            <Route path='/onedetail' component={OneDetail}/>
            <Redirect path="/" to="/home" exact/>
            <Route path='/order' component={Order}/>
            <Route path='/history' component={History}/>
            
            </Switch>
            </div>
            {  
                /^\/details/.test(path)||  /^\/search/.test(path) ||  /^\/login/.test(path)||/^\/history/.test(path) ?'': <div style={{ width: '100%',height:'50px' }}>
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
        
            }
            
        </div>
      );
    }
  }

  App = withRouter(App)
export default App;
