import axios from "./axios";
import indie from "./indie";
export default {
  // 获取独立游戏列表
  getIndieGame() {
    return indie({
      url: "/indieGame",
      method: "get",
    });
  },
  // 获展开层游戏列表数据   gameLabel:所属类别、isHot: 1:热门
  getIndexGame({ gameLabel, isHot }) {
    return axios({
      url: "xubei-goods-cloud/anonapi/indexGameList",
      method: "post",
      data: {
        gameLabel,
        isHot,
      },
    });
  },
  // 通过id找到游戏分类
  findGameAreaById(id) {
    return axios({
      url: "xubei-goods-cloud/anonapi/findGameAreaById?id=" + id,
      method: "get",
    });
  },
  // 获取首页数据
  getIndexDataList(modId) {
    return axios({
      url: "xubei-page-cloud/anon/cms/getModDataByModId?modId=" + modId,
      methods: "get",
    });
  },
  // 获取商品推荐数据
  getRecommendTypeList() {
    return axios({
      url: "xubei-seller-cloud/anon/getRecomendTypeList ",
      method: "GET",
    });
  },
};
