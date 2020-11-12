import React from 'react'
import { NavBar,Tabs, WhiteSpace } from 'antd-mobile';
// import { Tabs, WhiteSpace } from 'antd-mobile';
import '../layout/Sell.scss'

const tabs = [
    { title: '手游' },
    { title: '端游' },
  ];
  let  num=0
  if(num==0){

  }

function Sell(){
   
    return(
        <div>
            <NavBar
            style={{background:"#197fee",color:"#FFF"}}
            mode="light"
            onLeftClick={() => console.log('onLeftClick')}
            >我要卖</NavBar> 
            <WhiteSpace />
                <Tabs tabs={tabs} initialPage={num} animated={false} useOnPan={false} onTabClick={(val,index)=>num=index} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                    Content of first tab
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                    Content of second tab
                </div>
           
                </Tabs>
            <WhiteSpace />
        </div>)
}

export default Sell