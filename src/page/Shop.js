import React, {Component} from 'react'
import shopServices from '../services/shopservices.js'
import '../css/shop.css'

export default class Shop extends Component{
	constructor(){
		super();
		this.state = {
			shopdata:[],
			shopdata2:[],
			shopdata3:[]
		}
	}

	render(){
		return (
			<div class="page" id="shopmain">
				<div class="menu">
					{
						this.state.shopdata.map((item,index)=>{
							return(
								<div key={index}>
									<img src={item.imageSrc} />
									<span>{item.name}</span>
								</div>
							)	
						})
					}
				</div>
			
			</div>
		)
	}
	
	componentWillMount(){
		 shopServices.getShop()
		  .then((data)=>{
			    console.log(data)
				this.setState({shopdata:data[0]})
				console.log(this.shopdata)
				this.setState({shopdata2:data[1]})
				console.log(this.shopdata2)
				this.setState({shopdata3:data[2]})
				console.log(this.shopdata3)	
		  })
	}
}