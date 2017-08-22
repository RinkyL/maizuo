
import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import movieService from '../../services/homeServices.js'
import	'../../css/movie.css'

export default class MovieReady extends Component{
    constructor(){
        super();
        this.state = {
            movieReadyData:[]
        }
    }

    render(){        
        return(
             <div class="page movie">
				<div class="moviebox">
					<NavLink to="/movies" class="moviehot">正在热映</NavLink>
					<NavLink to="/movie-ready" class="movieready">即将上映</NavLink>
				</div>
                <div class="movie-list">
					{
						this.state.movieReadyData.map((item,index)=>{
                            return(
                                <div class="movie-main" key={index}>
                                     <img src={item.imgpath} /> 
                                    <div class="main-list">
                                        <h1>{item.name}</h1>
                                        <p>{item.intro}</p>
                                        <div class="time">
                                            <strong>8月25号</strong>
                                            <strong>星期5</strong>
                                        </div>                                            
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
		movieService.getMovieReady()
		.then((newarr)=>{
			this.setState({movieReadyData:newarr})
			console.log(newarr)
		})
	}
}