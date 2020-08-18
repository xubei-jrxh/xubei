import axios from './axios'
import indie from './indie'
import active from './active'
export default {
  // 获取店铺数据
  getShopList (pageIndex = 1, pageSize = 20, mainGameId, succOrderBy, levelName, isShowAggregate = 1, hasCoupon, shopName) {
    return axios({
      url: '/xubei-seller-cloud/anon/getShopListExt',
      method: 'get',
      params: {
        pageIndex,
        pageSize,
        mainGameId,
        succOrderBy,
        levelName,
        isShowAggregate,
        hasCoupon,
        shopName
      }
    })
  },
  // 获取店铺主营标签
  getMainGames () {
    return axios({
      url: '/xubei-seller-cloud/anon/getMainGames',
      method: 'post',
    })
  },
  // 获取店铺主营内容列表
  getGoodsList (pageIndex, pageSize, userId, gameId, timeOrderBy, priceOrderBy, businessNo = 'xubei') {
    return axios({
      url: '/b/goods/findGoodsLists',
      method: 'get',
      params: {
        pageIndex,
        pageSize,
        userId,
        gameId,
        timeOrderBy,
        priceOrderBy,
        businessNo
      }
    })
  },
  // 获取店铺信息
  getShopInfo (sellerId) {
    return axios({
      url: '/xubei-seller-cloud/anon/getShopInfo',
      method: 'post',
      params: {
        sellerId
      }
    })
  },
  //获取店铺活动
  getActivity (sellerId, channel = 'xubei') {
    return active({
      url: '/couponConfig/anon/listFromDetail',
      method: 'get',
      params: {
        sellerId,
        channel
      }
    })
  },
  // 获取独立游戏列表
  getIndieGame () {
    return indie({
      url: '/indieGame',
      method: 'get'
    })
  }
}