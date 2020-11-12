import React,{useCallback} from 'react'
import '../layout/buy.scss'
import img from '../img/history.png'
import hot2 from '../asset/image/hot2.png'
import { SegmentedControl, WingBlank } from 'antd-mobile';
import { Menu } from 'antd';
import MG from './MG'
import PC from './PC'


const num1 = <img className="hot" src={hot2}/>
class Buy extends React.Component{
    constructor(){
        super()
        this.state={
            tabs:[num1,"A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
            type:1,
            idx: '0'
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        if(e.nativeEvent.value=='手游'){
           this.setState({
               type:1
           })
        } else if(e.nativeEvent.value=='端游'){
            this.setState({
                type:2
            })
        }
    }
    handleClick = e => {
        this.setState({ idx: e.key });
    };
    render(){
        let {tabs,idx} = this.state
        return(
            <div style={{height:"100%",display:"flex",flexDirection:"column"}}>
                <div>
                    <div className="buytop ">
                        <h1>我要买</h1>
                        <img src={img}/>
                        <div className="search">搜索游戏</div>
                    </div>
                    <div className="sort ">
                        <WingBlank size="lg" className="sc-example">
                            <SegmentedControl 
                            values={['手游', '端游']} 
                            style={{height:'40px',background: '#F8F8F8'}}
                            onChange={this.onChange}/>
                        </WingBlank>
                        <div className="buygame clear">
                            {   
                                this.state.type==1?<MG/>:<PC/>
                            }
                            <Menu onClick={this.handleClick} selectedKeys={[idx]} >
                            {tabs.map((item,index)=><Menu.Item key={index}>
                                {item}
                                </Menu.Item>)
                            }
                            </Menu>
                        </div>
                    </div> 
                </div>
            </div>
        )  
    }
}

export default Buy