import React from 'react'
import request from '../utils/request'
import '../layout/MG.scss'

class MG extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lists :[]
        }
    }

    componentDidMount(){
        request.get('/homeApi/5173type',{
            hot:"1",
            gametype:"2",
            page:1,
            pagesize:15
        }).then(res=>{
            this.lists = res.data
        })
    }
   
   render(){
       let {lists} = this.state
       console.log(this.lists)
        return(
            <div className="mgbox">
                <ul className='UL clear'>
                    {
                        lists.map(item=>(
                            <li className='lishow' >
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