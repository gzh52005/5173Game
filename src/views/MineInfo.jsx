import React, { useState, useCallback } from 'react'
import HeaderCom from '../components/headerCom'
import { List, Button, WhiteSpace, WingBlank, Modal } from 'antd-mobile'
import '../layout/mineinfo.scss'
import imgs from '../assets/img/tx_nologin.png'

const Item = List.Item;
const Brief = Item.Brief;
const prompt = Modal.prompt;
function MineInfo(props) {
    let [name, changeName] = useState('猪猪')
    let [sign, changeSign] = useState('')
    let [phone, changePhone] = useState('18777747793')

    let logout = useCallback(function () {
        console.log('zhuzzh');
    })
    return (
        <div>
            <HeaderCom data={{props,title:"用户信息",isselect:false}} />
            <List className="my-list">
                <Item align="middle" className='avatarlist' extra={<img src={imgs} />} arrow="horizontal" multipleLine >
                    头像
                </Item>
            </List>

            <List className="my-list listmsg">
                <Item extra={name} arrow="horizontal" onClick={() => {
                    prompt('用户昵称', '填写用户昵称', [
                        { text: '取消' },
                        { text: '确定', onPress: value => changeName(value) }
                    ], 'default', `${name}`)
                }}>用户昵称</Item>

                <Item extra={sign} arrow="horizontal" onClick={() => {
                    prompt('个性签名', '填写个性签名', [
                        { text: '取消' },
                        { text: '确定', onPress: value => changeSign(value) }
                    ], 'default', `${sign}`)
                }}>个性签名</Item>

                <Item extra={phone} arrow="horizontal" onClick={() => { }}>手机号</Item>
            </List>

            <Button style={{ color: '#f60' }} onClick={logout}>退出登录</Button><WhiteSpace />

        </div>
    )
}

export default MineInfo