import React from 'react'
import '../asset/sass/detail.scss'
import { NavBar, Icon, SearchBar, List ,Tag} from 'antd-mobile';
import { BackTop,Drawer, Button } from 'antd';
import Swiper from 'swiper';
import 'swiper/swiper.scss';
import request from '../utils/request';

class Details extends React.Component {
    state = {
        value: '',
        title: '',
        dataList: [],
        page:1,
        flag:false,
        visible:false
        // swiper:''
      
    }
    
    getData = (type)=>{
        request.get('/homeApi/goods/5173list',{
            query:JSON.stringify({"gameId":`${this.state.title[3]}`}),
            page:this.state.page,
            pagesize:15
        }).then(res=>{
            if(res.flag){
                this.setState({
                    page:this.state.page+1
                })
                res.data.forEach(item=>{
                    item['img']=JSON.parse(item.imagePathInfos);
                        if(item.productTags){
                        item['tags']=JSON.parse(item.productTags)
                        }
                })
                if(type==1){
                    this.setState({
                        dataList:res.data
                    })
                }else{
                    this.setState({
                        flag:false,
                        dataList:this.state.dataList.concat(res.data)
                    })
                }
            }
      
           
        })
    }
    componentDidMount() {
        this.setState({
            title: this.props.location.pathname.split('/'),
        },()=>{
            this.getData(1)
        })
        if(this.swiper){
            this.swiper.slideTo(0, 0)
            this.swiper.destroy()
            this.swiper = null;
           }
        this.swiper = new Swiper('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    shouldComponentUpdate(newprops,newstate){
        console.log(newstate);
        
        if(this.state.flag != newstate.flag){
            this.getData(2)
            return true
        }else if(this.state.page==2){
            return true
        }else if(newstate.title != this.state.title){
            return true
        }
         else{
            return false
        }
    }

    onScroll = (scroll)=>{
        if(scroll.target.scrollTop +scroll.target.clientHeight>=scroll.target.scrollHeight){
                this.setState({
                    flag:true
                })
        }
    }   

    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };

    showDrawer = ()=>{
        this.setState({
            visible:true
        })
    }
    onClose = ()=>{
        this.setState({
            visible:false
        })
    }


    
    render() {
        const Item = List.Item;
        const Brief = Item.Brief;

        return (
            <div className="detail">
                 
                <div className="header">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.props.history.goBack()}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                    >{this.state.title[2]}</NavBar>
                    <div className="nav" >
                        <span className="phone" >账号</span>
                        <span className="open" >开局号</span>
                    </div>
                    <div className="selects">
                            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                                <p onClick={this.showDrawer}>服务器</p>
                                <p>保障服务</p>
                                <p>价格区间</p>
                                <p>精准筛选</p>
                            </div>
                        <Drawer
                            title="Basic Drawer"
                            placement="top"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                            getContainer={this.refs.main}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>





                    </div>
                    <div className="search">
                        <SearchBar
                            placeholder="输入关键字搜索"
                            value={this.state.value}
                            placeholder="Search"
                            onSubmit={value => console.log(value, 'onSubmit')}
                            onClear={this.clear}
                            onFocus={() => console.log('onFocus')}
                            // onBlur={() => console.log('onBlur')}
                            onCancel={() => console.log('onCancel')}
                            showCancelButton
                            onChange={this.onChange}
                            cancelText="搜索"
                        />
                    </div>
                </div>
                <div className="main" ref="main" onScroll={this.onScroll.bind(this)}>
                <BackTop visibilityHeight={1000} target={()=>(
                    this.refs.main
                )}/>
                    <div className="mainTop">
                        {/* <List renderHeader={() => 'Subtitle'} className="my-list">
                                <Item arrow="horizontal" multipleLine onClick={() => {}}>
                                开局号 <Brief>subtitle</Brief>
                                </Item>
                                <Item arrow="horizontal" multipleLine onClick={() => {}}>
                                人气头像框 <Brief>subtitle</Brief>
                                </Item>
                            </List> */}
                        <img src="http://bo.5173cdn.com/bizoffer/data/202001/00/C4/RQKowF4VQfMAAAAAAABk0G_eNHs67.jpg" alt="" />

                    </div>
                   
                    {this.state.dataList.map((item, index) => (
                        <div className="listItem" key={index} onClick={()=>{
                            this.props.history.push('/onedetail/'+item.id)
                        }}>
                            <p className="title">{item.title}</p>
                             <p className="price">￥<span>{item.price}</span></p>
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    {item.img.map(images=>(
                                        <div className="swiper-slide" key={images.ThumbnailsUrl}><img src={images.OriginalUrl} alt=""/></div>
                                    ))}   
                                </div>
                                <div className="swiper-pagination"></div>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                                    <p className="region"><span >所属区服</span>&ensp;&ensp;{item.gameServerName ?item.gameServerName:'全区全服'}</p>
                                    {item.tags?<p className="tags"><span className="tagTitle">商品标签</span>&ensp;&ensp;{item.tags.map((tag,idx)=>(
                                        <span key={idx} className="tagValue">{tag.Value}</span>
                                        // <Tag disabled key={idx}>{tag.Value}</Tag>
                                    ))}</p>:''}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Details

