
import React,{Component} from 'react'
import {Link} from 'react-router-dom'



export default class AppHeader extends Component{
	render(){
		return(
			<header class="app-head">
				<span class="iconfont icon-menu" onClick={this.menuAtcive.bind(this)}>
					
				</span>
				<h1 class="title">
					{this.props.title}
				</h1>
				
				<Link to="/city-list" class="city iconfont icon-arrow-down">深圳</Link>
				<Link to="/me" class="iconfont icon-person"></Link>
			</header>
		)
	}

	menuAtcive(){
		this.props.menuHandle();
	}
}
