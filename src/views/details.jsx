import React from 'react'
import '../asset/sass/detail.scss'
import { NavBar, Icon } from 'antd-mobile';
class Details extends React.Component {
    state={}
    componentDidMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div className="detail">
                <div className="header">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >NavBar</NavBar>
                <div className="nav">
                    <span>账号</span>
                    <span>开局号</span>
                </div>
                <div className="selects">
                    
                </div>
                </div>
            </div>
        )
    }
}

export default Details