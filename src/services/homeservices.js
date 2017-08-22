

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
                    //图片
                    newItem.Imgpath = item.cover.origin;
                    //上线影院数量
                    newItem.cinemaCount = item.cinemaCount;
                    //上映日期
                    newItem.premiereAt = item.premiereAt;
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
                
                            
                //宝安区                   
                var baoanArr = {
                                title: "宝安区" ,
                                arr: [],
                                show:true
                               };
                //福田区
                var futianArr = {
                                 title: '福田区',
                                 arr: [],
                                 show:false
                                };
                //龙岗区
                var lgArr = {
                             title: '龙岗区',
                             arr: [],
                             show:false
                            };
                //坪山新区
                var psArr = {
                             title: '坪山新区',
                             arr: [],
                             show:false
                            };
                //南山区
                var nsArr = {
                             title: '南山区',
                             arr: [],
                             show:false
                            };
                //光明新区
                var gmArr = {
                                title: '光明新区',
                                arr: [],
                                show:false
                            };
                //龙华新区
                var lhArr ={
                                title: '龙华新区',
                                arr: [],
                                show:false
                           };
                //罗湖区
                var luohArr = {
                                title: '罗湖区',
                                arr: [],
                                show:false

                              };
                //盐田区
                var ytArr = {
                                title: '盐田区',
                                arr: [],
                                show:false
                            };
                //判断所属的辖区

                var newArrt = [];
                newArrt.push(baoanArr);
                newArrt.push(futianArr);
                newArrt.push(nsArr);
                newArrt.push(lgArr);
                newArrt.push(lhArr);
                newArrt.push(gmArr);
                newArrt.push(ytArr);
                newArrt.push(psArr);
                newArrt.push(luohArr);

                var newArr = response.data.data.cinemas.map((item)=>{                  
                    if(item.district.name === "宝安区"){
                        var obj = {};
                        //电影院名字
                        obj.name = item.name;
                        //id
                        obj.id = item.id;
                        //电影院地址
                        obj.address = item.address;
                        baoanArr.arr.push(obj);                       
                    }
                    else if(item.district.name === "南山区"){
                        var obj = {};
                        //电影院名字
                        obj.name = item.name;
                        //id
                        obj.id = item.id;
                        //电影院地址
                        obj.address = item.address;
                        nsArr.arr.push(obj);             
                    }
                    else if(item.district.name ==="罗湖区"){
                         var obj = {};
                        //电影院名字
                        obj.name = item.name;
                        //id
                        obj.id = item.id;
                        //电影院地址
                        obj.address = item.address;
                        luohArr.arr.push(obj);
                    }
                    else if(item.district.name ==="福田区"){
                         var obj = {};
                        //电影院名字
                        obj.name = item.name;
                        //id
                        obj.id = item.id;
                        //电影院地址
                        obj.address = item.address;
                        futianArr.arr.push(obj);
                    }
                    else if(item.district.name ==="龙岗区"){
                         var obj = {};
                        //电影院名字
                        obj.name = item.name;
                        //id
                        obj.id = item.id;
                        //电影院地址
                        obj.address = item.address;
                        lgArr.arr.push(obj);
                    }
                    else if(item.district.name == "龙华新区"){
                         var obj = {};
                        //电影院名字
                        obj.name = item.name;
                        //id
                        obj.id = item.id;
                        //电影院地址
                        obj.address = item.address;
                        lhArr.arr.push(obj);
                    }
                    else if(item.district.name ==="光明新区"){
                         var obj = {};
                        //电影院名字
                        obj.name = item.name;
                        //id
                        obj.id = item.id;
                        //电影院地址
                        obj.address = item.address;
                        gmArr.arr.push(obj);
                    }
                    else if(item.district.name === "坪山新区"){
                         var obj = {};
                        //电影院名字
                        obj.name = item.name;
                        //id
                        obj.id = item.id;
                        //电影院地址
                        obj.address = item.address;
                        psArr.arr.push(obj);
                    }
                    else if(item.district.name === "盐田区"){
                         var obj = {};
                        //电影院名字
                        obj.name = item.name;
                        //id
                        obj.id = item.id;
                        //电影院地址
                        obj.address = item.address;
                        ytArr.arr.push(obj);
                    }                  
                })  
                resolve(newArrt)
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
    getCinema
}