
//参数 __t 当前时间戳
//banneraip链接
const homeBannerApi = "/v4/api/billboard/home"
//热播电影链接
const homeConentApi = "/v4/api/film/now-playing"

const homeConentTwoApi = "&page=1&count=5"
//准备上映电影链接
const homeReadyReleaseApi = "v4/api/film/coming-soon?"

const homeReadyReleaseTwoApi = "&page=1&count=3"
//影片链接地址
const movieHotApi = "/v4/api/film/now-playing?page=1&count=7"
//准备上映链接
const movieReadyApi = "/v4/api/film/coming-soon?page=1&count=7"
//影院链接
const cinemaApi= "/v4/api/cinema?"
//商城链接
const shoppingApi= "/api/ad/list"
//商城商品链接
const shopCargoApi = "/api/recommend/home?page=1&num=20"
//电影详情链接接口
const detailsApi = "/v4/api/film/"

export default {
    //banneraip链接
    homeBannerApi,
    //热播电影链接
    homeConentApi,
    homeConentTwoApi,
    //准备上映电影链接
    homeReadyReleaseApi,
    homeReadyReleaseTwoApi,
   // 影片链接地址
    movieHotApi,
  //影片准备上映链接
    movieReadyApi,
  //影院链接
   cinemaApi,
  //商城链接
  shoppingApi,
  //商城商品链接
  shopCargoApi,
  //电影详情链接
  detailsApi
}