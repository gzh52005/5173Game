import React, { Fragment, useEffect } from 'react';
import request from '../utils/request';
import '../asset/sass/home.scss';
import {
    DesktopOutlined, MobileOutlined
} from '@ant-design/icons';
import { Carousel, WingBlank, Tabs, Badge, Grid, List } from 'antd-mobile';


class Home extends React.Component {

    state = {
        banner: [{
            url: 'https://img1.5173.com/cd44265bf1c4495cbf3366c85e364a37.jpg'
        },
        {
            url: 'https://img1.5173.com/21b0015ac037401bb896106c395e6aca.jpg'
        },
        {
            url: 'https://img1.5173.com/d35592c525614bb898dabd4e3e42cd96.jpg'
        },
        {
            url: 'https://img1.5173.com/0233d379dd24489aa5c2639491e153c2.jpg'
        },
        {
            url: 'https://img1.5173.com/864e6ca5640a4d589000045dcb294bc1.jpg'
        }
        ],
        nav: [
            {
                name: '游戏币',
                url: 'https://m.5173.com/dist/src/assets/images/bi.png?4c17463a1925e13a40170217577e62ff',
            },
            {
                name: '账号',
                url: 'https://m.5173.com/dist/src/assets/images/hao.png?a84cb1e8617e9a85ae9f871c99d2820b',
            },
            {
                name: '手游充值',
                url: 'https://m.5173.com/dist/src/assets/images/shouyou.png?0536c7ed8a15ea34b62f7775037f6543',
            },
            {
                name: '代练',
                url: 'https://m.5173.com/dist/src/assets/images/lian.png?0789b451d8e76332ca3666e4d091b120',
            },
            {
                name: '装备',
                url: 'https://m.5173.com/dist/src/assets/images/zhuan.png?864452f1f547278968d779765eb3b972',
            }

        ],
        tabs: [
            { title: <Badge ><MobileOutlined />&nbsp;&nbsp;热门手游</Badge> },
            { title: <Badge ><DesktopOutlined />&nbsp;&nbsp;热门端游</Badge> },

        ],
        hotMGame: [],
        hotDGame: [],
        recData: [],
        disabled: false,
    }
    componentDidMount() {
        // simulate img loading
        // setTimeout(() => {
        //   this.setState({
        //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFex44444lOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        //   });
        // }, 100);
        // request.post('/homeApi',{
        //     firstPY: "HOT",gameType: 2,pageIndex: 1,pageSize: 8
        // }).then(res=>{
        //     console.log('首页数据=',res);
        // })
        // https://m.5173.com/m-base-frontend/HomePageBanner/selectBanner
        // 
        // fetch('/homeApi/m-base-frontend/category/searchgamelistbytype', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     mode: 'cors',
        //     body: JSON.stringify({
        //         "firstPY": "HOT", "gameType": 2, "pageIndex": 1, "pageSize": 8
        //     })
        // }).then(res => {
        //     console.log(res);
        // })
        // request.get('/homeApi',{
        //     hot:true,
        //     gametype:2,
        //     page:1,
        //     pagesize:10,

        // }).then(res=>{
        //     this.setState({
        //         hotMGame:res.data,
        //     })
        // })   
        // https://m.5173.com/m-base-frontend/HotRecommend/selectHotRecommend
        request.get('/homeApi/5173hot').then(res => {
            console.log('recommend', res);
            this.setState({
                recData: res.data
            })
        })
        this.getData(2);
    }
    getData(type) {
        request.get('/homeApi/5173home', {
            hot: true,
            gametype: type,
            page: 1,
            pagesize: 10,
        }).then(res => {
            //1是端游
            if (type === 1 && res) {
                // console.log('端游',res);
                this.setState({
                    hotDGame: res.data,
                })
            } else if (type === 2 && res) {
                // console.log('手游',res);
                this.setState({
                    hotMGame: res.data,
                })
            }
        })
    }
    render() {
        const data = this.state.hotMGame.map((item, index) => ({
            icon: item.gameImageUrl,
            text: item.name,
        }))
        const data1 = this.state.hotDGame.map((item1, index) => ({
            icon: item1.gameImageUrl,
            text: item1.name,
        }))
        const Item = List.Item;
        const Brief = Item.Brief;
        return (
            <div className="home">
                <div className="header">
                    <img src="https://m.5173.com/dist/src/assets/images/logo.png?24e48c4074867d3ef7a63e4ce572ca4b" alt="" />
                    <div className='search'><span>搜索游戏</span></div>
                    <div className="right"><DesktopOutlined className="icon" />电脑版</div>
                </div>
                <div className="banner">
                    <WingBlank>
                        <Carousel
                            autoplay={false}
                            infinite
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}

                        >
                            {this.state.banner.map(val => (
                                <a
                                    key={val}
                                    href="http://www.alipay.com"
                                // style={{ display: 'inline-block', width: '100%'  }}
                                >
                                    <img
                                        src={val.url}
                                        alt="..."
                                        // style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>
                <div className="nav">
                    {
                        this.state.nav.map((item, index) => (
                            <div className="item" key={index}>
                                <img src={item.url} alt="" />
                                <p>{item.name}</p>
                            </div>)
                        )
                    }

                </div>
                {/* {标签页} */}
                <div className="tags">
                    <Tabs tabs={this.state.tabs}
                        animated={false}
                        initialPage={0}
                        tabBarUnderlineStyle={{ border: '1px solid #FF6600' }}
                        tabBarActiveTextColor={'#ff6600'}
                        onChange={(tab, index) => {
                            if (index === 0) {
                                this.getData(2)
                            } else {
                                this.getData(1)
                            }
                        }}
                    // onTabClick={() => { this.getData() }}
                    >
                        <div className="tagsChildren">
                            <Grid data={data} hasLine={false} square={false} onClick={() => {
                                console.log('1');
                            }} />
                        </div>
                        <div className="tagsChildren">
                            <Grid data={data1} hasLine={false} square={false} />
                        </div>
                    </Tabs>
                </div>
                <div className="more">
                    更多游戏
                </div>
                <div className="recommend">
                    <List renderHeader={() => '热门推荐'} className="my-list">
                        {
                            this.state.recData.map((list,idx) => (
                                
                               
                                <Item
                                    arrow="horizontal"
                                    thumb={list.gameImage}
                                    multipleLine
                                    onClick={() => { }}
                                    key={idx}
                                >
                                    {/* {typeof((list.latestInformation)*1)===Number?latestInformation*1+'游戏币' :list.latestInformation} */}
                                    {list.gameName+list.goodsTypeName}<Brief>{list.goodsTypeName==='游戏币'?list.latestInformation*1+'游戏币' :list.latestInformation}</Brief><Brief>{list.regionName+list.serverName || '全区全服'}</Brief>
                                </Item>
                                
                            ))
                        }

                    </List>
                </div>
            </div>
        )
    }
}

export default Home