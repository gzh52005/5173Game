import React,{useCallback,useEffect,useState} from 'react'
import '../layout/Mine.scss'
import { List } from 'antd-mobile';
import imgs from '../assets/img/tx_nologin.png'
import avimgs from '../assets/img/gral-tesy.jpg'

import '../assets/iconfont/iconfont.css'
import { datax } from '../assets/mineData'

import {islogin,getUserName} from '../utils/getUser'

const Item = List.Item;
const Brief = Item.Brief;
function Mine (props){
    let [haslogin,changeHas]=useState('')
    let [username,changeName]=useState('')
    let mineInfo =useCallback(function(){
        console.log(haslogin)
        if(haslogin){
            props.history.push('/mineinfo')
        }else{
            props.history.push('/login')
        }
    })

    useEffect(function(){
        islogin().then(res=>{
            changeHas(res)})
        console.log(haslogin);
        getUserName().then(res=>{changeName(res)})
    })
        return (
            <div className='Mine'>
                <div className='MineTop'>个人中心</div>
                <List className="my-list">
                    <Item align="middle" thumb={imgs} arrow="horizontal" multipleLine onClick={mineInfo} className='mineAvanter'>{haslogin?username:'注册/登录'}{haslogin?<Brief>ma_aba95an</Brief>:''}
                    </Item>
                </List>

                <List className="my-list shopitem" >
                    {
                        datax[0].map(items => {
                            return (
                                <Item  key={items.icon} extra={items.center} arrow="horizontal" onClick={() => {props.history.push(items.path)}}>
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

export default Mine