import React, { useState, useCallback, useEffect } from 'react'
import HeaderCom from '../components/headerCom'
import { List, Button, WhiteSpace, WingBlank, Modal } from 'antd-mobile'
import '../layout/mineinfo.scss'
import imgs from '../assets/img/tx_nologin.png'
import { getUserName, quit,getUserSing} from '../utils/getUser'
import request from '../utils/request'

const Item = List.Item;
const Brief = Item.Brief;
const prompt = Modal.prompt;
function MineInfo(props) {
    let [name, changeName] = useState('')
    let [sign, changeSign] = useState('')
    let [phone, changePhone] = useState('18777747793')
    let id

    let logout = useCallback(function () {
        quit()
        props.history.replace('/mine')
    }, [])

    useEffect(function () {
        getUserName().then(res => { changeName(res) })
        getUserSing().then(res=>{if(res){changeSign(res)}})
        id = JSON.parse(localStorage.getItem('currentUser')).uid
    }, [])

    let changeN = useCallback(function (value) {
        console.log(value);
        let name = value
        request.put(`/homeApi/user/alter/${id}`, {
            name
        }).then(res => {
            console.log(res);
            if (res.flag) {
                changeName(name)
            }
        })
    }, [])

    let changeS = useCallback(function (value) {
        console.log(value);
        request.put(`/homeApi/user/alter/${id}`, {
            sign:value
        }).then(res => {
            console.log(res);
            if (res.flag) {
                changeSign(value)
            }
        })
    }, [])


    return (
        <div>
            <HeaderCom data={{ props, title: "用户信息", isselect: false }} />
            <List className="my-list">
                <Item align="middle" className='avatarlist' extra={<img src={imgs} />} arrow="horizontal" multipleLine >
                    头像
                </Item>
            </List>

            <List className="my-list listmsg">
                <Item extra={name} arrow="horizontal" onClick={() => {
                    prompt('用户昵称', '填写用户昵称', [
                        { text: '取消' },
                        { text: '确定', onPress: value => changeN(value) }
                    ], 'default', `${name}`)
                }}>用户昵称</Item>

                <Item extra={sign} arrow="horizontal" onClick={() => {
                    prompt('个性签名', '填写个性签名', [
                        { text: '取消' },
                        { text: '确定', onPress: value => changeS(value) }
                    ], 'default', `${sign}`)
                }}>个性签名</Item>

                <Item extra={phone} arrow="horizontal" onClick={() => { }}>手机号</Item>
            </List>

            <Button style={{ color: '#f60' }} onClick={logout}>退出登录</Button><WhiteSpace />

        </div>
    )
}

export default MineInfo