<template>
  <div class="sourceShop">
    <div class="top">
      <div class="top-main">
        <div class="left">
          <img src="../assets/image/common/xubei.png" />
          <p></p>
          <div class="good">
            <div class="title">{{shopInfo.shopName}}</div>
            <div class="goodwill">
              <div class="left-w">
                <span>店铺信誉：</span>
                <img v-for="(item,index) in levelArr" :key="index" :src="shopInfo.levelImg" />
              </div>
              <button class="right-w">收藏</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tag">
      <div class="tag-main">
        <div
          class="tag-item"
          @click="changeGameId(null)"
          :class="gameId === null ? 'active' : ''"
        >全部</div>
        <div
          class="tag-item"
          v-for="game in shopInfo.mainGames"
          :key="game.gameId"
          :class="game.gameId === gameId ? 'active' : ''"
          @click="changeGameId(game.gameId)"
        >{{game.gameName}}</div>
      </div>
    </div>
    <div class="main">
      <Active v-if="activityList" :activityList="activityList"></Active>
      <el-card class="box-card">
        <div class="header" v-if="goodsList.total !== 0">
          <div class="left">
            <div class="item" @click="sort">
              <span :class="timeOrderBy === null && priceOrderBy === null ? 'item-active' : ''">综合排序</span>
            </div>
            <p></p>
            <div class="item" @click="timeSort">
              <span>时间</span>
              <div class="tip">
                <div class="el-icon-caret-top one" :class="timeOrderBy === 0 ? 'item-active' : ''"></div>
                <div
                  class="el-icon-caret-bottom two"
                  :class="timeOrderBy === 1 ? 'item-active' : ''"
                ></div>
              </div>
            </div>
            <p></p>
            <div class="item" @click="priceSort">
              <span>价格</span>
              <div class="tip">
                <div class="el-icon-caret-top one" :class="priceOrderBy === 0 ? 'item-active' : ''"></div>
                <div
                  class="el-icon-caret-bottom two"
                  :class="priceOrderBy === 1 ? 'item-active' : ''"
                ></div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="total">共{{goodsList.total}}条记录</div>
            <p class="el-icon-arrow-left" @click="changePage(-1)"></p>
            <i class="page">{{currentPage}}</i>
            <i>/</i>
            <i>{{goodsList.totalpagenum}}</i>
            <p class="el-icon-arrow-right" @click="changePage(1)"></p>
          </div>
        </div>
        <div v-if="goodsList.total !== 0">
          <div class="content" v-for="(good,index) in goodsList.list" :key="index">
            <div class="left">
              <img :src="good.imageurl" />
            </div>
            <div class="central">
              <div class="c-left">
                <div class="title">{{good.goods_title}}</div>
                <div class="attr">{{good.search_title}}</div>
                <div class="hot">
                  商品热度:{{good.hot_value}}
                  <span>{{good.actity}}</span>
                </div>
              </div>
              <div class="c-right">
                <p>
                  租金：
                  <span>{{good.lease_price}}</span>元/小时
                </p>
                <p>
                  押金：
                  <span>{{good.foregift}}</span>元
                </p>
                <p>
                  <span>{{good.short_lease}}</span>小时起租
                </p>
              </div>
            </div>
            <button class="right">立即租赁</button>
          </div>
        </div>
        <div v-else class="replace"></div>

        <div class="footer" v-if="goodsList.total !== 0">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="goodsList.total"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
          ></el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import request from '../api/request'
import getLevelImg from '../utils/getLevelImg'
import Active from '../components/Active'
export default {
  name: 'SourceShop',
  data () {
    return {
      userId: 0,//接收ID
      currentPage: 1,//当前页数
      shopInfo: {},//店铺信息
      goodsList: {},//商品列表对象
      activityList: [],//店铺活动列表
      gameId: null,//游戏ID
      timeOrderBy: null,//时间排序
      priceOrderBy: null,//价格排序
      levelArr: ''//信誉
    }
  },
  components: {
    Active
  },
  mounted () {
    this.userId = this.$route.query.sourceShop
    this.getGoodsListSync(1, 10, this.userId, this.gameId, this.timeOrderBy, this.priceOrderBy)
    this.getShopInfoSync(this.userId)
    this.getActivitySync(this.userId)
  },
  beforeMount () {
    this.activityList = []
  },
  methods: {
    // 同步获取店铺商品列表
    async getGoodsListSync (pageIndex, pageSize, userId, gameId, timeOrderBy, priceOrderBy) {
      const res = await request.getGoodsList(pageIndex, pageSize, userId, gameId, timeOrderBy, priceOrderBy)
      this.goodsList = res
    },
    // 同步获取店铺信息
    async getShopInfoSync (sellerId) {
      const result = await request.getShopInfo(sellerId)
      this.shopInfo = result
      const that = this
      this.levelArr = getLevelImg(that, this.shopInfo, this.levelArr)
    },
    //同步获取店铺活动数据
    async getActivitySync (sellerId) {
      const activityList = await request.getActivity(sellerId)
      this.activityList = activityList
    },
    //切换页数
    handleCurrentChange (val) {
      this.currentPage = val
      this.getGoodsListSync(this.currentPage, 10, this.userId, this.gameId, this.timeOrderBy, this.priceOrderBy)
    },
    //改变页数
    changePage (i) {
      this.currentPage += i
      this.getGoodsListSync(this.currentPage, 10, this.userId, this.gameId, this.timeOrderBy, this.priceOrderBy)
    },
    //切换标签
    changeGameId (id) {
      this.gameId = id
      this.getGoodsListSync(this.currentPage, 10, this.userId, this.gameId, this.timeOrderBy, this.priceOrderBy)
    },
    //综合排序
    sort () {
      this.timeOrderBy = null
      this.priceOrderBy = null
      this.getGoodsListSync(this.currentPage, 10, this.userId, this.gameId, this.timeOrderBy, this.priceOrderBy)
    },
    //时间排序
    timeSort () {
      if (this.timeOrderBy !== 0) {
        this.timeOrderBy = 0
      } else {
        this.timeOrderBy = 1
      }
      this.priceOrderBy = null
      this.getGoodsListSync(this.currentPage, 10, this.userId, this.gameId, this.timeOrderBy, this.priceOrderBy)
    },
    //价格排序
    priceSort () {
      if (this.priceOrderBy !== 0) {
        this.priceOrderBy = 0
      } else {
        this.priceOrderBy = 1
      }
      this.timeOrderBy = null
      this.getGoodsListSync(this.currentPage, 10, this.userId, this.gameId, this.timeOrderBy, this.priceOrderBy)
    }
  }
}

</script>
<style lang="less" rel="stylesheet/less" scoped>
.sourceShop {
  .active {
    background: rgb(62, 175, 253);
  }
  .item-active {
    color: rgb(62, 175, 253);
  }
  .top {
    width: 100%;
    background: #fff;
    height: 99px;
    .top-main {
      width: 1260px;
      height: 100%;
      margin: 0 auto;
      .left {
        img {
          float: left;
          margin: 20px 8px 0 0;
        }
        p {
          float: left;
          width: 1px;
          display: inline-block;
          height: 44px;
          background: rgb(229, 229, 229);
          margin: 29px 12px 0 8px;
        }
        .good {
          padding-top: 26px;
          .title {
            color: #333;
            font-size: 18px;
            margin-bottom: 12px;
          }
          .goodwill {
            .left-w {
              color: rgb(153, 153, 153);
              font-size: 12px;
              span {
                float: left;
              }
              img {
                display: inline-block;
                margin: 0;
              }
            }
            .right-w {
              display: inline-block;
              width: 59.5px;
              padding: 0 15px;
              height: 26px;
              font-size: 12px;
              cursor: pointer;
              box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
              border-radius: 4px;
              border: 1px solid #e5e5e5;
              background: #fff;
              margin: -30px 0 0 40px;
            }
          }
        }
      }
    }
  }
  .tag {
    background: black;
    width: 100%;
    height: 40px;

    .tag-main {
      width: 1260px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      .tag-item {
        cursor: pointer;
        height: 100%;
        padding: 0 16px;
        color: #fff;
        font-size: 14px;
        line-height: 40px;
        text-align: center;
      }
    }
  }
  .main {
    width: 1260px;
    padding: 20px;
    margin-bottom: 16px;
    margin: 0 auto;

    .header {
      border-bottom: 1px solid #e5e5e5;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        p {
          margin: 0 8px;
          height: 12.59px;
          width: 1px;
          background: #e5e5e5;
        }
        .item {
          cursor: pointer;
          width: 122px;
          padding: 0 0 20px 20px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          color: #666;
          .tip {
            margin-top: -3px;
            margin-right: 10px;
            position: relative;
            div {
              width: 11px;
              height: 11px;
            }
            .one {
              position: absolute;
              top: 0;
              left: 0;
            }
            .two {
              position: absolute;
              top: 8px;
              left: 0;
            }
          }
        }
      }
      .right {
        display: flex;
        margin-right: 80px;
        p {
          margin: 1px 10px 0;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          &:hover {
            color: #3eaffd;
          }
        }
        .page {
          color: #3eaffd;
        }
      }
    }
    .content {
      display: flex;
      padding: 20px 0;
      height: 140px;
      box-sizing: border-box;
      border-bottom: 1px solid #e5e5e5;
      &:hover {
        background: #f8f8f8;
      }
      .left {
        img {
          margin-right: 20px;
          border-radius: 5px;
          width: 100px;
          height: 100px;
        }
      }
      .central {
        padding-left: 16px;
        box-sizing: border-box;
        display: flex;
        flex: 1;
        justify-content: space-between;
        .c-left {
          .title {
            cursor: pointer;
            width: 450px;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #333;
            overflow: hidden;
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 8px;
          }
          .attr {
            color: #666;
            font-size: 14px;
            font-weight: 700;
            height: 28px;
            line-height: 20px;
            width: 450px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .hot {
            color: #666;
            font-size: 14px;
            height: 21px;
            margin-bottom: 5px;
            span {
              color: #f90;
            }
          }
        }
        .c-right {
          margin-top: 10px;
          p {
            color: #666;
            font-size: 14px;
            margin-bottom: 10px;
            span {
              color: #ee6723;
            }
          }
        }
      }
      .right {
        width: 140px;
        height: 36px;
        box-sizing: border-box;
        line-height: 36px;
        text-align: center;
        color: #3eaffd;
        font-size: 14px;
        background: #fff;
        border: 1px solid #3eaffd;
        border-radius: 5px;
        cursor: pointer;
        margin: 30px 46px;
        &:hover {
          background: #86cffe;
          color: #fff;
        }
      }
    }
  }
  .replace {
    width: 100%;
    height: 776px;
    background: url('../assets/image/common/null.png') no-repeat;
    background-position: 50% 30%;
    position: relative;
  }
  .footer {
    height: 90px;
    width: 100%;
    border-top: 1px solid #e5e5e5;
    box-sizing: border-box;
    padding-top: 15px;
    div {
      float: right;
    }
  }
}
</style>