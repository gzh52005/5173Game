import React from 'react'
import '../asset/sass/detail.scss'
import { NavBar, Icon,SearchBar,List } from 'antd-mobile';
import data from './app.json';
class Details extends React.Component {
    
   state={
    value: '',
    title:'',
    dataList:data.Data.hits
   }
    componentDidMount(){
        console.log(this.props);
        this.setState({
            title:this.props.location.pathname.substring(9),
           
        })
        console.log('componentDidMount',this.state.dataList);
    }
    onChange= (value) => {
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
                <div className="main">
                            <div className="mainTop">
                            {/* <List renderHeader={() => 'Subtitle'} className="my-list">
                                <Item arrow="horizontal" multipleLine onClick={() => {}}>
                                开局号 <Brief>subtitle</Brief>
                                </Item>
                                <Item arrow="horizontal" multipleLine onClick={() => {}}>
                                人气头像框 <Brief>subtitle</Brief>
                                </Item>
                            </List> */}
                            <img src="http://bo.5173cdn.com/bizoffer/data/202001/00/C4/RQKowF4VQfMAAAAAAABk0G_eNHs67.jpg" alt=""/>

                            </div>
                            {this.state.dataList.map((item,index)=>(
                                <div className="listItem">
                                    
                                </div>
                            ))}
                        </div>
            </div>
        )
    }
}

export default Details

