import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import movieService from '../services/homeServices.js'

import	'../css/movie.css'

export default class Movie extends Component{
	constructor(){
		super();
		this.state = {
			movieData:[]
			
		}
	}
	render(){	
		return (
			<div class="page movie">
				<div class="moviebox">
					<NavLink to="/movies" class="moviehot">正在热映</NavLink>
					<NavLink to="/movie-ready" class="movieready">即将上映</NavLink>
				</div>
				<div class="movie-list">
					{
						this.state.movieData.map((item,index)=>{
						return(
							<div class="movie-main" key={index}>
								<img src={item.Imgpath} />
								<div class="main-list">
									<h1>{item.name}</h1>
									<p>{item.intro}</p>
									<div class="number">
										<p><span>{item.cinemaCount}</span>家影院上映</p>
										<p><span>{item.watchCount}</span>人购票</p>
									</div>
								</div>
								<div class="grade">
									<strong>{item.grade}</strong>>
								</div>
							</div>
						)	
						})
					}
				</div>				
			</div>
		)
	}

	componentWillMount(){
		movieService.getMovieHot()
		.then((newarr)=>{
			this.setState({movieData:newarr})
		})
	}
	
}