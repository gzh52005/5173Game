import React from 'react'
import '../layout/search.scss'
import { SearchBar, WingBlank } from 'antd-mobile';

class search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: '请输入游戏名称或首字母',
            gamelist:['地下城与勇士','穿越火线','英雄联盟','魔兽世界(国服)','天涯明月刀','王者荣耀','阴阳师','和平精英']
        }
    }
    onChange= (value) => {
        this.setState({ value });
    };
    goback(){
        this.props.history.go(-1)
   }
    render(){
        let {gamelist} = this.state
        return (
            <div>
                <WingBlank><div className="sub-title"></div></WingBlank>
                <SearchBar
                    value={this.state.value}
                    onSubmit={this.value}
                    onChange={this.onChange}
                    onCancel={this.goback.bind(this)}
                    showCancelButton='true'
                />
                <div className="recommend">
                    <p>5173热搜</p>
                    <div className="link clear">
                    {
                        gamelist.map((item,index)=>{
                            return <a key={index}>{item}</a>
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default search