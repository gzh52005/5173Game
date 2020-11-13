import React from 'react'
import '../asset/sass/detail.scss'
import { NavBar, Icon, SearchBar, List ,Tag} from 'antd-mobile';
import { BackTop } from 'antd';
import data from './app.json';
import Swiper from 'swiper';
import 'swiper/swiper.scss';
 data.Data.hits.forEach(item=>{
  item['img']=JSON.parse(item.imagePathInfos);
    if(item.productTags){
    item['tags']=JSON.parse(item.productTags)
    }
});
class Details extends React.Component {
    state = {
        value: '',
        title: '',
        dataList: data.Data.hits,
        // swiper:''
      
    }
    
    componentDidMount() {
        console.log(this.props);
        this.setState({
            title: this.props.location.pathname.substring(9),

        })
        console.log('componentDidMount', this.state.dataList);
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
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
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
                    >{this.state.title}</NavBar>
                    <div className="nav" >
                        <span className="phone" >账号</span>
                        <span className="open" >开局号</span>
                    </div>
                    <div className="selects">

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
                <div className="main" ref="main">
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

