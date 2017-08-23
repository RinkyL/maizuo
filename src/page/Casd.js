import React, {Component} from 'react'
import '../css/casd.css'

export default class Casd extends Component{
	constructor(){
		super();
		this.state = {
			show:true
		}
	}
	
	render(){
		let boxStyle1 ={display:this.state.show?"block":"none"}
		let boxStyle2 ={display:this.state.show?"none":"block"} 
		let boxClass = this.state.show?"active":""
		let boxClass2 = this.state.show? "":"active"
		return (
			<div class="page" id="casd">
				<div class="casd-top">
					<div onClick={this.hide.bind(this,"1")} class={boxClass}>
						卖座卡
					</div>
					<div onClick={this.hide.bind(this,"2")} class={boxClass2}>
						电子卖座卡
					</div>
				</div>
				<div class="maizuo" style={boxStyle1}>
					<div>
						<span>卡号:</span>
						<input type="text" placeholder="请输入卡号"/>
					</div>
					<div>
						<span>密码:</span>
						<input type="password" placeholder="请输入密码"/>
					</div>
					<button>查询</button>
				</div>
				<div class="maizuo" style={boxStyle2}>
						<div>
						<span>卡号:</span>
						<input type="password" placeholder="请输入15位电子卖座卡号"/>
					</div>
					<button>查询</button>
				</div>
			</div>
		)
	}

	hide(val){
		if(val == "1"){
			this.setState({show:true});
		}
		else if(val == "2"){
			this.setState({show:false})
		}
	}
	
}