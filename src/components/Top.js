import React, { Component } from 'react'
import icon from '../top.png'

export class Top extends Component {
    top=()=>{
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div style={{backgroundImage:`url(${icon})`, width:'68px', height:'68px', right:0, bottom:0, position:'fixed',cursor:'pointer',backgroundSize:'cover',marginRight:'1px'}} onClick={this.top}>
           
                
            </div>
        )
    }
}

export default Top
