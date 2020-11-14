import React ,{useState,useEffect,useCallback}from 'react';
import '../asset/sass/oneDetail.scss'
import { NavBar, Icon,Popover,ActionSheet,Toast,Tabs,List} from 'antd-mobile';
import Data from '../views/oneDetail.json'
import {MessageOutlined,ShareAltOutlined,HomeOutlined,EllipsisOutlined,CheckCircleOutlined} from '@ant-design/icons'

function OneDetail(props){
    // const[value]=useState('')
    const [data]=useState(Data.Data)
    let [shareList,changeShare]=useState('')
    let [visible,changeVisible]=useState(false)
    let [clicked,changeButton]=useState('')

    // const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
    const Item = Popover.Item;
    //相当于componentDidMount
    useEffect(function(){
        console.log(data);
        changeShare(shareList=[
            { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
            { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
            { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
            { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
            { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
          ].map(obj => ({
            icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
            title: obj.title,
          })))
    },[])

    const handleVisibleChange=function(){
        changeVisible(visible=true)
    }
    const showShareActionSheet = () => {
        ActionSheet.showShareActionSheetWithOptions({
          options: shareList,
          message: '分享到',
        },
        //点击分享图标之后的回调
        (buttonIndex) => {
        //   this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });          
          return new Promise((resolve) => {
            Toast.info('closed after 1000ms');
            setTimeout(resolve, 1000);
          });
        });
      }
      const showActionSheet = () => {
        const BUTTONS = ['朕知道了'];
        ActionSheet.showActionSheetWithOptions({
          options: BUTTONS,
          //取消的按钮索引位置
          cancelButtonIndex: BUTTONS.length - 1,
          title:"服务保障",
          message: '该账号卖家已缴纳保险金，承诺账号如被找回将全额赔付',
          maskClosable: true,
          'data-seed': 'logId',
          
        },
        (buttonIndex) => {
          changeButton({ clicked: BUTTONS[buttonIndex] });
        });
      }
    const onSelect = function(opt){
        switch(opt.props.value){
            case '首页':
                props.history.push('/home')
                break;
            case '消息':
                props.history.push('/sell')
                break;
            case '分享':
                showShareActionSheet()
                break;
            default:
                changeVisible(visible=false)
                  console.log(visible);
            break;
        }
        
    }
    const tabs = [
      { title: '商品描述'},
      { title: "交易说明" },
    ];
    const Items = List.Item;
    return (
        <div className="oneDetail">
            <div className="header">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" key="0"/>}
                        onLeftClick={() => props.history.goBack()}
                        rightContent={[

                            <Popover 
                            mask
                            key="9"
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={visible}
                            overlay={[
                              (<Item key="4" value="消息" icon={<MessageOutlined />}  data-seed="logId">消息</Item>),
                              (<Item key="5" value="分享" icon={<ShareAltOutlined />} style={{ whiteSpace: 'nowrap' }}>分享</Item>),
                              (<Item key="6" value="首页" icon={<HomeOutlined />}>
                                <span style={{ marginRight: 5 }}>首页</span>
                              </Item>),
                            ]}
                            align={{
                              overflow: { adjustY: 0, adjustX: 0 },
                              offset: [-10, 0],
                            }}
                            onVisibleChange={handleVisibleChange}
                            onSelect={onSelect}
                          >
                            <div style={{
                              height: '100%',
                              padding: '0 15px',
                              marginRight: '-15px',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                            >
                              <Icon type="ellipsis" />
                            </div>
                          </Popover>
                        ]}
                    >{data.gameName}</NavBar>
                    
            </div>
            <div className="banner">
                <img src="https://bo.5173cdn.com/bizoffer/data/202011/01/E6/RQKowF-uQJYAAAAAAANDtkg2cbo10.jpg" alt=""/>
            </div>
            <div className="description">
              <div className="titleAPrice">
                        <p>{data.title}</p>
                      <span>￥{data.price}</span>  
              </div>
              <div className="share" onClick={()=>{
                showShareActionSheet()
              }}>
              <ShareAltOutlined style={{fontSize:20,color:'#333'}}/>分享 
              </div>
              
            </div>
            <div className="zhbp">
                  <span><CheckCircleOutlined style={{fontSize:20,color:'#ff6600'}}/>&ensp;找回包赔</span><span onClick={()=>{
                    showActionSheet()
                  }}><EllipsisOutlined style={{fontSize:20,color:'#999'}}/></span>
            </div>
            <div className="goodsDetail">
            <Tabs tabs={tabs}
              initialPage={0}
            >
              <div>
              <List className="my-list">
                {data.bizCategoryPropertyList.map((item,index)=>(
                  <Items key={index} extra={`${item.value}`}>{item.name}</Items>
                ))}
                
              </List>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of second tab
              </div>
            </Tabs>
          </div>
          <div className="miaoshu">
            <div>商品描述</div>
             <p>{data.description}</p>
          </div>
        </div>
    )
}

export default OneDetail