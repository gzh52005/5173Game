import React from 'react'
import request from '../utils/request'
import '../layout/MG.scss'



class MG extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lists :[],
            page:1,
            flag:false
        }
    }

    componentWillMount(){
        request.get('/homeApi/5173type',{
            hot:"1",
            gametype:"2",
            page:1,
            pagesize:15
        }).then(res=>{
            this.setState({
                lists : res.data
            })
        })
    }
    shouldComponentUpdate(newprops,newstate){
        let {flag,lists,page} = this.state
        if(newstate.flag != flag){
            page++
            request.get('/homeApi/5173type',{
                hot:"1",
                gametype:"2",
                page:page,
                pagesize:15
            }).then(res=>{
                if(res.data){
                    lists.push(...res.data)
                    this.setState({
                        lists,
                        flag:false,
                        page:page
                    })
                }else{
                    this.setState({
                        flag:true
                    })
                }
            })
            return true
        }
        return true
    }

    onScroll = (scroll)=>{
        if(scroll.target.scrollTop +scroll.target.clientHeight>=scroll.target.scrollHeight){
            this.setState({
                flag:true,
                page:this.state.page+1
            })
        }
    }

    render(){
       let {lists} = this.state;
        return(
            <div className="mgbox">
                <ul className='UL clear' onScroll={this.onScroll.bind(this)}>
                    {
                        lists.map((item,)=>(
                            <li className='lishow' key={item._id}>
                                <img src={item.game_image_url} alt=""/>
                                <p>{item.name}</p>
                            </li>
                        ))
                    }
                            
                </ul>
                   
            </div>
        )
   }
}

export default MG