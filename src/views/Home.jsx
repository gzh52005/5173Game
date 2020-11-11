import React, { useEffect } from 'react';
import request from '../utils/request';
import '../asset/sass/home.scss';
import {
    DesktopOutlined
} from '@ant-design/icons';
import { Carousel, WingBlank } from 'antd-mobile';


class Home extends React.Component {

    state = {
        banner: [{
            url: 'https://img1.5173.com//cd44265bf1c4495cbf3366c85e364a37.jpg'
        },
        {
            url: 'https://img1.5173.com//21b0015ac037401bb896106c395e6aca.jpg'
        },
        {
            url: 'https://img1.5173.com//d35592c525614bb898dabd4e3e42cd96.jpg'
        },
        {
            url: 'https://img1.5173.com//0233d379dd24489aa5c2639491e153c2.jpg'
        },
        {
            url: 'https://img1.5173.com//864e6ca5640a4d589000045dcb294bc1.jpg'
        }
        ],
        nav:[
            {
                name:'游戏币',
                url:'https://m.5173.com/dist/src/assets/images/bi.png?4c17463a1925e13a40170217577e62ff',
            },
            {
                name:'账号',
                url:'https://m.5173.com/dist/src/assets/images/hao.png?a84cb1e8617e9a85ae9f871c99d2820b',
            },
            {
                name:'手游充值',
                url:'https://m.5173.com/dist/src/assets/images/shouyou.png?0536c7ed8a15ea34b62f7775037f6543',
            },
            {
                name:'代练',
                url:'https://m.5173.com/dist/src/assets/images/lian.png?0789b451d8e76332ca3666e4d091b120',
            },
            {
                name:'装备',
                url:'https://m.5173.com/dist/src/assets/images/zhuan.png?864452f1f547278968d779765eb3b972',
            }
           
        ],
        imgHeight: 176,
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
        request.get('/homeApi',{
            hot:true,
            gametype:1,
            page:1,
            pagesize:10
        }).then(res=>{
            console.log(res);
        })

        
    }
    render() {
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
                        this.state.nav.map(item=>(
                            <div className="item">
                                <img src={item.url} alt=""/>
                                <p>{item.name}</p>
                            </div>)
                        )
                    }

                </div>
            </div>
        )
    }
}

export default Home