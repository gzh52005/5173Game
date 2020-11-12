import React,{useCallback} from 'react'
import '../layout/buy.scss'
import img from '../img/history.png'
import { SegmentedControl, WingBlank } from 'antd-mobile';
import MG from './MG'
import PC from './PC'

class Buy extends React.Component{
    constructor(){
        super()
        this.state={
            type:1
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
    render(){
        
        return(
            <div>
                <div className="buytop clear">
                    <h1>我要买</h1>
                    <img src={img}/>
                    <div className="search">搜索游戏</div>
                </div>
                <div className="sort">
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
                    <div className="sortli">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </div>
                </div>
                    
                </div>  
            </div>
        )  
    }
}

export default Buy