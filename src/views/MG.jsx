import React from 'react'
import request from '../utils/request'
import proxy from '../setupProxy'

class MG extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            lists :[]
        }
    }

    componentDidMount(){
        
    }
   render(){
        return(
            <div>手游</div>
        )
   }
}

export default MG