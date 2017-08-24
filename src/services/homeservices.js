

import axios from 'axios'
import API from '../api'


function getHomeBanner(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
        .then((Response)=>{
            resolve(Response.data.data.billboards);
        })
        .catch((error)=>{
            console.log(error);
        })
    })
}


function getHomeConent(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeConentApi}?__t=${new Date().getTime()}${API.homeConentTwoApi}`)
        .then((response)=>{
            
            var newArr = response.data.data.films.map((item)=>{
                var newItem = {};
                //片名
                newItem.name = item.name;
                //ID
                newItem.id = item.id;
                //图片
                newItem.Imgpath = item.cover.origin;
                //上线影院数量
                newItem.cinemaCount = item.cinemaCount;
                //评分
                newItem.grade = item.grade;
                //购票人数
                newItem.watchCount = item.watchCount;
                return newItem
            })
            
            resolve(newArr);  
        })
        .catch((error)=>{
               console.log(error) ;
        })
    })
}

    function getHomeReady(){
         return new Promise((resolve,reject)=>{
            axios.get(`${API.homeReadyReleaseApi}?__t=${new Date().getTime()}${API.homeReadyReleaseTwoApi}`)
            .then((response)=>{
              
                var newArr = response.data.data.films.map((item)=>{
                    var newItem = {};
                    //片名
                    newItem.name = item.name;
                    //id
                    newItem.id = item.id;
                    //图片
                    newItem.Imgpath = item.cover.origin;
                    //上线影院数量
                    newItem.cinemaCount = item.cinemaCount;
                    //上映日期
                    var now = new Date(item.premiereAt);
                    var MM = now.getMonth()+1;
                    var dd = now.getDate();
                    var time = MM+"月"+dd+"日"

                    newItem.premiereAt = time;
                    //购票人数
                    newItem.watchCount = item.watchCount;
                    return newItem
                })
                
                resolve(newArr);  
            })
            .catch((error)=>{
                console.log(error) ;
            })
        })
    }

    function getMovieHot(){
        return new Promise((resolve,rehect)=>{
            axios.get(`${API.movieHotApi}`)
            .then((response)=>{                 
                var newArr = response.data.data.films.map((item)=>{
                    var newItem = {};
                    //片名
                    newItem.name = item.name;
                    //图片
                    newItem.Imgpath = item.poster.origin;
                    //id
                     newItem.id = item.id;
                    //上线影院数量                    
                    newItem.cinemaCount = item.cinemaCount;                  
                    //购票人数
                    newItem.watchCount = item.watchCount;
                    //介绍
                    newItem.intro =item.intro;
                    //评分
                    newItem.grade = item.grade;
                    return newItem
                })
                
                resolve(newArr);  
            })
            .catch((error)=>{
                console.log(error) ;
            })
            
        })
    }


    function getMovieReady(){
        return new Promise((resolve,reject)=>{
            axios.get(`${API.movieReadyApi}`)
            .then((response)=>{               
                var newArr = response.data.data.films.map((item)=>{                  
                    var newItem = {};
                    //片名
                    newItem.name = item.name;
                    //图片
                    newItem.imgpath = item.poster.origin;
                    //id
                    newItem.id = item.id;
                    //简介
                    newItem.intro = item.intro;
                    //时间
                    newItem.time = item.premiereAt;

                    return newItem;
                })
                resolve(newArr);
            })
            .catch((error)=>{
                console.log(error);
            })
        })
    }

    function getCinema(){
        return new Promise((resolve,reject)=>{
            axios.get(`${API.cinemaApi}__t=${new Date().getTime()}`)
            .then((response)=>{                
                var newArr = response.data.data.cinemas;

                var arr1 = [];
                var arr2 = [];
                //遍历出影院的地区
                newArr.map((item,index)=>{
                    //声明变量,接受影院的地区名字
                    var player = item.district.name;
                    //判定该影院地区是否存在于数组中,如果不存在,添加到数据中
                    if(arr1.indexOf(player)==-1){
                        arr1.push(player);
                    }
                })
                //遍历所获得的影院地区的数据
                arr1.map((item,index)=>{
                    //每个地区的影院
                    arr2.push({
                        title:item,
                        arr:[]
                    })	
                })
                //匹配相同的名字数组.获取当中数据和赋值
                newArr.map((item,index)=>{
                    arr2.map((item2,index2)=>{
                        if(item2.title == item.district.name){
                            item2.arr.push(item);
                        }
                    })
                })

                console.log(arr2)
                resolve(arr2)
            })
            .catch((error)=>{
                console.log(error)
            })
        })
    }

    function getDetails(id){
        return new Promise((resolve,reject)=>{
            axios.get(`${API.detailsApi}${id}?__t=${new Date().getTime()}`)
            .then((res)=>{
                console.log(res.data.data.film.name)
                var arr = [];
                arr.push(res.data.data.film)              
                var newArr = arr.map((item)=>{
                     var newObj = {};
                    //影片名字
                    newObj.name = item.name;
                    //id
                    newObj.id = item.id;
                    //图片
                    newObj.img =item.cover.origin;
                    //简介
                    newObj.synopsis = item.synopsis;
                    //导演
                    newObj.director = item.director;
                    //上映时间
                    var now = new Date(item.premiereAt);
                    console.log(now)
                    var MM = now.getMonth()+1;
                    var dd = now.getDate();                   
                    var time = MM +"月"+dd+"日"
                    console.log(time)
                    newObj.time = time
                    //语言
                    newObj.language = item.language;
                    //主演
                      var arr2 =[];
                        for(var i = 0; i<item.actors.length; i++){
                            if( i < item.actors.length-1){
                                var name = item.actors[i].name + "|"
                                arr2.push(name)
                            }else if( i == item.actors.length-1){
                                console.log(i)
                                var name =  item.actors[i].name
                                arr2.push(name)
                            }
                        }
                    newObj.actors = arr2; 
                    //类型
                    newObj.category = item.category;
                    //地区
                    newObj.nation = item.nation

                    return newObj
                })
                console.log(newArr)       
                resolve(newArr)
            })
            .catch((error)=>{
                console.log(error)
            })
           
        })
    }

export default {
    getHomeBanner,
    getHomeConent,
    getHomeReady,
    getMovieHot,
    getMovieReady,
    getCinema,
    getDetails
}