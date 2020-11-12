import React from 'react'
import '../layout/Mine.scss'
import { List } from 'antd-mobile';
import imgs from '../assets/img/tx_nologin.png'
import avimgs from '../assets/img/gral-tesy.jpg'

import '../assets/iconfont/iconfont.css'
import { data, datax } from '../assets/mineData'

const Item = List.Item;
const Brief = Item.Brief;
class Mine extends React.Component {
    mineInfo = () => {
        console.log(this.props);
        this.props.history.push('/mineinfo')
    }

    render() {
        return (
            <div className='Mine'>
                <div className='MineTop'>个人中心</div>
                <List className="my-list">
                    <Item align="middle" thumb={imgs} arrow="horizontal" multipleLine onClick={this.mineInfo} className='mineAvanter'>
                        请设置用户昵称 <Brief>ma_aba95an</Brief>
                    </Item>
                </List>

                <List className="my-list shopitem" >
                    {
                        datax[0].map(items => {
                            return (
                                <Item  key={items.icon} extra={items.center} arrow="horizontal" onClick={() => {this.props.history.push(items.path)}}>
                                    <div>
                                        <svg className="icon" aria-hidden="true">
                                            <use xlinkHref={items.icon}></use>
                                        </svg>
                                        <span>{items.title}</span>
                                    </div>
                                </Item>
                            )
                        })
                    }
                </List>

                <List className="my-list avclass">
                <Item className='avimg'>
                    <img src={avimgs} alt=""/>
                </Item>
                    {

                        datax[1].map(items => {
                            return (
                                <Item  key={items.icon} extra={items.center} arrow="horizontal" onClick={() => { }}>
                                <div>
                                    <svg className="icon" aria-hidden="true">
                                        <use xlinkHref={items.icon}></use>
                                    </svg>
                                    <span>{items.title}</span>
                                </div>
                            </Item>
                            )
                        })
                    }
                </List>

                {
                    datax[2].map(items => {
                        return (
                            <List key={items.icon} className="my-list avclass">
                               <Item extra={items.center} className='otherItem' arrow="horizontal"  onClick={() => { }}>
                                    <div>
                                        <svg className="icon" aria-hidden="true">
                                            <use xlinkHref={items.icon}></use>
                                        </svg>
                                        <span>{items.title}</span>
                                    </div>
                                </Item>
                            </List>
                        )
                    })
                }

            </div>
        )
    }
}

export default Mine