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
        <div>
            <div style={{ position: 'fixed', width: '100%', bottom: 0 }}>
            <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
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
          <Switch>
          <Route path="/home" component={Home} />
          <Route path="/mine" component={Mine} />
          <Route path="/buy" component={Buy} />
          <Route path="/information" component={Information} />
          <Route path="/sell" component={Sell} />
          </Switch>
        </div>
      );
    }
  }

  App = withRouter(App)
export default App;
