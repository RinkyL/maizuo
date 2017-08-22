import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class City extends Component{
	constructor({history}){
		super();
		this.state = {
			className:'',
			history
		}
	}
	render(){
		return (
			<ReactCSSTransitionGroup 
				transitionName ="slide"
				transitionAppear={true}
				transitionAppearTimeout={400}
				transitionEnter={false}
				transitionLeave={true}
				transitionLeaveTimeout={1000}>
					<div id="city" class={'page'+this.state.className}>
						
					</div>
			</ReactCSSTransitionGroup>	
		)
	}
	
}