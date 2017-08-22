
import React,{Component} from 'react'

import menu from '../services/silderBarInfo.js'

export default class SilderBar extends Component{
	render(){
		let silderBarStyle = {
			transform:this.props.show?"none":"translateX(-100%)"
		}
		let coverStyle = {
			
			background:this.props.show?"rgba(0,0,0,0.5)":"rgba(0,0,0,0)",
			display:this.props.show?"block":"none"
		}
		let data = this.props.pathname ==="/shop"?menu.shopSilderBarData: menu.homeSilderBarData;
		return(
			<div>
				<div class="cover" style={coverStyle} onClick={this.hide.bind(this)}></div>
				<nav class="slider-bar" style={silderBarStyle}>
					{
						data.map((item,index)=>{
							return <a key={index} onClick={this.goPage.bind(this,item)}>{item.title}</a>
						})
					}
				</nav>
			</div>
		)
	}
	
	goPage(item){		
		console.log(item)		
		this.props.history.push(item.path);
		this.props.hideHandle(item.header);
	}
	
	hide(){		
		this.props.hideHandle();
	}
	
}
