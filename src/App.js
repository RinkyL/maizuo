

import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import AppHeader from './common/AppHeader.js'
import SilderBar from './common/SilderBar.js'

import Home from './page/Home.js'
import City from './page/City.js'
import Casd from './page/Casd.js'
import Me from './page/Me.js'
import Shop from './page/Shop.js'
import Cinema from './page/Cinema.js'
import Movie from './page/Movie.js'
import MovieHot from './common/Movies/MovieHot.js'
import MovieReady from './common/Movies/MovieReady.js'


import './css/app.css'

export default class App extends Component{
	constructor(){
		super();
		this.state = {
			showBar:false,
			headerTitle:'卖座电影'
		}
	}
	
	render(){
		return(
			<BrowserRouter>
				<div>
					<AppHeader title={this.state.headerTitle} menuHandle={this.menuHandle.bind(this)}/>
					<Route path="/" render={({history,location})=>{
						return <SilderBar history={history}
										  show={this.state.showBar}
										  pathname={location.pathname}
										  hideHandle={this.menuHandle.bind(this)}/>
					}}/>
					<Route path="/" exact component={Home}/>
					<Route path="/movies" component={Movie}/>
					<Route path="/cinema" component={Cinema}/>
					<Route path="/shop" component={Shop}/>
					<Route path="/me" component={Me}/>
					<Route path="/city-list" component={City}/>
					<Route path="/casd" component={Casd}/>
					<Route path="/movie-hot" component={MovieHot}/>
					<Route path="/movie-ready" component={MovieReady}/>
				</div>
			</BrowserRouter>
		)
	}

	menuHandle(headerTitle){		
		this.setState({showBar:!this.state.showBar});
		console.log(headerTitle)
		if(headerTitle){
			this.setState({headerTitle});
		}
	}
}
