import React, {Component} from 'react'
import shopServices from '../services/shopservices.js'
import '../css/shop.css'

export default class Shop extends Component{
	constructor(){
		super();
		this.state = {
			shopdata:[],
			shopdata2:[],
			shopdata3:[],
			shopcargodata:[]
		}
	}

	render(){
		return (
			<div class="page" id="shopmain">
				<div class="menu">
					{
						this.state.shopdata.map((item,index)=>{
							return(
								<div key={index} class="menu-list">
									<img src={item.imageSrc} />
									<span>{item.name}</span>
								</div>
							)	
						})
					}
				</div>
				<div class="recommend">
					{
						this.state.shopdata2.map((item,index)=>{
							return(
								<div key={index} class="cargo">									
									<img src={item.imageSrc} />
								</div>
							)
						})
					}	
				</div>
				<div class="brand">
					{
						this.state.shopdata3.map((item,index)=>{
							return(
								<div key={index} class="brand-top">
									<img src={item.imageSrc} />
									<div class="brand-bottom">
										<ul>
											{
												item.products.map((itemtwo,index)=>{
													return(
														<li key={index} class="brand-list">
																<img src={itemtwo.image}/>
																<p>{itemtwo.name}</p>
																<strong>¥{itemtwo.price/100+".00"}</strong>
														</li>
													)
												})
											}
											<div class="more">显示全部</div>
										</ul>
									</div>	
								</div>
							)
						})
					}
				</div>
				<div class="cargo-list">
					<h2>— 好货精选 —</h2>
					<div class="car-mian">
						{
							this.state.shopcargodata.map((item,index)=>{
								return(
									<div key={index} class="commodity">
										<img src={item.img[0].image}/>
										<p>{item.name}</p>
										<div>
											<span>¥{item.img[0].price/100+".00"}</span>
											<i>已售{item.displaySalesCount}</i>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		)
	}
	
	componentWillMount(){
		 shopServices.getShop()
		  .then((data)=>{			    
				this.setState({shopdata:data[0]})
				console.log(this.shopdata)
				this.setState({shopdata2:data[1]})
				console.log(this.shopdata2)
				this.setState({shopdata3:data[2]})				
		  });

		  shopServices.getShopCargo()
		  .then((data)=>{
			  console.log(data)
			  this.setState({shopcargodata:data})
		  })
		  
	}
}