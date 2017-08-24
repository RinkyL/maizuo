import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import cinemaService from '../services/homeservices.js'
import '../css/cinema.css'

export default class Cinema extends Component{
	constructor(){
		super();
		this.state={
			cinemaList:[],			
			contentScroll:null,
			show:false
		}
	}
	render(){
		let boxStyle1 ={display:this.state.show?"block":"none"}
		return (
			<div class="page" id="cinemaconent">
				{
					this.state.cinemaList.map((item,index)=>{
						return (
							<div class="cinemalist" key={index} onClick={this.showhiddenaaction.bind(this,index)}>
								<h2>{item.title}</h2>
								<ul style={boxStyle1} key={index}>
									{
										this.state.cinemaList[index].arr.map((itemw,index)=>{
											return(
											
												<li key={index}>
													<Link to={"/details-list/"+itemw.id}>
														<div class="cinlist-left">
															<h3>{itemw.name}
																<span>座</span>
																<i>通</i>
															</h3>
															<div class="huodong">
																<span>可乐爆米花</span>
																<i>优惠活动</i>
															</div>
															<p>{itemw.address}</p>
															<p>距离未知</p>
														</div>
														<span class="right">></span>
													</Link>
												</li>												
												
											)
										})
									}
								</ul>
								
							</div>
						)
					})
				}
			</div>
		)
	}

	componentWillMount(){
		cinemaService.getCinema()
		.then((data)=>{
			console.log(data)
			this.setState({cinemaList:data})
		});	
	}

	showhiddenaaction(index){
		
			if(this.state.show){
				this.setState({show:!show})	
				console.log(this.state.show)
			}
		
		
		

	}
	

}