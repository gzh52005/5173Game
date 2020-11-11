
import React from 'react'
import './App.css';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom'
import { TabBar } from 'antd-mobile';

import Home from './views/Home'
import Mine from './views/Mine'
import Buy from './views/Buy'
import Information from './views/Information'
import Sell from './views/Sell'
import Login from'./views/login'
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
                path:'/home'
            },
            {
                name:"我要买",
                path:"/buy"
            },
            {
                name:"卖",
                path:"/sell"
            },
            {
                name:"消息",
                path:"/information"
            },
            {
                name:"我的",
                path:"/mine"
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
            <div style={{flex:1}}>
            <Switch >
            <Route path="/home" component={Home} />
            <Route path="/mine" component={Mine} />
            <Route path="/buy" component={Buy} />
            <Route path="/information" component={Information} />
            <Route path="/sell" component={Sell} />
            <Route path="/login" component={Login} />
            <Redirect path="/" to="/home" />
            </Switch>
            </div>
            <div style={{ width: '100%',height:'50px' }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#FF6600"
                    barTintColor="white"
                    >
                    { this.state.navList.map((item,index)=>(<TabBar.Item
                    title={item.name}
                    key={index}
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                    />
                    }
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
