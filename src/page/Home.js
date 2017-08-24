import React, {Component} from 'react'
import homService from '../services/homeServices.js'
import {Link} from 'react-router-dom'

import '../css/home.css'

let bannerSwiper = null

export default class Card extends Component{
	constructor(){
		super();
		this.state={
			bannerData:[],
			contendData:[],
			contendReadyData:[]
		}
	}
	render(){
		return (
			<div class="page" id="home">
				<div ref="banner" class="swiper-container home-banner">
					<div class="swiper-wrapper">
						{
							this.state.bannerData.map((item,index)=>{
								return(
								<div key={index} class="swiper-slide">
									<img src={item.imageUrl} />
								</div>
								
								)
							})
						}
					</div>	 
				</div>
				<div class="contend">
					{
						this.state.contendData.map((item,index)=>{
							return(
								<div class="main" key={index}>
									<Link to={"details-list/"+item.id}>
										<img src={item.Imgpath}/>
										<div class="message">										
											<div class="titlename">
												{item.name}
												<p>
													{item.cinemaCount}家影院上映&nbsp;{item.watchCount}人购票
												</p>
											</div>

											<div class="grade">
												{item.grade}
											</div>
										</div>
									</Link>
								</div>
							)
						})
					}
					<div class="check">查看更多热映电影</div>
					<div class="ready">即将上映</div>	
				</div>
				<div class="contend">
					{
						this.state.contendReadyData.map((item,index)=>{
							return(
								<div class="main" key={index}>
									<Link to={"details-list/"+item.id}>
										<img src={item.Imgpath}/>
										<div class="message">										
											<div class="titlename">
												{item.name}
												
											</div>

											<div class="grade">
												{item.premiereAt}
											</div>
										</div>
									</Link>	
								</div>
							)
						})
					}
					<div class="check">查看更多热映电影</div>	
				</div>		
			</div>
			
		)
	}

	componentWillMount(){
		//请求轮播图数据
		homService.getHomeBanner()
		.then((data)=>{
			//因为需要设置loop，而dom被js绑定了
			//数据需要添加第一张和最后一张
			// //将最后一张添加到第一位置
			data.splice(0,0,data[data.length-1]);
			//将第一张添加最后一个位置
			data.push(data[1]);

			this.setState({bannerData:data});
			bannerSwiper.update();
			bannerSwiper.slideTo(1,0);
		});

		homService.getHomeConent()
		.then((newarr)=>{
			this.setState({contendData:newarr})
		
		});
		
		homService.getHomeReady()
		.then((newarr)=>{
			this.setState({contendReadyData:newarr})
		
		});
						
	}
	componentDidMount(){
		bannerSwiper = new Swiper(this.refs.banner,{
			loop:true,
			autoplay: 4000,
			autoplayDisableOnInteraction:false
		})
	}
	
}