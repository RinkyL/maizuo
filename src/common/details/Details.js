
import React,{Component} from 'react'
import detailsServices from '../../services/homeservices.js'

import '../../css/detalis.css'
export default class Details extends Component{
    constructor({location}){
        console.log(location)
        super();
        this.state={
            id:location.pathname.slice(14,19),
            detailsData:[]
        }
    }

    render(){
        return(
         
            <div class="page" id="detalisData">
                   {
                        this.state.detailsData.map((item,index)=>{
                            return( <div class="box" key={index}>
                                        <div class="banner">
                                            <img src={item.img} />
                                        </div>
                                        <div class="jianjie">
                                            <span></span>影片简介
                                        </div>
                                        <p>导演:{item.director} </p>
                                        <p>主演:
                                            {
                                                item.actors.map((item,index)=>{
                                                    return(
                                                        <span key={index}>
                                                            {item}
                                                        </span>
                                                    )
                                                })
                                            }
                                        </p>
                                        <p>地区语言:{item.nation}({item.language})</p>
                                        <p>类    型:{item.category}</p>
                                        <p>上映时间:{item.time}</p>
                                        <i>{item.synopsis}</i>
                                        <buttom>立即购票</buttom> 
                                    </div>
                            )
                        })
                    }
            </div>
        )
    }

    componentWillMount(){
        detailsServices.getDetails(this.state.id)
        .then((data)=>{
            console.log(data)
               this.setState({detailsData:data}) 
        })

    }


}