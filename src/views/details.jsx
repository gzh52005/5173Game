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
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >NavBar</NavBar>
            </div>
        )
    }
}

export default Details