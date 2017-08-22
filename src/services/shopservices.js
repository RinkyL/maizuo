

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




export default{
    getShop
}
