

import axios from 'axios'
import API from '../api'


function getShop(){
    return new Promise ((resolve,reject)=>{
        axios.get(`${API.shoppingApi}`)
        .then((res)=>{
            var listArrone = res.data.data.slice(0,8)
            var listArrtwo = res.data.data.slice(10,12)
            var listArrthree = res.data.data.slice(12,20)
            var listArr = [];
            listArr.push(listArrone);
            listArr.push(listArrtwo);
            listArr.push(listArrthree);

            resolve(listArr)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

function getShopCargo(){
    return new Promise ((resolve,reject)=>{
        axios.get(`${API.shopCargoApi}`)
        .then((res)=>{
            var newArr = res.data.data.list.map((item)=>{
                var obj = {};
                //商品名字
                obj.name = item.masterName;
                //id
                obj.id = item.id
                //销量
                obj.displaySalesCount = item.displaySalesCount
                //价格和商品图片
                obj.img = item.skuList
                
                return obj
            })
            resolve(newArr)
        })
        .catch((error)=>{
            console.log(error);
        })
    })
}




export default{
    getShop,
    getShopCargo
}
